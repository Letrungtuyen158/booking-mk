"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const Tours = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Tours", count: 38 },
    { id: "cultural", name: "Cultural Heritage", count: 12 },
    { id: "adventure", name: "Adventure", count: 8 },
    { id: "food", name: "Food Tours", count: 6 },
    { id: "cruise", name: "Cruise Tours", count: 7 },
    { id: "multi-day", name: "Multi-day Trips", count: 5 },
  ];

  const featuredTours = [
    {
      id: 1,
      title: "3 Days Army Jeep Ha Giang Loop Tour",
      image:
        "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8,
      reviews: 156,
      duration: "3 Days",
      location: "Ha Giang",
      price: 250,
      originalPrice: 300,
      category: "adventure",
      featured: true,
    },
    {
      id: 2,
      title: "Sapa Trekking & Homestay Experience",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.9,
      reviews: 203,
      duration: "2 Days",
      location: "Sapa",
      price: 180,
      originalPrice: 220,
      category: "cultural",
    },
    {
      id: 3,
      title: "Mekong Delta Floating Market Tour",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7,
      reviews: 189,
      duration: "1 Day",
      location: "Mekong Delta",
      price: 85,
      originalPrice: 95,
      category: "cultural",
    },
    {
      id: 4,
      title: "Halong Bay Overnight Cruise",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8,
      reviews: 245,
      duration: "2 Days",
      location: "Halong Bay",
      price: 320,
      originalPrice: 380,
      category: "cruise",
      featured: true,
    },
    {
      id: 5,
      title: "Hanoi Street Food Walking Tour",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.9,
      reviews: 312,
      duration: "4 Hours",
      location: "Hanoi",
      price: 45,
      originalPrice: 55,
      category: "food",
    },
    {
      id: 6,
      title: "Phong Nha Cave Adventure",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.6,
      reviews: 128,
      duration: "1 Day",
      location: "Phong Nha",
      price: 120,
      originalPrice: 140,
      category: "adventure",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            Explore Vietnam Tours
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover authentic Vietnamese adventures
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" ref={ref as any}>
        {/* Search and Filter Section */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Search tours..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Categories */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category.id
                      ? "ring-2 ring-[rgb(14,71,171)] bg-[rgb(14,71,171)]/5"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {category.count} tours
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Tours */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Tours</h2>
            <Badge className="bg-[rgb(255,200,0)] text-black">
              Popular Choice
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featuredTours
              .filter((tour) => tour.featured)
              .map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.2,
                      },
                    },
                  }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[rgb(255,200,0)] text-black">
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {tour.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Link href={`/tour/${tour.id}`}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[rgb(14,71,171)] transition-colors">
                          {tour.title}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{tour.duration}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{tour.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-[rgb(14,71,171)]">
                              ${tour.price}
                            </span>
                            {tour.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                ${tour.originalPrice}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500">per person</p>
                        </div>
                        <Link href={`/tour/${tour.id}`}>
                          <Button className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.section>

        {/* All Tours */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
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
                      delay: index * 0.1,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <Link href={`/tour/${tour.id}`}>
                    <div className="relative">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {tour.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <Link href={`/tour/${tour.id}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[rgb(14,71,171)] transition-colors cursor-pointer">
                        {tour.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{tour.duration}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{tour.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-[rgb(14,71,171)]">
                            ${tour.price}
                          </span>
                          {tour.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              ${tour.originalPrice}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">per person</p>
                      </div>
                      <Link href={`/tour/${tour.id}`}>
                        <Button className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
