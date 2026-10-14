"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface Dakingo3DLoaderProps {
  onLoadingComplete?: () => void;
}

export default function Dakingo3DLoader({ onLoadingComplete }: Dakingo3DLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const text3DRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth Progress Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // GSAP 3D Rotation and Floating Effect
  useEffect(() => {
    if (text3DRef.current) {
      // Continuous 3D tilt & rotation loop
      gsap.to(text3DRef.current, {
        rotateY: 360,
        rotateX: 12,
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      // Subtle floating Y motion
      gsap.to(text3DRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          ref={containerRef}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#2D1B13] text-[#FAF5F0] flex flex-col items-center justify-between py-12 px-6 select-none overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8A612A]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Top Brand Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880] z-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
            <span>ARTISAN PATISSERIE &amp; ATELIER</span>
          </motion.div>

          {/* Center 3D DAKINGO Logo */}
          <div className="my-auto z-10 flex flex-col items-center justify-center">
            <div
              ref={text3DRef}
              className="relative font-serif text-5xl sm:text-7xl md:text-8xl font-black tracking-widest text-[#FAF5F0] cursor-default"
              style={{
                transformStyle: "preserve-3d",
                textShadow: `
                  0 1px 0 #8A612A,
                  0 2px 0 #704E21,
                  0 3px 0 #583B18,
                  0 4px 0 #402910,
                  0 5px 0 #2A170F,
                  0 10px 20px rgba(0, 0, 0, 0.6)
                `,
              }}
            >
              DAKINGO
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-[11px] sm:text-xs font-medium text-[#C5A880] tracking-[0.3em] uppercase mt-4 italic"
            >
              Freshly Baked at Dawn • 04:30 AM
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="w-full max-w-xs sm:max-w-sm space-y-3 z-10">
            <div className="flex items-center justify-between text-xs font-bold text-[#C5A880] tracking-wider">
              <span>PREPARING ATELIER</span>
              <span>{progress}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8A612A] via-[#C5A880] to-[#FAF5F0] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}