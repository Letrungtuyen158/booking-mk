"use client";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  const featuredPost = {
    id: 1,
    title:
      "Complete Guide to Exploring Ha Long Bay: Hidden Gems and Local Secrets",
    excerpt:
      "Discover the breathtaking beauty of Ha Long Bay beyond the tourist crowds. Our local guide shares insider tips for experiencing this UNESCO World Heritage site like a true explorer.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: "Duong Tuan",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Travel Guide",
    tags: ["Ha Long Bay", "Travel Tips", "Hidden Gems"],
  };

  const blogPosts = [
    {
      id: 2,
      title:
        "Street Food Paradise: A Culinary Journey Through Hanoi's Old Quarter",
      excerpt:
        "From steaming bowls of pho to crispy banh mi, explore the incredible street food scene that makes Hanoi a foodie destination.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Le Thi Mai",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Food & Culture",
      tags: ["Hanoi", "Street Food", "Vietnamese Cuisine"],
    },
    {
      id: 3,
      title: "Trekking Sapa: Rice Terraces and Mountain Villages Guide",
      excerpt:
        "Experience the stunning landscapes and rich cultures of Vietnam's mountainous northwest region.",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Nguyen Minh",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Adventure",
      tags: ["Sapa", "Trekking", "Mountains"],
    },
    {
      id: 4,
      title: "Mekong Delta Life: Floating Markets and River Culture",
      excerpt:
        "Dive deep into the unique river culture of the Mekong Delta, where life revolves around the rhythm of the water.",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Tran Van Duc",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Culture",
      tags: ["Mekong Delta", "Floating Markets", "River Life"],
    },
    {
      id: 5,
      title:
        "Sustainable Tourism: How We're Protecting Vietnam's Natural Beauty",
      excerpt:
        "Learn about our commitment to sustainable tourism practices and how travelers can help preserve Vietnam's environment.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Pham Thi Lan",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Sustainability",
      tags: ["Sustainable Tourism", "Environment", "Conservation"],
    },
    {
      id: 6,
      title: "Photography Tips: Capturing Vietnam's Most Instagrammable Spots",
      excerpt:
        "Professional photographer shares secrets for taking stunning photos at Vietnam's most photogenic locations.",
      image:
        "https://images.unsplash.com/photo-1555400081-2d1a8c8ba491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "David Chen",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Photography",
      tags: ["Photography", "Instagram", "Travel Tips"],
    },
  ];

  const categories = [
    { name: "All Posts", count: 25 },
    { name: "Travel Guide", count: 8 },
    { name: "Food & Culture", count: 6 },
    { name: "Adventure", count: 5 },
    { name: "Photography", count: 3 },
    { name: "Sustainability", count: 3 },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1572001649318-4b2ba1a3de00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
            Travel Blog
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stories, tips, and insights from local Vietnam experts
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" ref={ref as any}>
        {/* Search and Categories */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Search */}
            <div className="lg:flex-1">
              <Input placeholder="Search blog posts..." className="w-full" />
            </div>

            {/* Categories */}
            <div className="lg:w-80">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className="flex items-center justify-between w-full lg:w-auto px-4 py-2 text-left rounded-lg border hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Post */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-1 h-8 bg-[rgb(255,200,0)]" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Post</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[rgb(255,200,0)] text-black">
                    Featured
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      By {featuredPost.author}
                    </span>
                  </div>

                  <Button className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.section>

        {/* Recent Posts */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recent Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
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
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-[rgb(14,71,171)] transition-colors cursor-pointer">
                        {post.title}
                      </h3>

                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="flex items-center space-x-1"
                          >
                            <Tag className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {post.author}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[rgb(14,71,171)] hover:text-[rgb(14,71,171)]/80"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          className="mt-16 bg-[rgb(14,71,171)] rounded-2xl p-8 md:p-12 text-center"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest travel tips, destination
            guides, and exclusive offers for your Vietnam adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Your email address"
              className="bg-white text-gray-900"
            />
            <motion.button
              className="bg-[rgb(255,200,0)] hover:bg-[rgb(255,200,0)]/90 text-black px-8 py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
