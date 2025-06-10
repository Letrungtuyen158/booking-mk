"use client";

import { useState } from "react";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  MapPin,
  Calendar,
  Check,
  Shield,
  Heart,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation, fadeInUp } from "@/hooks/use-scroll-animation";

// Mock tour data
const tourData = {
  "1": {
    id: 1,
    title: "3 Days Army Jeep Ha Giang Loop Tour",
    images: [
      "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    rating: 4.8,
    reviews: 156,
    duration: "3 Days",
    groupSize: "8-12 people",
    location: "Ha Giang",
    price: 250,
    originalPrice: 300,
    features: [
      "Motorcycle Tours",
      "Adventure",
      "Mountain Views",
      "Local Culture",
    ],
    departure: "Daily",
    description:
      "Experience the breathtaking beauty of Ha Giang's mountainous landscapes on this epic 3-day motorcycle adventure. Navigate winding mountain roads, visit ethnic minority villages, and witness some of Vietnam's most spectacular scenery.",
    highlights: [
      "Ride through the stunning Ha Giang Loop",
      "Visit ethnic minority villages (H'mong, Tay, Nung)",
      "Stop at Dong Van Karst Plateau Geopark",
      "Experience local culture and traditions",
      "Professional local guides",
      "All meals included",
      "Comfortable accommodation",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Ha Giang to Quan Ba - Heaven Gate",
        activities: [
          "Departure from Ha Giang city",
          "Visit Heaven Gate viewpoint",
          "Lunch in Quan Ba town",
          "Explore Twin Mountains (Fairy Bosom)",
          "Overnight in Quan Ba",
        ],
      },
      {
        day: "Day 2",
        title: "Quan Ba to Dong Van",
        activities: [
          "Morning ride through mountain passes",
          "Visit Lung Cu Flag Tower",
          "Explore Dong Van Old Quarter",
          "Local market experience",
          "Traditional dinner",
        ],
      },
      {
        day: "Day 3",
        title: "Dong Van to Ha Giang",
        activities: [
          "Ma Pi Leng Pass - the most beautiful pass",
          "Nho Que River viewpoint",
          "Meo Vac town exploration",
          "Return to Ha Giang city",
        ],
      },
    ],
    included: [
      "Professional English-speaking guide",
      "All meals (breakfast, lunch, dinner)",
      "Accommodation (2 nights)",
      "Motorbike rental and fuel",
      "Entrance fees to attractions",
      "Travel insurance",
    ],
    notIncluded: [
      "Personal expenses",
      "Tips for guide and driver",
      "Alcoholic beverages",
      "International flights",
    ],
  },
  "2": {
    id: 2,
    title: "Sapa Trekking & Homestay Experience",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    rating: 4.9,
    reviews: 203,
    duration: "2 Days",
    groupSize: "6-10 people",
    location: "Sapa",
    price: 180,
    originalPrice: 220,
    features: ["Trekking", "Homestay", "Rice Terraces", "Local Villages"],
    departure: "Daily",
    description:
      "Immerse yourself in the stunning landscapes of Sapa with this authentic trekking and homestay experience. Walk through magnificent rice terraces and stay with local families.",
    highlights: [
      "Trek through famous rice terraces",
      "Authentic homestay experience",
      "Meet local ethnic minorities",
      "Traditional cooking class",
      "Spectacular mountain views",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Sapa Town to Cat Cat Village",
        activities: [
          "Pick up from Sapa town",
          "Trek to Cat Cat village",
          "Visit H'mong ethnic village",
          "Homestay with local family",
        ],
      },
      {
        day: "Day 2",
        title: "Village Trekking & Return",
        activities: [
          "Morning trek through rice terraces",
          "Visit local market",
          "Traditional lunch",
          "Return to Sapa town",
        ],
      },
    ],
    included: [
      "Professional trekking guide",
      "Homestay accommodation",
      "All meals",
      "Entrance fees",
      "Transportation",
    ],
    notIncluded: ["Personal expenses", "Travel insurance", "Tips"],
  },
  "3": {
    id: 3,
    title: "Mekong Delta Floating Market Tour",
    images: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    rating: 4.7,
    reviews: 189,
    duration: "1 Day",
    groupSize: "10-15 people",
    location: "Mekong Delta",
    price: 85,
    originalPrice: 95,
    features: ["Boat Tours", "Floating Markets", "Local Food", "River Life"],
    departure: "Daily",
    description:
      "Experience the unique river culture of the Mekong Delta with visits to floating markets and traditional boat tours through scenic waterways.",
    highlights: [
      "Visit authentic floating markets",
      "Traditional boat tour",
      "Local fruit tasting",
      "Traditional crafts workshop",
      "Authentic Vietnamese lunch",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Mekong Delta Full Day Tour",
        activities: [
          "Early morning departure to Cai Rang floating market",
          "Boat tour through narrow canals",
          "Visit local fruit orchards",
          "Traditional lunch with local family",
          "Return to Ho Chi Minh City",
        ],
      },
    ],
    included: [
      "Transportation",
      "Boat tour",
      "English-speaking guide",
      "Entrance fees",
      "Lunch",
    ],
    notIncluded: ["Personal expenses", "Tips", "Drinks"],
  },
};

const TourDetail = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "1",
    date: "",
    specialRequests: "",
  });

  const { ref, isVisible } = useScrollAnimation();

  const tour = tourData[id as keyof typeof tourData];

  if (!tour) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Tour Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The tour you're looking for doesn't exist.
            </p>
            <Button onClick={() => router.push("/")}>Back to Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock booking submission
    alert(
      `Booking submitted for ${bookingData.fullName}! We'll contact you soon.`,
    );
    setIsBookingDialogOpen(false);
    // Reset form
    setBookingData({
      fullName: "",
      email: "",
      phone: "",
      travelers: "1",
      date: "",
      specialRequests: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="flex items-center space-x-2 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Tours</span>
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-16" ref={ref as any}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              className="mb-8"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="relative mb-4">
                <img
                  src={tour.images[currentImageIndex]}
                  alt={tour.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[rgb(255,200,0)] text-black">
                    Best Seller
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {tour.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${tour.title} ${index + 1}`}
                    className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-all ${
                      index === currentImageIndex
                        ? "ring-2 ring-[rgb(14,71,171)]"
                        : "hover:opacity-75"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tour Info */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {tour.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{tour.rating}</span>
                      <span>({tour.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-[rgb(14,71,171)]" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-[rgb(14,71,171)]" />
                  <div>
                    <p className="text-sm text-gray-600">Group Size</p>
                    <p className="font-semibold">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[rgb(14,71,171)]" />
                  <div>
                    <p className="text-sm text-gray-600">Departure</p>
                    <p className="font-semibold">{tour.departure}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-[rgb(14,71,171)]" />
                  <div>
                    <p className="text-sm text-gray-600">Safety</p>
                    <p className="font-semibold">Guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Tour
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs for detailed info */}
              <Tabs defaultValue="itinerary" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">What's Included</TabsTrigger>
                  <TabsTrigger value="photos">More Photos</TabsTrigger>
                </TabsList>

                <TabsContent value="itinerary" className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-[rgb(14,71,171)] mb-2">
                          {day.day}: {day.title}
                        </h3>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li
                              key={actIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-[rgb(255,200,0)] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="included">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                          <Check className="w-5 h-5 mr-2" />
                          What's Included
                        </h3>
                        <ul className="space-y-2">
                          {tour.included.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                          <Heart className="w-5 h-5 mr-2" />
                          Not Included
                        </h3>
                        <ul className="space-y-2">
                          {tour.notIncluded.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-4 h-4 border border-red-300 rounded mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="photos">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${tour.title} photo ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-lg" />
                        <Camera className="absolute top-2 right-2 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-[rgb(14,71,171)]">
                        ${tour.price}
                      </span>
                      {tour.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">
                          ${tour.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>

                  <Separator className="mb-6" />

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="font-semibold">{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Group Size:</span>
                      <span className="font-semibold">{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Departure:</span>
                      <span className="font-semibold">{tour.departure}</span>
                    </div>
                  </div>

                  <Dialog
                    open={isBookingDialogOpen}
                    onOpenChange={setIsBookingDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="w-full bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white py-3 text-lg">
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Book Your Adventure</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to book "{tour.title}"
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={handleBookingSubmit}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                              id="fullName"
                              required
                              value={bookingData.fullName}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  fullName: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={bookingData.email}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              required
                              value={bookingData.phone}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="travelers">Travelers</Label>
                            <Select
                              value={bookingData.travelers}
                              onValueChange={(value) =>
                                setBookingData({
                                  ...bookingData,
                                  travelers: value,
                                })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? "person" : "people"}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input
                            id="date"
                            type="date"
                            required
                            value={bookingData.date}
                            onChange={(e) =>
                              setBookingData({
                                ...bookingData,
                                date: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialRequests">
                            Special Requests
                          </Label>
                          <Textarea
                            id="specialRequests"
                            placeholder="Any special requirements or requests..."
                            value={bookingData.specialRequests}
                            onChange={(e) =>
                              setBookingData({
                                ...bookingData,
                                specialRequests: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="pt-4">
                          <Button
                            type="submit"
                            className="w-full bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90"
                          >
                            Submit Booking Request
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      Free cancellation up to 24 hours before departure
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Need Help?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Available 24/7</span>
                    </div>
                    <div>
                      <p className="text-gray-600">Call us:</p>
                      <p className="font-semibold">+84 28 1234 5678</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email:</p>
                      <p className="font-semibold">info@mekongdelta.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetail;
