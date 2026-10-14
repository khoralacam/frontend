"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { MapPin, Clock, ShieldCheck, Snowflake, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Footer() {
  const [email, setEmail] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
  };

  return (
    <footer className="bg-[#FAF5F0] pt-20 pb-12 px-4 sm:px-8 border-t border-[#3D261B]/10 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top 4-Column Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start"
        >
          
          {/* Column 1: Brand & Narrative */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#3D261B]/20 flex items-center justify-center font-serif font-bold text-[#3D261B] text-xs">
                D
              </div>
              <span className="font-serif text-xl font-bold tracking-[0.18em] text-[#3D261B]">
                DAKINGO
              </span>
            </div>

            <p className="text-xs text-[#705342] leading-relaxed font-normal">
              Handcrafted with classical French viennoiserie discipline and refined Indian botanicals. Small batch atelier baking that celebrates authentic provenance, unhurried fermentation, and quiet luxury.
            </p>

            <div className="space-y-2 pt-1 text-xs text-[#705342]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8A612A] shrink-0" />
                <span>Flagship Atelier, Indiranagar</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8A612A] shrink-0" />
                <span>Bake Dawn: 04:30 AM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Boutique Shop Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A612A]">
              BOUTIQUE SHOP
            </h3>
            <ul className="space-y-2.5 text-xs text-[#705342]">
              <li><Link href="/shop/entremets" className="hover:text-[#3D261B] transition-colors">Signature Entremets</Link></li>
              <li><Link href="/shop/viennoiserie" className="hover:text-[#3D261B] transition-colors">Laminated Viennoiserie</Link></li>
              <li><Link href="/shop/sables" className="hover:text-[#3D261B] transition-colors">Butter Sablé &amp; Tin Boxes</Link></li>
              <li><Link href="/shop/cakes" className="hover:text-[#3D261B] transition-colors">Couture Occasion Cakes</Link></li>
              <li><Link href="/shop/macarons" className="hover:text-[#3D261B] transition-colors">Artisan Macaron Boxes</Link></li>
              <li><Link href="/shop/gifting" className="hover:text-[#3D261B] transition-colors">Corporate Gifting Atelier</Link></li>
            </ul>
          </div>

          {/* Column 3: Concierge Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A612A]">
              CONCIERGE
            </h3>
            <ul className="space-y-2.5 text-xs text-[#705342]">
              <li><Link href="/concierge/dispatch" className="hover:text-[#3D261B] transition-colors">Cold-Chain Dispatch Guide</Link></li>
              <li><Link href="/concierge/allergens" className="hover:text-[#3D261B] transition-colors">Dietary &amp; Allergen Index</Link></li>
              <li><Link href="/concierge/serving" className="hover:text-[#3D261B] transition-colors">Storage &amp; Serving Rituals</Link></li>
              <li><Link href="/concierge/tasting" className="hover:text-[#3D261B] transition-colors">Custom Tasting Consultations</Link></li>
              <li><Link href="/concierge/track" className="hover:text-[#3D261B] transition-colors">Track Bakery Delivery</Link></li>
              <li><Link href="/concierge/faq" className="hover:text-[#3D261B] transition-colors">Atelier FAQ &amp; Concierge</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Card & Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#3D261B]/5 shadow-[0_4px_25px_rgba(61,38,27,0.03)] space-y-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#3D261B] tracking-tight">
                  Sweet Moments, Delivered
                </h4>
                <p className="text-xs text-[#705342] mt-1 leading-relaxed font-normal">
                  Subscribe for privileged access to dawn-baked seasonal batches, bespoke pastry drops, and atelier private tastings.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-[#FAF5F0] p-1.5 rounded-xl border border-[#3D261B]/10">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="w-full px-3 py-2 text-xs text-[#3D261B] placeholder-[#705342]/60 bg-transparent focus:outline-none"
                />
                <button
                  ref={buttonRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 h-10 rounded-lg bg-[#3D261B] hover:bg-[#8A612A] text-[#FAF5F0] flex items-center justify-center transition-colors shrink-0 shadow-xs"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 px-1 text-xs text-[#705342]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8A612A]" />
                <span className="font-medium">FSSAI Certified Luxury Atelier</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-[#8A612A]" />
                <span className="font-medium">Zero Preservatives</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Copyright & Payment Badges */}
        <div className="pt-8 border-t border-[#3D261B]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#705342]">
          <p className="font-normal text-center md:text-left">
            &copy; 2025 DAKINGO Haute Patisserie &amp; Atelier. All rights reserved. Crafted with obsessive devotion.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D261B]">
              GUARANTEED SECURE CHECKOUT:
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-white px-2.5 py-1 rounded-md border border-[#3D261B]/10 font-semibold text-[10px] text-[#3D261B] shadow-2xs">UPI</span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-[#3D261B]/10 font-semibold text-[10px] text-[#3D261B] shadow-2xs">Visa / Mastercard</span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-[#3D261B]/10 font-semibold text-[10px] text-[#3D261B] shadow-2xs">NetBanking</span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-[#3D261B]/10 font-semibold text-[10px] text-[#3D261B] shadow-2xs">Amex</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}