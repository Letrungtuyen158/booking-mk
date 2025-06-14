"use client";

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
import FinalHeroSection from "@/components/FinalHeroSection";
import Footer from "@/components/Footer";
import TravelGallery from "@/components/TravelGallery";

const Index = () => {
  return (
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
  );
};

export default Index;
