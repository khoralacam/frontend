"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
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
  Layers,
  Droplets,
  Flame,
  Image as ImageIcon,
} from "lucide-react";

interface PastryItem {
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

const pastriesData: PastryItem[] = [
  {
    id: "1",
    badge: "DAWN BESTSELLER",
    category: "CROISSANTS",
    title: "Classic Butter Croissant",
    description: "Golden, flaky, 72-layer Normandy AOP butter with honeycomb crumb structure.",
    rating: 4.9,
    reviewsCount: 240,
    price: 180,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    badge: "CHEF'S PICK",
    category: "CHOCOLATE PASTRIES",
    title: "Belgian Chocolate Éclair",
    description: "Delicate choux pastry filled with 70% Valrhona dark chocolate diplomat and mirror glaze.",
    rating: 4.9,
    reviewsCount: 182,
    price: 260,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    badge: "SEASONAL",
    category: "FRUIT & DANISH",
    title: "Fresh Strawberry Danish",
    description: "Flaky lamination with Mahabaleshwar strawberries & vanilla creme diplomat.",
    rating: 4.8,
    reviewsCount: 96,
    price: 290,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    category: "CHOUX PASTRIES",
    title: "Vanilla Cream Puff",
    description: "Crisp choux craquelin filled with silky Bourbon vanilla bean diplomat.",
    rating: 4.8,
    reviewsCount: 112,
    price: 195,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    badge: "PATRON FAVORITE",
    category: "CHOCOLATE & LAMINATION",
    title: "Chocolate Hazelnut Croissant",
    description: "Flaky twice-baked croissant with roasted Piedmont hazelnut praline.",
    rating: 4.9,
    reviewsCount: 164,
    price: 280,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "6",
    badge: "SIGNATURE",
    category: "PUFF PASTRIES",
    title: "Classic Mille-Feuille",
    description: "Three crisp caramelized puff pastry layers with Tahitian vanilla bean cream.",
    rating: 5.0,
    reviewsCount: 88,
    price: 340,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "7",
    category: "FRUIT & DANISH",
    title: "Blueberry Danish",
    description: "Golden laminated pastry with fresh blueberry compote & cream cheese.",
    rating: 4.7,
    reviewsCount: 118,
    price: 290,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "8",
    badge: "CLASSIC",
    category: "CROISSANTS",
    title: "Almond Croissant",
    description: "Twice-baked butter croissant saturated with orange blossom syrup and frangipane.",
    rating: 4.9,
    reviewsCount: 210,
    price: 240,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "9",
    category: "PUFF PASTRIES",
    title: "Chocolate Palmier",
    description: "Caramelized puff pastry hearts with dark cocoa butter crunch.",
    rating: 4.8,
    reviewsCount: 65,
    price: 160,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "10",
    badge: "LIMITED BATCH",
    category: "SEASONAL SPECIALS",
    title: "Seasonal Fruit Tartlet",
    description: "Almond sablé crust with elderflower pastry cream & glazed seasonal berries.",
    rating: 4.9,
    reviewsCount: 82,
    price: 320,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop",
  },
];

const subCategories = [
  { name: "All Pastries", count: 10 },
  { name: "Croissants", count: 3 },
  { name: "Chocolate Pastries", count: 2 },
  { name: "Fruit Pastries", count: 2 },
  { name: "Danish Pastries", count: 2 },
  { name: "Éclairs & Cream Puffs", count: 2 },
  { name: "Puff Pastries", count: 2 },
  { name: "Seasonal Specials", count: 1 },
];

export default function PastriesPageContent() {
  const [activeTab, setActiveTab] = useState("All Pastries");
  const [onlyVeg, setOnlyVeg] = useState(false);
  const [underPrice, setUnderPrice] = useState(false);
  const [sortBy, setSortBy] = useState("Recommended");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animations
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".gsap-fade-up"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );
    }
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredPastries = pastriesData.filter((item) => {
    const matchesCategory =
      activeTab === "All Pastries" ||
      item.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      (activeTab === "Croissants" && item.category === "CROISSANTS") ||
      (activeTab === "Chocolate Pastries" && item.category.includes("CHOCOLATE")) ||
      (activeTab === "Fruit Pastries" && item.category.includes("FRUIT")) ||
      (activeTab === "Danish Pastries" && item.category.includes("DANISH")) ||
      (activeTab === "Éclairs & Cream Puffs" && (item.category.includes("CHOUX") || item.title.includes("Éclair"))) ||
      (activeTab === "Puff Pastries" && item.category.includes("PUFF")) ||
      (activeTab === "Seasonal Specials" && item.category.includes("SEASONAL"));

    const matchesVeg = !onlyVeg || item.isEggless;
    const matchesPrice = !underPrice || item.price <= 250;

    return matchesCategory && matchesVeg && matchesPrice;
  });

  return (
    <div className="w-full bg-[#FAF5F0] text-[#3D261B] min-h-screen font-sans select-none">
      
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-[11px] font-medium text-[#705342]">
          <Link href="/" className="hover:text-[#3D261B] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <Link href="/shop" className="hover:text-[#3D261B] transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <span className="text-[#3D261B] font-semibold">Pastries</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/60 border border-[#3D261B]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="gsap-fade-up inline-flex items-center gap-2 bg-[#FAF5F0] border border-[#3D261B]/15 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8A612A]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>FRESHLY CRAFTED DAILY</span>
              <span>•</span>
              <span>04:30 AM DAWN BAKE</span>
            </div>

            <div className="gsap-fade-up space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#3D261B] italic leading-tight">
                Little Layers of <br />
                <span className="not-italic font-normal">Happiness</span>
              </h1>
              <p className="text-sm sm:text-base text-[#705342] max-w-xl leading-relaxed">
                Discover our handcrafted pastries, baked with delicate layers, rich fillings, premium ingredients, and a little touch of sweetness in every bite.
              </p>
            </div>

            <div className="gsap-fade-up flex flex-wrap items-center gap-2.5 text-[11px] font-medium text-[#705342]">
              <span className="flex items-center gap-1 bg-[#EFE8E1] px-2.5 py-1 rounded-full">✨ Freshly baked</span>
              <span className="flex items-center gap-1 bg-[#EFE8E1] px-2.5 py-1 rounded-full">✨ Carefully crafted</span>
              <span className="flex items-center gap-1 bg-[#EFE8E1] px-2.5 py-1 rounded-full">✨ Made to delight</span>
            </div>

            <div className="gsap-fade-up flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#3D261B] text-[#FAF5F0] hover:bg-[#2A170F] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                Explore Pastries ↓
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white border border-[#3D261B]/20 text-[#3D261B] hover:bg-[#FAF5F0] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
              >
                Discover Our Craft
              </motion.button>
            </div>

            <div className="gsap-fade-up pt-6 border-t border-[#3D261B]/10 grid grid-cols-3 gap-4">
              <div>
                <span className="font-serif text-2xl font-bold text-[#3D261B]">72</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">FLAKY LAYERS</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#3D261B]">84%</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">NORMANDY BUTTER</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#3D261B]">100%</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">PURE ARTISAN CRAFT</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/3 rounded-3xl overflow-hidden bg-[#EFE8E1] border border-[#3D261B]/10 shadow-lg group"
            >
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
                alt="French Croissant"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3D261B]/80 via-transparent to-transparent flex flex-col justify-between p-6 text-white">
                <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase self-start border border-white/20">
                  DAWN VIENNOISERIE FLIGHT
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold">Handcrafted French Croissants</h3>
                  <p className="text-xs text-white/80 mt-1">Baked every morning at 04:30 AM</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#3D261B]/10 flex items-center gap-2 shadow-sm text-[#3D261B]">
                <Award className="w-4 h-4 text-[#8A612A]" />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider">Gold Standard Lamination</p>
                  <p className="text-[8px] text-[#705342]">AOP Charentes-Poitou Butter</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION HEADER BANNER */}
      <section className="text-center py-10 px-4 max-w-3xl mx-auto space-y-2">
        <div className="flex items-center justify-center gap-2 text-[#8A612A]">
          <span className="h-px w-8 bg-[#8A612A]/40" />
          <Clock className="w-3.5 h-3.5" />
          <span className="h-px w-8 bg-[#8A612A]/40" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D261B]">
          Made Fresh. Loved Always.
        </h2>
        <p className="text-xs sm:text-sm text-[#705342] leading-relaxed">
          From buttery classics to indulgent chocolate creations, explore pastries crafted for your everyday cravings and special moments.
        </p>
      </section>

      {/* CATEGORY TABS & FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Sub-category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {subCategories.map((cat) => {
            const isSelected = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all shrink-0 cursor-pointer ${
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

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 border border-[#3D261B]/10 p-3.5 rounded-2xl shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#3D261B]">
            <span className="font-bold text-[#8A612A] uppercase tracking-wider text-[11px]">Our Pastries</span>
            <span className="text-[#705342]">Showing {filteredPastries.length} Handcrafted Bakes</span>
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
              <span>Pure Veg / Eggless</span>
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

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + onlyVeg + underPrice}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPastries.map((item) => {
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

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#3D261B] text-[#FAF5F0] text-[9px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-2xs">
                        {item.badge}
                      </span>
                    )}

                    {/* Wishlist Button */}
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

                  {/* Card Details */}
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

                    {/* Price & Add Button */}
                    <div className="pt-3 border-t border-[#3D261B]/10 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-semibold text-[#705342] uppercase tracking-wider block">PER PIECE</span>
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

      {/* CURATED TASTING FLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">CURATED TASTING FLIGHTS</span>
              <h2 className="font-serif text-3xl font-bold text-[#3D261B] mt-1">A Little Something Special</h2>
            </div>
            <p className="text-xs text-[#705342] max-w-md">
              Explore sensory tasting flights curated by our executive patissier, spotlighting single-origin cocoa terroirs and stone-baked morning viennoiserie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Dark Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#2D1B13] text-[#FAF5F0] rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-md"
            >
              <div className="space-y-4">
                <span className="bg-white/10 text-[#C5A880] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  VALRHONA GRAND CRU
                </span>
                <div className="aspect-16/9 bg-[#3D261B] rounded-2xl overflow-hidden relative border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=600&auto=format&fit=crop" alt="Chocolate" fill className="object-cover opacity-80" />
                </div>
                <h3 className="font-serif text-xl font-bold">Chocolate Indulgence</h3>
                <p className="text-xs text-[#FAF5F0]/70 leading-relaxed">
                  Dark single-origin ganache, chocolate éclairs, and Piedmont hazelnut brioche.
                </p>
              </div>

              <button className="text-xs font-bold uppercase tracking-wider text-[#C5A880] flex items-center gap-2 hover:underline cursor-pointer">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Dark Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#2D1B13] text-[#FAF5F0] rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-md"
            >
              <div className="space-y-4">
                <span className="bg-white/10 text-[#C5A880] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  BAKESHOP: 04:30 AM
                </span>
                <div className="aspect-16/9 bg-[#3D261B] rounded-2xl overflow-hidden relative border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop" alt="Oven" fill className="object-cover opacity-80" />
                </div>
                <h3 className="font-serif text-xl font-bold">Fresh from the Oven</h3>
                <p className="text-xs text-[#FAF5F0]/70 leading-relaxed">
                  Golden croissants, twice-baked almond brioche, and pain au chocolat straight from the stone deck.
                </p>
              </div>

              <button className="text-xs font-bold uppercase tracking-wider text-[#C5A880] flex items-center gap-2 hover:underline cursor-pointer">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Dark Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#2D1B13] text-[#FAF5F0] rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-md"
            >
              <div className="space-y-4">
                <span className="bg-white/10 text-[#C5A880] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  BOTANICAL & ORCHARD
                </span>
                <div className="aspect-16/9 bg-[#3D261B] rounded-2xl overflow-hidden relative border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" alt="Fruit" fill className="object-cover opacity-80" />
                </div>
                <h3 className="font-serif text-xl font-bold">Fruitful Delights</h3>
                <p className="text-xs text-[#FAF5F0]/70 leading-relaxed">
                  Mahabaleshwar berries, seasonal orchard fruits, and elderflower glazes with delicate diplomat creams.
                </p>
              </div>

              <button className="text-xs font-bold uppercase tracking-wider text-[#C5A880] flex items-center gap-2 hover:underline cursor-pointer">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ARTISAN HERITAGE */}
      <section className="bg-white/50 border-y border-[#3D261B]/10 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">ARTISAN HERITAGE</span>
            <h2 className="font-serif text-3xl font-bold text-[#3D261B]">Crafted with Care, Every Single Day</h2>
            <p className="text-xs text-[#705342] leading-relaxed">
              True Viennoiserie cannot be rushed. We uphold centuries-old French disciplines married with thoughtfully gathered botanicals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <div className="bg-[#FAF5F0] border border-[#3D261B]/10 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#3D261B]">48-Hour Lamination</h4>
              <p className="text-xs text-[#705342] leading-relaxed">
                Slow, cold resting unlocks delicate natural fermentation, giving our pastries an airy honeycomb structure and crisp shatter.
              </p>
            </div>

            <div className="bg-[#FAF5F0] border border-[#3D261B]/10 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#3D261B]">Normandy AOP Butter</h4>
              <p className="text-xs text-[#705342] leading-relaxed">
                Carefully selected 84% fat churned dry butter guarantees unyielding golden flakiness, fragrant hazelnut aroma, and clean mouthfeel.
              </p>
            </div>

            <div className="bg-[#FAF5F0] border border-[#3D261B]/10 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#3D261B]">Valrhona Grand Cru</h4>
              <p className="text-xs text-[#705342] leading-relaxed">
                Pure single-origin cocoa beans sourced with ethical care, delivering rich, nuanced chocolate profiles without palm oils.
              </p>
            </div>

            <div className="bg-[#FAF5F0] border border-[#3D261B]/10 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#8A612A]">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#3D261B]">Fresh Morning Batches</h4>
              <p className="text-xs text-[#705342] leading-relaxed">
                Every pastry is pulled directly from morning hearth stone ovens. Honest, small-batch baking made fresh for today.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PATRON REFLECTIONS / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        <div className="text-center max-w-md mx-auto space-y-1">
          <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">PATRON REFLECTIONS</span>
          <h2 className="font-serif text-3xl font-bold text-[#3D261B]">Sweet Words from Our Customers</h2>
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
                "The Almond Croissant transported me straight back to a boutique patisserie in Paris. Crisp exterior, rich aromatic frangipane that isn't cloyingly sweet."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#3D261B]/10">
              <div className="w-8 h-8 rounded-full bg-[#3D261B] text-[#FAF5F0] font-bold text-xs flex items-center justify-center">
                A
              </div>
              <div>
                <p className="text-xs font-bold text-[#3D261B]">Ananya Nair</p>
                <p className="text-[10px] text-[#705342]">Verified Patron • Indiranagar</p>
              </div>
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
                "Their Mille-Feuille is architectural perfection. The pastry held its snap even hours after morning delivery, and the vanilla specks are genuinely Bourbon bean."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#3D261B]/10">
              <div className="w-8 h-8 rounded-full bg-[#3D261B] text-[#FAF5F0] font-bold text-xs flex items-center justify-center">
                R
              </div>
              <div>
                <p className="text-xs font-bold text-[#3D261B]">Rohan Kulkarni</p>
                <p className="text-[10px] text-[#705342]">Verified Patron • Lavelle Road</p>
              </div>
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
                "Ordered the Belgian Chocolate Éclairs for a family Sunday brunch. The mirror glaze is immaculate, and the deep cacao profile won everyone over."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#3D261B]/10">
              <div className="w-8 h-8 rounded-full bg-[#3D261B] text-[#FAF5F0] font-bold text-xs flex items-center justify-center">
                S
              </div>
              <div>
                <p className="text-xs font-bold text-[#3D261B]">Shreya Mehta</p>
                <p className="text-[10px] text-[#705342]">Verified Patron • Koramangala</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEWSLETTER SUBSCRIPTION BOX */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-white border border-[#3D261B]/10 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-[#FAF5F0] border border-[#3D261B]/10 flex items-center justify-center mx-auto text-[#8A612A]">
            <Mail className="w-5 h-5" />
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#3D261B]">A Little Sweetness in Your Inbox</h3>
            <p className="text-xs text-[#705342]">
              Discover new pastries, seasonal creations, dawn bake schedules, and special member privileges from DAKINGO.
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
              className="w-full sm:w-auto bg-[#3D261B] text-[#FAF5F0] hover:bg-[#2A170F] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>

          {subscribed && (
            <p className="text-xs font-bold text-emerald-800">
              ✓ Thank you for subscribing to Dakingo Atelier updates!
            </p>
          )}
        </div>
      </section>

    </div>
  );
}