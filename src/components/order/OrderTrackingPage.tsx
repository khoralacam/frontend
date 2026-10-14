"use client";

import React from "react";
import {
  Share2,
  Download,
  CheckCircle2,
  Thermometer,
  Clock,
  Truck,
  Package,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Compass,
  MapPin,
  Headphones,
  RotateCcw,
  Utensils,
  Wine,
  Navigation,
} from "lucide-react";

export default function OrderTrackingPage() {
  return (
    <div className="w-full bg-[#FAF6F0] min-h-screen py-6 px-4 sm:px-6 lg:px-12 text-[#3E2317] space-y-8">
      
      {/* 1. TOP DELIVERY STATUS BANNER */}
      <section className="w-full bg-[#FDF5ED] px-6 py-6 sm:py-8 rounded-2xl border border-[#F5E6D8] shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5C3A21] font-medium">
              <span className="bg-[#5C3A21] text-[#FDF5ED] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                COLD-CHAIN TRANSIT LIVE
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#5C3A21]" />
                <span>Order ID: <strong className="font-semibold">#DK-98421</strong></span>
              </span>
              <span className="flex items-center gap-1">
                <Thermometer className="w-4 h-4 text-[#5C3A21]" />
                <span>Vehicle Temp: <strong className="font-semibold">17.8°C (Ideal)</strong></span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#3E2317]">
              Arriving Today by 4:30 PM
            </h1>

            <p className="text-sm sm:text-base text-[#6B5344]">
              Temperature-controlled van is 3.2 km away
              <span className="mx-2 font-bold">•</span>
              <strong className="font-semibold text-[#3E2317]">Estimated in 42 minutes</strong>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-[#3E2317] border border-[#E5D7CA] hover:bg-[#FAF0E6] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <Share2 className="w-4 h-4" />
              <span>SHARE LINK</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 bg-[#3E2317] text-[#FDF5ED] hover:bg-[#2A170F] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD INVOICE</span>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN DASHBOARD GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN (2 SPANS) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* 2. REAL-TIME ARTISAN PROGRESS CARD */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#6B5344] uppercase">
                  ATELIER DISPATCH JOURNEY
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#3E2317] mt-1">
                  Real-Time Artisan Progress
                </h2>
              </div>
              <span className="bg-[#FAF0E6] text-[#5C3A21] border border-[#E5D7CA] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Synchronized 1 min ago
              </span>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-6 border-y border-[#F5E6D8]">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-2 shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#3E2317]">1. PLACED</span>
                <span className="text-[11px] text-[#6B5344]">10:15 AM</span>
                <span className="text-[10px] text-emerald-700 font-medium">Confirmed</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-2 shadow-xs">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#3E2317]">2. HEAD BAKER</span>
                <span className="text-[11px] text-[#6B5344]">10:30 AM</span>
                <span className="text-[10px] text-[#6B5344]">Chef Laurent</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-2 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#3E2317]">3. BAKED & ICED</span>
                <span className="text-[11px] text-[#6B5344]">1:15 PM</span>
                <span className="text-[10px] text-[#6B5344]">Finished Dark Ganache</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-2 shadow-xs">
                  <Thermometer className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#3E2317]">4. CLIMATE CASK</span>
                <span className="text-[11px] text-[#6B5344]">3:20 PM</span>
                <span className="text-[10px] text-[#6B5344]">Sealed at 16°C</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#5C3A21] text-[#FDF5ED] ring-4 ring-[#E5D7CA] flex items-center justify-center mb-2 shadow-sm">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#3E2317]">5. IN TRANSIT</span>
                <span className="text-[11px] text-[#3E2317] font-semibold">3:45 PM</span>
                <span className="text-[10px] text-[#5C3A21] font-bold">Active Courier</span>
              </div>

              <div className="flex flex-col items-center text-center opacity-60">
                <div className="w-10 h-10 rounded-full bg-[#E5D7CA] text-[#6B5344] flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#6B5344]">6. HANDOVER</span>
                <span className="text-[11px] text-[#6B5344]">Est. 4:30 PM</span>
                <span className="text-[10px] text-[#6B5344]">Signature Doorstep</span>
              </div>
            </div>

            {/* Route Telemetry */}
            <div className="mt-6 bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B5344] tracking-wider uppercase">
                    ROUTE TELEMETRY
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#3E2317]">
                    100ft Road, Indiranagar • 0.8 km to 12th Main Junction
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-[#5C3A21] border-t md:border-t-0 md:border-l border-[#E5D7CA] pt-3 md:pt-0 md:pl-6 w-full md:w-auto justify-between">
                <div>
                  <span className="block text-[10px] text-[#6B5344] uppercase">Internal Box Humidity</span>
                  <strong className="font-semibold text-[#3E2317]">52% (Optimum)</strong>
                </div>
                <div>
                  <span className="block text-[10px] text-[#6B5344] uppercase">Anti-Tilt Sensor</span>
                  <span className="flex items-center gap-1 font-semibold text-[#3E2317]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Level 0.0°
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. CHILLED COURIER TRACKING CARD WITH LIVE MAP OVERLAY */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#6B5344] uppercase">
                  DEDICATED DELIVERY FLEET
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#3E2317] mt-1">
                  Chilled Courier Tracking
                </h2>
              </div>
              <span className="bg-[#FAF0E6] text-[#5C3A21] border border-[#E5D7CA] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                <Truck className="w-3.5 h-3.5 text-[#5C3A21]" />
                Live GPS Feed
              </span>
            </div>

            {/* MAP CONTAINER OVERLAY */}
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden border border-[#E5D7CA] bg-[#E8ECEF] shadow-inner">
              {/* Map Tile Background Preview */}
              <div 
                className="absolute inset-0 opacity-85"
                style={{
                  backgroundImage: `radial-gradient(#b1c2d3 1.5px, transparent 1.5px), radial-gradient(#b1c2d3 1.5px, #e5e9ec 1.5px)`,
                  backgroundSize: `30px 30px`,
                  backgroundPosition: `0 0, 15px 15px`
                }}
              />

              {/* Simulated Route Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 60 220 Q 200 120, 480 180 T 800 100"
                  fill="none"
                  stroke="#3E2317"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className="opacity-60"
                />
              </svg>

              {/* Driver Live Location Marker */}
              <div className="absolute top-[48%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#3E2317] text-[#FDF5ED] px-3 py-1.5 rounded-full shadow-lg border-2 border-white z-10 animate-bounce">
                <Navigation className="w-3.5 h-3.5 text-amber-300 fill-amber-300 rotate-45" />
                <span className="text-[11px] font-bold">Van (Live)</span>
              </div>

              {/* Destination Marker */}
              <div className="absolute top-[28%] right-[20%] flex items-center gap-1.5 bg-[#FAF0E6] text-[#3E2317] px-2.5 py-1 rounded-lg border border-[#E5D7CA] shadow-md z-10">
                <MapPin className="w-3.5 h-3.5 text-[#5C3A21]" />
                <span className="text-[10px] font-bold">Indiranagar</span>
              </div>

              {/* Floating Driver Info Banner on Map */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E5D7CA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3E2317] text-[#FDF5ED] font-bold flex items-center justify-center text-sm shadow-xs">
                    RS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-[#3E2317]">Rajesh S.</h3>
                      <span className="bg-emerald-800 text-white text-[9px] px-2 py-0.2 rounded-full font-medium">Verified Driver</span>
                    </div>
                    <p className="text-[11px] text-[#6B5344]">Van: <strong className="font-semibold text-[#3E2317]">DL-04-AK-1049</strong></p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#3E2317] text-[#FDF5ED] hover:bg-[#2A170F] px-3.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </button>
                  <button
                    type="button"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] hover:bg-[#F5E6D8] px-3.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-4">
                <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" /> ORIGIN ATELIER
                </span>
                <p className="text-xs font-bold text-[#3E2317]">DAKINGO Flagship Pastry Kitchen</p>
                <p className="text-xs text-[#6B5344] mt-1">
                  12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru
                </p>
              </div>

              <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-4">
                <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-[#5C3A21]" /> DESTINATION
                </span>
                <p className="text-xs font-bold text-[#3E2317]">Penthouse 402, Magnolia Grove</p>
                <p className="text-xs text-[#6B5344] mt-1">
                  Defense Colony, Indiranagar, Bengaluru - 560038
                </p>
                <p className="text-[11px] text-[#5C3A21] italic mt-2">
                  📌 Note: Hand directly to host; please ring bell softly.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">
          
          {/* 4. ORDER DETAILS CARD */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5E6D8]">
              <h3 className="text-lg font-serif font-bold text-[#3E2317]">Order Details</h3>
              <span className="bg-[#FAF0E6] text-[#5C3A21] border border-[#E5D7CA] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                3 Items
              </span>
            </div>

            <div className="divide-y divide-[#F5E6D8] my-4">
              <div className="py-3.5 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-xl shrink-0">
                    🍰
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#3E2317]">
                      Royal Belgian Dark Truffle
                    </h4>
                    <p className="text-[11px] text-[#6B5344]">1 kg • Eggless Atelier Recipe</p>
                    <span className="inline-block mt-1.5 bg-[#FAF0E6] text-[#5C3A21] text-[10px] px-2 py-0.5 rounded border border-[#E5D7CA] italic">
                      Inscription: &ldquo;Happy 30th Eleanor!&rdquo;
                    </span>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#3E2317] whitespace-nowrap">₹2,100</span>
              </div>

              <div className="py-3.5 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-xl shrink-0">
                    🥐
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#3E2317]">
                      French Almond Croissant Duo
                    </h4>
                    <p className="text-[11px] text-[#6B5344]">1 Box (2 pieces) • Normandy Butter</p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#3E2317] whitespace-nowrap">₹520</span>
              </div>

              <div className="py-3.5 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-xl shrink-0">
                    🕯️
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#3E2317]">
                      Atelier Candle & Gold Match...
                    </h4>
                    <p className="text-[11px] text-[#6B5344]">Champagne Flute Candle & Gold Striker</p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#3E2317] whitespace-nowrap">₹250</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5E6D8] space-y-2 text-xs sm:text-sm text-[#6B5344]">
              <div className="flex justify-between">
                <span>Pastry Subtotal</span>
                <span className="font-semibold text-[#3E2317]">₹2,870</span>
              </div>
              <div className="flex justify-between">
                <span>Chilled Climate Dispatch (Van)</span>
                <span className="font-semibold text-emerald-800">Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>GST & Bakery Packaging</span>
                <span className="font-semibold text-[#3E2317]">Included</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#F5E6D8] text-base font-bold text-[#3E2317]">
                <span>Total Paid</span>
                <span>₹2,870</span>
              </div>
              <p className="text-[11px] text-emerald-800 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Settled via UPI ID: eleanor.m@okhdfcbank
              </p>
            </div>
          </div>

          {/* 5. CALLIGRAPHED NOTE CARD */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 shadow-xs relative">
            <div className="flex items-center justify-between mb-3 text-[11px] font-bold tracking-widest text-[#6B5344] uppercase">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5C3A21]" /> CALLIGRAPHED NOTE
              </span>
              <span>Cotton Rag Stock</span>
            </div>
            
            <blockquote className="text-xs sm:text-sm italic font-serif text-[#3E2317] leading-relaxed relative z-10 pl-3 border-l-2 border-[#E5D7CA]">
              &ldquo;Happy 30th Eleanor! May this new decade be as rich, layered, and delightful as DAKINGO&apos;s finest truffle. Wishing you endless joy, love, and laughter.&rdquo;
            </blockquote>

            <p className="text-right text-xs font-serif font-semibold text-[#5C3A21] mt-3">
              — With love, Siddharth & Maya
            </p>
          </div>

          {/* 6. PASTRY CONCIERGE CARD */}
          <div className="bg-[#3E2317] text-[#FDF5ED] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#5C3A21] flex items-center justify-center text-[#FDF5ED]">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base">Pastry Concierge</h3>
                <p className="text-[11px] text-[#E5D7CA]">Available 08:00 AM – 10:00 PM</p>
              </div>
            </div>

            <p className="text-xs text-[#E5D7CA] leading-relaxed mb-5">
              Need gate delivery assistance, custom celebratory candles, or sudden schedule changes? Connect with our dedicated liaison.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#FAF0E6] text-[#3E2317] hover:bg-white px-3 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL CONCIERGE</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#5C3A21] text-[#FDF5ED] hover:bg-[#4A2D19] px-3 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>REORDER BOX</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 7. TASTING & PRESERVING RITUAL */}
      <section className="max-w-7xl mx-auto bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#6B5344] uppercase">
            PASTRY SOMMELIER ADVICE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#3E2317] mt-1">
            Tasting & Preserving Ritual
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5344] mt-1">
            Our cakes contain zero artificial emulsifiers. Follow these recommendations to experience the precise mouthfeel intended by our executive patissier.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 my-6">
          <button type="button" className="bg-[#FAF0E6] text-[#3E2317] border border-[#E5D7CA] text-xs font-bold px-4 py-2 rounded-lg">
            DARK TRUFFLE CAKE
          </button>
          <button type="button" className="bg-white text-[#6B5344] border border-[#E5D7CA] text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#FAF0E6]">
            ALMOND CROISSANTS
          </button>
          <button type="button" className="bg-white text-[#6B5344] border border-[#E5D7CA] text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#FAF0E6]">
            REFRIGERATION 48H
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-3">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-serif font-bold text-base text-[#3E2317]">15-Min Tempering</h4>
            <p className="text-xs text-[#6B5344] leading-relaxed">
              Allow the Royal Truffle to rest at 22°C ambient temperature for 15 minutes before knife cut. The 70% Callebaut ganache will soften to velvet gloss.
            </p>
          </div>

          <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-3">
              <Utensils className="w-4 h-4" />
            </div>
            <h4 className="font-serif font-bold text-base text-[#3E2317]">Hot Knife Slice</h4>
            <p className="text-xs text-[#6B5344] leading-relaxed">
              Dip the chef&apos;s cake blade into hot water, wipe dry with cotton linen, and glide through in one continuous motion for immaculate mirror-smooth layers.
            </p>
          </div>

          <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center mb-3">
              <Wine className="w-4 h-4" />
            </div>
            <h4 className="font-serif font-bold text-base text-[#3E2317]">Ideal Pairing</h4>
            <p className="text-xs text-[#6B5344] leading-relaxed">
              Best enjoyed alongside pour-over Arabica coffee, single-origin Darjeeling first-flush tea, or vintage dry port.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}