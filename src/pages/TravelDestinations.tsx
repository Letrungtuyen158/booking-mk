"use client";

import { motion } from "framer-motion";
import { MapPin, Camera, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const TravelDestinations = () => {
  const { ref, isVisible } = useScrollAnimation();

  const destinations = [
    {
      id: 1,
      name: "Ha Long Bay",
      region: "Northern Vietnam",
      description:
        "UNESCO World Heritage site famous for limestone karsts and emerald waters",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      highlights: [
        "Overnight cruises",
        "Cave exploration",
        "Kayaking",
        "Floating villages",
      ],
      bestTime: "Oct - Dec, Mar - May",
      tours: 12,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sapa",
      region: "Northern Vietnam",
      description:
        "Mountainous region known for stunning rice terraces and ethnic minorities",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      highlights: ["Rice terraces", "Trekking", "Local markets", "Homestays"],
      bestTime: "Sep - Nov, Mar - May",
      tours: 8,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Hanoi",
      region: "Northern Vietnam",
      description:
        "Vietnam's capital city with 1,000 years of history and vibrant street life",
      image:
        "https://images.unsplash.com/photo-1555400081-2d1a8c8ba491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      highlights: [
        "Old Quarter",
        "Street food",
        "Water puppet show",
        "Museums",
      ],
      bestTime: "Oct - Dec, Mar - Apr",
      tours: 15,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Hoi An",
      region: "Central Vietnam",
      description:
        "Ancient trading port with well-preserved architecture and lantern-lit streets",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      highlights: [
        "Ancient town",
        "Lantern festival",
        "Cooking classes",
        "My Son ruins",
      ],
      bestTime: "Feb - Aug",
      tours: 10,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Mekong Delta",
      region: "Southern Vietnam",
      description:
        "River delta region known for floating markets and traditional river life",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      highlights: [
        "Floating markets",
        "Boat tours",
        "Fruit gardens",
        "Local crafts",
      ],
      bestTime: "Dec - Apr",
      tours: 9,
      rating: 4.6,
    },
    {
      id: 6,
      name: "Ho Chi Minh City",
      region: "Southern Vietnam",
      description:
        "Dynamic metropolis blending modern skyscrapers with French colonial architecture",
      image:
        "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      highlights: ["Cu Chi Tunnels", "War museums", "Street food", "Nightlife"],
      bestTime: "Dec - Apr",
      tours: 14,
      rating: 4.5,
    },
  ];

  const regions = [
    {
      name: "Northern Vietnam",
      destinations: ["Hanoi", "Ha Long Bay", "Sapa", "Ha Giang"],
      description: "Mountains, karsts, and cultural heritage",
      color: "bg-blue-500",
    },
    {
      name: "Central Vietnam",
      destinations: ["Hoi An", "Hue", "Da Nang", "Phong Nha"],
      description: "Imperial cities and coastal beauty",
      color: "bg-green-500",
    },
    {
      name: "Southern Vietnam",
      destinations: ["Ho Chi Minh City", "Mekong Delta", "Phu Quoc"],
      description: "Rivers, beaches, and modern cities",
      color: "bg-yellow-500",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            Travel Destinations
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover Vietnam's most beautiful places
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
              Explore Vietnam's Wonders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the misty mountains of Sapa to the bustling streets of Ho Chi
              Minh City, Vietnam offers diverse landscapes, rich culture, and
              unforgettable experiences. Discover our top destinations and start
              planning your Vietnamese adventure.
            </p>
          </div>
        </motion.section>

        {/* Regional Overview */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Regions of Vietnam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-4 h-4 rounded-full ${region.color}`} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {region.destinations.map((dest, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Destinations Grid */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
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
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[rgb(14,71,171)] text-white">
                        {destination.region}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {destination.rating}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                        <Camera className="w-3 h-3" />
                        <span>{destination.tours} tours</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {destination.region}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Best Time */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Best time: </span>
                      <span className="text-sm font-medium text-[rgb(14,71,171)]">
                        {destination.bestTime}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{destination.tours} tours available</span>
                      </div>
                      <Button className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white">
                        Explore Tours
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Let our expert local guides show you the hidden gems and authentic
            experiences that make each destination special. From cultural
            immersion to adventure activities, we'll help you create memories
            that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse All Tours
            </motion.button>
            <motion.button
              className="border border-[rgb(14,71,171)] text-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Custom Trip
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default TravelDestinations;
