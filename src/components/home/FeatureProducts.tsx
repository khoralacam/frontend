"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingBag, ArrowRight, Cookie } from "lucide-react";

export interface ProductItem {
  id: string | number;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  subBadge: string;
  portionInfo: string;
  image: string;
  href: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    title: "Royal Belgian Dark Truffle",
    description: "70% Callebaut dark ganache layered with single-origin flourless crumb...",
    price: 1450,
    rating: 4.9,
    reviewsCount: 128,
    badge: "BESTSELLER",
    subBadge: "100% Eggless Option",
    portionInfo: "500G / 4 SERVINGS",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    href: "/products/royal-belgian-dark-truffle",
  },
  {
    id: 2,
    title: "French Almond Croissant Duo",
    description: "Twice-baked butter croissant filled with almond frangipane cream,...",
    price: 420,
    rating: 4.8,
    reviewsCount: 86,
    badge: "MORNING DROP",
    subBadge: "AOP Butter",
    portionInfo: "SET OF 2 PIECES",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    href: "/products/french-almond-croissant-duo",
  },
  {
    id: 3,
    title: "Parisian Macaron Box of 12",
    description: "Mille-feuille crust macarons infused with Sicilian pistachios, Valrhona da...",
    price: 1150,
    rating: 5.0,
    reviewsCount: 214,
    badge: "GIFT READY",
    subBadge: "Naturally Gluten-Free",
    portionInfo: "ASSORTED BOX OF 12",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop",
    href: "/products/parisian-macaron-box",
  },
  {
    id: 4,
    title: "Salted Caramel Pecan Tart",
    description: "Crisp sablé crust filled with amber blossom caramel, Guérande sea sal...",
    price: 380,
    rating: 4.9,
    reviewsCount: 94,
    badge: "CHEF'S PICK",
    subBadge: "Fleur de Sel",
    portionInfo: "INDIVIDUAL TART • 140G",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop",
    href: "/products/salted-caramel-pecan-tart",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#FAF5F0] py-16 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8A612A] mb-1">
              PATRON FAVOURITES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D261B] tracking-tight">
              Bestselling Atelier Creations
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D261B] hover:text-[#8A612A] transition-colors"
          >
            <span>View All Atelier Bakes (42)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#3D261B]/5 shadow-[0_4px_20px_rgba(61,38,27,0.03)] hover:shadow-[0_12px_30px_rgba(61,38,27,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges & Wishlist Button */}
                <div className="relative h-[240px] w-full bg-[#EFE8E1] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Top-Left Badges Stack */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
                    <span className="bg-[#3D261B]/90 backdrop-blur-md text-[#FAF5F0] text-[9.5px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-xs">
                      {product.badge}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-[#3D261B] text-[9.5px] font-medium px-2 py-0.5 rounded-md shadow-2xs">
                      {product.subBadge}
                    </span>
                  </div>

                  {/* Top-Right Wishlist Button */}
                  <button
                    aria-label="Add to Wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#3D261B] hover:text-[#9A734C] hover:bg-white flex items-center justify-center transition-all shadow-sm z-10"
                  >
                    <Heart className="w-4 h-4 stroke-[1.8]" />
                  </button>
                </div>

                {/* Card Info Content */}
                <div className="p-5 space-y-2">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#705342]">
                    <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                    <span className="font-bold text-[#3D261B]">{product.rating.toFixed(1)}</span>
                    <span className="text-[#705342]/70">({product.reviewsCount} reviews)</span>
                  </div>

                  {/* Title */}
                  <Link href={product.href} className="block">
                    <h3 className="font-serif text-lg font-bold text-[#3D261B] tracking-tight group-hover:text-[#8A612A] transition-colors leading-snug line-clamp-2">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Sub-description */}
                  <p className="text-xs text-[#705342] leading-relaxed line-clamp-2 font-normal">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Portion, Price & Add Button */}
              <div className="px-5 pb-5 pt-2 flex items-end justify-between border-t border-transparent group-hover:border-[#3D261B]/5 transition-colors">
                <div>
                  <p className="text-[9px] font-semibold text-[#705342]/80 uppercase tracking-wider mb-0.5">
                    {product.portionInfo}
                  </p>
                  <p className="font-serif text-lg font-bold text-[#3D261B] tracking-tight">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <button
                  aria-label={`Add ${product.title} to cart`}
                  className="bg-[#3D261B] hover:bg-[#8A612A] text-[#FAF5F0] text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors duration-200 shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Flavour Enquiry Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#3D261B]/5 shadow-[0_4px_20px_rgba(61,38,27,0.02)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#FCEFDF] flex items-center justify-center text-[#3D261B] shrink-0">
              <Cookie className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#3D261B] tracking-tight">
                Looking for a custom celebration flavour?
              </h4>
              <p className="text-xs sm:text-sm text-[#705342] font-normal mt-0.5">
                Our chefs accommodate gluten-free, reduced sugar, and custom dietary requests.
              </p>
            </div>
          </div>

          <Link
            href="/custom-inquiry"
            className="bg-[#F2E6D9] hover:bg-[#EAE0D5] text-[#3D261B] text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-lg transition-colors shrink-0 text-center w-full sm:w-auto"
          >
            ENQUIRE WITH CONCIERGE
          </Link>
        </div>

      </div>
    </section>
  );
}