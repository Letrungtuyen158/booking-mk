import { Shield, Calendar, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, fadeInUp } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Heart,
    title: "Mekong Tour",
    description: "Experience authentic local culture and traditions",
    position: "left",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "No Happy, Full Refund",
    description: "100% satisfaction guarantee on all tours",
    position: "left",
    color: "text-green-500",
  },
  {
    icon: Calendar,
    title: "Daily Departures",
    description: "Flexible scheduling with tours every day",
    position: "right",
    color: "text-blue-500",
  },
  {
    icon: Leaf,
    title: "Support Local, Travel Sustainably",
    description: "Eco-friendly tourism supporting local communities",
    position: "right",
    color: "text-green-600",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className=" py-4 md:py-8 bg-[oklch(0.985_0.002_247.839)]"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <img
            src="/images/home/Frame39.png"
            alt="Vietnam Map"
            className="w-full h-full object-contain text-[rgb(14,71,171)]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
