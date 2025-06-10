"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Coffee,
  Car,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const Hostel = () => {
  const { ref, isVisible } = useScrollAnimation();

  const hostels = [
    {
      id: 1,
      name: "Mekong Delta Backpackers",
      location: "Can Tho, Mekong Delta",
      rating: 4.7,
      reviews: 234,
      price: 12,
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      amenities: ["Free WiFi", "Breakfast", "Laundry", "Tour Desk"],
      description:
        "Perfect base for exploring the Mekong Delta's floating markets and river life.",
    },
    {
      id: 2,
      name: "Hanoi Old Quarter Hostel",
      location: "Hanoi Old Quarter",
      rating: 4.8,
      reviews: 456,
      price: 15,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: [
        "Free WiFi",
        "Rooftop Terrace",
        "24/7 Reception",
        "Breakfast",
      ],
      description:
        "Located in the heart of Hanoi's historic Old Quarter, walking distance to major attractions.",
    },
    {
      id: 3,
      name: "Sapa Mountain View Hostel",
      location: "Sapa, Lao Cai",
      rating: 4.6,
      reviews: 189,
      price: 18,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: [
        "Mountain Views",
        "Trekking Tours",
        "Hot Showers",
        "Common Room",
      ],
      description:
        "Stunning mountain views and easy access to rice terraces and ethnic villages.",
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      name: "Free WiFi",
      description: "High-speed internet in all areas",
    },
    {
      icon: Coffee,
      name: "Breakfast",
      description: "Complimentary Vietnamese breakfast",
    },
    {
      icon: Car,
      name: "Tour Services",
      description: "Organized tours and transportation",
    },
    {
      icon: Users,
      name: "Common Areas",
      description: "Social spaces to meet fellow travelers",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Budget-Friendly Hostels
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comfortable stays for backpackers and budget travelers
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" ref={ref as any}>
        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our partner hostels offer clean, safe, and affordable
              accommodation throughout Vietnam. Perfect for backpackers, solo
              travelers, and anyone looking to explore Vietnam on a budget while
              meeting fellow adventurers.
            </p>
          </div>
        </motion.section>

        {/* Amenities */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <amenity.icon className="w-8 h-8 text-[rgb(14,71,171)]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {amenity.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Hostels */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Partner Hostels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hostels.map((hostel, index) => (
              <motion.div
                key={hostel.id}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={hostel.image}
                      alt={hostel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[rgb(255,200,0)] text-black">
                        Partner Hostel
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {hostel.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {hostel.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {hostel.location}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      {hostel.description}
                    </p>

                    {/* Amenities */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {hostel.amenities.map((amenity, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center space-x-2 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(hostel.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">
                        ({hostel.reviews} reviews)
                      </span>
                    </div>

                    {/* Price and Book */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[rgb(14,71,171)]">
                          ${hostel.price}
                        </div>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                      <Button className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Information Tabs */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hostel Information
          </h2>
          <Tabs defaultValue="checkin" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="checkin">Check-in</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="checkin" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Check-in Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Check-in Time
                      </h4>
                      <p className="text-gray-700">2:00 PM - 11:00 PM</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Check-out Time
                      </h4>
                      <p className="text-gray-700">Before 11:00 AM</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Reception
                      </h4>
                      <p className="text-gray-700">24/7 available</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        ID Required
                      </h4>
                      <p className="text-gray-700">Valid passport or ID card</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="facilities" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Facilities & Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Free WiFi throughout",
                      "Shared kitchen facilities",
                      "Laundry service",
                      "Luggage storage",
                      "Tour booking desk",
                      "Common lounge area",
                      "Hot showers",
                      "Air conditioning",
                      "Security lockers",
                      "Bicycle rental",
                      "Currency exchange",
                      "Complimentary breakfast",
                    ].map((facility, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[rgb(14,71,171)] rounded-full" />
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="policies" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Hostel Policies
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Cancellation Policy
                      </h4>
                      <p className="text-gray-700">
                        Free cancellation up to 24 hours before arrival
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Age Restrictions
                      </h4>
                      <p className="text-gray-700">Minimum age 18 years old</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Smoking Policy
                      </h4>
                      <p className="text-gray-700">
                        Smoking prohibited in all indoor areas
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Quiet Hours
                      </h4>
                      <p className="text-gray-700">
                        10:00 PM - 7:00 AM in dormitories
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[rgb(14,71,171)]" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-600">+84 28 1234 5678</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[rgb(14,71,171)]" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-600">
                            hostels@mekongdelta.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Emergency Contact
                      </h4>
                      <p className="text-gray-700">
                        24/7 emergency hotline: +84 90 123 4567
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        For urgent assistance outside office hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Hostel;
