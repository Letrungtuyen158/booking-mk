import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "@/hooks/use-scroll-animation";

const teamMembers = [
  {
    id: 1,
    name: "Duong Tuan",
    role: "Tourism Coordinator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    experience: "8+ years",
    speciality: "Mountain Tours",
    languages: ["Vietnamese", "English", "French"],
  },
  {
    id: 2,
    name: "Duong Thanh",
    role: "Tourism Coordinator",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    experience: "6+ years",
    speciality: "Cultural Tours",
    languages: ["Vietnamese", "English", "Japanese"],
  },
  {
    id: 3,
    name: "Nguyen Minh",
    role: "Adventure Guide",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    experience: "10+ years",
    speciality: "Trekking & Hiking",
    languages: ["Vietnamese", "English", "German"],
  },
  {
    id: 4,
    name: "Le Thi Mai",
    role: "Food Tour Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    experience: "5+ years",
    speciality: "Culinary Experiences",
    languages: ["Vietnamese", "English", "Korean"],
  },
  {
    id: 5,
    name: "Tran Van Duc",
    role: "Cruise Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    experience: "12+ years",
    speciality: "Halong Bay Cruises",
    languages: ["Vietnamese", "English", "Chinese"],
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a passionate local team — guides, crew, and hosts — dedicated
            to making your Halong Bay journey safe, smooth, and unforgettable.
            We know the bay by heart and love sharing it with you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {teamMembers.map((category, index) => (
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
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="flex justify-center"
            >
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 w-full max-w-[180px]">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="relative mb-3 md:mb-4">
                    <motion.div
                      className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-3 md:border-4 border-[rgb(255,200,0)] group-hover:border-[rgb(14,71,171)] transition-colors shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src =
                            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                        }}
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-[rgb(14,71,171)] transition-colors leading-tight">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.8 },
            },
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
