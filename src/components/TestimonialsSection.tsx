import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    id: 1,
    name: "Jamie Smith",
    country: "United States",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    review:
      "Absolutely incredible experience! The Halong Bay cruise was breathtaking and our guide was so knowledgeable about Vietnamese culture and history. Every detail was perfectly organized.",
    tour: "3-Day Halong Bay Luxury Cruise",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Alex White",
    country: "Australia",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    review:
      "The food tour in Hanoi was amazing! We tried authentic dishes I never would have found on my own. The guide took us to local spots where real Vietnamese people eat. Highly recommend!",
    tour: "Hanoi Street Food Walking Tour",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Taylor Brown",
    country: "United Kingdom",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    review:
      "The Sapa trekking tour exceeded all expectations. The rice terraces were stunning and staying with a local family was such an authentic experience. Perfect organization from start to finish.",
    tour: "Sapa Trekking & Homestay Experience",
    date: "January 2024",
  },
  {
    id: 4,
    name: "Maria Garcia",
    country: "Spain",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    review:
      "Mekong Delta tour was fantastic! The floating markets were so colorful and interesting. Our guide explained everything about local life and customs. Great value for money.",
    tour: "Mekong Delta Floating Market Tour",
    date: "March 2024",
  },
  {
    id: 5,
    name: "David Chen",
    country: "Canada",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    review:
      "Professional service from booking to the end of the tour. The Ha Giang loop was adventurous and scenic. Excellent motorbike guides and beautiful mountain landscapes.",
    tour: "3 Days Army Jeep Ha Giang Loop Tour",
    date: "February 2024",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    country: "New Zealand",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    review:
      "Cave exploration in Phong Nha was mind-blowing! The underground rivers and formations were spectacular. Safety was top priority and guides were very experienced.",
    tour: "Phong Nha Cave Adventure",
    date: "January 2024",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-8 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who've explored Vietnam with us
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 relative h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-4 right-4 text-[rgb(14,71,171)]/20"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={
                      isVisible
                        ? { rotate: 0, opacity: 1 }
                        : { rotate: -180, opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="flex items-center space-x-1 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isVisible
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.4 + i * 0.1,
                        }}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Review */}
                  <motion.p
                    className="text-gray-700 mb-6 leading-relaxed flex-grow"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    "{testimonial.review}"
                  </motion.p>

                  {/* Tour Info */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <p className="text-sm font-medium text-[rgb(14,71,171)] mb-1">
                      {testimonial.tour}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </motion.div>

                  {/* Author Info */}
                  <motion.div
                    className="flex items-center space-x-3 pt-4 border-t"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.country}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.8,
              },
            },
          }}
        >
          {[
            { number: "5,000+", label: "Happy Travelers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <div className="text-3xl font-bold text-[rgb(14,71,171)] mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
