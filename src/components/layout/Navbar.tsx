"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Truck,
  Menu,
  X,
  ChefHat,
  Tag,
  Star,
  ArrowRight,
  Sparkles,
  Clock,
  SlidersHorizontal,
  Trash2,
  Mail,
  Lock,
  CheckCircle2,
  ShieldAlert,
  KeyRound,
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

interface SearchProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  badge?: string;
  isEggless?: boolean;
  image: string;
  href: string;
}

const sampleProducts: SearchProduct[] = [
  {
    id: "1",
    title: "Royal Belgian Dark Truffle",
    category: "Signature Cakes",
    price: 1450,
    rating: 4.9,
    badge: "Bestseller",
    isEggless: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop",
    href: "/products/royal-belgian-dark-truffle",
  },
  {
    id: "2",
    title: "French Almond Croissant Duo",
    category: "Viennoiserie",
    price: 420,
    rating: 4.8,
    badge: "Morning Drop",
    isEggless: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop",
    href: "/products/french-almond-croissant-duo",
  },
  {
    id: "3",
    title: "Parisian Macaron Box of 12",
    category: "Macarons",
    price: 1150,
    rating: 5.0,
    badge: "Gift Ready",
    isEggless: true,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=400&auto=format&fit=crop",
    href: "/products/parisian-macaron-box",
  },
  {
    id: "4",
    title: "Salted Caramel Pecan Tart",
    category: "Tarts",
    price: 380,
    rating: 4.9,
    badge: "Chef's Pick",
    isEggless: false,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=400&auto=format&fit=crop",
    href: "/products/salted-caramel-pecan-tart",
  },
];

const categoriesFilter = ["All", "Signature Cakes", "Viennoiserie", "Macarons", "Tarts"];
const popularSearches = ["Belgian Truffle", "Almond Croissant", "Eggless", "Macaron Box", "Sourdough"];

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  
  // 3 Modes: signin | signup | admin
  const [authMode, setAuthMode] = useState<"signin" | "signup" | "admin">("signin");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onlyEggless, setOnlyEggless] = useState(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("Home");

  // Auth States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [adminSecurityKey, setAdminSecurityKey] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  // GSAP Refs
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoEmblemRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // GSAP Scroll Animation Effect
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      if (window.scrollY > 40) {
        gsap.to(navbarRef.current, {
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "rgba(250, 245, 240, 0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(61, 38, 27, 0.08)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          paddingTop: "14px",
          paddingBottom: "14px",
          backgroundColor: "rgba(250, 245, 240, 1)",
          backdropFilter: "blur(0px)",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Logo Hover Animation
  const handleLogoMouseEnter = () => {
    if (logoEmblemRef.current) {
      gsap.to(logoEmblemRef.current, {
        rotate: 180,
        scale: 1.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }
  };

  const handleLogoMouseLeave = () => {
    if (logoEmblemRef.current) {
      gsap.to(logoEmblemRef.current, {
        rotate: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  // Load Recent Searches
  useEffect(() => {
    const saved = localStorage.getItem("dakingo_recent_searches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveSearchTerm = (term: string) => {
    if (!term.trim()) return;
    const updated = [term, ...recentSearches.filter((item) => item !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("dakingo_recent_searches", JSON.stringify(updated));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("dakingo_recent_searches");
  };

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
    } else {
      setSelectedIndex(-1);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setAuthOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const announcements = [
    { text: "COMPLIMENTARY TEMPERATURE-CONTROLLED DELIVERY ON ORDERS ABOVE ₹1,499", icon: Truck },
    { text: "HANDCRAFTED FRESH DAILY IN SMALL BATCHES", icon: ChefHat },
    { text: "USE CODE DAKINGO10 FOR 10% OFF YOUR FIRST ORDER", icon: Tag },
    { text: "SIGNATURE VALRHONA & CALLEBAUT SINGLE-ORIGIN TRUFFLES", icon: Star },
  ];
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const CurrentIcon = announcements[currentAnnouncementIndex].icon;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Cakes", href: "/cakes" },
    { name: "Pastries", href: "/pastries" },
    { name: "Cookies", href: "/cookies" },
    { name: "Custom Cakes", href: "/custom-cakes" },
    { name: "Our Story", href: "/our-story" },
  ];

  const filteredProducts = useMemo(() => {
    let result = sampleProducts.filter((product) => {
      const matchesQuery =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesEggless = !onlyEggless || product.isEggless;

      return matchesQuery && matchesCategory && matchesEggless;
    });

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, selectedCategory, onlyEggless, sortBy]);

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (filteredProducts.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      const product = filteredProducts[selectedIndex];
      saveSearchTerm(searchQuery || product.title);
      setSearchOpen(false);
      window.location.href = product.href;
    }
  };

  // Auth Redirect Handler (User vs Admin)
  const handleAuthSuccess = () => {
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      setAuthSuccess(true);
      setTimeout(() => {
        setAuthSuccess(false);
        setAuthOpen(false);
        
        if (authMode === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/profile");
        }
      }, 1000);
    }, 1000);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAuthSuccess();
  };

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      {/* Ticker Bar */}
      <div className="bg-[#3D261B] text-[#FAF5F0] text-[11px] py-2 px-4 text-center tracking-wider font-medium flex items-center justify-center overflow-hidden h-9">
        <div className="relative h-5 w-full max-w-2xl flex items-center justify-center overflow-hidden gap-2.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnnouncementIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute flex items-center justify-center gap-2.5 truncate uppercase tracking-widest text-center w-full"
            >
              <CurrentIcon className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span>{announcements[currentAnnouncementIndex].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className="bg-[#FAF5F0] border-b border-[#3D261B]/10 px-4 sm:px-8 py-3.5 transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#3D261B] p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - HIDE ON MOBILE (`hidden sm:flex`) */}
          <Link
            href="/"
            onMouseEnter={handleLogoMouseEnter}
            onMouseLeave={handleLogoMouseLeave}
            className="hidden sm:flex items-center gap-3 group cursor-pointer"
          >
            <div
              ref={logoEmblemRef}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#3D261B]/40 flex items-center justify-center bg-[#FAF5F0] shadow-2xs shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-dashed border-[#3D261B]/30 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#3D261B]" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-[17px] font-bold tracking-[0.15em] text-[#3D261B] leading-tight">
                DAKINGO
              </span>
              <span className="text-[7.5px] tracking-[0.28em] uppercase text-[#705342] font-semibold mt-0.5">
                ARTISAN BAKERY &amp; ATELIER
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[15px] font-medium text-[#3D261B]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative py-2 transition-colors hover:text-[#8A612A] ${
                    isActive ? "text-[#3D261B] font-semibold" : "text-[#3D261B]/90"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#8A612A] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#3D261B]">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex items-center gap-2 bg-white/80 hover:bg-white border border-[#3D261B]/15 px-3 py-1.5 rounded-full transition-all text-xs font-medium text-[#705342] shadow-2xs focus:outline-none"
            >
              <Search className="w-4 h-4 text-[#3D261B]" />
              <span className="hidden sm:inline">Search atelier...</span>
            </motion.button>

            <div className="hidden lg:flex items-center gap-1 bg-white border border-[#3D261B]/15 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-2xs">
              <span>INR</span>
              <span className="font-bold">₹</span>
            </div>

            <button aria-label="Wishlist" className="relative p-1.5 hover:text-[#8A612A] transition-colors hidden sm:block">
              <Heart className="w-5 h-5 stroke-[1.7]" />
              <span className="absolute -top-1 -right-1 bg-[#3D261B] text-[#FAF5F0] w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium">
                2
              </span>
            </button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Cart"
              className="flex items-center gap-2.5 bg-[#EFE8E1] hover:bg-[#E5DCD4] border border-[#3D261B]/10 px-3.5 py-1.5 rounded-full transition-all shadow-2xs cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#3D261B]" />
                <span className="absolute -top-2 -right-2 bg-[#3D261B] text-[#FAF5F0] w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold">
                  3
                </span>
              </div>
              <span className="text-xs font-bold text-[#3D261B] tracking-tight">₹2,150</span>
            </motion.button>

            {/* User Profile / Auth Modal Trigger */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setAuthOpen(true)}
              aria-label="User Profile"
              className="w-9 h-9 rounded-full bg-[#3D261B] text-[#FAF5F0] flex items-center justify-center hover:opacity-95 transition-opacity shadow-xs focus:outline-none cursor-pointer"
            >
              <User className="w-4 h-4 stroke-[1.8]" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#3D261B]/60 backdrop-blur-md flex flex-col justify-start"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="bg-[#FAF5F0] w-full border-b border-[#3D261B]/15 shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A612A]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DAKINGO ATELIER STUDIO SEARCH</span>
                  </div>
                  
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="w-9 h-9 rounded-full bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#3D261B] hover:bg-[#3D261B] hover:text-white transition-colors shadow-2xs"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative flex items-center border-b-2 border-[#3D261B] pb-3">
                  <Search className="w-6 h-6 text-[#3D261B] mr-3 shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onKeyDown={handleInputKeyDown}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search signature cakes, viennoiserie, macarons..."
                    className="w-full bg-transparent font-serif text-2xl sm:text-4xl text-[#3D261B] placeholder-[#705342]/40 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs font-bold text-[#705342] uppercase tracking-wider hover:text-[#3D261B]"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {categoriesFilter.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-colors shrink-0 ${
                          selectedCategory === cat
                            ? "bg-[#3D261B] text-[#FAF5F0] border-[#3D261B]"
                            : "bg-white text-[#3D261B] border-[#3D261B]/10 hover:border-[#3D261B]/30"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setOnlyEggless(!onlyEggless)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                        onlyEggless
                          ? "bg-[#8A612A] text-white border-[#8A612A]"
                          : "bg-white text-[#3D261B] border-[#3D261B]/10"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>100% Eggless</span>
                    </button>

                    <div className="flex items-center gap-1.5 bg-white border border-[#3D261B]/10 px-3 py-1.5 rounded-lg text-xs font-medium text-[#3D261B]">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#8A612A]" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-transparent focus:outline-none cursor-pointer"
                      >
                        <option value="featured">Sort: Featured</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>

                {!searchQuery && (
                  <div className="space-y-6 pt-2">
                    {recentSearches.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[10px] font-bold text-[#705342] uppercase tracking-wider flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#8A612A]" />
                            <span>RECENT SEARCHES</span>
                          </p>
                          <button
                            onClick={clearRecentSearches}
                            className="text-[10px] text-[#705342] hover:text-[#3D261B] flex items-center gap-1 font-semibold"
                          >
                            <Trash2 className="w-3 h-3" /> Clear History
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((term) => (
                            <button
                              key={term}
                              onClick={() => setSearchQuery(term)}
                              className="bg-white/80 hover:bg-[#3D261B] hover:text-white text-[#3D261B] text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#3D261B]/10 transition-colors shadow-2xs"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-[10px] font-bold text-[#705342] uppercase tracking-wider mb-2.5">
                        POPULAR KEYWORDS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="bg-white hover:bg-[#3D261B] hover:text-white text-[#3D261B] text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#3D261B]/10 transition-colors shadow-2xs"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {searchQuery && (
                  <div className="space-y-4 pt-2">
                    <p className="text-xs font-semibold text-[#705342] uppercase tracking-wider">
                      Results ({filteredProducts.length})
                    </p>

                    {filteredProducts.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredProducts.map((product, idx) => {
                          const isSelected = selectedIndex === idx;
                          return (
                            <Link
                              key={product.id}
                              href={product.href}
                              onClick={() => {
                                saveSearchTerm(searchQuery);
                                setSearchOpen(false);
                              }}
                              className={`flex items-center gap-4 p-3 rounded-xl border transition-all shadow-2xs group ${
                                isSelected
                                  ? "bg-[#3D261B] text-white border-[#3D261B]"
                                  : "bg-white text-[#3D261B] border-[#3D261B]/5 hover:border-[#3D261B]/20"
                              }`}
                            >
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#EFE8E1] shrink-0">
                                <Image src={product.image} alt={product.title} fill className="object-cover" />
                              </div>
                              <div className="flex-1">
                                <span className={`text-[9px] font-bold uppercase tracking-wider ${isSelected ? "text-[#C5A880]" : "text-[#8A612A]"}`}>
                                  {product.category}
                                </span>
                                <h4 className={`font-serif font-bold text-sm leading-tight ${isSelected ? "text-white" : "text-[#3D261B]"}`}>
                                  {product.title}
                                </h4>
                                <p className={`font-serif text-xs font-bold mt-0.5 ${isSelected ? "text-[#FAF5F0]" : "text-[#3D261B]"}`}>
                                  ₹{product.price.toLocaleString("en-IN")}
                                </p>
                              </div>
                              <ArrowRight className={`w-4 h-4 transition-all mr-2 ${isSelected ? "text-white translate-x-1" : "text-[#3D261B]/40 group-hover:text-[#3D261B] group-hover:translate-x-1"}`} />
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-sm font-serif text-[#3D261B]">No atelier creations found for "{searchQuery}"</p>
                        <p className="text-xs text-[#705342] mt-1">Try resetting filters or searching for Truffle, Macaron, or Croissant</p>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIGN IN / SIGN UP / ADMIN AUTH MODAL */}
      <AnimatePresence>
        {authOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#3D261B]/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#FAF5F0] border border-[#3D261B]/15 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              <button
                onClick={() => setAuthOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#3D261B]/10 flex items-center justify-center text-[#3D261B] hover:bg-[#3D261B] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 space-y-6">
                
                {/* Header Title */}
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full border border-[#3D261B]/30 flex items-center justify-center mx-auto bg-white">
                    {authMode === "admin" ? (
                      <ShieldAlert className="w-5 h-5 text-amber-800" />
                    ) : (
                      <span className="w-3 h-3 rounded-full bg-[#3D261B]" />
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3D261B]">
                    {authMode === "signin"
                      ? "Welcome Back to Atelier"
                      : authMode === "signup"
                      ? "Join Dakingo Club"
                      : "Master Baker Admin Portal"}
                  </h3>
                  <p className="text-xs text-[#705342]">
                    {authMode === "signin"
                      ? "Access your custom cake blueprints and orders"
                      : authMode === "signup"
                      ? "Enjoy dawn-baked privileges and priority dispatch"
                      : "Control bakery orders, live van tracking, and menu"}
                  </p>
                </div>

                {/* 3-Tab Switcher */}
                <div className="flex bg-[#EFE8E1] p-1 rounded-xl border border-[#3D261B]/10 relative text-center">
                  <button
                    onClick={() => setAuthMode("signin")}
                    className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all z-10 ${
                      authMode === "signin" ? "text-[#FAF5F0]" : "text-[#705342]"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setAuthMode("signup")}
                    className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all z-10 ${
                      authMode === "signup" ? "text-[#FAF5F0]" : "text-[#705342]"
                    }`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setAuthMode("admin")}
                    className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all z-10 flex items-center justify-center gap-1 ${
                      authMode === "admin" ? "text-[#FAF5F0]" : "text-[#8A612A]"
                    }`}
                  >
                    <KeyRound className="w-3 h-3" />
                    <span>Admin</span>
                  </button>

                  <motion.div
                    className="absolute top-1 bottom-1 bg-[#3D261B] rounded-lg shadow-sm"
                    initial={false}
                    animate={{
                      left: authMode === "signin" ? "4px" : authMode === "signup" ? "33.33%" : "66.66%",
                      width: "calc(33.33% - 4px)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                </div>

                {authSuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="font-serif font-bold text-lg text-[#3D261B]">
                      {authMode === "admin" ? "Admin Privileges Granted!" : "Authentication Successful!"}
                    </h4>
                    <p className="text-xs text-[#705342]">
                      {authMode === "admin" ? "Opening Baker Management Console..." : "Redirecting to your profile..."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAuthSubmit} className="space-y-4">
                    
                    {authMode === "signup" && (
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#705342] uppercase tracking-wider">Full Name</label>
                        <div className="relative flex items-center">
                          <User className="w-4 h-4 text-[#705342] absolute left-3" />
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Eleanor Vance"
                            className="w-full bg-white border border-[#3D261B]/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#3D261B] focus:outline-none focus:border-[#3D261B]"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-[#705342] uppercase tracking-wider">
                        {authMode === "admin" ? "Admin Email Address" : "Email Address"}
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="w-4 h-4 text-[#705342] absolute left-3" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={authMode === "admin" ? "admin@dakingo.com" : "eleanor@example.com"}
                          className="w-full bg-white border border-[#3D261B]/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#3D261B] focus:outline-none focus:border-[#3D261B]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold text-[#705342] uppercase tracking-wider">Password</label>
                        {authMode === "signin" && (
                          <a href="#" className="text-[10px] text-[#8A612A] hover:underline font-semibold">Forgot?</a>
                        )}
                      </div>
                      <div className="relative flex items-center">
                        <Lock className="w-4 h-4 text-[#705342] absolute left-3" />
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full bg-white border border-[#3D261B]/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#3D261B] focus:outline-none focus:border-[#3D261B]"
                        />
                      </div>
                    </div>

                    {authMode === "admin" && (
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#8A612A] uppercase tracking-wider">
                          Atelier Master Security Key
                        </label>
                        <div className="relative flex items-center">
                          <KeyRound className="w-4 h-4 text-[#8A612A] absolute left-3" />
                          <input
                            type="password"
                            required
                            value={adminSecurityKey}
                            onChange={(e) => setAdminSecurityKey(e.target.value)}
                            placeholder="DK-ADMIN-KEY-2026"
                            className="w-full bg-amber-50 border border-[#8A612A]/30 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#3D261B] focus:outline-none focus:border-[#3D261B]"
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={authLoading}
                      className="w-full bg-[#3D261B] text-[#FAF5F0] hover:bg-[#2A170F] py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {authLoading ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span>
                          {authMode === "signin"
                            ? "Sign In to Atelier"
                            : authMode === "signup"
                            ? "Create Account"
                            : "Login as Master Admin"}
                        </span>
                      )}
                    </button>

                    {authMode !== "admin" && (
                      <>
                        <div className="relative flex py-2 items-center">
                          <div className="flex-grow border-t border-[#3D261B]/10"></div>
                          <span className="flex-shrink mx-4 text-[10px] text-[#705342] uppercase font-bold tracking-wider">Or continue with</span>
                          <div className="flex-grow border-t border-[#3D261B]/10"></div>
                        </div>

                        <button
                          type="button"
                          onClick={handleAuthSuccess}
                          className="w-full bg-white text-[#3D261B] border border-[#3D261B]/15 hover:bg-[#FAF5F0] py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-3 transition-colors shadow-2xs cursor-pointer"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.3 7.24 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.1 0 9.8 0 12s.43 3.9 1.19 5.42l4.09-3.15z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.24 0 3.17 2.7 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                          </svg>
                          <span>Continue with Google</span>
                        </button>
                      </>
                    )}

                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF5F0] border-b border-[#3D261B]/10 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-serif font-medium pb-2 border-b border-[#3D261B]/5 ${
                    activeTab === link.name ? "text-[#8A612A]" : "text-[#3D261B]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}