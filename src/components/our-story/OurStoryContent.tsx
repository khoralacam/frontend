"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  Sparkles,
  Check,
  Mail,
  Heart,
  Award,
  Clock,
  ShieldCheck,
  Flame,
  ArrowRight,
  Coffee,
  Package,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurStoryContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // GSAP Animations Setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Image Subtle Parallax
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Scroll Trigger Stagger Animations for Cards
      const fadeElements = gsap.utils.toArray(".gsap-reveal") as HTMLElement[];
      fadeElements.forEach((el) => {
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

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#FAF5F0] text-[#3E2317] min-h-screen font-sans select-none overflow-hidden"
    >
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-[11px] font-medium text-[#705342]">
          <Link href="/" className="hover:text-[#3E2317] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <span className="text-[#3E2317] font-semibold uppercase">
            OUR STORY
          </span>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/60 border border-[#3E2317]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FAF5F0] border border-[#3E2317]/15 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8A612A]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-700 animate-pulse" />
              <span>MADE WITH LOVE, BAKED WITH PURPOSE</span>
            </motion.div>

            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#3E2317] leading-tight">
                Exquisite bakery begins with breathing yeast.
              </h1>
              <p className="text-xs sm:text-sm text-[#705342] max-w-xl leading-relaxed">
                At DAKINGO, we believe the simplest moments can become the sweetest memories. From the first fold of buttery pastry to the final touch of chocolate, every creation is made with care, passion, and a love for bringing people together.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#3E2317] text-[#FAF5F0] hover:bg-[#2A170F] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                EXPLORE DELICACIES →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white border border-[#3E2317]/20 text-[#3E2317] hover:bg-[#FAF5F0] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
              >
                MEET OUR CRAFT
              </motion.button>
            </div>

            <div className="pt-6 border-t border-[#3E2317]/10 grid grid-cols-3 gap-4">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2317]">04:30</span>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">DAWN KNEAD</p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2317]">72</span>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">LAMINATIONS</p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2317]">100%</span>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#705342] mt-0.5">NORMANDY AOP</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl">
            <div ref={heroImageRef} className="relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-[#EFE8E1] border border-[#3E2317]/10 shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
                alt="Artisan Baker"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3E2317]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border border-white/20">
                      CRAFTED AT DAWN
                    </span>
                    <p className="text-xs text-white/90 font-medium mt-1">04:30 AM First Hearth Pull</p>
                  </div>
                  <span className="bg-[#8A612A] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">
                    BATCH 01
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR PHILOSOPHY & L'ARTISAN ATELIER */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-[#3E2317]/10 rounded-3xl p-6 shadow-xs relative overflow-hidden"
            >
              <span className="bg-[#3E2317] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                L'ARTISAN ATELIER
              </span>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EFE8E1]">
                <Image
                  src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop"
                  alt="Pastry Box"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">OUR PHILOSOPHY</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2317]">
                We Don't Just Bake. We Create Little Moments of Happiness.
              </h2>
              <p className="text-xs sm:text-sm text-[#705342] leading-relaxed">
                Some moments deserve something special. A slow morning with a buttery croissant, a celebration shared over cake, or a simple afternoon made better with freshly baked cookies. DAKINGO exists to make these everyday moments feel extraordinary.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3E2317]/10 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3E2317]">
                <Sparkles className="w-4 h-4 text-[#8A612A]" />
                <span>The Quiet Ritual of Patisserie</span>
              </div>
              <p className="text-xs text-[#705342] leading-relaxed">
                Every recipe is treated as an architectural study in texture, snap, and aromatic bloom. We balance heritage European discipline with subtle natural infusions like saffron, cardamom sablé, and Madagascar bourbon vanilla beans.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-[#3E2317]">
              <span className="bg-white border border-[#3E2317]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700" /> Pure Normandy AOP Butter
              </span>
              <span className="bg-white border border-[#3E2317]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700" /> Single-Origin Valrhona
              </span>
              <span className="bg-white border border-[#3E2317]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700" /> 24-Hour Natural Fermentation
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TIMELINE JOURNEY */}
      <section className="gsap-reveal bg-white/40 border-y border-[#3E2317]/10 py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">THE BEGINNING OF SOMETHING SWEET</span>
            <h2 className="font-serif text-3xl font-bold text-[#3E2317]">A Little Passion, A Lot of Heart.</h2>
            <p className="text-xs sm:text-sm text-[#705342]">
              From an unheated home oven experimentation to Bangalore's premier cold-chain patisserie atelier.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-[#3E2317]/10">
            
            {/* Chapter 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-1 text-right md:pr-8">
                <span className="text-[10px] font-bold text-[#8A612A] uppercase">AUTUMN 2021 • CHAPTER I</span>
                <h3 className="font-serif font-bold text-lg text-[#3E2317]">The First Idea</h3>
                <p className="text-xs text-[#705342] leading-relaxed">
                  A profound longing for freshly baked treats and the quiet happiness they bring to everyday mornings. Begun on a single marble countertop with a single French-imported proofing bowl.
                </p>
              </div>
              <motion.div whileHover={{ x: 5 }} className="bg-white border border-[#3E2317]/10 rounded-2xl p-4 md:ml-8 shadow-2xs">
                <p className="text-xs font-bold text-[#3E2317]">Dawn Hearth Sourdough</p>
                <p className="text-[10px] text-[#705342]">140 iterations to refine our base brioche & feuilletage hydration.</p>
              </motion.div>
            </div>

            {/* Chapter 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div whileHover={{ x: -5 }} className="bg-white border border-[#3E2317]/10 rounded-2xl p-4 md:mr-8 shadow-2xs order-2 md:order-1">
                <p className="text-xs font-bold text-[#3E2317]">The Heritage Technique</p>
                <p className="text-[10px] text-[#705342]">Mastering cold-resting cycles between delicate butter rollouts.</p>
              </motion.div>
              <div className="space-y-1 md:pl-8 order-1 md:order-2">
                <span className="text-[10px] font-bold text-[#8A612A] uppercase">SPRING 2022 • CHAPTER II</span>
                <h3 className="font-serif font-bold text-lg text-[#3E2317]">The First Creations</h3>
                <p className="text-xs text-[#705342] leading-relaxed">
                  Exploring flavors, textures, heritage French viennoiserie methods, and the small details that make every bake special. Introducing hand-laminated pain au chocolat and botanical fruit tartlets.
                </p>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-1 text-right md:pr-8">
                <span className="text-[10px] font-bold text-[#8A612A] uppercase">SUMMER 2023 • CHAPTER III</span>
                <h3 className="font-serif font-bold text-lg text-[#3E2317]">Growing with Purpose</h3>
                <p className="text-xs text-[#705342] leading-relaxed">
                  Establishing our Bangalore flagship atelier with temperature-guarded dispatch and artisanal consistency. Cold-van deliveries ensuring every pastry arrives at ideal cellar temperature.
                </p>
              </div>
              <motion.div whileHover={{ x: 5 }} className="bg-white border border-[#3E2317]/10 rounded-2xl p-4 md:ml-8 shadow-2xs">
                <p className="text-xs font-bold text-[#3E2317]">The Cold-Chain Protocol</p>
                <p className="text-[10px] text-[#705342]">Pioneering humidity and temperature-locked delivery van corridors.</p>
              </motion.div>
            </div>

            {/* Chapter 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div whileHover={{ x: -5 }} className="bg-white border border-[#3E2317]/10 rounded-2xl p-4 md:mr-8 shadow-2xs order-2 md:order-1">
                <p className="text-xs font-bold text-[#3E2317]">Custom Patisserie</p>
                <p className="text-[10px] text-[#705342]">Bespoke occasion entremets, custom-rig gifting tins, and dawn subscriptions.</p>
              </motion.div>
              <div className="space-y-1 md:pl-8 order-1 md:order-2">
                <span className="text-[10px] font-bold text-[#8A612A] uppercase">TODAY &amp; BEYOND • CHAPTER IV</span>
                <h3 className="font-serif font-bold text-lg text-[#3E2317]">A Shared Culinary Table</h3>
                <p className="text-xs text-[#705342] leading-relaxed">
                  Continuing to bring patrons together through bespoke celebration cakes, curated giftboxes, and dawn-hearth bakes. Remaining steadfast in our rejection of artificial emulsifiers and premixes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE ART OF BAKING */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-10 text-center">
        <div className="max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">THE ART OF BAKING</span>
          <h2 className="font-serif text-3xl font-bold text-[#3E2317]">Beautiful Things Take Time.</h2>
          <p className="text-xs text-[#705342]">
            We pay attention to the details that make each creation special—from the balance of flavors to the texture, finish, and presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <motion.div whileHover={{ y: -6 }} className="bg-white border border-[#3E2317]/10 rounded-3xl p-6 space-y-4 shadow-2xs">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">01</span>
            <h3 className="font-serif font-bold text-lg text-[#3E2317]">Thoughtfully Selected Ingredients</h3>
            <p className="text-xs text-[#705342] leading-relaxed">
              Single-origin Valrhona Guanaja, Charentes-Poitou AOP churned butter, and organic stone-ground flours. No shortcuts, no artificial extracts—only pure romance you can taste.
            </p>
            <p className="text-[10px] font-bold text-emerald-800 flex items-center gap-1">
              ✓ Zero Preservatives or Stabilizers
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white border border-[#3E2317]/10 rounded-3xl p-6 space-y-4 shadow-2xs">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">02</span>
            <h3 className="font-serif font-bold text-lg text-[#3E2317]">Crafted with Attention</h3>
            <p className="text-xs text-[#705342] leading-relaxed">
              72-layer manual laminations, 24-hour dough resting, slow cold fermentations, and delicate hand decoration. Patience is our foundational technique.
            </p>
            <p className="text-[10px] font-bold text-emerald-800 flex items-center gap-1">
              ✓ Hand-Scored &amp; Oven Blistered
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white border border-[#3E2317]/10 rounded-3xl p-6 space-y-4 shadow-2xs">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">03</span>
            <h3 className="font-serif font-bold text-lg text-[#3E2317]">Made for Meaningful Moments</h3>
            <p className="text-xs text-[#705342] leading-relaxed">
              Tailored to elevate morning coffee hours, corporate appreciation, milestone wedding, and intimate afternoon tea gatherings across the city.
            </p>
            <p className="text-[10px] font-bold text-emerald-800 flex items-center gap-1">
              ✓ Custom Gift Cards Included
            </p>
          </motion.div>

        </div>
      </section>

      {/* 5. SENSORY PERFECTION BANNER */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 pb-12">
        <div className="relative aspect-21/9 rounded-3xl overflow-hidden shadow-lg group">
          <Image
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
            alt="Cookies and Pastries"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#3E2317]/90 via-[#3E2317]/40 to-transparent flex flex-col justify-center p-8 sm:p-12 text-white max-w-xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">SENSORY PERFECTION</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold italic leading-tight">
              Crisp on the outside, molten at the core.
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Every cookie batch rested for 48 hours to intensify browned butter notes and caramelization.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OUR GUIDING PRINCIPLES */}
      <section className="gsap-reveal bg-white/40 border-y border-[#3E2317]/10 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10 text-center">
          <div className="max-w-md mx-auto space-y-1">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">OUR GUIDING PRINCIPLES</span>
            <h2 className="font-serif text-3xl font-bold text-[#3E2317]">What We Believe.</h2>
            <p className="text-xs text-[#705342]">
              The foundational virtues that steer our hearths every single morning before the sun rises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Care in Every Detail</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                We believe small details make a delicious difference—from weighing yeast to the tenth of a gram to measuring oven air velocity.
              </p>
            </div>

            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Quality over Abundance</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                We aim to create products with care and thoughtful attention to ingredients and unhurried preparation. No artificial baking boosters.
              </p>
            </div>

            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Joy Worth Sharing</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                We make treats that feel at home in everyday moments and special celebrations alike—uniting families and friends in quiet delight.
              </p>
            </div>

            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-[#8A612A] block">Always Learning</span>
              <p className="text-xs text-[#705342] leading-relaxed">
                We continue exploring new seasonal flavors, refining our craft, and listening to our patrons with humility and genuine culinary curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE JOURNEY HOME (DARK BANNER) */}
      <section className="gsap-reveal bg-[#2D1B13] text-[#FAF5F0] py-14 px-4 sm:px-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">THE JOURNEY HOME</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Made in Our Kitchen, Shared in Your Moments.</h2>
          <p className="text-xs sm:text-sm text-[#FAF5F0]/70 leading-relaxed">
            From the aroma of something freshly baked to the final slice shared with someone you love, we want every DAKINGO experience to feel thoughtful, comforting, and special.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <span className="bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            ✨ Freshly Baked Every Morning
          </span>
          <span className="bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            ✨ Cold-Chain Protected Delivery
          </span>
          <span className="bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            ✨ Keepsake Cotton Bag Gifting
          </span>
        </div>
      </section>

      {/* 8. THE PEOPLE BEHIND THE MAGIC */}
      <section className="gsap-reveal max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#3E2317]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          <div className="lg:col-span-5">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-[#EFE8E1]">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                alt="Chef Eloise Varma"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-[#3E2317]/10 text-[#3E2317]">
                <p className="font-serif font-bold text-xs">"Patisserie is our primary signal of care."</p>
                <p className="text-[10px] text-[#705342] mt-0.5">— Chef Eloise Varma, Atelier Founder</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest block">THE PEOPLE BEHIND THE MAGIC</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2317]">It Takes Teamwork.</h2>
            <p className="text-xs sm:text-sm text-[#705342] leading-relaxed">
              Led by Executive Chef Eloise Varma, our atelier brings together classically trained pastry chefs, dessert artisans, and dedicated team bakers. Together, they bring a shared commitment to traditional French disciplines while celebrating local Indian botanical profiles—from Malabar vanilla pods to Ratnagiri mango compotes.
            </p>
            <p className="text-xs sm:text-sm text-[#705342] leading-relaxed">
              Every dawn bake begins while the city still sleeps. We measure temperatures, listen to the blister of sourdough crusts, and inspect individual lamination folds so that every box delivered carries our quiet signature of excellence.
            </p>

            <div className="bg-[#FAF5F0] border-l-4 border-[#8A612A] p-4 rounded-r-2xl space-y-1">
              <p className="text-xs italic text-[#3E2317]">
                "We never substitute ferment or sablé shortcuts for our craft. What we preserve is a testament to the discipline of small-batch baking."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. OUR CUSTOMER PROMISE */}
      <section className="gsap-reveal bg-white/40 border-y border-[#3E2317]/10 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10 text-center">
          <div className="max-w-md mx-auto space-y-1">
            <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">OUR CUSTOMER PROMISE</span>
            <h2 className="font-serif text-3xl font-bold text-[#3E2317]">Every Order Deserves Our Care.</h2>
            <p className="text-xs text-[#705342]">
              Whether you're choosing a small everyday treat or something special to share, we want your DAKINGO experience to feel thoughtful from the moment you explore our collection to the moment you open your box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#3E2317]">Thoughtful Presentation</h3>
              <p className="text-xs text-[#705342] leading-relaxed">
                Every treat is nestled in moisture-proof, food-safe packaging accompanied by handcrafted ribbon presentation cards and transport handling rituals.
              </p>
            </div>

            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#3E2317]">Guaranteed Temperature</h3>
              <p className="text-xs text-[#705342] leading-relaxed">
                Refrigerated delivery tracking with live notification keeps your baked creations at their peak structure, texture and flavor.
              </p>
            </div>

            <div className="bg-white border border-[#3E2317]/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#3E2317]">Dietary Integrity</h3>
              <p className="text-xs text-[#705342] leading-relaxed">
                Rigorous separation of pure vegetarian (eggless) and traditional patisserie lines. Clear, verified allergen labeling on every box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DISCOVER THE ATELIER */}
      <section className="gsap-reveal max-w-4xl mx-auto px-4 sm:px-8 py-16 text-center space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">DISCOVER THE ATELIER</span>
          <h2 className="font-serif text-3xl font-bold text-[#3E2317]">Your Next Sweet Favorite is Waiting.</h2>
          <p className="text-xs text-[#705342]">
            Discover the pastries, cookies, custom cakes, and little indulgences made to brighten your day.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3E2317] text-[#FAF5F0] hover:bg-[#2A170F] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            SHOP ALL TREATS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-[#3E2317]/20 text-[#3E2317] hover:bg-[#FAF5F0] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            EXPLORE COOKIES
          </motion.button>
        </div>
      </section>

      {/* 11. STAY CONNECTED (NEWSLETTER) */}
      <section className="gsap-reveal max-w-4xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-white border border-[#3E2317]/10 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-[#FAF5F0] border border-[#3E2317]/10 flex items-center justify-center mx-auto text-[#8A612A]">
            <Mail className="w-4 h-4" />
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#3E2317]">STAY CONNECTED</h3>
            <p className="text-xs text-[#705342]">
              Subscribe to receive early notice of limited seasonal batches, master baker workshops, and private tasting sessions.
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
              className="w-full bg-[#FAF5F0] border border-[#3E2317]/15 rounded-full px-5 py-3 text-xs text-[#3E2317] focus:outline-none focus:border-[#3E2317]"
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
              ✓ Thank you for subscribing to Dakingo updates!
            </p>
          )}
        </div>
      </section>

    </div>
  );
}