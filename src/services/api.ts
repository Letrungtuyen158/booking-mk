// import {
//   Booking,
//   BookingRequest,
//   ContactMessage,
//   NewsletterSubscription,
//   BlogPost,
//   Destination,
//   ApiResponse,
//   TourFilters,
//   BlogFilters,
//   Product,
// } from "@/types/api";

// // Mock data
// const mockTours: Product[] = [
//   {
//     id: 1,
//     title: "3 Days Army Jeep Ha Giang Loop Tour",
//     description:
//       "Experience the breathtaking beauty of Ha Giang's mountainous landscapes on this epic 3-day motorcycle adventure. Navigate winding mountain roads, visit ethnic minority villages, and witness some of Vietnam's most spectacular scenery.",
//     image:
//       "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     ],
//     rating: 4.8,
//     reviews: 156,
//     duration: "3 Days",
//     groupSize: "8-12 people",
//     location: "Ha Giang",
//     price: 250,
//     originalPrice: 300,
//     features: [
//       "Motorcycle Tours",
//       "Adventure",
//       "Mountain Views",
//       "Local Culture",
//     ],
//     departure: "Daily",
//     category: "adventure",
//     highlights: [
//       "Ride through the stunning Ha Giang Loop",
//       "Visit ethnic minority villages (H'mong, Tay, Nung)",
//       "Stop at Dong Van Karst Plateau Geopark",
//       "Experience local culture and traditions",
//       "Professional local guides",
//       "All meals included",
//       "Comfortable accommodation",
//     ],
//     itinerary: [
//       {
//         day: "Day 1",
//         title: "Ha Giang to Quan Ba - Heaven Gate",
//         activities: [
//           "Departure from Ha Giang city",
//           "Visit Heaven Gate viewpoint",
//           "Lunch in Quan Ba town",
//           "Explore Twin Mountains (Fairy Bosom)",
//           "Overnight in Quan Ba",
//         ],
//       },
//       {
//         day: "Day 2",
//         title: "Quan Ba to Dong Van",
//         activities: [
//           "Morning ride through mountain passes",
//           "Visit Lung Cu Flag Tower",
//           "Explore Dong Van Old Quarter",
//           "Local market experience",
//           "Traditional dinner",
//         ],
//       },
//       {
//         day: "Day 3",
//         title: "Dong Van to Ha Giang",
//         activities: [
//           "Ma Pi Leng Pass - the most beautiful pass",
//           "Nho Que River viewpoint",
//           "Meo Vac town exploration",
//           "Return to Ha Giang city",
//         ],
//       },
//     ],
//     included: [
//       "Professional English-speaking guide",
//       "All meals (breakfast, lunch, dinner)",
//       "Accommodation (2 nights)",
//       "Motorbike rental and fuel",
//       "Entrance fees to attractions",
//       "Travel insurance",
//     ],
//     notIncluded: [
//       "Personal expenses",
//       "Tips for guide and driver",
//       "Alcoholic beverages",
//       "International flights",
//     ],
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Sapa Trekking & Homestay Experience",
//     description:
//       "Immerse yourself in the stunning landscapes of Sapa with this authentic trekking and homestay experience. Walk through magnificent rice terraces and stay with local families.",
//     image:
//       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     ],
//     rating: 4.9,
//     reviews: 203,
//     duration: "2 Days",
//     groupSize: "6-10 people",
//     location: "Sapa",
//     price: 180,
//     originalPrice: 220,
//     features: ["Trekking", "Homestay", "Rice Terraces", "Local Villages"],
//     departure: "Daily",
//     category: "cultural",
//     highlights: [
//       "Trek through famous rice terraces",
//       "Authentic homestay experience",
//       "Meet local ethnic minorities",
//       "Traditional cooking class",
//       "Spectacular mountain views",
//     ],
//     itinerary: [
//       {
//         day: "Day 1",
//         title: "Sapa Town to Cat Cat Village",
//         activities: [
//           "Pick up from Sapa town",
//           "Trek to Cat Cat village",
//           "Visit H'mong ethnic village",
//           "Homestay with local family",
//         ],
//       },
//       {
//         day: "Day 2",
//         title: "Village Trekking & Return",
//         activities: [
//           "Morning trek through rice terraces",
//           "Visit local market",
//           "Traditional lunch",
//           "Return to Sapa town",
//         ],
//       },
//     ],
//     included: [
//       "Professional trekking guide",
//       "Homestay accommodation",
//       "All meals",
//       "Entrance fees",
//       "Transportation",
//     ],
//     notIncluded: ["Personal expenses", "Travel insurance", "Tips"],
//   },
//   // Add more tours as needed
// ];

// const mockDestinations: Destination[] = [
//   {
//     id: 1,
//     name: "Ha Long Bay",
//     region: "Northern Vietnam",
//     description:
//       "UNESCO World Heritage site famous for limestone karsts and emerald waters",
//     image:
//       "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     highlights: [
//       "Overnight cruises",
//       "Cave exploration",
//       "Kayaking",
//       "Floating villages",
//     ],
//     bestTime: "Oct - Dec, Mar - May",
//     tours: 12,
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     name: "Sapa",
//     region: "Northern Vietnam",
//     description:
//       "Mountainous region known for stunning rice terraces and ethnic minorities",
//     image:
//       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     highlights: ["Rice terraces", "Trekking", "Local markets", "Homestays"],
//     bestTime: "Sep - Nov, Mar - May",
//     tours: 8,
//     rating: 4.9,
//   },
// ];

// const mockBlogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title:
//       "Complete Guide to Exploring Ha Long Bay: Hidden Gems and Local Secrets",
//     excerpt:
//       "Discover the breathtaking beauty of Ha Long Bay beyond the tourist crowds. Our local guide shares insider tips for experiencing this UNESCO World Heritage site like a true explorer.",
//     content: "Full blog content here...",
//     image:
//       "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     author: "Duong Tuan",
//     date: "March 15, 2024",
//     readTime: "8 min read",
//     category: "Travel Guide",
//     tags: ["Ha Long Bay", "Travel Tips", "Hidden Gems"],
//     featured: true,
//   },
// ];

// // Utility function to simulate API delay
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// // API Service class
// export class ApiService {
//   private static baseURL = "/api/v1";

//   // Tours API
//   static async getTours(
//     filters: TourFilters = {},
//   ): Promise<ApiResponse<Produt[]>> {
//     await delay(500); // Simulate network delay

//     let filteredTours = [...mockTours];

//     // Apply filters
//     if (filters.category && filters.category !== "all") {
//       filteredTours = filteredTours.filter(
//         (tour) => tour.category === filters.category,
//       );
//     }

//     if (filters.location) {
//       filteredTours = filteredTours.filter((tour) =>
//         tour.location.toLowerCase().includes(filters.location!.toLowerCase()),
//       );
//     }

//     if (filters.search) {
//       filteredTours = filteredTours.filter(
//         (tour) =>
//           tour.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
//           tour.description
//             .toLowerCase()
//             .includes(filters.search!.toLowerCase()),
//       );
//     }

//     if (filters.minPrice) {
//       filteredTours = filteredTours.filter(
//         (tour) => tour.price >= filters.minPrice!,
//       );
//     }

//     if (filters.maxPrice) {
//       filteredTours = filteredTours.filter(
//         (tour) => tour.price <= filters.maxPrice!,
//       );
//     }

//     // Apply sorting
//     if (filters.sortBy) {
//       switch (filters.sortBy) {
//         case "price-low":
//           filteredTours.sort((a, b) => a.price - b.price);
//           break;
//         case "price-high":
//           filteredTours.sort((a, b) => b.price - a.price);
//           break;
//         case "rating":
//           filteredTours.sort((a, b) => b.rating - a.rating);
//           break;
//         case "popular":
//           filteredTours.sort((a, b) => b.reviews - a.reviews);
//           break;
//       }
//     }

//     return {
//       success: true,
//       data: filteredTours,
//       pagination: {
//         page: filters.page || 1,
//         limit: filters.limit || 10,
//         total: filteredTours.length,
//         totalPages: Math.ceil(filteredTours.length / (filters.limit || 10)),
//       },
//     };
//   }

//   static async getTourById(id: number): Promise<ApiResponse<Tour | null>> {
//     await delay(300);

//     const tour = mockTours.find((t) => t.id === id);

//     return {
//       success: true,
//       data: tour || null,
//     };
//   }

//   static async getFeaturedTours(): Promise<ApiResponse<Tour[]>> {
//     await delay(400);

//     const featured = mockTours.filter((tour) => tour.featured);

//     return {
//       success: true,
//       data: featured,
//     };
//   }

//   // Booking API
//   static async createBooking(
//     bookingData: BookingRequest,
//   ): Promise<ApiResponse<Booking>> {
//     await delay(800);

//     const tour = mockTours.find((t) => t.id === bookingData.tourId);
//     if (!tour) {
//       throw new Error("Tour not found");
//     }

//     const booking: Booking = {
//       id: `BK${Date.now()}`,
//       tourId: bookingData.tourId,
//       tour,
//       customerInfo: {
//         fullName: bookingData.fullName,
//         email: bookingData.email,
//         phone: bookingData.phone,
//       },
//       travelers: bookingData.travelers,
//       date: bookingData.date,
//       specialRequests: bookingData.specialRequests,
//       status: "pending",
//       totalPrice: tour.price * bookingData.travelers,
//       bookingDate: new Date().toISOString(),
//     };

//     return {
//       success: true,
//       data: booking,
//       message: "Booking created successfully",
//     };
//   }

//   // Contact API
//   static async submitContactForm(
//     contactData: Omit<ContactMessage, "id" | "status" | "createdAt">,
//   ): Promise<ApiResponse<ContactMessage>> {
//     await delay(600);

//     const message: ContactMessage = {
//       id: `MSG${Date.now()}`,
//       ...contactData,
//       status: "new",
//       createdAt: new Date().toISOString(),
//     };

//     return {
//       success: true,
//       data: message,
//       message: "Message sent successfully",
//     };
//   }

//   // Newsletter API
//   static async subscribeNewsletter(
//     email: string,
//   ): Promise<ApiResponse<NewsletterSubscription>> {
//     await delay(400);

//     const subscription: NewsletterSubscription = {
//       id: `SUB${Date.now()}`,
//       email,
//       subscribedAt: new Date().toISOString(),
//       active: true,
//     };

//     return {
//       success: true,
//       data: subscription,
//       message: "Successfully subscribed to newsletter",
//     };
//   }

//   // Blog API
//   static async getBlogPosts(
//     filters: BlogFilters = {},
//   ): Promise<ApiResponse<BlogPost[]>> {
//     await delay(500);

//     let filteredPosts = [...mockBlogPosts];

//     if (filters.category && filters.category !== "all") {
//       filteredPosts = filteredPosts.filter(
//         (post) => post.category === filters.category,
//       );
//     }

//     if (filters.search) {
//       filteredPosts = filteredPosts.filter(
//         (post) =>
//           post.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
//           post.excerpt.toLowerCase().includes(filters.search!.toLowerCase()),
//       );
//     }

//     return {
//       success: true,
//       data: filteredPosts,
//       pagination: {
//         page: filters.page || 1,
//         limit: filters.limit || 10,
//         total: filteredPosts.length,
//         totalPages: Math.ceil(filteredPosts.length / (filters.limit || 10)),
//       },
//     };
//   }

//   // Destinations API
//   static async getDestinations(): Promise<ApiResponse<Destination[]>> {
//     await delay(400);

//     return {
//       success: true,
//       data: mockDestinations,
//     };
//   }
// }
