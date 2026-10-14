"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Star,
  Plus,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight,
  SlidersHorizontal,
  Mail,
  Award,
  Gift,
  Cookie,
  Flame,
  Package,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CookieItem {
  id: string;
  badge?: string;
  category: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  price: number;
  isEggless: boolean;
  image: string;
}

const cookiesData: CookieItem[] = [
  {
    id: "1",
    badge: "DAWN BESTSELLER",
    category: "CHOCOLATE CHIP",
    title: "Classic Chocolate Chip",
    description: "Golden browned butter cookie loaded with Valrhona 70% dark chocolate chunks.",
    rating: 4.9,
    reviewsCount: 210,
    price: 220,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    badge: "CHEF'S PICK",
    category: "DOUBLE CHOCOLATE",
    title: "Double Chocolate Sea Salt",
    description: "Rich French cocoa dough folded with dark chocolate chips & flaky Maldon sea salt.",
    rating: 4.9,
    reviewsCount: 195,
    price: 240,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    badge: "SIGNATURE",
    category: "BUTTER COOKIES",
    title: "Butter Shortbread",
    description: "Melt-in-mouth Normandy AOP butter shortbread dusted with Bourbon vanilla sugar.",
    rating: 4.8,
    reviewsCount: 140,
    price: 190,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    badge: "LIMITED DROP",
    category: "NUTTY COOKIES",
    title: "White Chocolate Pistachio",
    description: "Roasted Iranian pistachios and creamy white chocolate chunks in buttery dough.",
    rating: 5.0,
    reviewsCount: 180,
    price: 280,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    badge: "PATRON FAVORITE",
    category: "NUTTY COOKIES",
    title: "Pistachio Matcha Cookie",
    description: "Japanese Uji matcha dough studded with toasted whole pistachios & white choc.",
    rating: 4.9,
    reviewsCount: 115,
    price: 260,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "6",
    badge: "BATTER & CRUNCH",
    category: "BUTTER COOKIES",
    title: "Salted Caramel Shortbread",
    description: "Crisp butter shortbread drizzled with house caramel & sea salt flakes.",
    rating: 4.8,
    reviewsCount: 92,
    price: 210,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "7",
    category: "HEALTHY CRUNCH",
    title: "Oatmeal Cranberry Cookie",
    description: "Rolled whole oats, tart dried cranberries, cinnamon, and organic brown sugar.",
    rating: 4.7,
    reviewsCount: 88,
    price: 180,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "8",
    badge: "DECADENT",
    category: "DOUBLE CHOCOLATE",
    title: "Triple Chocolate Fudge",
    description: "Dark, milk, and white chocolate chunks in a molten-centered dark cocoa dough.",
    rating: 4.9,
    reviewsCount: 230,
    price: 250,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "9",
    category: "FILLED COOKIES",
    title: "Hazelnut Stuffed Cookie",
    description: "Warm chocolate chip cookie with a molten center of Piedmont hazelnut praline.",
    rating: 4.9,
    reviewsCount: 165,
    price: 270,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "10",
    badge: "GIFTING BOX",
    category: "ASSORTED BOX",
    title: "Gifting Assorted Box (12 Pcs)",
    description: "Curated collection of 12 signature cookies packaged in a keepsake atelier box.",
    rating: 5.0,
    reviewsCount: 310,
    price: 1450,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = [
  { name: "ALL COOKIES", count: 10 },
  { name: "CHOCOLATE CHIP", count: 3 },
  { name: "DOUBLE CHOCOLATE", count: 2 },
  { name: "BUTTER COOKIES", count: 2 },
  { name: "NUTTY COOKIES", count: 2 },
  { name: "FILLED COOKIES", count: 1 },
];

export default function CookiesPageContent() {
  const [activeTab, setActiveTab] = useState("ALL COOKIES");
  const [onlyVeg, setOnlyVeg] = useState(false);
  const [underPrice, setUnderPrice] = useState(false);
  const [giftReady, setGiftReady] = useState(false);
  const [sortBy, setSortBy] = useState("Recommended");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);

  // GSAP High-Level ScrollAnimations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Card Parallax
      if (heroCardRef.current) {
        gsap.to(heroCardRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: heroCardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Stagger Reveal for Sections
      const revealElements = gsap.utils.toArray(".gsap-reveal") as HTMLElement[];
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCookies = cookiesData.filter((item) => {
    const matchesCategory =
      activeTab === "ALL COOKIES" ||
      item.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      (activeTab === "CHOCOLATE CHIP" && item.category === "CHOCOLATE CHIP") ||
      (activeTab === "DOUBLE CHOCOLATE" && item.category === "DOUBLE CHOCOLATE") ||
      (activeTab === "BUTTER COOKIES" && item.category === "BUTTER COOKIES") ||
      (activeTab === "NUTTY COOKIES" && item.category === "NUTTY COOKIES") ||
      (activeTab === "FILLED COOKIES" && item.category === "FILLED COOKIES");

    const matchesVeg = !onlyVeg || item.isEggless;
    const matchesPrice = !underPrice || item.price <= 250;
    const matchesGift = !giftReady || item.price > 500 || item.badge?.includes("GIFT");

    return matchesCategory && matchesVeg && matchesPrice && matchesGift;
  });

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#FAF5F0] text-[#3D261B] min-h-screen font-sans select-none overflow-hidden"
    >
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-[11px] font-medium text-[#705342]">
          <Link href="/" className="hover:text-[#3D261B] transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <Link href="/shop" className="hover:text-[#3D261B] transition-colors">SHOP</Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <span className="text-[#3D261B] font-semibold uppercase">COOKIES</span>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/60 border border-[#3D261B]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FAF5F0] border border-[#3D261B]/15 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8A612A]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span>SMALL BATCH, BIG COMFORT • BAKED FRESH DAILY</span>
            </motion.div>

            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#3D261B] italic leading-tight">
                Savor the Sweet <br />
                <span className="not-italic font-normal">Comfort</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#705342] max-w-xl leading-relaxed">
                Thin, buttery shortbread with crispy edges, soft-center, dark single-origin chocolate, and irresistible textures. Every bite brings a little moment of pure, honest happiness.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#3D261B] text-[#FAF5F0] hover:bg-[#2A170F] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                EXPLORE COOKIES →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white border border-[#3D261B]/20 text-[#3D261B] hover:bg-[#FAF5F0] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
              >
                GIFTS &amp; ASSORTED
              </motion.button>
            </div>

            <div className="pt-6 border-t border-[#3D261B]/10 grid grid-cols-3 gap-4">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3D261B]">100%</span>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">PURE NORMANDY BUTTER</p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3D261B]">VALRHONA</span>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">SINGLE-ORIGIN CHOCOLATE</p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3D261B]">24 HOURS</span>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">SLOW CHILL REST</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl">
            <div ref={heroCardRef} className="relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-[#EFE8E1] border border-[#3D261B]/10 shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop"
                alt="Artisanal Cookies"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3D261B]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border border-white/20">
                      WARM &amp; GOOEY CENTER
                    </span>
                    <p className="text-xs text-white/90 font-medium mt-1">Molten Dark Chocolate &amp; Sea Salt</p>
                  </div>
                  <span className="bg-[#8A612A] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">
                    PULLED AT 04:30 AM
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION HEADER */}
      <section className="text-center py-8 px-4 max-w-2xl mx-auto space-y-2">
        <div className="flex items-center justify-center gap-2 text-[#8A612A]">
          <span className="h-px w-8 bg-[#8A612A]/40" />
          <Cookie className="w-3.5 h-3.5" />
          <span className="h-px w-8 bg-[#8A612A]/40" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-[#3D261B]">A Cookie for Every Craving</h2>
        <p className="text-xs text-[#705342]">
          From classic butter favorites to rich chocolate creations, explore cookies crafted for slow mornings, thoughtful gifts, and everyday indulgence.
        </p>
      </section>

      {/* 2. CATEGORY TABS & FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`text-xs font-bold px-4 py-2 rounded-full border transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#3D261B] text-[#FAF5F0] border-[#3D261B] shadow-2xs"
                    : "bg-white text-[#3D261B] border-[#3D261B]/15 hover:border-[#3D261B]/40"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 border border-[#3D261B]/10 p-3.5 rounded-2xl shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#3D261B]">
            <span className="font-bold text-[#8A612A] uppercase tracking-wider text-[11px]">OUR COOKIES</span>
            <span className="text-[#705342]">Showing {filteredCookies.length} Handcrafted Bakes</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOnlyVeg(!onlyVeg)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-2 cursor-pointer ${
                onlyVeg
                  ? "bg-emerald-800 text-white border-emerald-800"
                  : "bg-white text-[#3D261B] border-[#3D261B]/15 hover:border-[#3D261B]/30"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${onlyVeg ? "bg-white" : "bg-emerald-600"}`} />
              <span>100% Eggless</span>
            </button>

            <button
              onClick={() => setUnderPrice(!underPrice)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                underPrice
                  ? "bg-[#8A612A] text-white border-[#8A612A]"
                  : "bg-white text-[#3D261B] border-[#3D261B]/15 hover:border-[#3D261B]/30"
              }`}
            >
              Under ₹250
            </button>

            <button
              onClick={() => setGiftReady(!giftReady)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                giftReady
                  ? "bg-[#3D261B] text-white border-[#3D261B]"
                  : "bg-white text-[#3D261B] border-[#3D261B]/15 hover:border-[#3D261B]/30"
              }`}
            >
              Gift Ready
            </button>

            <div className="flex items-center gap-1.5 bg-white border border-[#3D261B]/15 px-3 py-1.5 rounded-full text-xs font-semibold text-[#3D261B]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8A612A]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="Recommended">Sort: Recommended</option>
                <option value="PriceLow">Price: Low to High</option>
                <option value="PriceHigh">Price: High to Low</option>
                <option value="Rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

      </section>

      {/* 3. PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + onlyVeg + underPrice + giftReady}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredCookies.map((item) => {
              const isWishlisted = wishlist.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-[#3D261B]/10 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div className="relative aspect-4/3 bg-[#EFE8E1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#3D261B] text-[#FAF5F0] text-[9px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-2xs">
                        {item.badge}
                      </span>
                    )}

                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-[#3D261B]/10 flex items-center justify-center text-[#3D261B] hover:bg-white shadow-2xs transition-all cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-rose-700 text-rose-700" : "stroke-[1.8]"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-bold text-[#8A612A] uppercase tracking-wider">
                        <span>{item.category}</span>
                        <div className="flex items-center gap-1 text-[#3D261B]">
                          <Star className="w-3 h-3 fill-[#8A612A] text-[#8A612A]" />
                          <span>{item.rating} ({item.reviewsCount})</span>
                        </div>
                      </div>

                      <h3 className="font-serif font-bold text-base text-[#3D261B] group-hover:text-[#8A612A] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#705342] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#3D261B]/10 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-semibold text-[#705342] uppercase tracking-wider block">PER PACK</span>
                        <span className="font-serif font-bold text-lg text-[#3D261B]">
                          ₹{item.price}
                        </span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#3D261B] text-[#FAF5F0] hover:bg-[#2A170F] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. CURATED MOMENTS CARDS */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">CURATED MOMENTS</span>
            <h2 className="font-serif text-3xl font-bold text-[#3D261B]">Made for Various Moments of Baking</h2>
            <p className="text-xs text-[#705342]">
              Whether paired with your morning pour-over or sent as a thoughtful gift, we create the city's finest bakes to elevate the pleasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div whileHover={{ y: -5 }} className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-3xl p-6 space-y-4 shadow-xs">
              <span className="w-10 h-10 rounded-2xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Cookie className="w-5 h-5" />
              </span>
              <h3 className="font-serif font-bold text-lg text-[#3D261B]">Chocolate Lovers</h3>
              <p className="text-xs text-[#705342] leading-relaxed">
                Deep single-origin chocolate chunks, molten centers, and dark cocoa biscuits. Organic sea salt subtly lifts the rich cocoa notes (gently warm for 15-20 seconds).
              </p>
              <button className="text-xs font-bold uppercase tracking-wider text-[#8A612A] flex items-center gap-1 hover:underline cursor-pointer">
                <span>EXPLORE CHOCOLATE BAKES →</span>
              </button>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-3xl p-6 space-y-4 shadow-xs">
              <span className="w-10 h-10 rounded-2xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Award className="w-5 h-5" />
              </span>
              <h3 className="font-serif font-bold text-lg text-[#3D261B]">Classic Comforts</h3>
              <p className="text-xs text-[#705342] leading-relaxed">
                Pure Normandy AOP butter sables, crunchy shortbread biscuits, and country-farm style recipes that bring back happy memories of warm kitchens.
              </p>
              <button className="text-xs font-bold uppercase tracking-wider text-[#8A612A] flex items-center gap-1 hover:underline cursor-pointer">
                <span>EXPLORE BUTTERY SABLÉS →</span>
              </button>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-3xl p-6 space-y-4 shadow-xs">
              <span className="w-10 h-10 rounded-2xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Gift className="w-5 h-5" />
              </span>
              <h3 className="font-serif font-bold text-lg text-[#3D261B]">Thoughtful Gifting</h3>
              <p className="text-xs text-[#705342] leading-relaxed">
                Gold-embossed keepsake tins, handcrafted ribbons, and custom note ribbon ribbons for personal or corporate gifting across Bangalore.
              </p>
              <button className="text-xs font-bold uppercase tracking-wider text-[#8A612A] flex items-center gap-1 hover:underline cursor-pointer">
                <span>CONFIGURATOR HAMPERS →</span>
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. ARTISANAL GIFTING BOX BANNER */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          
          <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-[#3D261B]/10">
            <Image
              src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop"
              alt="Gifting Box"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#3D261B]">
              ✓ Includes Daily Tasting Spoon &amp; Tool
            </span>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">DELUXE GIFTING EXPERIENCE</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D261B]">A Box Full of Pure Happiness</h3>
            <p className="text-xs sm:text-sm text-[#705342] leading-relaxed">
              Created for celebrations, milestones, client appreciation, and intimate gatherings. Our signature 12-piece assortment brings together shortbread, gluten-free nut biscuits, dark cocoa cookies, salted caramels, and bespoke macarons.
            </p>

            <div className="space-y-2 pt-1 text-xs text-[#3D261B] font-semibold">
              <p className="flex items-center gap-2">✓ 12 Curated artisanal biscuits from 6 distinct flavor profiles</p>
              <p className="flex items-center gap-2">✓ Personalized handwritten custom ribbon notes &amp; 200gsm custom tag cards</p>
              <p className="flex items-center gap-2">✓ Insulated cold-chain courier presentation delivered 3-step protected</p>
            </div>

            <div className="pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#3D261B] text-[#FAF5F0] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-2"
              >
                <Gift className="w-4 h-4 text-[#C5A880]" />
                <span>CUSTOMISE YOUR GIFT BOX</span>
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ATELIER PRINCIPLES */}
      <section className="gsap-reveal bg-white/40 border-y border-[#3D261B]/10 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10 text-center">
          <div className="max-w-md mx-auto space-y-1">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">ATELIER PRINCIPLES</span>
            <h2 className="font-serif text-3xl font-bold text-[#3D261B]">Simple Ingredients, Honest Craft.</h2>
            <p className="text-xs text-[#705342]">
              We believe in honest, real baking without shortcut additives. Chewy, crunchy, buttery or dark—we do not compromise on consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Slow-Baked Golden</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                Extended cold-dough resting allows enzymes to break down starches, creating deep caramelization notes and a chewy interior with crisp edges.
              </p>
            </div>

            <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Pure Normandy AOP Butter</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                Raw, unchurned butter with 84% fat guarantees unyielding golden flakiness, fragrant hazelnut aroma, and clean mouthfeel on the palate.
              </p>
            </div>

            <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Valrhona Chocolate</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                Pure single-origin cocoa beans (70% Guanaja &amp; Caramelized Milk Chocolate) folded generously so that every bite delivers a molten cocoa pool.
              </p>
            </div>

            <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Fresh-Sealed Boxes</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                Cookies are packed into custom airtight sanctuary boxes directly after cooling to retain oven-fresh crispness for days.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. COMMUNITY VOICES */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-8">
        <div className="text-center max-w-md mx-auto space-y-1">
          <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">COMMUNITY VOICES</span>
          <h2 className="font-serif text-3xl font-bold text-[#3D261B]">Sweet Words from Cookie Lovers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="flex gap-1 text-[#8A612A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#8A612A]" />
                ))}
              </div>
              <p className="text-xs text-[#705342] italic leading-relaxed">
                "The Double Dark Chocolate cookie warmed for just 15 seconds is pure heaven. A molten center, crisp edge, and incredible dark chocolate quality."
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-[#3D261B]">Ananya K.</p>
              <p className="text-[10px] text-[#705342]">Verified Patron • Indiranagar Atelier</p>
            </div>
          </div>

          <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="flex gap-1 text-[#8A612A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#8A612A]" />
                ))}
              </div>
              <p className="text-xs text-[#705342] italic leading-relaxed">
                "Sent the Assorted Cookie Hamper as a Diwali thank-you for our advisory board. The presentation box and custom note ribbon felt like a luxury Parisian maison. Exceptional presentation!"
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-[#3D261B]">Vikramaditya S.</p>
              <p className="text-[10px] text-[#705342]">Corporate Patron • MG Road</p>
            </div>
          </div>

          <div className="bg-white border border-[#3D261B]/10 rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="flex gap-1 text-[#8A612A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#8A612A]" />
                ))}
              </div>
              <p className="text-xs text-[#705342] italic leading-relaxed">
                "The butter shortbread biscuit is sheer perfection. You can actually taste the real Normandy butter and vanillas specks, nothing heavy or sickly. A daily staple with morning coffee."
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-[#3D261B]">Meera R.</p>
              <p className="text-[10px] text-[#705342]">Coffee Club • Whitefield</p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. NEWSLETTER SUBSCRIPTION */}
      <section className="gsap-reveal max-w-4xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-white border border-[#3D261B]/10 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-[#FAF5F0] border border-[#3D261B]/10 flex items-center justify-center mx-auto text-[#8A612A]">
            <Mail className="w-4 h-4" />
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#3D261B]">Sweet Updates Straight to Your Inbox</h3>
            <p className="text-xs text-[#705342]">
              Be the first to know about seasonal cookie drops, limited small-batch bakes, and exclusive member tasting invitations.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (emailInput) setSubscribed(true);
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full bg-[#FAF5F0] border border-[#3D261B]/15 rounded-full px-5 py-3 text-xs text-[#3D261B] focus:outline-none focus:border-[#3D261B]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#3E2317] text-[#FAF5F0] hover:bg-[#2A170F] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>

          {subscribed && (
            <p className="text-xs font-bold text-emerald-800">
              ✓ Thank you for subscribing to Dakingo cookie updates!
            </p>
          )}
        </div>
      </section>

    </div>
  );
}