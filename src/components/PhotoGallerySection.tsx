"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/hooks/use-scroll-animation";

// Extended gallery photos with more items
const allGalleryPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Halong Bay",
    category: "Nature",
    height: "tall",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Sapa Rice Terraces",
    category: "Landscape",
    height: "medium",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1555400081-2d1a8c8ba491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Temple Architecture",
    category: "Culture",
    height: "short",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Street Food",
    category: "Food",
    height: "medium",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Mekong Delta",
    category: "Nature",
    height: "tall",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1572001649318-4b2ba1a3de00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Traditional Village",
    category: "Culture",
    height: "short",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1576866209830-589e1b16d5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Floating Markets",
    category: "Culture",
    height: "medium",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Delicious Pho",
    category: "Food",
    height: "short",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Mountain Peaks",
    category: "Landscape",
    height: "tall",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Historic Hanoi",
    category: "Culture",
    height: "medium",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Coastal Beauty",
    category: "Nature",
    height: "short",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Fresh Spring Rolls",
    category: "Food",
    height: "medium",
  },
  // Additional photos for load more functionality
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Local Markets",
    category: "Culture",
    height: "tall",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Jungle Trekking",
    category: "Nature",
    height: "medium",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Vietnam Coffee",
    category: "Food",
    height: "short",
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Terraced Hills",
    category: "Landscape",
    height: "tall",
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80",
    title: "Ancient Temples",
    category: "Culture",
    height: "medium",
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1526410535928-f47a8bb3d21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Tropical Islands",
    category: "Nature",
    height: "short",
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "BBQ Specialties",
    category: "Food",
    height: "medium",
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Mountain Views",
    category: "Landscape",
    height: "tall",
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Traditional Dance",
    category: "Culture",
    height: "short",
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Riverside Dining",
    category: "Food",
    height: "medium",
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1517100181962-b8b2a4d2d2df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Sunset Beach",
    category: "Nature",
    height: "tall",
  },
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1544181739-e99c6e3e9e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Valley Views",
    category: "Landscape",
    height: "medium",
  },
];

const PhotoGallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePhotos, setVisiblePhotos] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", "Nature", "Culture", "Food", "Landscape"];

  const filteredPhotos =
    selectedCategory === "All"
      ? allGalleryPhotos
      : allGalleryPhotos.filter((photo) => photo.category === selectedCategory);

  const displayedPhotos = filteredPhotos.slice(0, visiblePhotos);
  const hasMorePhotos = visiblePhotos < filteredPhotos.length;

  const handleLoadMore = async () => {
    console.log("Load More Photos clicked!", {
      visiblePhotos,
      totalPhotos: filteredPhotos.length,
    });
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setVisiblePhotos((prev) => {
      const newCount = Math.min(prev + 12, filteredPhotos.length);
      console.log("New visible photos:", newCount);
      return newCount;
    });
    setIsLoading(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisiblePhotos(12); // Reset to initial count when changing category
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life on Tour
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[rgb(14,71,171)] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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
          {displayedPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                photo.height === "tall"
                  ? "row-span-2"
                  : photo.height === "short"
                  ? "row-span-1"
                  : "row-span-1"
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              style={{
                aspectRatio:
                  photo.height === "tall"
                    ? "3/4"
                    : photo.height === "short"
                    ? "16/9"
                    : "1/1",
              }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMorePhotos && (
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-[rgb(14,71,171)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[rgb(14,71,171)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Load More Photos"}
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Showing {displayedPhotos.length} of {filteredPhotos.length}{" "}
              {selectedCategory === "All" ? "" : selectedCategory} photos
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallerySection;
