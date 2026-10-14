"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export interface ReviewItem {
  id: string | number;
  rating: number;
  verifiedText: string;
  quote: string;
  description: string;
  authorName: string;
  authorLocation: string;
  purchasedProduct: string;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    rating: 5,
    verifiedText: "Verified Buyer",
    quote: "“The mirror glaze was like glass, and the truffle inside melted like silk.”",
    description:
      "Ordered the Royal Belgian Dark Truffle for our 10th anniversary dinner. It arrived impeccably chilled in their signature insulated ivory box. Not overly sweet, just pure, transcendent dark cocoa depth.",
    authorName: "Arundhati S.",
    authorLocation: "Lavelle Road, Bengaluru",
    purchasedProduct: "Belgian Truffle 1kg",
  },
  {
    id: 2,
    rating: 5,
    verifiedText: "Verified Buyer",
    quote: "“Finally, legitimate French lamination that doesn't turn soggy in transit.”",
    description:
      "Having lived in Lyon for four years, finding authentic croissants in town seemed impossible until DAKINGO. The honeycomb structure on their almond croissants is proof of obsessive technique.",
    authorName: "Rohan Sen",
    authorLocation: "Indiranagar, Bengaluru",
    purchasedProduct: "Almond Croissants",
  },
  {
    id: 3,
    rating: 5,
    verifiedText: "Verified Buyer",
    quote: "“The corporate Diwali gifting hampers left our clients raving for weeks.”",
    description:
      "The wax seal with our company monogram and the delicate macaron tin was the finest corporate gift we have ever sent out. Truly world-class aesthetics and taste.",
    authorName: "Meera Krishnan",
    authorLocation: "Koramangala, Bengaluru",
    purchasedProduct: "Luxury Hamper Box",
  },
];

export default function Testimonials() {
  // GSAP Hover Micro-Interactions on Review Cards
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: -8,
      boxShadow: "0 20px 35px rgba(61, 38, 27, 0.08)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: 0,
      boxShadow: "0 4px 20px rgba(61, 38, 27, 0.03)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <section className="bg-[#FAF5F0] py-20 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-[#8A612A]">
            PATRON REVERENCE
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D261B] tracking-tight">
            Kind Words From Our Tables
          </h2>

          {/* Average Rating Stars */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#C5A880] text-[#C5A880]"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-[#705342]">
              <span className="font-bold text-[#3D261B]">4.92 / 5.0</span> Average from 1,480+ Reviews
            </p>
          </div>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-2xl p-7 border border-[#3D261B]/5 shadow-[0_4px_20px_rgba(61,38,27,0.03)] flex flex-col justify-between cursor-pointer transition-colors duration-300"
            >
              <div className="space-y-4">
                {/* Rating & Verified Buyer Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-medium text-[#705342]/80 tracking-wide">
                    {item.verifiedText}
                  </span>
                </div>

                {/* Italic Serif Highlight Quote */}
                <h3 className="font-serif italic font-bold text-lg sm:text-xl text-[#3D261B] tracking-tight leading-snug">
                  {item.quote}
                </h3>

                {/* Body Review Text */}
                <p className="text-xs sm:text-[13px] text-[#705342] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Author & Product Badge Footer */}
              <div className="pt-6 mt-6 border-t border-[#3D261B]/5 flex items-end justify-between gap-3">
                <div>
                  <p className="font-serif font-bold text-sm text-[#3D261B]">
                    {item.authorName}
                  </p>
                  <p className="text-[11px] text-[#705342] font-normal mt-0.5">
                    {item.authorLocation}
                  </p>
                </div>

                <span className="bg-[#FAF5F0] text-[#3D261B] text-[10px] font-semibold px-3 py-1.5 rounded-md border border-[#3D261B]/5 shrink-0">
                  {item.purchasedProduct}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}