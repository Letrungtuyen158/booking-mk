// -------------------------------------------------------------------------------
// Entity types
// -------------------------------------------------------------------------------

// Common Base Entity
export interface BaseEntity {
  id: string;
  pageSite: number;
  isDelete: boolean;
  createdDate: string;
  latestUpdate: string;
}

// Media types
export interface MediaUrl {
  url: string;
  type: number; // 1 for image, 2 for video
}

// Tour related types
export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  urls: MediaUrl[];
  rating: number;
  status: number;
  image: string;
  reviews: number;
  overviews: any[]; // You might want to define a specific type for overviews
  tripDuration: string;
  location: string;
  groupSize: string;
}

export interface DayItinerary {
  day: string;
  title: string;
  activities: string[];
}

// Booking related types
export interface BookingRequest {
  tourId: number;
  fullName: string;
  email: string;
  phone: string;
  travelers: number;
  date: string;
  specialRequests?: string;
}

export interface Booking {
  id: string;
  tourId: number;
  tour: Product;
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
  };
  travelers: number;
  date: string;
  specialRequests?: string;
  status: "pending" | "confirmed" | "cancelled";
  totalPrice: number;
  bookingDate: string;
}

// User types
export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  avatar?: string;
  bookings: Booking[];
  preferences: {
    newsletter: boolean;
    language: string;
  };
}

// Contact types
export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "new" | "replied" | "resolved";
  createdAt: string;
}

// Newsletter subscription
export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}

// Blog types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

// Destination types
export interface Destination {
  id: number;
  name: string;
  region: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  tours: number;
  rating: number;
  weather?: WeatherInfo;
}

export interface WeatherInfo {
  temperature: {
    min: number;
    max: number;
  };
  season: string;
  rainfall: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  error: string;
  message: string;
  statusCode: number;
}

// Query parameters
export interface TourFilters {
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  duration?: string;
  sortBy?: "popular" | "price-low" | "price-high" | "rating" | "duration";
  search?: string;
  page?: number;
  limit?: number;
}

export interface BlogFilters {
  category?: string;
  author?: string;
  search?: string;
  page?: number;
  limit?: number;
}

// Category types
export interface Category extends BaseEntity {
  name: string;
  image: string;
}

// Blog types
export interface Blog extends BaseEntity {
  title: string;
  content: string;
  image: string;
}

// Partner types
export interface Partner extends BaseEntity {
  name: string;
  contact: string;
  phone: string;
  status: string;
  logo?: string;
}

// Order types
export interface Order extends BaseEntity {
  customerName: string;
  service: string;
  product: string;
  status: string;
  amount: string;
  date: string;
}
