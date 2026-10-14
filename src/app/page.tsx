"use client";
import CategorySlider from "../components/home/CategorySlider";
import CoutureCakeStudio from "../components/home/CoutureCakeStudio";
import FeaturedProducts from "../components/home/FeatureProducts";
import HeritageEthos from "../components/home/HeritageEthos";
import HeroCarousel from "../components/home/HeroCarousel";
import InstagramGallery from "../components/home/InstagramGallery";
import LimitedDropBanner from "../components/home/LimitedDropBanner";
import NewsletterSection from "../components/home/NewsletterSection";
import Testimonials from "../components/home/Testimonials";
import ValueProps from "../components/home/ValueProps";
import { useState } from "react";
import Dakingo3DLoader from "@/components/Dakingo3DLoader";

export default function HomePage() {
   const [loading, setLoading] = useState(true);
  return (
    <>
     {loading && (
        <Dakingo3DLoader onLoadingComplete={() => setLoading(false)} />
      )}
    <main>
      <HeroCarousel />
      <ValueProps />
      <CategorySlider />
      <FeaturedProducts/>
      <LimitedDropBanner />
      <CoutureCakeStudio />
      <HeritageEthos />
      <Testimonials/>
      <InstagramGallery/>
      <NewsletterSection/>
    </main>
    </>
  );
}





