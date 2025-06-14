import { ApiError, ApiResponse } from "@/types/api";

// API configuration
export const API_CONFIG = {
  baseURL: process.env.ss || "/api/v1",
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000,
};

// Error handling utilities
export class ApiErrorHandler {
  static handle(error: any): ApiError {
    if (error.response) {
      // Server responded with error status
      return {
        success: false,
        error: error.response.data?.error || "Server Error",
        message:
          error.response.data?.message || "An error occurred on the server",
        statusCode: error.response.status,
      };
    } else if (error.request) {
      // Network error
      return {
        success: false,
        error: "Network Error",
        message:
          "Unable to connect to the server. Please check your internet connection.",
        statusCode: 0,
      };
    } else {
      // Other error
      return {
        success: false,
        error: "Unknown Error",
        message: error.message || "An unexpected error occurred",
        statusCode: 500,
      };
    }
  }

  static isApiError(error: any): error is ApiError {
    return (
      error &&
      typeof error === "object" &&
      "success" in error &&
      error.success === false
    );
  }
}

// Request interceptor utilities
export const requestInterceptor = {
  onFulfilled: (config: any) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add request timestamp
    config.metadata = { requestTimestamp: Date.now() };

    return config;
  },

  onRejected: (error: any) => {
    return Promise.reject(ApiErrorHandler.handle(error));
  },
};

// Response interceptor utilities
export const responseInterceptor = {
  onFulfilled: (response: any) => {
    // Log response time
    const requestTimestamp = response.config?.metadata?.requestTimestamp;
    if (requestTimestamp) {
      const responseTime = Date.now() - requestTimestamp;
      console.debug(`API Response time: ${responseTime}ms`);
    }

    return response.data;
  },

  onRejected: (error: any) => {
    const apiError = ApiErrorHandler.handle(error);

    // Handle specific error cases
    if (apiError.statusCode === 401) {
      // Unauthorized - clear auth token
      localStorage.removeItem("authToken");
      // Redirect to login if needed
      window.location.href = "/login";
    }

    return Promise.reject(apiError);
  },
};

// Retry logic utility
export const withRetry = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = API_CONFIG.retryAttempts,
  delay: number = API_CONFIG.retryDelay,
): Promise<T> => {
  let lastError: any;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      // Don't retry on client errors (4xx)
      if (
        ApiErrorHandler.isApiError(error) &&
        error.statusCode >= 400 &&
        error.statusCode < 500
      ) {
        throw error;
      }

      // Don't retry on the last attempt
      if (attempt === maxAttempts) {
        throw error;
      }

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError;
};

// Cache utilities
export class ApiCache {
  private static cache = new Map<
    string,
    { data: any; timestamp: number; ttl: number }
  >();

  static set(key: string, data: any, ttlMs: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMs,
    });
  }

  static get<T>(key: string): T | null {
    const cached = this.cache.get(key);

    if (!cached) {
      return null;
    }

    const isExpired = Date.now() - cached.timestamp > cached.ttl;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  static delete(key: string): boolean {
    return this.cache.delete(key);
  }

  static clear(): void {
    this.cache.clear();
  }

  static has(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;

    const isExpired = Date.now() - cached.timestamp > cached.ttl;
    if (isExpired) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }
}

// URL building utilities
export const buildApiUrl = (
  endpoint: string,
  params?: Record<string, any>,
): string => {
  const url = new URL(endpoint, API_CONFIG.baseURL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url.toString();
};

// Data transformation utilities
export const transformApiResponse = <T>(response: any): ApiResponse<T> => {
  return {
    success: true,
    data: response.data,
    message: response.message,
    pagination: response.pagination,
  };
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const validateRequired = (value: any): boolean => {
  return value !== undefined && value !== null && value !== "";
};

// Date utilities for API
export const formatApiDate = (date: Date | string): string => {
  return new Date(date).toISOString().split("T")[0];
};

export const parseApiDate = (dateString: string): Date => {
  return new Date(dateString);
};

// Price utilities
export const formatPrice = (
  price: number,
  decimals: number = 2,
  currency: string = "USD",
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(price);
};

// Loading state utilities
export const createLoadingState = () => ({
  idle: "idle" as const,
  loading: "loading" as const,
  success: "success" as const,
  error: "error" as const,
});

// Debounce utility for search
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  waitMs: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), waitMs);
  };
};

// Local storage utilities for API data
export const apiStorage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(`api_${key}`);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: <T>(key: string, value: T, expiryMs?: number): void => {
    try {
      const data = {
        value,
        timestamp: Date.now(),
        expiry: expiryMs ? Date.now() + expiryMs : null,
      };
      localStorage.setItem(`api_${key}`, JSON.stringify(data));
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(`api_${key}`);
  },

  isExpired: (key: string): boolean => {
    try {
      const item = localStorage.getItem(`api_${key}`);
      if (!item) return true;

      const data = JSON.parse(item);
      return data.expiry ? Date.now() > data.expiry : false;
    } catch {
      return true;
    }
  },
};
