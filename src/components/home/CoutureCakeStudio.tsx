"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface StepItem {
  step: string;
  title: string;
  description: string;
  pills: string[];
}

const steps: StepItem[] = [
  {
    step: "1",
    title: "Choose Tier & Size",
    description: "0.5kg (Petit) up to 8.0kg multi-tier architectures designed for your guest list.",
    pills: ["500g", "1.0kg", "3-Tier"],
  },
  {
    step: "2",
    title: "Sponge & Infusions",
    description: "Madagascar Vanilla, Belgian Truffle, Sicilian Pistachio, or Rose Cardamom crumb.",
    pills: ["Pistachio", "Dark Cocoa"],
  },
  {
    step: "3",
    title: "Bespoke Inscription",
    description: "Delicate chocolate plaque calligraphy, edible gold crest, and parchment note.",
    pills: ["Gold Leaf", "Hand Lettering"],
  },
  {
    step: "4",
    title: "Select Dispatch Slot",
    description: "Chilled van transport handled directly with white-glove event table handover.",
    pills: ["Morning 10 AM", "Evening 6 PM"],
  },
];

export default function CoutureCakeStudio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Hover Animation for Cards
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, { y: -6, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section className="bg-[#FAF5F0] py-20 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Outer White Card Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#3D261B]/5 shadow-[0_10px_40px_rgba(61,38,27,0.04)]"
        >
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-[#8A612A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ATELIER BESPOKE SERVICE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D261B] tracking-tight leading-tight">
              Design Your Couture Celebration Cake
            </h2>

            <p className="text-xs sm:text-sm text-[#705342] leading-relaxed font-normal">
              From two-person intimate celebrations to 4-tier grand wedding centerpieces, collaborate with our pastry chefs in four deliberate steps.
            </p>
          </div>

          {/* 4-Column Grid of Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-[#FAF5F0]/70 rounded-2xl p-6 border border-[#3D261B]/5 flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#FAF5F0]"
              >
                <div className="space-y-4">
                  {/* Step Number Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#3D261B] text-[#FAF5F0] text-xs font-bold flex items-center justify-center font-mono shadow-xs">
                    {item.step}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl font-bold text-[#3D261B] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#705342] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tags / Pills */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-[#3D261B]/5">
                  {item.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="bg-white text-[#3D261B] text-[10px] font-medium px-2.5 py-1 rounded-md border border-[#3D261B]/5 shadow-2xs"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/bespoke-studio"
              className="inline-flex items-center gap-2.5 bg-[#3D261B] hover:bg-[#8A612A] text-[#FAF5F0] text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#3D261B]/15 hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>LAUNCH BESPOKE CAKE STUDIO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}