"use client";
import { CalendarDays, MapPin, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, fadeInUp } from "@/hooks/use-scroll-animation";

const SearchFilters = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-8 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                {/* Destination */}
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.1 },
                    },
                  }}
                >
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    Destination
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Where to go?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hanoi">Ha Noi</SelectItem>
                      <SelectItem value="hcm">Ho Chi Minh City</SelectItem>
                      <SelectItem value="danang">Da Nang</SelectItem>
                      <SelectItem value="hue">Hue</SelectItem>
                      <SelectItem value="hoi-an">Hoi An</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Activity */}
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.2 },
                    },
                  }}
                >
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Activity
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What to do?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cultural">
                        Cultural Heritage
                      </SelectItem>
                      <SelectItem value="food">Food Tours</SelectItem>
                      <SelectItem value="nature">Nature & Adventure</SelectItem>
                      <SelectItem value="cruise">Cruise Tours</SelectItem>
                      <SelectItem value="multi-day">Multi-day Trips</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Duration */}
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.3 },
                    },
                  }}
                >
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How long?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-day">1 Day</SelectItem>
                      <SelectItem value="2-3-days">2-3 Days</SelectItem>
                      <SelectItem value="4-7-days">4-7 Days</SelectItem>
                      <SelectItem value="1-week">1+ Week</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Price */}
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.4 },
                    },
                  }}
                >
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Price Range
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Budget?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="200+">$200+</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Search Button */}
                <motion.div
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5, delay: 0.5 },
                    },
                  }}
                >
                  <Button className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white h-10 w-full">
                    Search Tours
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchFilters;
