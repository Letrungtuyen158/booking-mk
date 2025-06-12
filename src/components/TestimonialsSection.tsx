import { motion } from "framer-motion";
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
    tripImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
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
    tripImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
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
    tripImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
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
    tripImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
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
    tripImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
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
    tripImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-8" ref={ref}>
      <div className="container mx-auto px-4 md:px-10 xl:px-20">
        <motion.div
          className="mb-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 text-2xl md:text-3xl">
              <span className="text-[#0E47AB] text-sm tracking-[20%] w-fit">
                TESTIMONIALS
              </span>
              <h2 className=" font-bold text-gray-900 mb-4">
                What our clients say
              </h2>
            </div>
            <p className="text-base col-span-8 text-gray-600">
              From breathtaking views to unforgettable connections, our guests
              leave with more than just memories. Here’s what they have to say
              about their experience.{" "}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="group overflow-hidden rounded-lg"
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: {
                  opacity: 0.7,
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
                opacity: 1,
                transition: { duration: 0.3 },
              }}
            >
              <div className="group-hover:bg-[#0E47AB] transition-colors duration-300 relative h-full">
                <div className="p-6 flex flex-col h-full">
                  <img
                    src="/images/home/quote.png"
                    alt=""
                    className="absolute top-[-7px] right-[-22px] w-[145px] h-[138px]"
                  />
                  <motion.div
                    className="flex items-center space-x-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  >
                    <Avatar className="w-12 h-12 border-2 border-yellow-400">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="">
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                        {testimonial.country}
                      </p>
                    </div>
                  </motion.div>
                  {/* Review */}
                  <motion.p
                    className="text-gray-700 mb-6 text-xs flex-grow group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    "{testimonial.review}"
                  </motion.p>

                  {/* Tour Image */}
                  <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    {testimonial.tripImages.slice(0, 4).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={testimonial.tour}
                        className="w-[70px] h-[70px] rounded-sm object-cover"
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
