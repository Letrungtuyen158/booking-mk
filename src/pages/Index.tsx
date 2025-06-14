"use client";

import { TopProvider } from "@/contexts/TopContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchFilters from "@/components/SearchFilters";
import TourCategories from "@/components/TourCategories";
import TourPackages from "@/components/TourPackages";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import TravelGallery from "@/components/TravelGallery";
import { Providers } from "@/app/providers";

interface Props {
  initialProducts: any;
  initialCategories: any;
  initialBlogs: any;
  initialPartners: any;
}

const Index = ({
  initialProducts,
  initialCategories,
  initialBlogs,
  initialPartners,
}: Props) => {
  return (
    <Providers>
      <TopProvider
        initialProducts={initialProducts}
        initialCategories={initialCategories}
        initialBlogs={initialBlogs}
        initialPartners={initialPartners}
      >
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            <SearchFilters />
            <TourCategories />
            <TourPackages />
            <FeaturesSection />
            <TeamSection />
            <TestimonialsSection />
            <TravelGallery />
            <PartnersSection />
            <PhotoGallerySection />
            <FAQSection />
          </main>
          <Footer />
        </div>
      </TopProvider>
    </Providers>
  );
};

export default Index;
