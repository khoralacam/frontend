"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export interface CategoryItem {
  id: string | number;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  href: string;
}

const initialCategories: CategoryItem[] = [
  // Row 1 Items
  {
    id: 1,
    title: "Signature Cakes",
    subtitle: "Entremets & Truffles",
    badge: "14 Creations",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    href: "/cakes",
  },
  {
    id: 2,
    title: "Birthday Cakes",
    subtitle: "Bespoke Milestones",
    badge: "18 Designs",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
    href: "/custom-cakes",
  },
  {
    id: 3,
    title: "Chocolate Cakes",
    subtitle: "Single-Estate Cocoa",
    badge: "9 Varieties",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop",
    href: "/cakes/chocolate",
  },
  {
    id: 4,
    title: "Cupcakes & Tarts",
    subtitle: "Petits Fours Collection",
    badge: "12 Flavours",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
    href: "/tarts",
  },
  // Row 2 Items
  {
    id: 5,
    title: "French Pastries",
    subtitle: "Viennoiserie & Choux",
    badge: "16 Bakes",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    href: "/pastries",
  },
  {
    id: 6,
    title: "Cookies & Brownies",
    subtitle: "Sablés & Fudgy Bakes",
    badge: "11 Items",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    href: "/cookies",
  },
  {
    id: 7,
    title: "Artisan Breads",
    subtitle: "Wild Ferment Sourdough",
    badge: "8 Batches",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    href: "/breads",
  },
  {
    id: 8,
    title: "Gift Hampers",
    subtitle: "Curated Keepsakes",
    badge: "15 Hampers",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
    href: "/gifting",
  },
];

export default function CategorySlider() {
  const [categories, setCategories] = useState<CategoryItem[]>(initialCategories);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const midpoint = Math.ceil(categories.length / 2);
  const row1Categories = categories.slice(0, midpoint);
  const row2Categories = categories.slice(midpoint);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (!ref.current) return;
    const scrollAmount = ref.current.clientWidth * 0.7;
    const targetScroll =
      direction === "left"
        ? ref.current.scrollLeft - scrollAmount
        : ref.current.scrollLeft + scrollAmount;

    gsap.to(ref.current, {
      scrollLeft: targetScroll,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector(".category-img");
    const badge = card.querySelector(".category-badge");

    gsap.to(img, { scale: 1.08, duration: 0.5, ease: "power2.out" });
    gsap.to(badge, { y: -3, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector(".category-img");
    const badge = card.querySelector(".category-badge");

    gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(badge, { y: 0, duration: 0.3 });
  };

  return (
    <section className="bg-[#FAF5F0] py-20 px-4 sm:px-12 overflow-hidden select-none border-t border-[#3D261B]/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3D261B]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-[#8A612A] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HANDCRAFTED DISCIPLINES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D261B] tracking-tight">
              Shop by Atelier Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#705342] max-w-md leading-relaxed font-medium">
            Explore our foundational avenues of fine pastry, from slow-fermented breads to gilded tiered entremets across bespoke collections.
          </p>
        </div>

        {/* ================= ROW 1 SLIDER ================= */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3D261B] tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8A612A]" />
            <span>Signature Collections (Row I)</span>
          </h3>

          <div className="relative flex items-center px-4 sm:px-6">
            {/* Start Button (Left) with Increased Gap */}
            <button
              onClick={() => handleScroll(row1Ref, "left")}
              aria-label="Scroll Row 1 Left"
              className="absolute -left-2 sm:-left-6 z-20 w-11 h-11 rounded-full border border-[#3D261B]/15 bg-white/95 backdrop-blur-md hover:bg-[#3D261B] hover:text-white text-[#3D261B] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Slider Track */}
            <div
              ref={row1Ref}
              className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-2 px-2 w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {row1Categories.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="shrink-0"
                >
                  <Link
                    href={cat.href}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="group block w-[260px] sm:w-[290px] bg-white rounded-2xl overflow-hidden border border-[#3D261B]/5 shadow-[0_4px_25px_rgba(61,38,27,0.04)] hover:shadow-[0_12px_35px_rgba(61,38,27,0.12)] transition-shadow duration-500"
                  >
                    <div className="relative h-[210px] sm:h-[230px] w-full bg-[#EFE8E1] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="290px"
                        className="category-img object-cover object-center"
                      />
                      <div className="category-badge absolute top-3.5 left-3.5 bg-[#3D261B]/85 backdrop-blur-md text-[#FAF5F0] text-[10px] font-semibold px-3 py-1 rounded-md tracking-wider uppercase shadow-xs">
                        {cat.badge}
                      </div>
                    </div>

                    <div className="p-5 bg-white">
                      <h4 className="font-serif text-lg font-bold text-[#3D261B] tracking-tight group-hover:text-[#8A612A] transition-colors">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-[#705342] mt-1 font-normal">
                        {cat.subtitle}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* End Button (Right) */}
            <button
              onClick={() => handleScroll(row1Ref, "right")}
              aria-label="Scroll Row 1 Right"
              className="absolute -right-2 sm:-right-6 z-20 w-11 h-11 rounded-full border border-[#3D261B]/15 bg-white/95 backdrop-blur-md hover:bg-[#3D261B] hover:text-white text-[#3D261B] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ArrowRight className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* ================= ROW 2 SLIDER ================= */}
        <div className="space-y-4 pt-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3D261B] tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8A612A]" />
            <span>Specialist Bakes & Hampers (Row II)</span>
          </h3>

          <div className="relative flex items-center px-4 sm:px-6">
            {/* Start Button (Left) with Increased Gap */}
            <button
              onClick={() => handleScroll(row2Ref, "left")}
              aria-label="Scroll Row 2 Left"
              className="absolute -left-2 sm:-left-6 z-20 w-11 h-11 rounded-full border border-[#3D261B]/15 bg-white/95 backdrop-blur-md hover:bg-[#3D261B] hover:text-white text-[#3D261B] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Slider Track */}
            <div
              ref={row2Ref}
              className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-2 px-2 w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {row2Categories.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="shrink-0"
                >
                  <Link
                    href={cat.href}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="group block w-[260px] sm:w-[290px] bg-white rounded-2xl overflow-hidden border border-[#3D261B]/5 shadow-[0_4px_25px_rgba(61,38,27,0.04)] hover:shadow-[0_12px_35px_rgba(61,38,27,0.12)] transition-shadow duration-500"
                  >
                    <div className="relative h-[210px] sm:h-[230px] w-full bg-[#EFE8E1] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="290px"
                        className="category-img object-cover object-center"
                      />
                      <div className="category-badge absolute top-3.5 left-3.5 bg-[#3D261B]/85 backdrop-blur-md text-[#FAF5F0] text-[10px] font-semibold px-3 py-1 rounded-md tracking-wider uppercase shadow-xs">
                        {cat.badge}
                      </div>
                    </div>

                    <div className="p-5 bg-white">
                      <h4 className="font-serif text-lg font-bold text-[#3D261B] tracking-tight group-hover:text-[#8A612A] transition-colors">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-[#705342] mt-1 font-normal">
                        {cat.subtitle}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* End Button (Right) */}
            <button
              onClick={() => handleScroll(row2Ref, "right")}
              aria-label="Scroll Row 2 Right"
              className="absolute -right-2 sm:-right-6 z-20 w-11 h-11 rounded-full border border-[#3D261B]/15 bg-white/95 backdrop-blur-md hover:bg-[#3D261B] hover:text-white text-[#3D261B] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ArrowRight className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}