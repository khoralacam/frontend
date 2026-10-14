"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Package,
  MapPin,
  Heart,
  ShieldCheck,
  LogOut,
  Truck,
  PhoneCall,
  Clock,
  Check,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Receipt,
  Gift,
  Compass,
} from "lucide-react";

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full bg-[#FAF6F0] min-h-screen py-8 px-4 sm:px-6 lg:px-12 text-[#3E2317] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* =========================================================
            LEFT SIDEBAR NAVIGATION
           ========================================================= */}
        <aside className="space-y-6">
          
          {/* User Profile Badge Card */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 flex items-center gap-4 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#E5D7CA] text-[#3E2317] font-serif font-bold text-xl flex items-center justify-center shrink-0 shadow-inner">
              EV
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-serif font-bold text-base text-[#3E2317]">Eleanor Varma</h3>
                <span className="w-4 h-4 rounded-full bg-[#3E2317] text-[#FDF5ED] flex items-center justify-center text-[10px] font-bold">✓</span>
              </div>
              <p className="text-[11px] text-[#8A612A] font-semibold">Atelier Privilège</p>
              <p className="text-[10px] text-[#6B5344]">Member since 2023</p>
            </div>
          </div>

          {/* Navigation Links Menu */}
          <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-3 space-y-1 shadow-xs">
            
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-[#3E2317] text-[#FDF5ED] shadow-xs"
                  : "text-[#3E2317] hover:bg-[#FAF0E6]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4" />
                <span>Overview</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "profile"
                  ? "bg-[#3E2317] text-[#FDF5ED] shadow-xs"
                  : "text-[#3E2317] hover:bg-[#FAF0E6]"
              }`}
            >
              <div className="flex items-center gap-3">
                <User className="w-4 h-4" />
                <span>My Profile</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "orders"
                  ? "bg-[#3E2317] text-[#FDF5ED] shadow-xs"
                  : "text-[#3E2317] hover:bg-[#FAF0E6]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Package className="w-4 h-4" />
                <span>My Orders</span>
              </div>
              <span className="bg-[#8A612A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                1 Active
              </span>
            </button>

            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "addresses"
                  ? "bg-[#3E2317] text-[#FDF5ED] shadow-xs"
                  : "text-[#3E2317] hover:bg-[#FAF0E6]"
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Saved Addresses</span>
              </div>
              <span className="text-[11px] text-[#6B5344] font-bold">2</span>
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "wishlist"
                  ? "bg-[#3E2317] text-[#FDF5ED] shadow-xs"
                  : "text-[#3E2317] hover:bg-[#FAF0E6]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Heart className="w-4 h-4" />
                <span>Curated Wishlist</span>
              </div>
              <span className="bg-[#FAF0E6] text-[#8A612A] border border-[#E5D7CA] text-[10px] font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "security"
                  ? "bg-[#3E2317] text-[#FDF5ED] shadow-xs"
                  : "text-[#3E2317] hover:bg-[#FAF0E6]"
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Security & Logins</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <div className="pt-2 border-t border-[#F5E6D8]">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-rose-900 hover:bg-rose-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </div>
              </button>
            </div>

          </div>

          {/* Dedicated Pastry Sommelier Card */}
          <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-2xl p-5 space-y-2">
            <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8A612A]" /> DEDICATED PASTRY SOMMELIER
            </span>
            <p className="text-xs text-[#3E2317] leading-relaxed">
              Need custom cake consultations or private event tasting flights? Connect directly via bespoke telephone.
            </p>
            <a
              href="tel:+918049203381"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#3E2317] hover:underline pt-1"
            >
              <span>+91 80 4920 3381</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </aside>

        {/* =========================================================
            RIGHT MAIN CONTENT AREA (3 SPANS)
           ========================================================= */}
        <main className="lg:col-span-3 space-y-8">
          
          {/* 1. WELCOME BANNER & LOYALTY POINTS */}
          <section className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs relative overflow-hidden">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#8A612A] uppercase tracking-widest">
                <span>ATELIER PRIVILÈGE MEMBER</span>
                <span>•</span>
                <span>Since September 2023</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E2317]">
                Welcome back, Eleanor
              </h1>

              <p className="text-xs sm:text-sm text-[#6B5344] leading-relaxed">
                Your afternoon viennoiserie selection is packed in temperature-guarded cases. The dawn bakers have recorded peak flakiness index for your almond duo today.
              </p>
            </div>

            {/* Points Badge */}
            <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-4 sm:p-5 text-right shrink-0 min-w-[180px]">
              <span className="text-[10px] font-bold text-[#6B5344] uppercase tracking-wider block">
                ATELIER LOYALTY POINTS
              </span>
              <div className="flex items-baseline justify-end gap-1 mt-1">
                <span className="text-3xl font-serif font-bold text-[#3E2317]">1,840</span>
                <span className="text-xs font-bold text-[#8A612A]">PTS</span>
              </div>
              <span className="text-[10px] text-[#6B5344] mt-0.5 block">
                Equiv. ₹920 towards next entremet
              </span>
            </div>
          </section>

          {/* 2. 4 QUICK ACTIVITY STAT CARDS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Card 1 */}
            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-2 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#3E2317]">
                <Truck className="w-4 h-4" />
              </div>
              <div className="text-2xl font-serif font-bold text-[#3E2317]">1</div>
              <div>
                <h4 className="font-bold text-xs text-[#3E2317]">Active Dispatch</h4>
                <p className="text-[10px] text-[#6B5344]">Cold-chain van en route</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-2 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#3E2317]">
                <Heart className="w-4 h-4" />
              </div>
              <div className="text-2xl font-serif font-bold text-[#3E2317]">3</div>
              <div>
                <h4 className="font-bold text-xs text-[#3E2317]">Saved Curations</h4>
                <p className="text-[10px] text-[#6B5344]">In personal wishlist</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-2 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#3E2317]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-2xl font-serif font-bold text-[#3E2317]">2</div>
              <div>
                <h4 className="font-bold text-xs text-[#3E2317]">Saved Havens</h4>
                <p className="text-[10px] text-[#6B5344]">Defense Colony & Studio</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-5 space-y-2 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#FAF0E6] border border-[#E5D7CA] flex items-center justify-center text-[#3E2317]">
                <Gift className="w-4 h-4" />
              </div>
              <div className="text-2xl font-serif font-bold text-[#3E2317]">1</div>
              <div>
                <h4 className="font-bold text-xs text-[#3E2317]">Bespoke Blueprint</h4>
                <p className="text-[10px] text-[#6B5344]">Custom cake draft saved</p>
              </div>
            </div>

          </section>

          {/* 3. IN-TRANSIT COLD CHAIN DELIVERY CARD */}
          <section className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#8A612A]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">
                  In-Transit Cold Chain Delivery
                </h2>
              </div>
              <Link
                href="/orders"
                className="text-xs font-bold text-[#8A612A] hover:underline flex items-center gap-1 uppercase tracking-wider"
              >
                <span>FULL PASTRY LEDGER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Inner Order Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-5 sm:p-6">
              
              {/* Left Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#3E2317]">ORDER #DK-98421</span>
                  <span className="bg-[#8A612A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    CHILLED IN-TRANSIT
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-base text-[#3E2317]">
                    Royal Belgian Dark Truffle (1 kg)
                  </h3>
                  <p className="text-xs text-[#6B5344] mt-0.5">+ French Almond Croissant Duo (2 pcs)</p>
                  <p className="text-xs font-bold text-[#3E2317] mt-2">Total: ₹2,870</p>
                </div>

                {/* Telemetry Indicator Box */}
                <div className="bg-[#FDF5ED] border border-[#E5D7CA] rounded-lg p-3 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#3E2317]">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    <span className="font-semibold">Refrigerated Van Cargo Bay</span>
                    <strong className="font-bold ml-auto text-emerald-800">17.8°C (Optimal)</strong>
                  </div>
                  <p className="text-[10px] text-[#6B5344]">
                    Maintained between 16°C and 18°C for delicate ganache stability
                  </p>
                </div>
              </div>

              {/* Right Timeline & Actions */}
              <div className="space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B5344]">
                    <span>ESTIMATED DROP</span>
                    <span className="font-bold text-[#3E2317]">COURIER DISPATCH</span>
                  </div>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="text-lg font-serif font-bold text-[#3E2317]">Today, 04:30 PM</span>
                    <span className="text-xs text-[#6B5344]">Rajesh K. • Specially Trained Van #04</span>
                  </div>
                </div>

                {/* Stepper Dots */}
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] pt-2">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-[#3E2317] text-white flex items-center justify-center font-bold mb-1 shadow-xs">
                      ✓
                    </div>
                    <span className="font-bold text-[#3E2317]">Dawn Baked</span>
                    <span className="text-[#6B5344] text-[9px]">05:15 AM</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-[#3E2317] text-white flex items-center justify-center font-bold mb-1 shadow-xs">
                      ✓
                    </div>
                    <span className="font-bold text-[#3E2317]">Parchment Sealed</span>
                    <span className="text-[#6B5344] text-[9px]">01:45 PM</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-[#8A612A] text-white flex items-center justify-center font-bold mb-1 shadow-xs ring-2 ring-[#E5D7CA]">
                      <Truck className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-[#8A612A]">In Cold Transit</span>
                    <span className="text-[#8A612A] text-[9px] font-semibold">En route</span>
                  </div>

                  <div className="flex flex-col items-center opacity-50">
                    <div className="w-7 h-7 rounded-full bg-[#E5D7CA] text-[#6B5344] flex items-center justify-center font-bold mb-1">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[#6B5344]">White-Glove Handover</span>
                    <span className="text-[#6B5344] text-[9px]">Pending</span>
                  </div>
                </div>

                {/* Destination note */}
                <div className="text-[11px] text-[#6B5344] flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8A612A] shrink-0" />
                  <span>
                    Destination: <strong className="text-[#3E2317]">Penthouse 402, Magnolia Grove, Indiranagar</strong> (Gate Concierge Notified)
                  </span>
                </div>

                {/* Track Button Group */}
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href="/order-tracking"
                    className="flex-1 bg-[#3E2317] hover:bg-[#2A170F] text-[#FDF5ED] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-xs"
                  >
                    TRACK LIVE VAN
                  </Link>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 bg-white border border-[#E5D7CA] hover:bg-[#FAF0E6] text-[#3E2317] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>VIEW FULL RECEIPT</span>
                  </button>
                </div>

              </div>

            </div>
          </section>

          {/* 4. CHEF'S DAWN SELECTION RECOMMENDATIONS */}
          <section className="bg-[#FDF5ED] border border-[#F5E6D8] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div>
              <span className="text-[10px] font-bold text-[#8A612A] uppercase tracking-widest">
                CHEF'S DAWN SELECTION FOR YOU
              </span>
              <div className="flex items-center justify-between mt-0.5">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2317]">
                  Complementary Bakes For Your Palate
                </h2>
                <span className="text-xs text-[#6B5344] hidden sm:inline">
                  Handcrafted eggless creations suited to your profile
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Rec 1 */}
              <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 flex items-center gap-3 shadow-2xs hover:border-[#3E2317] transition-colors cursor-pointer">
                <div className="w-14 h-14 rounded-lg bg-white overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=200&q=80" alt="Pistachio Framboise" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs text-[#3E2317]">Pistachio Framboise</h4>
                  <p className="text-xs font-semibold text-[#3E2317]">₹1,850</p>
                  <span className="text-[10px] text-[#8A612A] font-medium">+ In Your Wishlist</span>
                </div>
              </div>

              {/* Rec 2 */}
              <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 flex items-center gap-3 shadow-2xs hover:border-[#3E2317] transition-colors cursor-pointer">
                <div className="w-14 h-14 rounded-lg bg-white overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80" alt="Valrhona 70% Marquise" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs text-[#3E2317]">Valrhona 70% Marquise</h4>
                  <p className="text-xs font-semibold text-[#3E2317]">₹1,650</p>
                  <span className="text-[10px] text-[#8A612A] font-medium">+ Order for Tomorrow</span>
                </div>
              </div>

              {/* Rec 3 */}
              <div className="bg-[#FAF0E6] border border-[#E5D7CA] rounded-xl p-3 flex items-center gap-3 shadow-2xs hover:border-[#3E2317] transition-colors cursor-pointer">
                <div className="w-14 h-14 rounded-lg bg-white overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=200&q=80" alt="Sablé Breton Tin Box" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs text-[#3E2317]">Sablé Breton Tin Box</h4>
                  <p className="text-xs font-semibold text-[#3E2317]">₹890</p>
                  <span className="text-[10px] text-[#8A612A] font-medium">+ Afternoon Tea Treat</span>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
}