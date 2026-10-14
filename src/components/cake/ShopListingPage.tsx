"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  Plus,
  Minus,
  Sparkles,
  ChevronDown,
  Clock,
  ShieldCheck,
  Truck,
  RotateCw,
  X,
  Star,
} from "lucide-react";

// Mock Products Data from Screenshot
const PRODUCTS = [
  {
    id: 1,
    title: "Valrhona 70% Chocolate Marquise Cake",
    description: "Layered Guanaja mousse, hazelnut praline, feuilleline base, with a mirror...",
    price: 1650,
    rating: 4.9,
    reviews: 128,
    servings: "SERVES 6-8",
    badge: "CHEF'S SIGNATURE",
    subBadge: "Eggless Available",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Pistachio Raspberry Entremet",
    description: "Sicilian bronte pistachio mousse, tart raspberry insert, jaconde sponge...",
    price: 1850,
    rating: 5.0,
    reviews: 89,
    servings: "SERVES 6",
    badge: "LIMITED DROP",
    subBadge: "Pastries & Cakes Collection",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Classic Honey Sourdough Boule",
    description: "36-hour cold fermented sourdough starter with Coorg forest honey glaze...",
    price: 280,
    rating: 4.8,
    reviews: 210,
    servings: "750G LOAF",
    badge: "BAKED 06:15 AM FRESH",
    subBadge: "Vegan",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Burnt Basque Vanilla Cheesecake",
    description: "Caramelized Spanish-style cheesecake with molten center...",
    price: 1350,
    rating: 4.9,
    reviews: 340,
    servings: "SERVES 5-7",
    badge: "BESTSELLER",
    subBadge: "Eggless Option",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Double Chocolate Sea Salt Cookies",
    description: "Soft-baked fudge center cookies with dark chocolate chunks and...",
    price: 580,
    rating: 4.9,
    reviews: 156,
    servings: "12 OZ BOX",
    badge: "FRESH",
    subBadge: null,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "French Apple Frangipane Tart",
    description: "Thinly fanned Granny Smith apples baked in rich almond paste inside a...",
    price: 390,
    rating: 4.7,
    reviews: 92,
    servings: "INDIVIDUAL TART",
    badge: null,
    subBadge: "NORMANDY RECIPE",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Artisanal Baker's Hamper Deluxe",
    description: "Hand-crafted wooden chest with salted butter sablés, chocolate...",
    price: 3400,
    rating: 5.0,
    reviews: 42,
    servings: "CURATED GIFT BOX",
    badge: "LUXURY GIFT CRATE",
    subBadge: null,
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Espresso Tiramisu Celebration Cake",
    description: "House-roasted single-origin Chikmagalur espresso soaked...",
    price: 1550,
    rating: 4.9,
    reviews: 117,
    servings: "SERVES 6",
    badge: "CELEBRATION PICK",
    subBadge: "Eggless Option",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Blueberry Brioche Danish Pair",
    description: "Laminated viennoiserie with 27 flaky micro-layers filled with Madagascar...",
    price: 450,
    rating: 4.8,
    reviews: 78,
    servings: "SET OF 2",
    badge: "MORNING ATELIER DROP",
    subBadge: null,
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ShopListingPage() {
  const [searchQuery, setSearchQuery] = useState("Chocolate");
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({ 1: 1, 5: 1 });

  const handleQtyChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  return (
    <div className="w-full bg-[#FAF6F0] min-h-screen py-6 px-4 sm:px-6 lg:px-12 text-[#3E2317] space-y-8 font-sans">
      
      {/* =========================================================
          1. BREADCRUMB & LIVE STATUS HEADER
         ========================================================= */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#6B5344]">
        <div className="flex items-center gap-2">
          <span className="hover:underline cursor-pointer uppercase tracking-wider">HAUTE PATISSERIE & VIENNOISERIE CURATION</span>
        </div>
        <div className="flex items-center gap-2 bg-[#FAF0E6] text-[#5C3A21] px-3 py-1 rounded-full border border-[#E5D7CA] text-[11px] font-bold">
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
          <span>Dawn Batch (04:30 AM): Baking Fresh & In Inventory</span>
        </div>
      </div>

      {/* =========================================================
          2. HERO HEADER & KEY STATS METRICS
         ========================================================= */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-[#3E2317]">
              The Artisan Pantry & Patisserie
            </h1>
            <p className="text-sm sm:text-base text-[#6B5344] mt-3 leading-relaxed">
              Over 48 handcrafted daily creations prepared with churned French butter, slow unhurried sourdough fermentation, and single-origin chocolates.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-6 bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-4 sm:p-5 shadow-xs shrink-0">
            <div className="text-center px-2">
              <span className="block text-2xl font-serif font-bold text-[#3E2317]">48</span>
              <span className="text-[10px] font-bold tracking-wider text-[#6B5344] uppercase">DAILY BATCHES</span>
            </div>
            <div className="h-8 w-[1px] bg-[#E5D7CA]" />
            <div className="text-center px-2">
              <span className="block text-2xl font-serif font-bold text-[#3E2317]">100%</span>
              <span className="text-[10px] font-bold tracking-wider text-[#6B5344] uppercase">PURE DAIRY BUTTER</span>
            </div>
            <div className="h-8 w-[1px] bg-[#E5D7CA]" />
            <div className="text-center px-2">
              <span className="block text-2xl font-serif font-bold text-[#3E2317]">2.5h</span>
              <span className="text-[10px] font-bold tracking-wider text-[#6B5344] uppercase">COLD-CHAIN SPEED</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button className="bg-[#3E2317] text-[#FDF5ED] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            ALL ITEMS <span className="ml-1 opacity-75">48</span>
          </button>
          <button className="bg-[#FDF5ED] hover:bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
            SIGNATURE CAKES <span className="ml-1 text-[#6B5344]">12</span>
          </button>
          <button className="bg-[#FDF5ED] hover:bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
            TEA CAKES & LOAVES <span className="ml-1 text-[#6B5344]">8</span>
          </button>
          <button className="bg-[#FDF5ED] hover:bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
            FRENCH PASTRIES <span className="ml-1 text-[#6B5344]">10</span>
          </button>
          <button className="bg-[#FDF5ED] hover:bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
            COOKIES & BROWNIES <span className="ml-1 text-[#6B5344]">9</span>
          </button>
          <button className="bg-[#FDF5ED] hover:bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
            SAVOURY & SOURDOUGH <span className="ml-1 text-[#6B5344]">5</span>
          </button>
          <button className="bg-[#FDF5ED] hover:bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
            GIFT HAMPERS <span className="ml-1 text-[#6B5344]">4</span>
          </button>
        </div>
      </section>

      {/* =========================================================
          3. MAIN LAYOUT: SIDEBAR FILTERS + PRODUCT GRID
         ========================================================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 pt-4">
        
        {/* LEFT SIDEBAR FILTERS */}
        <aside className="space-y-6">
          
          {/* Active Filters Bar */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#6B5344] uppercase tracking-wider">
              <span>ACTIVE FILTERS</span>
              <button className="text-[11px] underline text-[#5C3A21]">Clear all</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                Eggless Option <X className="w-3 h-3 cursor-pointer" />
              </span>
              <span className="bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                Under ₹3,500 <X className="w-3 h-3 cursor-pointer" />
              </span>
            </div>
          </div>

          {/* Search Box */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-[#6B5344] uppercase tracking-wider">SEARCH THE ATELIER</label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#6B5344] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pastries, cakes..."
                className="w-full bg-[#FDF5ED] border border-[#E5D7CA] rounded-xl pl-9 pr-8 py-2.5 text-xs text-[#3E2317] focus:outline-none focus:border-[#3E2317]"
              />
              {searchQuery && (
                <X className="w-3.5 h-3.5 text-[#6B5344] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setSearchQuery("")} />
              )}
            </div>
          </div>

          {/* Dietary Preferences Checkboxes */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#F5E6D8] pb-3">
              <h3 className="text-xs font-bold text-[#3E2317] uppercase tracking-wider">Dietary Preferences</h3>
              <button className="text-[11px] text-[#6B5344] hover:underline">Reset</button>
            </div>
            <div className="space-y-3 text-xs text-[#3E2317]">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="accent-[#3E2317] rounded" />
                  <span className="font-semibold">100% Eggless (Pure Veg)</span>
                </span>
                <span className="text-[#6B5344] text-[11px]">🟢</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#3E2317] rounded" />
                  <span>Gluten-Friendly Flour</span>
                </span>
                <span className="text-[#6B5344] text-[11px]">14</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#3E2317] rounded" />
                  <span>Nut-Free Facility Safe</span>
                </span>
                <span className="text-[#6B5344] text-[11px]">10</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="accent-[#3E2317] rounded" />
                  <span>Classic French Lamination</span>
                </span>
                <span className="text-[#6B5344] text-[11px]">22</span>
              </label>
            </div>
          </div>

          {/* Delivery Window Toggle */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-[#3E2317] uppercase tracking-wider">Delivery Window</h3>
            <div className="grid grid-cols-2 gap-2 bg-[#FAF0E6] p-1 rounded-xl border border-[#E5D7CA]">
              <button className="bg-[#3E2317] text-[#FDF5ED] py-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center">
                <span>TODAY</span>
                <span className="text-[9px] opacity-80">2.5H</span>
              </button>
              <button className="text-[#3E2317] hover:bg-[#FDF5ED] py-2 rounded-lg text-xs font-medium flex flex-col items-center justify-center">
                <span>PRE-ORDER</span>
                <span className="text-[9px] text-[#6B5344]">WEEKEND</span>
              </button>
            </div>
          </div>

          {/* Price Inscription Slider */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#3E2317] uppercase tracking-wider">
              <span>Price Inscription</span>
              <span className="text-[11px] font-normal text-[#6B5344]">Up to ₹3,500</span>
            </div>
            <input type="range" min="250" max="4500" defaultValue="3500" className="w-full accent-[#3E2317] bg-[#E5D7CA] h-1.5 rounded-lg cursor-pointer" />
            <div className="flex items-center justify-between text-[11px] text-[#6B5344] font-medium">
              <span>₹250</span>
              <span>₹4,500</span>
            </div>
          </div>

          {/* Atelier Promise Banner */}
          <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-2xl p-5 space-y-2">
            <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#5C3A21]" /> ATELIER PROMISE
            </span>
            <p className="text-xs text-[#3E2317] leading-relaxed">
              All morning entremets & brioches are baked between 04:30 AM & 06:00 AM using Normandy AOP butter and unbleached stoneground wheat.
            </p>
            <span className="block text-[10px] text-[#5C3A21] font-bold uppercase tracking-wider pt-1">
              MASTER BAKER HAND-SEALED
            </span>
          </div>

        </aside>

        {/* RIGHT PRODUCT GRID (3 SPANS) */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* Top Sort & Count Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#F5E6D8]">
            <span className="text-xs font-bold text-[#6B5344] uppercase tracking-wider">
              SHOWING 9 OF 48 DELICACIES
            </span>
            <div className="flex items-center gap-2 text-xs text-[#3E2317]">
              <span className="text-[#6B5344]">SORT BY:</span>
              <select className="bg-[#FDF5ED] border border-[#E5D7CA] rounded-lg px-3 py-1.5 text-xs font-bold focus:outline-none">
                <option>Chef's Recommendation</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {/* Products 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                {/* Image Container with Badges */}
                <div className="relative w-full h-48 bg-[#FAF0E6] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Left Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#3E2317] text-[#FDF5ED] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  {/* Sub Badge */}
                  {product.subBadge && (
                    <span className="absolute top-10 left-3 bg-white/90 backdrop-blur-xs text-[#3E2317] text-[9px] font-semibold px-2 py-0.5 rounded border border-[#E5D7CA]">
                      {product.subBadge}
                    </span>
                  )}

                  {/* Wishlist Heart Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#3E2317] flex items-center justify-center transition-colors shadow-xs">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Rating & Servings */}
                    <div className="flex items-center justify-between text-[11px] text-[#6B5344]">
                      <span className="flex items-center gap-1 font-bold text-[#3E2317]">
                        <Star className="w-3 h-3 text-amber-600 fill-amber-600" />
                        {product.rating} <span className="text-[#6B5344] font-normal">({product.reviews})</span>
                      </span>
                      <span className="font-semibold uppercase tracking-wider text-[10px]">{product.servings}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-base text-[#3E2317] leading-snug line-clamp-2">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#6B5344] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add Button Bar */}
                  <div className="pt-3 border-t border-[#F5E6D8] flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[9px] text-[#6B5344] uppercase tracking-wider font-bold">ATELIER PRICE</span>
                      <span className="text-base font-bold text-[#3E2317]">₹{product.price.toLocaleString()}</span>
                    </div>

                    {/* Quantity or Add Button */}
                    <div className="flex items-center gap-2">
                      {quantities[product.id] ? (
                        <div className="flex items-center bg-[#FAF0E6] border border-[#E5D7CA] rounded-lg">
                          <button
                            onClick={() => handleQtyChange(product.id, -1)}
                            className="p-1.5 text-[#3E2317] hover:bg-[#E5D7CA] rounded-l-lg"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#3E2317]">{quantities[product.id]}</span>
                          <button
                            onClick={() => handleQtyChange(product.id, 1)}
                            className="p-1.5 text-[#3E2317] hover:bg-[#E5D7CA] rounded-r-lg"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : null}

                      <button
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="flex items-center gap-1 bg-[#3E2317] text-[#FDF5ED] hover:bg-[#2A170F] px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination / Load More Buttons */}
          <div className="pt-8 text-center space-y-3">
            <span className="block text-xs font-bold text-[#6B5344] uppercase tracking-widest">
              SHOWING 9 OF 48 DELICACIES
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="bg-[#3E2317] text-[#FDF5ED] hover:bg-[#2A170F] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xs">
                <span>DISCOVER MORE CREATIONS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="bg-[#FDF5ED] text-[#3E2317] border border-[#E5D7CA] hover:bg-[#FAF0E6] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                VIEW ALL 48 ON SINGLE PAGE
              </button>
            </div>
          </div>

        </main>
      </div>

      {/* =========================================================
          4. VALUE PROPOSITION HIGHLIGHTS BAR (BOTTOM)
         ========================================================= */}
      <section className="max-w-7xl mx-auto bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#5C3A21] shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#3E2317] uppercase tracking-wider">Chilled Insulated Dispatch</h4>
            <p className="text-xs text-[#6B5344] mt-1 leading-relaxed">
              Custom isothermal boxes with biodegradable cold packs keep entremets at 4°C.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#5C3A21] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#3E2317] uppercase tracking-wider">Pure Normandy Butter</h4>
            <p className="text-xs text-[#6B5344] mt-1 leading-relaxed">
              Zero hydrogenated vegetable fats. Only 84% churned French daily butter.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#5C3A21] shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#3E2317] uppercase tracking-wider">Pure Vegetarian Atelier</h4>
            <p className="text-xs text-[#6B5344] mt-1 leading-relaxed">
              Segregated dedicated prep stations for 100% eggless confectionery items.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#5C3A21] shrink-0">
            <RotateCw className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#3E2317] uppercase tracking-wider">100% Satisfaction</h4>
            <p className="text-xs text-[#6B5344] mt-1 leading-relaxed">
              Flawless doorstep presentation guaranteed or we dispatch an instant replacement.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}