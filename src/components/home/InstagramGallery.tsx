"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

// Custom Camera Icon SVG matching reference image
const CameraIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-4 h-4 stroke-[1.5]"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const instagramImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    alt: "Chef dusting cake with flour",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?q=80&w=800&auto=format&fit=crop",
    alt: "Chef whisking chocolate sauce",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    alt: "Hand tying pink ribbon on luxury DAKINGO gift box",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
    alt: "Fresh artisanal sourdough bread on a wire rack",
  },
];

export default function InstagramGallery() {
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP: Entrance and Hover Interactions
  useGSAP(
    () => {
      // 1. Staggered Entrance of Image Cards
      gsap.fromTo(
        ".gallery-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%", // Animate when top of grid hits 80% of viewport
          },
        }
      );

      // 2. Continuous Subtle Float on Cards
      gsap.to(".gallery-card", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });

      // 3. Hover Effects for each card (scale + overlay)
      const cards = gsap.utils.toArray<HTMLElement>(".gallery-card");
      cards.forEach((card) => {
        const img = card.querySelector(".gallery-img")!;
        const overlay = card.querySelector(".gallery-overlay")!;

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl
          .to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" })
          .to(overlay, { opacity: 0.3, duration: 0.3, ease: "linear" }, 0);

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    },
    { scope: containerRef } // Scopes animations to this container
  );

  return (
    <section ref={containerRef} className="bg-[#FAF5F0] py-16 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        {/* Framer Motion: Scroll Entrance for Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-1.5">
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] font-bold text-[#8A612A]">
              FOLLOW THE FLOUR &amp; FIRE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D261B] tracking-tight">
              Moments at the Atelier <span className="text-[#8A612A]">@DAKINGO</span>
            </h2>
          </div>

          <Link
            href="https://instagram.com/dakingo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#3D261B] hover:text-[#8A612A] transition-colors"
          >
            <span>Follow Us on Instagram</span>
            <CameraIcon />
          </Link>
        </motion.div>

        {/* ================= IMAGE GRID SECTION ================= */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {instagramImages.map((img) => (
            <Link
              key={img.id}
              href="https://instagram.com/dakingo"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card relative aspect-square bg-white rounded-2xl overflow-hidden border border-[#3D261B]/5 shadow-[0_4px_20px_rgba(61,38,27,0.03)] group"
            >
              {/* Image with zoom on hover class */}
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="gallery-img object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Subtle dark overlay on hover */}
              <div className="gallery-overlay absolute inset-0 bg-[#3D261B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}