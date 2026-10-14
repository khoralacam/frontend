"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Download,
  MapPin,
  TrendingUp,
  ShoppingBag,
  Clock,
  Truck,
  AlertTriangle,
  Users,
  Search,
  Plus,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal,
  Package,
  Compass,
  Layers,
  FileText,
  Boxes,
  Star,
  Settings,
  ShieldCheck,
  Gift,
} from "lucide-react";

export default function AdminDashboardContent() {
  const [activeSidebarTab, setActiveSidebarTab] = useState("overview");

  return (
    <div className="w-full bg-[#FAF6F0] min-h-screen text-[#3E2317] font-sans flex flex-col select-none">
      
      {/* =========================================================
          EXACT EXECUTIVE TOP BAR (FROM SCREENSHOT)
         ========================================================= */}
      <div className="bg-[#3E2317] text-[#FAF5F0] px-4 sm:px-6 py-2.5 text-xs flex flex-wrap items-center justify-between border-b border-[#FAF5F0]/10 gap-3">
        <div className="flex items-center gap-3 overflow-x-auto">
          <div className="flex items-center gap-2 bg-[#2E1911] border border-[#FAF5F0]/20 px-3 py-1 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-serif font-bold tracking-[0.1em] text-sm text-white">DAKINGO</span>
            <span className="text-[9px] text-[#C5A880] uppercase tracking-wider font-semibold">EXECUTIVE OPERATIONS &amp; HUB</span>
          </div>
          <span className="bg-[#8A612A] text-white font-bold px-2.5 py-1 rounded text-[10px] tracking-wider uppercase">
            AM 04:45 • DAWN BAKED
          </span>
          <span className="text-[11px] text-[#C5A880] font-semibold hidden md:inline">
            Real-time Telemetry: Active (6 Vans)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-3.5 h-3.5 text-[#E5D7CA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Custom atelier (e.g. SK-98421)..."
              className="bg-[#2E1911] text-white border border-[#FAF5F0]/20 rounded-xl pl-8 pr-3 py-1.5 text-[11px] focus:outline-none placeholder:text-stone-400 w-64"
            />
          </div>
          <button className="bg-[#8A612A] hover:bg-[#704E21] text-white font-bold px-3.5 py-1.5 rounded-xl text-[11px] flex items-center gap-1.5 shadow-sm transition-colors">
            <Plus className="w-3.5 h-3.5" /> Add New Delivery
          </button>
          <div className="flex items-center gap-1.5 bg-[#2E1911] border border-[#FAF5F0]/20 px-3 py-1 rounded-xl text-[11px] font-bold text-[#FAF5F0]">
            <span>Encountering</span>
            <span className="text-[10px]">▼</span>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5">
        
        {/* =========================================================
            LEFT OPERATIONS CENTER SIDEBAR (EXACT FROM SCREENSHOT)
           ========================================================= */}
        <aside className="bg-[#3E2317] text-[#FAF5F0] p-4 lg:p-5 space-y-6 lg:border-r border-[#FAF5F0]/10">
          
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-[#C5A880] uppercase tracking-widest block px-2">
              OPERATIONS CENTER
            </span>

            <div className="space-y-0.5 pt-1">
              <button
                onClick={() => setActiveSidebarTab("overview")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeSidebarTab === "overview"
                    ? "bg-[#8A612A] text-white shadow-xs"
                    : "text-[#FAF5F0]/90 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-[#C5A880]" />
                  <span>Overview & intelligence</span>
                </div>
                <span className="text-[10px]">▶</span>
              </button>

              <button
                onClick={() => setActiveSidebarTab("dispatch")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeSidebarTab === "dispatch"
                    ? "bg-[#8A612A] text-white shadow-xs"
                    : "text-[#FAF5F0]/90 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#C5A880]" />
                  <span>Dispatch & Orders</span>
                </div>
                <span className="bg-[#8A612A] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                  14 Active
                </span>
              </button>

              <button
                onClick={() => setActiveSidebarTab("bespoke")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeSidebarTab === "bespoke"
                    ? "bg-[#8A612A] text-white shadow-xs"
                    : "text-[#FAF5F0]/90 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span>Bespoke Cake Atelier</span>
                </div>
                <span className="bg-[#C5A880] text-[#3E2317] text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                  4 Appraisals
                </span>
              </button>

              <button
                onClick={() => setActiveSidebarTab("deliveries")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeSidebarTab === "deliveries"
                    ? "bg-[#8A612A] text-white shadow-xs"
                    : "text-[#FAF5F0]/90 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-[#C5A880]" />
                  <span>Bakery Deliveries & SKU</span>
                </div>
                <span className="text-[10px] text-stone-300">40 Items</span>
              </button>

              <button
                onClick={() => setActiveSidebarTab("stock")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeSidebarTab === "stock"
                    ? "bg-[#8A612A] text-white shadow-xs"
                    : "text-[#FAF5F0]/90 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#C5A880]" />
                  <span>Ingredients & Cold Stock</span>
                </div>
                <span className="bg-rose-900 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                  2 Low
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-[#FAF5F0]/10">
            <span className="text-[9px] font-bold text-[#C5A880] uppercase tracking-widest block px-2">
              STOREFRONT &amp; CURATION
            </span>

            <div className="space-y-0.5 pt-1">
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-stone-400" />
                  <span>Hero Carousel | CMS</span>
                </div>
                <span className="text-[9px] bg-emerald-800 text-white px-1.5 py-0.2 rounded font-bold">Active Sliders</span>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <Boxes className="w-4 h-4 text-stone-400" />
                  <span>Master Categories</span>
                </div>
                <span className="text-[10px] text-stone-400">8 Groups</span>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-stone-400" />
                  <span>Flavour Directory</span>
                </div>
                <span className="text-[10px] text-stone-400">1,480 Custom</span>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-stone-400" />
                  <span>Gifting Pralines & Packs</span>
                </div>
                <span className="text-[10px] text-stone-400">12 Boxes</span>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4 text-stone-400" />
                  <span>Purified Reviews</span>
                </div>
                <span className="text-[10px] text-stone-400">4.92 ★</span>
              </button>
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-[#FAF5F0]/10">
            <span className="text-[9px] font-bold text-[#C5A880] uppercase tracking-widest block px-2">
              GOVERNANCE
            </span>

            <div className="space-y-0.5 pt-1">
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-stone-400" />
                  <span>Cold-Chain Telemetry</span>
                </div>
                <span className="text-[9px] bg-emerald-800 text-white px-1.5 py-0.2 rounded font-bold">+1°C</span>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#FAF5F0]/90 hover:bg-white/5">
                <div className="flex items-center gap-2.5">
                  <Settings className="w-4 h-4 text-stone-400" />
                  <span>Master Settings & Tax</span>
                </div>
              </button>
            </div>
          </div>

        </aside>

        {/* =========================================================
            RIGHT MAIN WORKSPACE (4 COLUMNS)
           ========================================================= */}
        <main className="lg:col-span-4 p-6 sm:p-8 space-y-6 bg-[#FAF6F0]">
          
          {/* 1. TOP BANNER: ATELIER PULSE & REVENUE */}
          <section className="bg-[#3E2317] text-[#FAF5F0] rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md relative overflow-hidden">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">
                <span>MORNING DAWN SHIFT</span>
                <span>•</span>
                <span>BAKER AM 4:45</span>
                <span>•</span>
                <span>Pastry Sommelier Conclave</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                Atelier Pulse & Morning Revenue
              </h1>

              <p className="text-xs text-[#E5D7CA]/80 leading-relaxed">
                Daily revenue tracking +24.2% above target. 6 temperature-locked refrigerated vans in active navigation. Cold-chain storage, and white-glove handovers operational.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button className="bg-[#FAF5F0] text-[#3E2317] hover:bg-[#E5D7CA] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm">
                <Download className="w-3.5 h-3.5" />
                <span>Generate Dawn Audit (PDF)</span>
              </button>
              <button className="bg-[#8A612A] text-white hover:bg-[#704E21] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm">
                <Truck className="w-3.5 h-3.5" />
                <span>Cold-Chain Live Map</span>
              </button>
            </div>
          </section>

          {/* 2. 6 METRICS CARDS */}
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-xl p-3.5 space-y-1 shadow-2xs">
              <span className="text-[9px] font-bold text-[#8A612A] uppercase tracking-wider block">TODAY'S REVENUE</span>
              <div className="text-lg font-serif font-bold text-[#3E2317]">₹24,84,650</div>
              <span className="text-[10px] text-emerald-800 font-semibold block">▲ +14% vs yesterday</span>
            </div>

            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-xl p-3.5 space-y-1 shadow-2xs">
              <span className="text-[9px] font-bold text-[#8A612A] uppercase tracking-wider block">TOTAL ORDERS</span>
              <div className="text-lg font-serif font-bold text-[#3E2317]">114</div>
              <span className="text-[10px] text-[#6B5344] block">74 active • 40 delivered</span>
            </div>

            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-xl p-3.5 space-y-1 shadow-2xs">
              <span className="text-[9px] font-bold text-[#8A612A] uppercase tracking-wider block">AVG ORDER VALUE</span>
              <div className="text-lg font-serif font-bold text-[#3E2317]">₹2,406</div>
              <span className="text-[10px] text-emerald-800 font-semibold block">▲ +8% breakfast rush</span>
            </div>

            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-xl p-3.5 space-y-1 shadow-2xs">
              <span className="text-[9px] font-bold text-[#8A612A] uppercase tracking-wider block">IN PREPARATION</span>
              <div className="text-lg font-serif font-bold text-[#3E2317]">18 Bakes</div>
              <span className="text-[10px] text-[#6B5344] block">Priority: 12 • Queue: 06 AM</span>
            </div>

            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-xl p-3.5 space-y-1 shadow-2xs">
              <span className="text-[9px] font-bold text-[#8A612A] uppercase tracking-wider block">IN-TRANSIT VANS</span>
              <div className="text-lg font-serif font-bold text-[#3E2317]">1,482</div>
              <span className="text-[10px] text-emerald-800 font-semibold block">▲ 98% on-time drop</span>
            </div>

            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-xl p-3.5 space-y-1 shadow-2xs">
              <span className="text-[9px] font-bold text-rose-800 uppercase tracking-wider block">STOCK ALERTS</span>
              <div className="text-lg font-serif font-bold text-rose-900">2 Alerts</div>
              <span className="text-[10px] text-rose-800 font-semibold block">DSP butter & flour 4%</span>
            </div>
          </section>

          {/* 3. REVENUE & ATELIER VELOCITY + DEMOGRAPHICS */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#3E2317]">
                    Revenue & Atelier Order Velocity
                  </h3>
                  <p className="text-xs text-[#6B5344]">
                    Tracking daily hourly sales against cold-van delivery targets
                  </p>
                </div>
                <div className="flex bg-[#FAF0E6] p-1 rounded-xl border border-[#E5D7CA] text-xs font-semibold">
                  <button className="px-3 py-1 bg-[#3E2317] text-white rounded-lg shadow-2xs">Hourly</button>
                  <button className="px-3 py-1 text-[#6B5344]">Daily</button>
                  <button className="px-3 py-1 text-[#6B5344]">Weekly</button>
                  <button className="px-3 py-1 text-[#6B5344]">Monthly</button>
                </div>
              </div>

              {/* Bar Graph Simulation */}
              <div className="h-44 flex items-end gap-3 pt-6 px-4 border-b border-[#E5D7CA] relative">
                <div className="absolute top-2 right-4 bg-[#3E2317] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Peak 14:00
                </div>
                <div className="flex-1 bg-[#E5D7CA]/40 rounded-t h-[40%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-[#6B5344]">06:00</div>
                <div className="flex-1 bg-[#E5D7CA]/60 rounded-t h-[65%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-[#6B5344]">08:00</div>
                <div className="flex-1 bg-[#8A612A]/70 rounded-t h-[80%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-white">10:00</div>
                <div className="flex-1 bg-[#8A612A] rounded-t h-[55%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-white">12:00</div>
                <div className="flex-1 bg-[#3E2317] rounded-t h-[95%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-white">14:00</div>
                <div className="flex-1 bg-[#8A612A] rounded-t h-[70%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-white">16:00</div>
                <div className="flex-1 bg-[#E5D7CA]/60 rounded-t h-[45%] flex flex-col justify-end items-center pb-2 text-[9px] font-bold text-[#6B5344]">18:00</div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-[#6B5344] pt-1">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#3E2317]" /> Signature Entremets & Truffles (42%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#8A612A]" /> Custom Atelier Cakes (31%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#E5D7CA]" /> Viennoiserie (27%)</span>
                </div>
                <span className="font-bold text-[#3E2317]">100% Cold-Chain Dispatch Certified</span>
              </div>
            </div>

            {/* Demographics Box */}
            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-[#3E2317]">
                  Dietary & Batch Demographics
                </h3>
                <span className="text-[10px] font-bold bg-[#FAF0E6] text-[#8A612A] border border-[#E5D7CA] px-2 py-0.5 rounded">
                  Today's Mix
                </span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>100% Eggless (Eggless/Vgn)</span>
                    <span className="text-[#8A612A]">78 orders</span>
                  </div>
                  <div className="w-full bg-[#FAF0E6] h-2 rounded-full overflow-hidden border border-[#E5D7CA]">
                    <div className="bg-[#3E2317] h-full w-[70%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Classic French Farm-Egg (24%)</span>
                    <span className="text-[#8A612A]">27 orders</span>
                  </div>
                  <div className="w-full bg-[#FAF0E6] h-2 rounded-full overflow-hidden border border-[#E5D7CA]">
                    <div className="bg-[#8A612A] h-full w-[24%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Gluten Sensitive / Almond Flour</span>
                    <span className="text-[#8A612A]">09 orders</span>
                  </div>
                  <div className="w-full bg-[#FAF0E6] h-2 rounded-full overflow-hidden border border-[#E5D7CA]">
                    <div className="bg-[#D4A373] h-full w-[10%]" />
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#3E2317]">
                  <span>Cold-Chain Compliance Index</span>
                  <span className="text-emerald-800">99.8%</span>
                </div>
                <p className="text-[10px] text-[#6B5344]">
                  All perishables and bakes maintained between 16.5°C and 18.0°C. Zero excursion alarms recorded.
                </p>
              </div>

              <button className="w-full bg-white border border-[#E5D7CA] hover:bg-[#FAF0E6] text-[#3E2317] py-2 rounded-xl text-xs font-bold uppercase tracking-wider">
                View Detailed Sensor QC Audit →
              </button>
            </div>
          </section>

          {/* 4. LIVE KITCHEN QUEUE & CHILLED DISPATCHES */}
          <section className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">
                    Live Kitchen Queue & Chilled Dispatches
                  </h2>
                  <span className="bg-[#8A612A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    50 Active + 24 Flight
                  </span>
                </div>
                <p className="text-xs text-[#6B5344] mt-0.5">
                  Real-time status updates from morning oven purifications to white-glove van handovers
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex bg-[#FAF0E6] p-1 rounded-xl border border-[#E5D7CA] text-xs font-semibold">
                  <button className="px-3 py-1.5 bg-[#3E2317] text-white rounded-lg shadow-2xs">All Orders (74)</button>
                  <button className="px-3 py-1.5 text-[#6B5344]">Kitchen Batch (18)</button>
                  <button className="px-3 py-1.5 text-[#6B5344]">In-Transit (6)</button>
                  <button className="px-3 py-1.5 text-[#6B5344]">Oakwood (50)</button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#3E2317] border-collapse">
                <thead>
                  <tr className="border-b border-[#E5D7CA] text-[10px] font-bold uppercase tracking-wider text-[#8A612A]">
                    <th className="py-3 px-3">ORDER ID & TIME</th>
                    <th className="py-3 px-3">CUSTOMER & DESTINATION</th>
                    <th className="py-3 px-3">DELICACIES & CUSTOM SKEW</th>
                    <th className="py-3 px-3">VAN & TELEMETRY RATE</th>
                    <th className="py-3 px-3">AMOUNT</th>
                    <th className="py-3 px-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5E6D8]">
                  <tr>
                    <td className="py-4 px-3 align-top">
                      <span className="font-bold block text-sm">#DK-98421</span>
                      <span className="text-[10px] text-[#6B5344]">Today, 04:30 PM</span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-bold block">Eleanor Varma</span>
                      <span className="text-[10px] text-[#6B5344] block">Penthouse 402, Magnolia Grove, Indiranagar</span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-serif font-bold text-sm block">Royal Belgian Dark Truffle (1 kg)</span>
                      <span className="text-[10px] text-[#6B5344] block">+ French Almond Croissant Duo (2 pcs)</span>
                      <span className="inline-block mt-1 bg-[#FAF0E6] border border-[#E5D7CA] text-[9px] font-bold px-2 py-0.5 rounded text-[#8A612A]">
                        100% Eggless
                      </span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-semibold block">Today, 04:30 PM</span>
                      <span className="text-[10px] text-emerald-800 font-bold">● 17.8°C • Specially Trained Van #04</span>
                    </td>
                    <td className="py-4 px-3 align-top font-serif font-bold text-sm">₹2,870</td>
                    <td className="py-4 px-3 align-top text-right">
                      <span className="bg-[#8A612A] text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider inline-block">
                        CHILLED IN-TRANSIT
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-3 align-top">
                      <span className="font-bold block text-sm">#DK-98420</span>
                      <span className="text-[10px] text-[#6B5344]">Today, 03:15 PM</span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-bold block">Dr. Siddharth & Magdalen</span>
                      <span className="text-[10px] text-[#6B5344] block">Lanka Causeway Ballroom Tables, MG Rd</span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-serif font-bold text-sm block">Royal 3 - Tier Marzipan Palace (3 kg)</span>
                      <span className="text-[10px] text-[#6B5344] block">Gold Leaf Dust, Pistachio Praline Filling</span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-semibold block">Tomorrow, 09:30 AM</span>
                      <span className="text-[10px] text-[#6B5344]">Batch Preparation in Morning</span>
                    </td>
                    <td className="py-4 px-3 align-top font-serif font-bold text-sm">₹11,450</td>
                    <td className="py-4 px-3 align-top text-right">
                      <span className="bg-emerald-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider inline-block">
                        Kitchen Confirmed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-[#6B5344]">
              <span>Showing 1 of 74 active bakery transactions</span>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 bg-white border border-[#E5D7CA] rounded-lg font-bold">Previous</button>
                <button className="w-7 h-7 bg-[#3E2317] text-white rounded-lg font-bold flex items-center justify-center">1</button>
                <button className="w-7 h-7 bg-white border border-[#E5D7CA] rounded-lg font-semibold flex items-center justify-center">2</button>
                <button className="px-3 py-1 bg-white border border-[#E5D7CA] rounded-lg font-bold">Next →</button>
              </div>
            </div>
          </section>

          {/* 5. SKU CATALOG & SABLE PROVENANCE */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#3E2317]">Delivery SKU Catalog & Live Yield</h3>
                  <p className="text-xs text-[#6B5344]">Manage daily batch capacity, instant stock toggles, and price tiers</p>
                </div>
                <button className="bg-[#3E2317] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                  Lock Deliver
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80" alt="Truffle" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-xs text-[#3E2317]">Royal Belgian Dark Truffle</h4>
                    <p className="text-xs font-semibold text-[#3E2317]">₹1,450 / 1kg</p>
                    <span className="text-[10px] text-[#8A612A]">Batch Remaining: <strong>08</strong></span>
                  </div>
                </div>

                <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=200&q=80" alt="Framboise" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-xs text-[#3E2317]">Pistachio Framboise Entremet</h4>
                    <p className="text-xs font-semibold text-[#3E2317]">₹1,850 / 800g</p>
                    <span className="text-[10px] text-rose-900 font-bold">Batch Remaining: 02 (Low)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-base text-[#3E2317]">Sable Provenance Stock</h3>
                <p className="text-xs text-[#6B5344]">Crucial raw pastry ingredients imported from Normandy & France</p>
              </div>

              <div className="space-y-2.5">
                <div className="bg-[#FAF0E6] border border-[#E5D7CA] p-2.5 rounded-xl flex items-center justify-between text-xs">
                  <span>Valrhona 70% Guanaja Cocoa</span>
                  <strong className="text-rose-900">34.5 kg (Low)</strong>
                </div>
                <div className="bg-[#FAF0E6] border border-[#E5D7CA] p-2.5 rounded-xl flex items-center justify-between text-xs">
                  <span>Normandy AOP Charentes-Butter</span>
                  <strong className="text-emerald-900">84.0 kg</strong>
                </div>
              </div>

              <button className="w-full bg-[#3E2317] text-white py-2 rounded-xl text-xs font-bold">
                Full Inventory Ledgers →
              </button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}