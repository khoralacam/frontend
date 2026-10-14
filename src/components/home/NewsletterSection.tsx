"use client";

import { useState, useRef } from "react";
import { Gift, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // GSAP Hover Micro-Interaction on Subscribe Button
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed email:", email);
  };

  return (
    <section className="bg-[#FAF5F0] py-20 px-4 sm:px-8 select-none">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Top Welcome Perk Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3E5D0] border border-[#E2CEB5] px-4 py-1.5 rounded-full shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-[#8A612A]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#3D261B]">
              ATELIER INVITATION • 10% WELCOME PERK[cite: 10]
            </span>
          </div>

          {/* Main Serif Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D261B] tracking-tight leading-[1.15]">
            Sweet Moments, Delivered to Your Inbox[cite: 10]
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm text-[#705342] max-w-2xl mx-auto leading-relaxed font-normal">
            Join the DAKINGO Patron Circle. Receive private alerts when dawn seasonal batches open for reservation, plus an immediate 10% invitation privilege code for your first atelier order[cite: 10].
          </p>
        </motion.div>

        {/* Subscription Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-2xl border border-[#3D261B]/10 shadow-[0_10px_30px_rgba(61,38,27,0.04)]"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            className="w-full px-4 py-3.5 text-xs sm:text-sm text-[#3D261B] placeholder-[#705342]/60 bg-transparent focus:outline-none"
          />

          <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type="submit"
            className="w-full sm:w-auto shrink-0 bg-[#3D261B] hover:bg-[#8A612A] text-[#FAF5F0] text-xs font-bold tracking-wider uppercase px-6 py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>SUBSCRIBE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* Footer Quiet Hours Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[11px] text-[#705342]/80 font-normal tracking-wide"
        >
          We respect your quiet hours. Maximum one seasonal letter per fortnight. Instant unsubscribe anytime[cite: 10].
        </motion.p>

      </div>
    </section>
  );
}