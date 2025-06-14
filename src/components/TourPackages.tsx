"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  MapPin,
  Users,
  Calendar,
  Tag,
  CircleCheck,
} from "lucide-react";
import Link from "next/link";
import { useScrollAnimation, fadeInUp } from "@/hooks/use-scroll-animation";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { DashedSeparator } from "./ui/dashed-separator";
import { DEFAULT_IMAGE, DEFAULT_IMAGE_ERROR } from "@/utils/constants";
import { formatPrice } from "@/utils/api";
import { useTop } from "@/contexts/TopContext";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/api";
import { BlogListRequests } from "@/services/blog.service";
import { ProductListResponse } from "@/services/product.service";

const TourPackages = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [visibleTours, setVisibleTours] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const { productsList } = useTop();

  const { limit, page, list, total, totalPages } = productsList;

  const [params, setParams] = useState<BlogListRequests>({});

  const { data: productsListClient, isLoading: isClientLoading } = useProducts(
    params,
    {
      enabled: !!params.page,
    },
  );

  // Combine server and client data
  const allTours: ProductListResponse = {
    ...productsList,
    ...productsListClient,
    list: [...list, ...(productsListClient?.list || [])],
  };

  // Remove duplicates based on id
  const uniqueTours = allTours.list;

  const handleLoadMore = async () => {
    setParams({
      ...params,
      page: page + 1,
      limit,
    });
  };

  const hasMoreTours = allTours.page < allTours.totalPages;

  return (
    <section className="py-8 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-xxs font-semibold text-tour mb-2">
              {allTours.total} Tour Packages Found
            </h2>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(14,71,171)]">
              <option>Sort by Price</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Duration</option>
            </select>
          </div>
        </motion.div>

        {/* Tours Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {uniqueTours.slice(0, visibleTours).map((tour, index) => (
            <motion.div
              key={tour.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image ?? DEFAULT_IMAGE}
                  alt={tour.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = DEFAULT_IMAGE_ERROR;
                  }}
                />
                <div className="flex gap-1 absolute top-4 left-4 bg-[rgb(255,255,255,0.64)] text-tour px-[5px] py-[3px] rounded-sm text-xxs font-semibold shadow-lg">
                  <img src="/icons/location.svg" alt="location" />
                  <span className="truncate">
                    {tour.location ?? "Default location"}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="gap-[6px] flex items-center text-sm text-gray-500 mb-2">
                  <Tag className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1 pt-[2px] px-[6px] text-tour text-[8px] bg-[#F2F2F2] rounded-sm">
                    Top rated
                  </span>
                  <span className="line-clamp-1 pt-[2px] px-[6px] text-tour text-[8px] bg-[#F2F2F2] rounded-sm">
                    Booked 10 times yesterday
                  </span>
                  {/* <span className="truncate">{tour.duration}</span> */}
                </div>

                <h3 className="text-[12px] font-bold text-gray-900  group-hover:text-[#FFD600] transition-colors line-clamp-2">
                  {tour.name}
                </h3>

                <DashedSeparator className="my-3" />

                <div className="grid grid-cols-2 gap-[6px]">
                  {tour.overviews.map((overview, index) => (
                    <div
                      className="flex items-baseline gap-1 text-[#8E8E8E]"
                      key={index}
                    >
                      <CircleCheck className="size-[9.75px]" />
                      <span className="text-[10px] ">{overview}</span>
                    </div>
                  ))}
                </div>

                <DashedSeparator className="my-3" />

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-bold text-[#0E47AB] group-hover:text-[#FFD600]">
                        {formatPrice(Number(tour.price), 0)}
                      </span>
                      <span className="text-xs text-[#8E8E8E] font-medium">
                        per person
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/tour/${tour.id}`}
                    className="bg-[#FFD600] group-hover:bg-[#0E47AB] text-white font-bold text-xxs leading-tight rounded-sm px-2 py-2 transition-colors"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMoreTours && (
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <DashedSeparator className="mt-12">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="mx-6 text-sm bg-[rgb(14,71,171)] text-white px-4 py-2 rounded-md font-medium hover:bg-[rgb(14,71,171)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Loading..." : "Show more"}
              </button>
            </DashedSeparator>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TourPackages;
