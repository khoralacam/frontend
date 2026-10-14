"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, ArrowLeft, Pause, Play } from "lucide-react";

interface SlideData {
  id: string;
  categoryTag: string;
  badge: string;
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: "01",
    categoryTag: "01 CAKES",
    badge: "DAWN BAKED FRESH TODAY • SMALL BATCH 70% SINGLE ESTATE",
    subtitle: "Couture Dark Truffles & Entremets",
    titleLine1: "Sculpted Dark Ganache.",
    titleLine2: "Uncompromising Purity.",
    description:
      "Pure Valrhona and Callebaut single-origin dark cocoa, slow-fermented sponges, and glass-sheen mirror glazes crafted each morning at dawn.",
    primaryCtaText: "SHOP SIGNATURE CAKES",
    primaryCtaLink: "/cakes",
    secondaryCtaText: "VIEW TASTING NOTES",
    secondaryCtaLink: "/tasting-notes",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "02",
    categoryTag: "02 BAKES",
    badge: "FRESH LAMINATED TODAY • 96-HOUR FERMENTATION • SINGLE-FARM BUTTER",
    subtitle: "Hand-Laminated Golden Pastries",
    titleLine1: "Buttery Flakes.",
    titleLine2: "Morning Rituals Reimagined.",
    description:
      "House-cultured butter and stone-ground organic flour, hand-laminated over three days for the lightest, crispest croissants, baked to a deep amber hue.",
    primaryCtaText: "EXPLORE VIENNOISERIE COLLECTION",
    primaryCtaLink: "/pastries",
    secondaryCtaText: "DISCOVER MORNING PAIRING MENU",
    secondaryCtaLink: "/menu",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "03",
    categoryTag: "03 COUTURE",
    badge: "BESPOKE WEDDINGS & CELEBRATIONS • HAND-SCULPTED SUGAR ART",
    subtitle: "Artisanal Milestone Creations",
    titleLine1: "Bespoke Sculptures.",
    titleLine2: "Unforgettable Elegance.",
    description:
      "Custom multi-tiered masterpieces personalized with edible 24K gold leaf, delicate sugar florals, and rare Madagascar vanilla bean sponges.",
    primaryCtaText: "BOOK A PRIVATE TASTING",
    primaryCtaLink: "/custom-cakes",
    secondaryCtaText: "VIEW COUTURE GALLERY",
    secondaryCtaLink: "/gallery",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "04",
    categoryTag: "04 GIFTING",
    badge: "CURATED LUXURY HAMPERS • NATIONWIDE TEMPERATURE CONTROLLED SHIPPING",
    subtitle: "Exquisite Atelier Hampers",
    titleLine1: "Handcrafted Luxury.",
    titleLine2: "Sealed with Artisanal Passion.",
    description:
      "Selection of house-made macarons, single-estate dark truffles, and aromatic signature tea blends encased in our signature velvet-touch keepsake boxes.",
    primaryCtaText: "EXPLORE GIFT COLLECTIONS",
    primaryCtaLink: "/gifting",
    secondaryCtaText: "CORPORATE INQUIRIES",
    secondaryCtaLink: "/corporate",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentSlide = slides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  return (
    <section className="relative w-full h-[88vh] min-h-[640px] max-h-[920px] bg-[#120C09] text-[#FDF8F3] overflow-hidden select-none">
      {/* Background Image Carousel with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.titleLine1}
            fill
            priority
            className="object-cover object-center brightness-[0.68] contrast-[1.08]"
          />
          {/* Subtle Ambient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120C09]/90 via-[#120C09]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120C09] via-transparent to-[#120C09]/40" />
        </motion.div>
      </AnimatePresence>

      {/* Top Center Faded Brand Branding */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none opacity-40">
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-[#EFE5DA] uppercase">
          DAKINGO
        </h2>
        <p className="text-[9px] tracking-[0.35em] text-[#C5A880] uppercase mt-0.5">
          Luxury Artisan Bakery
        </p>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-center pb-24 pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl space-y-5"
          >
            {/* Top Glassmorphism Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2D1E18]/70 backdrop-blur-md border border-[#C5A880]/30 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#A37537] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#EFE5DA]">
                {currentSlide.badge}
              </span>
            </div>

            {/* Subtitle */}
            <p className="font-serif italic text-lg sm:text-xl text-[#C5A880] font-light tracking-wide">
              {currentSlide.subtitle}
            </p>

            {/* Main Luxury Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FDF8F3] tracking-tight leading-[1.1]">
              {currentSlide.titleLine1} <br />
              <span className="font-medium text-[#F8F1EA]">{currentSlide.titleLine2}</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#EFE5DA]/80 font-normal leading-relaxed max-w-xl">
              {currentSlide.description}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary Gold CTA */}
              <Link
                href={currentSlide.primaryCtaLink}
                className="inline-flex items-center gap-2.5 bg-[#A37537] hover:bg-[#8A612A] text-[#FDF8F3] text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3.5 rounded-md transition-all shadow-lg shadow-[#120C09]/40 hover:scale-[1.02]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{currentSlide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Glassmorphism CTA */}
              <Link
                href={currentSlide.secondaryCtaLink}
                className="inline-flex items-center gap-2 bg-[#2D1E18]/60 hover:bg-[#2D1E18]/90 text-[#EFE5DA] border border-[#EFE5DA]/20 text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3.5 rounded-md backdrop-blur-sm transition-all hover:border-[#C5A880]/50"
              >
                <span>{currentSlide.secondaryCtaText}</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Category Tabs & Controls */}
      <div className="absolute bottom-6 inset-x-0 z-20 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6">
        
        {/* Left: Category Navigation Tabs */}
        <div className="grid grid-cols-2 sm:flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {slides.map((slide, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative px-4 py-2.5 rounded-md text-left transition-all backdrop-blur-md ${
                  isActive
                    ? "bg-[#2D1E18]/80 border border-[#C5A880]/40 text-[#FDF8F3]"
                    : "bg-[#120C09]/40 hover:bg-[#2D1E18]/50 text-[#EFE5DA]/60 border border-transparent"
                }`}
              >
                <div className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span>{slide.categoryTag}</span>
                </div>

                {/* Animated Active Progress Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#A37537] rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Carousel Controls (Index Counter, Prev/Next, Play/Pause) */}
        <div className="flex items-center gap-3 bg-[#2D1E18]/80 backdrop-blur-md border border-[#C5A880]/30 px-4 py-2 rounded-full">
          {/* Index Display */}
          <span className="text-xs font-mono tracking-widest text-[#EFE5DA] mr-2">
            <strong className="text-[#C5A880] text-sm">{(currentIndex + 1).toString().padStart(2, "0")}</strong> / 04
          </span>

          <div className="h-4 w-[1px] bg-[#C5A880]/20" />

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-8 h-8 rounded-full bg-[#120C09]/60 hover:bg-[#A37537] text-[#EFE5DA] flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-8 h-8 rounded-full bg-[#120C09]/60 hover:bg-[#A37537] text-[#EFE5DA] flex items-center justify-center transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            className="w-8 h-8 rounded-full bg-[#120C09]/60 hover:bg-[#A37537] text-[#EFE5DA] flex items-center justify-center transition-colors ml-1"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}