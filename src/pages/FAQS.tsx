"use client";

import { motion } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const FAQS = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqCategories = {
    general: {
      title: "General Information",
      faqs: [
        {
          question:
            "What makes Mekong Delta Tours different from other tour operators?",
          answer:
            "We are a locally-owned company with deep roots in Vietnamese culture. Our guides are passionate locals who share authentic stories and hidden gems that you won't find in guidebooks. We focus on sustainable tourism that benefits local communities while providing you with genuine experiences.",
        },
        {
          question: "How do I book a tour with Mekong Delta Tours?",
          answer:
            "You can book directly through our website, call us at +84 28 1234 5678, or email info@mekongdelta.com. We recommend booking at least 7 days in advance, especially during peak season (October to March).",
        },
        {
          question: "What languages do your guides speak?",
          answer:
            "All our guides speak fluent English and Vietnamese. Many also speak French, Japanese, Korean, German, or Spanish. We'll do our best to match you with a guide who speaks your preferred language.",
        },
        {
          question: "Do you offer private tours?",
          answer:
            "Yes! We offer both group tours and private tours. Private tours can be customized to your interests, pace, and schedule. Contact us for a personalized quote.",
        },
      ],
    },
    booking: {
      title: "Booking & Payment",
      faqs: [
        {
          question: "What is your cancellation policy?",
          answer:
            "Free cancellation up to 24 hours before tour departure for a full refund. Cancellations within 24 hours are subject to a 50% fee. No-shows are non-refundable. We recommend travel insurance for additional protection.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept Visa, Mastercard, PayPal, bank transfers, and cash payments. Online bookings require a 30% deposit, with the balance due before tour departure.",
        },
        {
          question: "Can I modify my booking after confirmation?",
          answer:
            "Yes, modifications are possible subject to availability. Changes made more than 48 hours before departure are free. Changes within 48 hours may incur fees depending on the modification.",
        },
        {
          question: "Do you offer group discounts?",
          answer:
            "Yes! Groups of 8 or more people receive a 10% discount. Groups of 15+ receive 15% off. Corporate groups and educational institutions may qualify for additional discounts.",
        },
      ],
    },
    travel: {
      title: "Travel Information",
      faqs: [
        {
          question: "What should I pack for my Vietnam tour?",
          answer:
            "Pack lightweight, breathable clothing, comfortable walking shoes, rain jacket, sunscreen, insect repellent, and a hat. For temple visits, bring modest clothing that covers shoulders and knees. We'll provide a detailed packing list upon booking.",
        },
        {
          question: "Do I need a visa to visit Vietnam?",
          answer:
            "Visa requirements depend on your nationality and length of stay. Many countries can enter visa-free for 15-30 days. Others can get a visa on arrival or e-visa. Check with your local Vietnamese embassy or consulate for current requirements.",
        },
        {
          question: "What is the best time to visit Vietnam?",
          answer:
            "Vietnam has diverse climates. Generally, October to March is ideal with cooler, drier weather. Northern Vietnam (Hanoi, Sapa) is best in autumn and spring. Southern Vietnam (Ho Chi Minh City, Mekong Delta) is good year-round but driest December-April.",
        },
        {
          question: "Is Vietnam safe for tourists?",
          answer:
            "Vietnam is generally very safe for tourists. Violent crime against tourists is rare. Use common sense: watch for pickpockets in crowded areas, be cautious with motorbike taxis, and follow local customs. Our guides will provide safety briefings.",
        },
      ],
    },
    health: {
      title: "Health & Safety",
      faqs: [
        {
          question: "Do I need any vaccinations for Vietnam?",
          answer:
            "No vaccinations are required, but some are recommended: Hepatitis A & B, Typhoid, Japanese Encephalitis (for rural areas), and ensuring routine vaccines are up-to-date. Consult your doctor or travel clinic 4-6 weeks before departure.",
        },
        {
          question: "Is it safe to drink tap water in Vietnam?",
          answer:
            "We recommend drinking bottled or boiled water. Most hotels and restaurants serve filtered water. Our tours include bottled water, and we'll guide you on safe dining practices.",
        },
        {
          question: "What if I have dietary restrictions or food allergies?",
          answer:
            "Please inform us of any dietary restrictions when booking. Vietnamese cuisine offers many vegetarian options, and we can accommodate most dietary needs including vegan, gluten-free, and halal requirements.",
        },
        {
          question: "What is your policy on COVID-19 safety?",
          answer:
            "We follow all government health guidelines and maintain high hygiene standards. Hand sanitizer is provided, and we can arrange smaller group sizes if requested. Check current entry requirements as they may change.",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Find answers to common questions about traveling in Vietnam
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" ref={ref as any}>
        {/* Quick Help */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Can We Help?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Can't find what you're looking for? Our friendly team is here to
              help you plan the perfect Vietnamese adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[rgb(14,71,171)]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Speak with our travel experts
                  </p>
                  <p className="text-[rgb(14,71,171)] font-medium">
                    +84 28 1234 5678
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-[rgb(14,71,171)]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Get detailed information
                  </p>
                  <p className="text-[rgb(14,71,171)] font-medium">
                    info@mekongdelta.com
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[rgb(14,71,171)]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Live Chat
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Instant assistance available
                  </p>
                  <p className="text-[rgb(14,71,171)] font-medium">
                    24/7 Support
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Tabs */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Questions
          </h2>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
            </TabsList>

            {Object.entries(faqCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      {category.title}
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-b"
                        >
                          <AccordionTrigger className="text-left hover:text-[rgb(14,71,171)] transition-colors">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.section>

        {/* Additional Resources */}
        <motion.section
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12"
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
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of Vietnam travel experts is here to help you plan the
              perfect trip. Get in touch and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Travel Planning Resources
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[rgb(14,71,171)] rounded-full" />
                  <span className="text-gray-700">Vietnam Travel Guide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[rgb(14,71,171)] rounded-full" />
                  <span className="text-gray-700">
                    Weather & Climate Information
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[rgb(14,71,171)] rounded-full" />
                  <span className="text-gray-700">
                    Cultural Tips & Etiquette
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[rgb(14,71,171)] rounded-full" />
                  <span className="text-gray-700">Packing Checklists</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Emergency Contacts
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">
                    24/7 Emergency Hotline
                  </p>
                  <p className="text-[rgb(14,71,171)] font-medium">
                    +84 90 123 4567
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Office Hours</p>
                  <p className="text-gray-700">
                    Monday - Sunday: 8:00 AM - 10:00 PM
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Emergency Email</p>
                  <p className="text-[rgb(14,71,171)] font-medium">
                    emergency@mekongdelta.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Experts
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQS;
