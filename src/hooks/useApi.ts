"use client";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiService } from "@/services/api";
import {
  Tour,
  Booking,
  BookingRequest,
  ContactMessage,
  BlogPost,
  Destination,
  TourFilters,
  BlogFilters,
} from "@/types/api";

// Query keys
export const queryKeys = {
  tours: "tours",
  tour: "tour",
  featuredTours: "featured-tours",
  blogPosts: "blog-posts",
  destinations: "destinations",
} as const;

// Tours hooks
export const useTours = (filters: TourFilters = {}) => {
  return useQuery({
    queryKey: [queryKeys.tours, filters],
    queryFn: () => ApiService.getTours(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useTour = (id: number) => {
  return useQuery({
    queryKey: [queryKeys.tour, id],
    queryFn: () => ApiService.getTourById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useFeaturedTours = () => {
  return useQuery({
    queryKey: [queryKeys.featuredTours],
    queryFn: () => ApiService.getFeaturedTours(),
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
};

// Booking hooks
export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingData: BookingRequest) =>
      ApiService.createBooking(bookingData),
    onSuccess: () => {
      // Invalidate related queries if needed
      queryClient.invalidateQueries({ queryKey: [queryKeys.tours] });
    },
  });
};

// Contact hooks
export const useSubmitContact = () => {
  return useMutation({
    mutationFn: (
      contactData: Omit<ContactMessage, "id" | "status" | "createdAt">,
    ) => ApiService.submitContactForm(contactData),
  });
};

// Newsletter hooks
export const useSubscribeNewsletter = () => {
  return useMutation({
    mutationFn: (email: string) => ApiService.subscribeNewsletter(email),
  });
};

// Blog hooks
export const useBlogPosts = (filters: BlogFilters = {}) => {
  return useQuery({
    queryKey: [queryKeys.blogPosts, filters],
    queryFn: () => ApiService.getBlogPosts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Destinations hooks
export const useDestinations = () => {
  return useQuery({
    queryKey: [queryKeys.destinations],
    queryFn: () => ApiService.getDestinations(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};

// Generic loading state hook
export const useApiState = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async <T>(apiCall: () => Promise<T>): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, execute };
};

// Search hook with debouncing
export const useSearch = <T>(
  searchFn: (query: string) => Promise<T>,
  debounceMs: number = 300,
) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const searchResults = await searchFn(query);
        setResults(searchResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Search failed");
      } finally {
        setLoading(false);
      }
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [query, searchFn, debounceMs]);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    clearResults: () => setResults(null),
  };
};

// Pagination hook
export const usePagination = (initialPage = 1, initialLimit = 10) => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(1, prev - 1));
  const goToPage = (pageNumber: number) => setPage(Math.max(1, pageNumber));
  const resetPage = () => setPage(1);

  return {
    page,
    limit,
    setPage,
    setLimit,
    nextPage,
    prevPage,
    goToPage,
    resetPage,
  };
};

// Filter hook for tours
export const useTourFilters = () => {
  const [filters, setFilters] = useState<TourFilters>({});

  const updateFilter = (key: keyof TourFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => setFilters({});

  const removeFilter = (key: keyof TourFilters) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  return {
    filters,
    updateFilter,
    clearFilters,
    removeFilter,
    setFilters,
  };
};

// Local storage hook for API data caching
export const useLocalStorageCache = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  const setStoredValue = (newValue: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeStoredValue = () => {
    try {
      window.localStorage.removeItem(key);
      setValue(defaultValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [value, setStoredValue, removeStoredValue] as const;
};
