"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  MapPin,
  Users,
  Calendar,
  Tag,
  CircleCheck,
} from "lucide-react";
import Link from "next/link";
import { useScrollAnimation, fadeInUp } from "@/hooks/use-scroll-animation";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { DashedSeparator } from "./ui/dashed-separator";

// Extended tour data with 12 tours
const allTours = [
  {
    id: 1,
    title: "3 Days Army Jeep Ha Giang Loop Tour",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$89",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 128,
    duration: "3 Days",
    groupSize: "3 - 5",
    location: "Ha Giang",
    highlights: ["Ma Pi Leng Pass", "Dong Van Karst Plateau", "Local Homestay"],
    departure: "Daily",
  },
  {
    id: 2,
    title: "Sapa Trekking & Homestay Experience",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$65",
    originalPrice: "$85",
    rating: 4.8,
    reviews: 95,
    duration: "2 Days",
    groupSize: "4 - 12",
    location: "Sapa",
    highlights: ["Rice Terraces", "Hill Tribe Villages", "Mountain Views"],
    departure: "Daily",
  },
  {
    id: 3,
    title: "Halong Bay Luxury Cruise",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$150",
    originalPrice: "$200",
    rating: 4.9,
    reviews: 203,
    duration: "2 Days",
    groupSize: "2 - 20",
    location: "Halong Bay",
    highlights: ["Limestone Caves", "Kayaking", "Sunset Dinner"],
    departure: "Daily",
  },
  {
    id: 4,
    title: "Mekong Delta Discovery",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$45",
    originalPrice: "$60",
    rating: 4.7,
    reviews: 156,
    duration: "1 Day",
    groupSize: "6 - 15",
    location: "Can Tho",
    highlights: ["Floating Markets", "Fruit Gardens", "Local Cuisine"],
    departure: "Daily",
  },
  {
    id: 5,
    title: "Hanoi Street Food Walking Tour",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$35",
    originalPrice: "$45",
    rating: 4.8,
    reviews: 89,
    duration: "4 Hours",
    groupSize: "4 - 10",
    location: "Hanoi",
    highlights: ["Pho Bo", "Banh Mi", "Local Markets"],
    departure: "Daily",
  },
  {
    id: 6,
    title: "Phong Nha Cave Adventure",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$95",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 167,
    duration: "3 Days",
    groupSize: "2 - 8",
    location: "Phong Nha",
    highlights: ["Son Tra Cave", "Underground Rivers", "Jungle Trekking"],
    departure: "Mon, Wed, Fri",
  },
  // Additional tours for load more functionality
  {
    id: 7,
    title: "Hoi An Ancient Town & My Son",
    image:
      "https://images.unsplash.com/photo-1572001649318-4b2ba1a3de00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$75",
    originalPrice: "$95",
    rating: 4.8,
    reviews: 142,
    duration: "2 Days",
    groupSize: "4 - 12",
    location: "Hoi An",
    highlights: ["Ancient Architecture", "Lantern Festival", "Cooking Class"],
    departure: "Daily",
  },
  {
    id: 8,
    title: "Da Nang Beach & Ba Na Hills",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$110",
    originalPrice: "$140",
    rating: 4.7,
    reviews: 198,
    duration: "3 Days",
    groupSize: "2 - 15",
    location: "Da Nang",
    highlights: ["Golden Bridge", "Cable Car", "Beach Resort"],
    departure: "Daily",
  },
  {
    id: 9,
    title: "Cu Chi Tunnels Historical Tour",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90bi1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$40",
    originalPrice: "$55",
    rating: 4.6,
    reviews: 221,
    duration: "6 Hours",
    groupSize: "8 - 20",
    location: "Ho Chi Minh",
    highlights: ["Underground Tunnels", "War History", "Shooting Range"],
    departure: "Daily",
  },
  {
    id: 10,
    title: "Ninh Binh Tam Coc Boat Tour",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$55",
    originalPrice: "$70",
    rating: 4.8,
    reviews: 134,
    duration: "1 Day",
    groupSize: "4 - 12",
    location: "Ninh Binh",
    highlights: ["River Boat Ride", "Limestone Cliffs", "Ancient Temples"],
    departure: "Daily",
  },
  {
    id: 11,
    title: "Phu Quoc Island Paradise",
    image:
      "https://images.unsplash.com/photo-1526410535928-f47a8bb3d21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90bi1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$180",
    originalPrice: "$230",
    rating: 4.9,
    reviews: 156,
    duration: "4 Days",
    groupSize: "2 - 10",
    location: "Phu Quoc",
    highlights: ["Pristine Beaches", "Cable Car", "Night Markets"],
    departure: "Daily",
  },
  {
    id: 12,
    title: "Dalat Flower City Adventure",
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$85",
    originalPrice: "$110",
    rating: 4.7,
    reviews: 178,
    duration: "2 Days",
    groupSize: "6 - 14",
    location: "Dalat",
    highlights: ["Coffee Plantations", "Waterfalls", "French Architecture"],
    departure: "Daily",
  },
];

const TourPackages = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [visibleTours, setVisibleTours] = useState(6); // Start with 6 tours
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    console.log("Load More Tours clicked!", {
      visibleTours,
      totalTours: allTours.length,
    });
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setVisibleTours((prev) => {
      const newCount = Math.min(prev + 6, allTours.length);
      console.log("New visible tours:", newCount);
      return newCount;
    });
    setIsLoading(false);
  };

  const displayedTours = allTours.slice(0, visibleTours);
  const hasMoreTours = visibleTours < allTours.length;

  return (
    <section className="py-8 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-xxs font-semibold text-tour mb-2">
              {allTours.length} Tour Packages Found
            </h2>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(14,71,171)]">
              <option>Sort by Price</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Duration</option>
            </select>
          </div>
        </motion.div>

        {/* Tours Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {displayedTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                  }}
                />
                <div className="flex gap-1 absolute top-4 left-4 bg-[rgb(255,255,255,0.64)] text-tour px-[5px] py-[3px] rounded-sm text-xxs font-semibold shadow-lg">
                  <img src="/icons/location.svg" alt="location" />
                  <span className="truncate">{tour.location}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="gap-[6px] flex items-center text-sm text-gray-500 mb-2">
                  <Tag className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1 pt-[2px] px-[6px] text-tour text-[8px] bg-[#F2F2F2] rounded-sm">
                    Top rated
                  </span>
                  <span className="line-clamp-1 pt-[2px] px-[6px] text-tour text-[8px] bg-[#F2F2F2] rounded-sm">
                    Booked 10 times yesterday
                  </span>
                  {/* <span className="truncate">{tour.duration}</span> */}
                </div>

                <h3 className="text-[12px] font-bold text-gray-900  group-hover:text-[#FFD600] transition-colors line-clamp-2">
                  {tour.title}
                </h3>
                <DashedSeparator className="my-3" />
                <div className="grid grid-cols-2 gap-[6px]">
                  <div className="flex items-baseline gap-1 text-[#8E8E8E]">
                    <CircleCheck className="size-[9.75px]" />
                    <span className="text-[10px] ">3 Days - 3 Nights</span>
                  </div>
                  <div className="flex items-baseline gap-1 text-[#8E8E8E]">
                    <CircleCheck className="size-[9.75px]" />
                    <span className="text-[10px] ">Army Open-air Jeep</span>
                  </div>
                  <div className="flex items-baseline gap-1 text-[#8E8E8E]">
                    <CircleCheck className="size-[9.75px]" />
                    <span className="text-[10px] ">
                      {tour.groupSize} pax maximum
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 text-[#8E8E8E]">
                    <CircleCheck className="size-[9.75px]" />
                    <span className="text-[10px] ">Pick up available</span>
                  </div>
                </div>

                <DashedSeparator className="my-3" />

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs text-[#8E8E8E] leading-tight">
                      From{" "}
                      <span className="line-through font-medium">$540</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold text-[#0E47AB] group-hover:text-[#FFD600]">
                        $330
                      </span>
                      <span className="text-xs text-[#8E8E8E] font-medium mb-2">
                        per person
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/tour/${tour.id}`}
                    className="bg-[#FFD600] group-hover:bg-[#0E47AB] text-white font-bold text-xxs leading-tight rounded-sm px-2 py-2 transition-colors"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMoreTours && (
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <DashedSeparator className="mt-12">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="mx-6 text-sm bg-[rgb(14,71,171)] text-white px-4 py-2 rounded-md font-medium hover:bg-[rgb(14,71,171)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Loading..." : "Show more"}
              </button>
            </DashedSeparator>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TourPackages;
