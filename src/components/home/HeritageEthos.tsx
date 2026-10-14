"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function HeritageEthos() {
  const chefCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP Hover Micro-Interaction on Chef Portrait
  const handleMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.04,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="bg-[#FAF5F0] py-20 px-4 sm:px-8 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Chef Portrait with Overlapping Floating Badge (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div
              ref={chefCardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(61,38,27,0.08)] bg-[#EFE8E1] cursor-pointer"
            >
              {/* Chef Portrait Image */}
              <div ref={imageRef} className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
                  alt="Chef Éloïse Varma - Chef Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Chef Founder Info Card (Overlapping Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#3D261B]/10 shadow-[0_10px_30px_rgba(61,38,27,0.12)] max-w-[280px] sm:max-w-[300px] z-10"
              >
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8A612A] mb-1">
                  CHEF FOUNDER
                </p>
                <h3 className="font-serif text-xl font-bold text-[#3D261B] tracking-tight leading-snug">
                  Chef Éloïse Varma
                </h3>
                <p className="text-xs text-[#705342] mt-1 font-normal leading-relaxed">
                  Le Cordon Bleu Paris &amp; 12 Years of Devoted Atelier Practice
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Heritage Text & Core Metrics (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Header Title */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A612A] mb-2">
                OUR HERITAGE &amp; ETHOS
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#3D261B] tracking-tight leading-[1.12]">
                Made With Care. <br />
                <span className="font-medium">Shared With Love.</span>
              </h2>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#705342] font-normal leading-relaxed">
              <p>
                DAKINGO was born out of an unhurried, almost stubborn devotion to the fundamentals of classical French baking. In an era dominated by hyper-processed pre-mixes and artificial stabilized gels, we chose the slower, more quiet path.
              </p>
              <p>
                Every single croissant begins forty-eight hours prior to baking, gently folding cultured churned butter into cold wild-ferment sourdough. Our chocolate is untempered by hydrogenated fats, using solely 70% single-origin couverture from respectful family estates.
              </p>
              <p>
                We believe a bakery is not merely a retailer of sweets, but a communal atelier where people pause, gather, and offer genuine comfort to those they cherish.
              </p>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#3D261B]/10">
              {/* Metric 1 */}
              <div>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#3D261B] tracking-tight">
                  48h
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#705342] mt-1">
                  SLOW DOUGH FERMENT
                </p>
              </div>

              {/* Metric 2 */}
              <div>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#3D261B] tracking-tight">
                  0%
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#705342] mt-1">
                  ARTIFICIAL PRESERVATIVES
                </p>
              </div>

              {/* Metric 3 */}
              <div>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#3D261B] tracking-tight">
                  100%
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#705342] mt-1">
                  AOP CHARENTES BUTTER
                </p>
              </div>
            </div>

            {/* Read Manifesto Link */}
            <div className="pt-2">
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#3D261B] hover:text-[#8A612A] transition-colors group"
              >
                <span>READ FULL ATELIER MANIFESTO</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}