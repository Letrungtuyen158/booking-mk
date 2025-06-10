"use client";

import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqData = {
  "mekong-stay": {
    title: "Mekong Stay",
    faqs: [
      {
        question: "What is included in Mekong stays?",
        answer:
          "Our Mekong stays include accommodation in traditional homestays or boutique hotels, all meals featuring authentic local cuisine, guided tours of floating markets and local villages, boat transportation, and cultural activities with local families.",
      },
      {
        question: "What services does Mekong provide?",
        answer:
          "We provide comprehensive tour services including transportation, accommodation booking, local guides, cultural experiences, cooking classes, boat tours, and 24/7 customer support throughout your stay.",
      },
      {
        question: "How long are typical Mekong tours?",
        answer:
          "Mekong tours range from day trips to multi-day experiences. Popular options include 1-day floating market tours, 2-day homestay experiences, and 3-4 day comprehensive delta exploration packages.",
      },
      {
        question: "What is the best time to visit Mekong Delta?",
        answer:
          "The best time to visit is during dry season (December to April) when weather is pleasant and boat travel is most comfortable. However, the wet season offers unique experiences like fruit harvesting.",
      },
    ],
  },
  "hanoi-capital": {
    title: "Hanoi Capital",
    faqs: [
      {
        question: "What are must-see attractions in Hanoi?",
        answer:
          "Must-see attractions include the Old Quarter, Hoan Kiem Lake, Temple of Literature, Ho Chi Minh Mausoleum, One Pillar Pagoda, and the vibrant street food scene in the evening markets.",
      },
      {
        question: "How many days do you need in Hanoi?",
        answer:
          "We recommend at least 2-3 days to see the main attractions, with an additional day for day trips to nearby destinations like Ha Long Bay or Ninh Binh.",
      },
      {
        question: "What is Hanoi famous for?",
        answer:
          "Hanoi is famous for its rich history spanning over 1,000 years, incredible street food culture, French colonial architecture, traditional temples, and as the gateway to northern Vietnam attractions.",
      },
      {
        question: "Is Hanoi safe for tourists?",
        answer:
          "Yes, Hanoi is generally very safe for tourists. Standard precautions apply - watch for traffic when crossing streets, be aware of your belongings, and use reputable tour operators for excursions.",
      },
    ],
  },
};

const videoContent = {
  "hanoi-capital": {
    title: "Hanoi Capital",
    thumbnail:
      "https://images.unsplash.com/photo-1555400081-2d1a8c8ba491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Discover the beauty and culture of Vietnam's capital city through this immersive video tour.",
  },
  "mekong-stay": {
    title: "Mekong Experience",
    thumbnail:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Experience the authentic life along the Mekong Delta waterways and floating markets.",
  },
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("mekong-stay");

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQs about the trip
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about traveling in Vietnam
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Tabs */}
          <div>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mekong-stay">Mekong Stay</TabsTrigger>
                <TabsTrigger value="hanoi-capital">Hanoi Capital</TabsTrigger>
              </TabsList>

              {Object.entries(faqData).map(([key, data]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {data.title}
                      </h3>
                      <Accordion type="single" collapsible className="w-full">
                        {data.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
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
          </div>

          {/* Video Content */}
          <div>
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={
                    videoContent[activeTab as keyof typeof videoContent]
                      .thumbnail
                  }
                  alt={
                    videoContent[activeTab as keyof typeof videoContent].title
                  }
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 hover:bg-white text-gray-900 rounded-full w-16 h-16 p-0"
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">
                    {videoContent[activeTab as keyof typeof videoContent].title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {
                    videoContent[activeTab as keyof typeof videoContent]
                      .description
                  }
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[rgb(14,71,171)] mb-1">
                      50+
                    </div>
                    <p className="text-sm text-gray-600">Video Tours</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[rgb(14,71,171)] mb-1">
                      4K
                    </div>
                    <p className="text-sm text-gray-600">HD Quality</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Video Links */}
            <div className="mt-6 space-y-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Play className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Sapa Mountain Trekking
                      </h4>
                      <p className="text-sm text-gray-600">3:45 mins</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Play className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Halong Bay Cruise Experience
                      </h4>
                      <p className="text-sm text-gray-600">5:20 mins</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
