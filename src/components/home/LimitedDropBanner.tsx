"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Award, Leaf, ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";

interface DropSlide {
  id: string;
  runBadge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  aroma: { label: string; value: string };
  richness: { label: string; value: string };
  meltProfile: { label: string; value: string };
  primaryCtaText: string;
  primaryCtaLink: string;
  launchOffer: string;
  productBadge: string;
  productDispatch: string;
  productTitle: string;
  productPrice: string;
  productImage: string;
}

const dropSlides: DropSlide[] = [
  {
    id: "01",
    runBadge: "LIMITED ATELIER RUN • 200 BATCHES ONLY",
    titleLine1: "Monsoon Orchard &",
    titleLine2: "Spiced Caramel",
    description:
      "A warm sensory celebration of roasted Himalayan apples, smoked Malabar cinnamon, folded salted caramel, and unhurried brioche babka weaves.",
    aroma: { label: "AROMA", value: "Wild Cinnamon" },
    richness: { label: "RICHNESS", value: "Deep Caramel" },
    meltProfile: { label: "MELT PROFILE", value: "Warm Brioche" },
    primaryCtaText: "RESERVE LIMITED EDITION TASTING BOX",
    primaryCtaLink: "/reserve/monsoon-orchard",
    launchOffer: "Special Launch Offer: ₹1,850 complete flight",
    productBadge: "EARLY ACCESS",
    productDispatch: "Dispatches This Friday",
    productTitle: "Spiced Caramel Tarte Tatin",
    productPrice: "₹890",
    productImage: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    runBadge: "EXCLUSIVE RESERVE • 150 BATCHES ONLY",
    titleLine1: "Bourbon Vanilla &",
    titleLine2: "Smoked Hazelnut",
    description:
      "Hand-pollinated Madagascar vanilla bean infusions paired with Piedmont roasted hazelnuts, folded into a 72-hour fermented sourdough brioche base.",
    aroma: { label: "AROMA", value: "Madagascar Bean" },
    richness: { label: "RICHNESS", value: "Roasted Hazelnut" },
    meltProfile: { label: "MELT PROFILE", value: "Silky Ganache" },
    primaryCtaText: "RESERVE RESERVE FLIGHT",
    primaryCtaLink: "/reserve/bourbon-vanilla",
    launchOffer: "Special Launch Offer: ₹2,100 complete flight",
    productBadge: "CHEF'S CHOICE",
    productDispatch: "Dispatches Next Tuesday",
    productTitle: "Hazelnut Praline Entremet",
    productPrice: "₹1,150",
    productImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    runBadge: "ATELIER SIGNATURE • 100 BATCHES ONLY",
    titleLine1: "Valrhona Ruby &",
    titleLine2: "Hibiscus Blossom",
    description:
      "Naturally pink ruby cocoa bean notes fused with wild organic hibiscus petals, tart red berry compote, and crisp sable Breton crust layers.",
    aroma: { label: "AROMA", value: "Floral Hibiscus" },
    richness: { label: "RICHNESS", value: "Ruby Cocoa" },
    meltProfile: { label: "MELT PROFILE", value: "Crisp Sable" },
    primaryCtaText: "RESERVE RUBY COLLECTION",
    primaryCtaLink: "/reserve/ruby-hibiscus",
    launchOffer: "Special Launch Offer: ₹1,950 complete flight",
    productBadge: "LIMITED EDITION",
    productDispatch: "Dispatches This Thursday",
    productTitle: "Ruby Blossom Petit Gateau",
    productPrice: "₹950",
    productImage: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
  },
];

export default function LimitedDropBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentSlide = dropSlides[currentIndex];

  // GSAP Animation triggered whenever currentIndex changes
  useEffect(() => {
    if (contentRef.current && cardRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.96, x: 20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dropSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dropSlides.length) % dropSlides.length);
  };

  return (
    <section className="bg-[#FAF5F0] py-16 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Dark Luxury Banner Container */}
        <div className="relative bg-[#321E16] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(50,30,22,0.25)] border border-[#4E3227]">
          
          {/* Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9A734C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Carousel Slider Controls (Top Right Header) */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 flex items-center gap-3 bg-[#24150F]/80 backdrop-blur-md border border-[#4E3227] px-3 py-1.5 rounded-full">
            <span className="text-xs font-mono text-[#C5A880] tracking-widest mr-1">
              <strong className="text-[#FDF8F3]">{(currentIndex + 1).toString().padStart(2, "0")}</strong> / 0{dropSlides.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-7 h-7 rounded-full bg-[#321E16] hover:bg-[#9A734C] text-[#EFE5DA] flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-7 h-7 rounded-full bg-[#321E16] hover:bg-[#9A734C] text-[#EFE5DA] flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-6 lg:pt-0">
            
            {/* Left Side: Animated Details & CTA (Col span 7) */}
            <div ref={contentRef} className="lg:col-span-7 space-y-6">
              
              {/* Top Limited Run Pill Badge[cite: 4] */}
              <div className="inline-flex items-center gap-2 bg-[#432A20] border border-[#6B4738] px-3.5 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#EFE5DA]">
                  {currentSlide.runBadge}
                </span>
              </div>

              {/* Serif Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDF8F3] tracking-tight leading-[1.12]">
                {currentSlide.titleLine1} <br />
                <span className="font-medium text-[#F4EBE1]">{currentSlide.titleLine2}</span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#D8C7B8] font-normal leading-relaxed max-w-xl">
                {currentSlide.description}
              </p>

              {/* 3 Profile Feature Cards[cite: 4] */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {/* Card 1: Aroma */}
                <div className="bg-[#24150F]/80 backdrop-blur-md border border-[#432A20] rounded-xl p-3.5 space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                    {currentSlide.aroma.label}
                  </p>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#FDF8F3] tracking-wide">
                    {currentSlide.aroma.value}
                  </p>
                  <div className="w-8 h-[2px] bg-[#9A734C] mt-2 rounded-full" />
                </div>

                {/* Card 2: Richness */}
                <div className="bg-[#24150F]/80 backdrop-blur-md border border-[#432A20] rounded-xl p-3.5 space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                    {currentSlide.richness.label}
                  </p>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#FDF8F3] tracking-wide">
                    {currentSlide.richness.value}
                  </p>
                  <div className="w-8 h-[2px] bg-[#9A734C] mt-2 rounded-full" />
                </div>

                {/* Card 3: Melt Profile */}
                <div className="bg-[#24150F]/80 backdrop-blur-md border border-[#432A20] rounded-xl p-3.5 space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                    {currentSlide.meltProfile.label}
                  </p>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#FDF8F3] tracking-wide">
                    {currentSlide.meltProfile.value}
                  </p>
                  <div className="w-8 h-[2px] bg-[#9A734C] mt-2 rounded-full" />
                </div>
              </div>

              {/* CTA Button & Sub-offer */}
              <div className="pt-2 space-y-2.5">
                <Link
                  href={currentSlide.primaryCtaLink}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#9A734C] hover:bg-[#86623F] text-[#FDF8F3] text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#120C09]/40 hover:scale-[1.01] w-full sm:w-auto"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{currentSlide.primaryCtaText}</span>
                </Link>

                <p className="text-[11px] text-[#C5A880]/80 tracking-wide font-normal">
                  {currentSlide.launchOffer}
                </p>
              </div>

            </div>

            {/* Right Side: Animated Floating Product Showcase Card (Col span 5)[cite: 4] */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                ref={cardRef}
                className="relative w-full max-w-[360px] bg-white rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                
                {/* Early Access Top Badge[cite: 4] */}
                <div className="absolute -top-3.5 right-4 z-20 bg-white border border-[#EFE5DA] shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#9A734C]" />
                  <div className="text-[10px] leading-tight">
                    <p className="font-bold text-[#321E16] uppercase tracking-wider">{currentSlide.productBadge}</p>
                    <p className="text-[#705342]">{currentSlide.productDispatch}</p>
                  </div>
                </div>

                {/* Product Image Box */}
                <div className="relative h-[220px] w-full rounded-xl overflow-hidden bg-[#EFE8E1]">
                  <Image
                    src={currentSlide.productImage}
                    alt={currentSlide.productTitle}
                    fill
                    sizes="360px"
                    className="object-cover object-center"
                  />
                  {/* Brand Watermark inside image */}
                  <div className="absolute top-3 left-3 bg-[#321E16]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-bold text-[#FAF5F0] tracking-[0.2em] uppercase">
                    DAKINGO
                  </div>
                </div>

                {/* Card Bottom Info */}
                <div className="pt-4 px-1 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9A734C] mb-0.5">
                      LIMITED DROP #{currentSlide.id}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-[#321E16] tracking-tight">
                      {currentSlide.productTitle}
                    </h3>
                  </div>

                  <p className="font-serif text-xl font-bold text-[#321E16]">
                    {currentSlide.productPrice}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}