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
          <Card className="shadow-lg border-[#FFC800] border-2">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row flex-wrap items-end">
                {/* Destination */}
                <motion.div
                  className="space-y-2 flex-1"
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
                  <Select>
                    <SelectTrigger className="border-none outline-none focus-visible:ring-0 focus:ring-offset-0 w-full">
                      <SelectValue
                        placeholder={
                          <>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[#0E47AB]" />
                              <span className="text-gray-500">Destination</span>
                            </div>
                          </>
                        }
                      />
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

                <div className="hidden md:block h-10 w-[1px] bg-gray-200 mx-2" />

                {/* Activity */}
                <motion.div
                  className="space-y-2 flex-1"
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
                  <Select>
                    <SelectTrigger className="border-none outline-none focus-visible:ring-0 focus:ring-offset-0 w-full">
                      <SelectValue
                        placeholder={
                          <>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="w-4 h-4 text-[#0E47AB]" />
                              <span className="text-gray-500">Activity</span>
                            </div>
                          </>
                        }
                      />
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

                <div className="hidden md:block h-10 w-[1px] bg-gray-200 mx-2" />

                {/* Duration */}
                <motion.div
                  className="space-y-2 flex-1"
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
                  <Select>
                    <SelectTrigger className="border-none outline-none focus-visible:ring-0 focus:ring-offset-0 w-full">
                      <SelectValue
                        placeholder={
                          <>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-[#0E47AB]" />
                              <span className="text-gray-500">Duration</span>
                            </div>
                          </>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-day">1 Day</SelectItem>
                      <SelectItem value="2-3-days">2-3 Days</SelectItem>
                      <SelectItem value="4-7-days">4-7 Days</SelectItem>
                      <SelectItem value="1-week">1+ Week</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <div className="hidden md:block h-10 w-[1px] bg-gray-200 mx-2" />

                {/* Price */}
                <motion.div
                  className="space-y-2 flex-1"
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
                  <Select>
                    <SelectTrigger className="border-none outline-none focus-visible:ring-0 focus:ring-offset-0 w-full">
                      <SelectValue
                        placeholder={
                          <>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-[#0E47AB]" />
                              <span className="text-gray-500">Price Range</span>
                            </div>
                          </>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="200+">$200+</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <div className="hidden md:block h-10 w-[1px] bg-gray-200 mx-2" />

                {/* Search Button */}
                <motion.div
                  className="flex-1"
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
