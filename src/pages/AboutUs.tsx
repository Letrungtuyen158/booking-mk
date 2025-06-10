"use client";
import { motion } from "framer-motion";
import { Users, Award, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "5,000+", label: "Happy Travelers", icon: Users },
    { number: "100+", label: "Tour Packages", icon: Globe },
    { number: "98%", label: "Satisfaction Rate", icon: Heart },
  ];

  const values = [
    {
      title: "Authentic Experiences",
      description:
        "We believe in showcasing the real Vietnam, connecting travelers with local communities and traditions.",
      icon: Heart,
    },
    {
      title: "Sustainable Tourism",
      description:
        "Our tours support local communities and preserve Vietnam's natural beauty for future generations.",
      icon: Globe,
    },
    {
      title: "Expert Local Guides",
      description:
        "Our passionate local guides share deep knowledge and personal stories about Vietnam's culture and history.",
      icon: Users,
    },
    {
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in safety, comfort, and service to ensure memorable experiences.",
      icon: Award,
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
            backgroundImage: `url('https://images.unsplash.com/photo-1555400081-2d1a8c8ba491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            About Mekong Delta Tours
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your trusted partner for authentic Vietnamese adventures
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" ref={ref as any}>
        {/* Our Story */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2014, Mekong Delta Tours began as a passion project
                by local Vietnamese guides who wanted to share the authentic
                beauty of their homeland with the world. What started as small
                group tours through the Mekong Delta has grown into Vietnam's
                premier travel experience company.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that travel should be transformative, connecting
                people across cultures while respecting and preserving the
                communities we visit. Every tour we offer is designed to create
                meaningful connections between our guests and the rich heritage
                of Vietnam.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[rgb(14,71,171)] text-white">
                  Local Expertise
                </Badge>
                <Badge className="bg-[rgb(255,200,0)] text-black">
                  Sustainable Tourism
                </Badge>
                <Badge className="bg-green-600 text-white">
                  Community Support
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Mekong Delta landscape"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to exceptional travel
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
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
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-[rgb(14,71,171)]" />
                    </div>
                    <div className="text-3xl font-bold text-[rgb(14,71,171)] mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
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
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[rgb(255,200,0)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-[rgb(14,71,171)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
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
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            "To create authentic, sustainable, and transformative travel
            experiences that connect visitors with the heart and soul of
            Vietnam, while supporting local communities and preserving our
            cultural heritage for future generations."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Tours
            </motion.button>
            <motion.button
              className="border border-[rgb(14,71,171)] text-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
