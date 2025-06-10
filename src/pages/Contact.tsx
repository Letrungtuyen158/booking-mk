"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Nguyen Hue Street",
        "District 1, Ho Chi Minh City",
        "Vietnam",
      ],
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+84 28 1234 5678",
        "+84 90 123 4567 (Emergency)",
        "Available 24/7",
      ],
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@mekongdelta.com",
        "booking@mekongdelta.com",
        "emergency@mekongdelta.com",
      ],
      color: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Sunday", "8:00 AM - 10:00 PM", "ICT (UTC+7)"],
      color: "text-orange-500",
    },
  ];

  const offices = [
    {
      city: "Ho Chi Minh City",
      address: "123 Nguyen Hue Street, District 1",
      phone: "+84 28 1234 5678",
      email: "hcm@mekongdelta.com",
      isMain: true,
    },
    {
      city: "Hanoi",
      address: "45 Hang Bong Street, Hoan Kiem District",
      phone: "+84 24 9876 5432",
      email: "hanoi@mekongdelta.com",
      isMain: false,
    },
    {
      city: "Can Tho",
      address: "78 Hai Ba Trung Street, Ninh Kieu District",
      phone: "+84 292 123 4567",
      email: "cantho@mekongdelta.com",
      isMain: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll respond within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's plan your perfect Vietnamese adventure together
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" ref={ref as any}>
        {/* Contact Information */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to explore Vietnam? Our friendly team is here to help you
              plan your perfect adventure. Reach out to us anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
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
                    <div
                      className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form and Map */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">Tour Booking</SelectItem>
                          <SelectItem value="custom">
                            Custom Tour Request
                          </SelectItem>
                          <SelectItem value="information">
                            General Information
                          </SelectItem>
                          <SelectItem value="support">
                            Customer Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us about your travel plans, questions, or how we can help..."
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us
                </h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 bg-gray-200 rounded-t-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Ho Chi Minh City, Vietnam</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Main Office
                      </h3>
                      <p className="text-gray-600 text-sm">
                        123 Nguyen Hue Street, District 1<br />
                        Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact Options */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-3">
                    <motion.button
                      className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now: +84 28 1234 5678</span>
                    </motion.button>

                    <motion.button
                      className="w-full flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Live Chat (24/7)</span>
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Office Locations */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
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
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className={`hover:shadow-lg transition-shadow ${
                    office.isMain ? "ring-2 ring-[rgb(255,200,0)]" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {office.city}
                      </h3>
                      {office.isMain && (
                        <span className="bg-[rgb(255,200,0)] text-black px-2 py-1 rounded text-xs font-medium">
                          Main Office
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          {office.address}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {office.phone}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {office.email}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Link */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Check out our comprehensive FAQ section for quick answers to common
            questions about traveling in Vietnam and booking tours.
          </p>
          <motion.button
            className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View FAQs
          </motion.button>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
