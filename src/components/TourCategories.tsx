import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const categories = [
  {
    title: "Cruise & Boat tours",
    image: "/icons/cruise-boat-tours.svg",
    desc: "12 destinations",
    maskImage: "/images/hero/image1.png",
  },
  {
    title: "Explore Floating Market",
    image: "/icons/explore-floating-market.svg",
    desc: "12 destinations",
    maskImage: "/images/hero/image2.png",
  },
  {
    title: "Nature & Adventure",
    image: "/icons/nature-adventure.svg",
    desc: "12 destinations",
    maskImage: "/images/hero/image3.png",
  },
  {
    title: "Private Tours",
    image: "/icons/private-tours.svg",
    desc: "12 destinations",
    maskImage: "/images/hero/image4.png",
  },
  {
    title: "Multiday trips",
    image: "/icons/multiday-trips.svg",
    desc: "12 destinations",
    maskImage: "/images/hero/image5.png",
  },
];

const TourCategories = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {categories.map((category, index) => (
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
              // whileHover={{
              //   y: -8,
              //   transition: { duration: 0.3 },
              // }}
              className="w-32 md:w-40 lg:w-[200px] border-0 group"
            >
              <div className="text-center flex flex-col gap-[22px]">
                <div className="h-24 md:h-32 lg:h-[160px] relative flex justify-center items-center rounded-[8px] overflow-hidden cursor-pointer">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="text-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] object-cover transition-all duration-300 group-hover:opacity-0"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                  <img
                    src={category.maskImage}
                    alt={category.title}
                    className="absolute text-center w-full h-[160px] object-cover opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-tight">
                    {category.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourCategories;
