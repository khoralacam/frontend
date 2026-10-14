"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Upload,
  Bookmark,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function CustomCakeStudioPage() {
  // Customization States
  const [selectedSize, setSelectedSize] = useState("classic");
  const [selectedSponge, setSelectedSponge] = useState("truffle");
  const [selectedFrosting, setSelectedFrosting] = useState("ganache");
  const [selectedDietary, setSelectedDietary] = useState("eggless");
  const [plaqueText, setPlaqueText] = useState("Happy 30th Birthday, Eleanor! ✨");
  const [scriptStyle, setScriptStyle] = useState("serif");
  const [deliveryDate, setDeliveryDate] = useState("2026-10-18");
  const [deliverySlot, setDeliverySlot] = useState("evening");

  return (
    <div className="w-full bg-[#FAF6F0] min-h-screen py-6 px-4 sm:px-6 lg:px-12 text-[#3E2317] space-y-8 font-sans">
      
      {/* 1. HEADER & STEPPER NAVIGATION */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#6B5344] uppercase tracking-widest">
              ATELIER CUSTOM CAKE BUILDER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#3E2317] mt-1">
              Bespoke Cake Studio
            </h1>
            <p className="text-xs sm:text-sm text-[#6B5344] mt-1 max-w-2xl">
              Craft an unhurried, hand-layered centerpiece for darlings, milestone celebrations. Every creation is baked at dawn, balanced with botanical infusions, and finished with couture confectionery detailing.
            </p>
          </div>
          <div className="bg-[#FAF0E6] text-[#5C3A21] border border-[#E5D7CA] text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
            <span>Bake Slots Available for Today & Tomorrow</span>
          </div>
        </div>

        {/* 6-Step Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-[11px] font-bold text-[#6B5344] uppercase tracking-wider bg-[#FDF5ED] p-2.5 rounded-2xl border border-[#F5E6D8]">
          <div className="flex items-center gap-2 bg-[#3E2317] text-[#FDF5ED] px-3 py-2 rounded-xl">
            <span className="w-4 h-4 rounded-full bg-[#FAF0E6] text-[#3E2317] flex items-center justify-center text-[10px]">1</span>
            <span>Size & Servings</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
            <span className="w-4 h-4 rounded-full bg-[#E5D7CA] text-[#3E2317] flex items-center justify-center text-[10px]">2</span>
            <span>Sponge Base</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
            <span className="w-4 h-4 rounded-full bg-[#E5D7CA] text-[#3E2317] flex items-center justify-center text-[10px]">3</span>
            <span>Frosting & Palette</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
            <span className="w-4 h-4 rounded-full bg-[#E5D7CA] text-[#3E2317] flex items-center justify-center text-[10px]">4</span>
            <span>Dietary Regime</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
            <span className="w-4 h-4 rounded-full bg-[#E5D7CA] text-[#3E2317] flex items-center justify-center text-[10px]">5</span>
            <span>Message Plaque</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
            <span className="w-4 h-4 rounded-full bg-[#E5D7CA] text-[#3E2317] flex items-center justify-center text-[10px]">6</span>
            <span>Schedule & Notes</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN BUILDER GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: CUSTOMIZATION SECTIONS */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* STEP 01: PROPORTIONS & SERVINGS */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">01</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Proportions & Servings</h2>
                <p className="text-xs text-[#6B5344] mt-0.5">Select scaling matching gathering scale and table aesthetics.</p>
              </div>
              <span className="text-[10px] font-bold bg-[#FAF0E6] text-[#5C3A21] px-2.5 py-1 rounded border border-[#E5D7CA] uppercase">
                Tier 1 / 2 Thickness
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setSelectedSize("petite")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedSize === "petite"
                    ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]"
                    : "bg-white border-[#E5D7CA] hover:bg-[#FAF0E6]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#3E2317]">Petite Tier</h3>
                  <span className="font-bold text-sm text-[#3E2317]">₹1,350</span>
                </div>
                <p className="text-xs text-[#6B5344] mt-1">500 grams • 4 to 6 guests</p>
                <p className="text-[11px] text-[#6B5344] mt-2 italic">Ideal for intimate dinners, children's milestone mornings.</p>
              </div>

              <div
                onClick={() => setSelectedSize("classic")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedSize === "classic"
                    ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]"
                    : "bg-white border-[#E5D7CA] hover:bg-[#FAF0E6]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-[#3E2317]">Classic Celebration</h3>
                    <span className="bg-[#3E2317] text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">POPULAR</span>
                  </div>
                  <span className="font-bold text-sm text-[#3E2317]">₹2,450</span>
                </div>
                <p className="text-xs text-[#6B5344] mt-1">1 kg (6-inch) • 8 to 12 guests</p>
                <p className="text-[11px] text-[#6B5344] mt-2 italic">Classic height with outbound botanical sponge layers.</p>
              </div>

              <div
                onClick={() => setSelectedSize("grand")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedSize === "grand"
                    ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]"
                    : "bg-white border-[#E5D7CA] hover:bg-[#FAF0E6]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#3E2317]">Grand Party</h3>
                  <span className="font-bold text-sm text-[#3E2317]">₹4,100</span>
                </div>
                <p className="text-xs text-[#6B5344] mt-1">2 kg (8-inch wide) • 16 to 20 guests</p>
                <p className="text-[11px] text-[#6B5344] mt-2 italic">Generous dining statement with architectural structural piping.</p>
              </div>

              <div
                onClick={() => setSelectedSize("royal")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedSize === "royal"
                    ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]"
                    : "bg-white border-[#E5D7CA] hover:bg-[#FAF0E6]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#3E2317]">Royal 2-Tier Masterpiece</h3>
                  <span className="font-bold text-sm text-[#3E2317]">₹6,500</span>
                </div>
                <p className="text-xs text-[#6B5344] mt-1">3 kg (Stacked 8" & 5") • 24 to 28 guests</p>
                <p className="text-[11px] text-[#6B5344] mt-2 italic">Sculpted double-tier for luxury events & galas.</p>
              </div>
            </div>
          </div>

          {/* STEP 02: SIGNATURE SPONGE BASE */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div>
              <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">02</span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Signature Sponge Base</h2>
              <p className="text-xs text-[#6B5344] mt-0.5">Slow-steeped botanicals, pure light crumbs, and rich ganaches.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                onClick={() => setSelectedSponge("vanilla")}
                className={`p-3 rounded-xl border cursor-pointer space-y-2 ${
                  selectedSponge === "vanilla" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <div className="w-full h-24 rounded-lg bg-[#FAF0E6] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=400&q=80" alt="Vanilla" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2317]">Madagascar Vanilla</h4>
                <p className="text-[10px] text-[#6B5344] leading-tight">Bourbon vanilla paste infused in cultured cream.</p>
              </div>

              <div
                onClick={() => setSelectedSponge("truffle")}
                className={`p-3 rounded-xl border cursor-pointer space-y-2 ${
                  selectedSponge === "truffle" ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <div className="w-full h-24 rounded-lg bg-[#FAF0E6] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80" alt="Dark Truffle" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2317]">Dark Belgian Truffle</h4>
                <p className="text-[10px] text-[#6B5344] leading-tight">70% Callebaut dark ganache & handcrafted sponge.</p>
              </div>

              <div
                onClick={() => setSelectedSponge("pistachio")}
                className={`p-3 rounded-xl border cursor-pointer space-y-2 ${
                  selectedSponge === "pistachio" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <div className="w-full h-24 rounded-lg bg-[#FAF0E6] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80" alt="Pistachio" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2317]">Sicilian Pistachio</h4>
                <p className="text-[10px] text-[#6B5344] leading-tight">Pure Bronte nut paste with sweet avant-garde finish.</p>
              </div>

              <div
                onClick={() => setSelectedSponge("carrot")}
                className={`p-3 rounded-xl border cursor-pointer space-y-2 ${
                  selectedSponge === "carrot" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <div className="w-full h-24 rounded-lg bg-[#FAF0E6] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" alt="Carrot" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2317]">Spiced Carrot & Walnut</h4>
                <p className="text-[10px] text-[#6B5344] leading-tight">Cinnamon & roasted heirloom walnuts.</p>
              </div>

              <div
                onClick={() => setSelectedSponge("redvelvet")}
                className={`p-3 rounded-xl border cursor-pointer space-y-2 ${
                  selectedSponge === "redvelvet" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <div className="w-full h-24 rounded-lg bg-[#FAF0E6] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1586788680404-3282110c3b88?auto=format&fit=crop&w=400&q=80" alt="Red Velvet" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2317]">Red Velvet Cocoa</h4>
                <p className="text-[10px] text-[#6B5344] leading-tight">Mild cocoa sponge with cultured cream cheese.</p>
              </div>
            </div>
          </div>

          {/* STEP 03: ARTISAN FROSTING & FINISHING */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div>
              <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">03</span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Artisan Frosting & Surface Finishing</h2>
              <p className="text-xs text-[#6B5344] mt-0.5">The exterior palette that defines your bespoke presentation.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setSelectedFrosting("buttercream")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedFrosting === "buttercream" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <h4 className="font-bold text-xs text-[#3E2317]">Whipped Swiss Buttercream</h4>
                <p className="text-[11px] text-[#6B5344] mt-1">Silken, ultra-light texture with reduced sweetness.</p>
                <span className="text-[10px] text-[#5C3A21] font-semibold mt-2 inline-block">✨ Alabaster Cream Finish</span>
              </div>

              <div
                onClick={() => setSelectedFrosting("ganache")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedFrosting === "ganache" ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <h4 className="font-bold text-xs text-[#3E2317]">Silky Chocolate Ganache</h4>
                <p className="text-[11px] text-[#6B5344] mt-1">Mirror-gloss deep cocoa lacquer over everyday tier.</p>
                <span className="text-[10px] text-[#5C3A21] font-semibold mt-2 inline-block">✨ Signature Dark Espresso Hue</span>
              </div>

              <div
                onClick={() => setSelectedFrosting("creamcheese")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedFrosting === "creamcheese" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <h4 className="font-bold text-xs text-[#3E2317]">Cream Cheese Glaze</h4>
                <p className="text-[11px] text-[#6B5344] mt-1">Cultured tart softness paired with French orange blossom freshness.</p>
                <span className="text-[10px] text-[#5C3A21] font-semibold mt-2 inline-block">✨ Warm Ivory Silk Finish</span>
              </div>

              <div
                onClick={() => setSelectedFrosting("naked")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedFrosting === "naked" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <h4 className="font-bold text-xs text-[#3E2317]">Naked Rustic Finish</h4>
                <p className="text-[11px] text-[#6B5344] mt-1">Exposed baked crumb edges with whispers of scraped ganache.</p>
                <span className="text-[10px] text-[#5C3A21] font-semibold mt-2 inline-block">✨ Botanical Organic Look</span>
              </div>
            </div>
          </div>

          {/* STEP 04: DIETARY SPECIFICATION */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">04</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Dietary Specification</h2>
                <p className="text-xs text-[#6B5344] mt-0.5">Prepared in dedicated segregated prep kitchen zones.</p>
              </div>
              <span className="text-[10px] text-[#5C3A21] font-bold uppercase">Pure Ingredients</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                onClick={() => setSelectedDietary("standard")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedDietary === "standard" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <h4 className="font-bold text-xs text-[#3E2317]">Standard Classic</h4>
                <p className="text-[10px] text-[#6B5344] mt-1">Traditional French recipe with fresh pasteurized farm eggs.</p>
                <span className="text-[10px] text-[#6B5344] font-semibold mt-2 inline-block">Included</span>
              </div>

              <div
                onClick={() => setSelectedDietary("eggless")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedDietary === "eggless" ? "bg-[#FAF0E6] border-[#3E2317] ring-1 ring-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                  <h4 className="font-bold text-xs text-[#3E2317]">100% Eggless</h4>
                </div>
                <p className="text-[10px] text-[#6B5344] mt-1">Pure veg recipe using artisanal flax & cultured yogurt.</p>
                <span className="text-[10px] text-emerald-800 font-bold mt-2 inline-block">Zero Extra Charge</span>
              </div>

              <div
                onClick={() => setSelectedDietary("gluten")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedDietary === "gluten" ? "bg-[#FAF0E6] border-[#3E2317]" : "bg-white border-[#E5D7CA]"
                }`}
              >
                <h4 className="font-bold text-xs text-[#3E2317]">Gluten-Sensitive</h4>
                <p className="text-[10px] text-[#6B5344] mt-1">Milled almond & tapioca flour blends.</p>
                <span className="text-[10px] text-[#5C3A21] font-bold mt-2 inline-block">+₹350 Per Tier</span>
              </div>
            </div>
          </div>

          {/* STEP 05: CHOCOLATE PLAQUE */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">05</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Hand-Piped Chocolate Plaque & Accents</h2>
                <p className="text-xs text-[#6B5344] mt-0.5">Gilded dark chocolate banner with artisanal inscription.</p>
              </div>
              <span className="text-xs font-bold text-[#3E2317]">+₹250</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="w-full sm:flex-1">
                  <label className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block mb-1">
                    INSCRIPTION ON DARK CHOCOLATE PLAQUE
                  </label>
                  <input
                    type="text"
                    value={plaqueText}
                    onChange={(e) => setPlaqueText(e.target.value)}
                    maxLength={32}
                    className="w-full bg-white border border-[#E5D7CA] rounded-xl px-4 py-2.5 text-xs text-[#3E2317] focus:outline-none focus:border-[#3E2317]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block mb-1">SCRIPT STYLE</label>
                  <div className="flex bg-white border border-[#E5D7CA] rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => setScriptStyle("serif")}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg ${
                        scriptStyle === "serif" ? "bg-[#3E2317] text-white" : "text-[#6B5344]"
                      }`}
                    >
                      Modern Serif
                    </button>
                    <button
                      type="button"
                      onClick={() => setScriptStyle("calligraphy")}
                      className={`px-3 py-1.5 text-xs font-serif italic rounded-lg ${
                        scriptStyle === "calligraphy" ? "bg-[#3E2317] text-white" : "text-[#6B5344]"
                      }`}
                    >
                      Calligraphy
                    </button>
                  </div>
                </div>
              </div>

              {/* Plaque Dark Box Preview */}
              <div className="bg-[#3E2317] text-[#FDF5ED] p-4 rounded-xl flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[9px] text-[#E5D7CA] uppercase tracking-wider block">PLAQUE PREVIEW AS PIPED:</span>
                  <p className={`text-sm mt-0.5 ${scriptStyle === "calligraphy" ? "font-serif italic text-amber-200" : "font-semibold"}`}>
                    "{plaqueText}"
                  </p>
                </div>
                <span className="text-[10px] bg-[#5C3A21] px-2.5 py-1 rounded border border-[#E5D7CA] text-[#FDF5ED] italic">
                  24k Gold Dust Finished
                </span>
              </div>
            </div>
          </div>

          {/* STEP 06: INSPIRATION & NOTES */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div>
              <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">06</span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Inspiration & Patissier Notes</h2>
              <p className="text-xs text-[#6B5344] mt-0.5">Attach moodboards, specific flower references, or dietary notes.</p>
            </div>

            <div className="border-2 border-dashed border-[#E5D7CA] bg-[#FAF0E6] rounded-xl p-6 text-center space-y-2 cursor-pointer hover:border-[#3E2317] transition-colors">
              <div className="w-10 h-10 rounded-full bg-white text-[#3E2317] flex items-center justify-center mx-auto shadow-xs">
                <Upload className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs text-[#3E2317]">Upload Floral Palette or Reference Cake Photo</h4>
              <p className="text-[10px] text-[#6B5344]">Supports PNG, JPG, WEBP formats (Up to 10MB)</p>
              <span className="inline-block text-[10px] text-[#5C3A21] underline font-medium">📌 Eleanor_Celebration_Moodboard.jpg (1.4MB) attached</span>
            </div>

            <div>
              <label className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block mb-1">
                DIRECT INSTRUCTIONS FOR MASTER BAKER:
              </label>
              <textarea
                rows={3}
                placeholder="E.g., Please incorporate subtle champagne gold leaf flakes around the base tier; less sweet dark chocolate ganache as discussed on email..."
                className="w-full bg-white border border-[#E5D7CA] rounded-xl p-3 text-xs text-[#3E2317] focus:outline-none focus:border-[#3E2317]"
              />
            </div>
          </div>

          {/* STEP 07: COLD-CHAIN DISPATCH SLOT */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-widest">07</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">Cold-Chain Dispatch Slot</h2>
                <p className="text-xs text-[#6B5344] mt-0.5">Hand-delivered in temperature-stabilized luxury cake casks.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block mb-1">DELIVERY DATE</label>
                <div className="relative">
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full bg-white border border-[#E5D7CA] rounded-xl px-4 py-2.5 text-xs text-[#3E2317] focus:outline-none focus:border-[#3E2317]"
                  />
                  <CalendarIcon className="w-4 h-4 text-[#6B5344] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <span className="text-[10px] text-[#6B5344] mt-1 block">📌 Minimum 24 hours advance bake window required</span>
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block mb-1">PROTECTED DELIVERY WINDOW</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliverySlot("morning")}
                    className={`p-2.5 rounded-xl border text-center transition-colors ${
                      deliverySlot === "morning" ? "bg-[#3E2317] text-white border-[#3E2317]" : "bg-white text-[#3E2317] border-[#E5D7CA]"
                    }`}
                  >
                    <span className="block text-xs font-bold">Morning</span>
                    <span className="text-[9px] opacity-80">10:00 AM - 1:00 PM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliverySlot("evening")}
                    className={`p-2.5 rounded-xl border text-center transition-colors ${
                      deliverySlot === "evening" ? "bg-[#3E2317] text-white border-[#3E2317]" : "bg-white text-[#3E2317] border-[#E5D7CA]"
                    }`}
                  >
                    <span className="block text-xs font-bold">Evening Slot</span>
                    <span className="text-[9px] opacity-80">4:00 PM - 8:00 PM</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: STICKY SUMMARY CARD */}
        <div className="space-y-6">
          <div className="sticky top-25 bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 shadow-md space-y-5">
            
            {/* Cake Image Render */}
            <div className="relative w-full h-56 rounded-xl bg-[#FAF0E6] overflow-hidden border border-[#E5D7CA]">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                alt="Custom Cake Blueprint"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#3E2317] text-[#FDF5ED] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                CHEF'S SELECTION
              </span>
              <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#3E2317] text-[9px] font-semibold px-2 py-0.5 rounded border border-[#E5D7CA]">
                100% EGGLESS
              </span>

              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xs text-white p-2.5 rounded-lg text-center">
                <span className="text-[9px] uppercase tracking-widest text-amber-300 block">HAND-WRITTEN INSCRIPTION</span>
                <p className="font-serif italic text-xs font-medium">"{plaqueText}"</p>
              </div>
            </div>

            {/* Title & Price */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-xl text-[#3E2317]">Classic Celebration (1 kg)</h3>
                <span className="text-xl font-bold text-[#3E2317]">₹2,450</span>
              </div>
              <p className="text-xs text-[#6B5344] mt-0.5">Tailored for 8–12 guests • Haute Patisserie Build</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-2 text-xs text-[#6B5344] border-t border-[#F5E6D8] pt-4">
              <div className="flex justify-between">
                <span>Base Tiering (Artisan Sponge)</span>
                <span className="font-semibold text-[#3E2317]">₹2,200</span>
              </div>
              <div className="flex justify-between">
                <span>100% Eggless Pure Veg</span>
                <span className="font-semibold text-emerald-800">₹0 (Included)</span>
              </div>
              <div className="flex justify-between">
                <span>Gold Leaf & Plaque Inscription</span>
                <span className="font-semibold text-[#3E2317]">₹250</span>
              </div>
              <div className="flex justify-between">
                <span>Temperature-Controlled Van</span>
                <span className="font-semibold text-emerald-800">Complimentary</span>
              </div>
            </div>

            {/* Inscription Box */}
            <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 text-xs space-y-1">
              <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block">INSCRIPTION PLAQUE:</span>
              <p className="font-serif italic text-[#3E2317]">"{plaqueText}"</p>
            </div>

            {/* Turnaround Badge */}
            <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 text-xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#5C3A21] shrink-0" />
              <div>
                <span className="font-bold text-[#3E2317] block">24-Hours Atelier Natural Slow-Bake</span>
                <span className="text-[10px] text-[#6B5344]">Baked on time slot; launch 2 hours prior to dispatch.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                className="w-full bg-[#3E2317] text-[#FDF5ED] hover:bg-[#2A170F] py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <span>ADD BESPOKE CREATION TO CART (₹2,450)</span>
              </button>

              <button
                type="button"
                className="w-full bg-white text-[#3E2317] border border-[#E5D7CA] hover:bg-[#FAF0E6] py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>SAVE CUSTOM BLUEPRINT TO WISHLIST</span>
              </button>
            </div>

            {/* Assurances */}
            <div className="pt-2 text-[11px] text-[#6B5344] space-y-1">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                Direct WhatsApp consultation with head pastry team following order.
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                100% Damage-free delivery guarantee with thermal box seal.
              </p>
            </div>

          </div>

          <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5C3A21]" />
              <h4 className="font-serif font-bold text-sm text-[#3E2317]">Complementary 6-Piece Macarons?</h4>
            </div>
            <p className="text-xs text-[#6B5344] leading-relaxed">
              Add a bespoke box of Rose-Raspberry & Passionfruit macarons at checkout.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}