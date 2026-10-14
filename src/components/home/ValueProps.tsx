"use client";

import Link from "next/link";
import { ArrowRight, Lock, Package, Wheat, Utensils } from "lucide-react";

interface ValuePropItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const valueProps: ValuePropItem[] = [
  {
    id: 1,
    icon: Utensils,
    title: "Freshly Baked Daily",
    description:
      "Baked 3x daily in miniature artisanal batches to protect crispness, airiness, and delicate crumb integrity.",
    linkText: "04:30 AM Dawn Oven",
    linkHref: "/our-process",
  },
  {
    id: 2,
    icon: Wheat,
    title: "Noble Provenance",
    description:
      "Pure French AOP Normandy butter, 70% Callebaut single-origin cocoa, and unadulterated Bourbon Madagascar vanilla.",
    linkText: "100% Traceable",
    linkHref: "/sourcing",
  },
  {
    id: 3,
    icon: Lock,
    title: "Secure Shopping",
    description:
      "Bank-grade 256-bit encryption for seamless UPI, Amex, and card processing with guaranteed delivery slot booking.",
    linkText: "Chilled Vans Tracked",
    linkHref: "/delivery-policy",
  },
  {
    id: 4,
    icon: Package,
    title: "Carefully Packed",
    description:
      "Delivered in heavy cotton-embossed insulated gift presentation boxes keeping entremets at a pristine 4°C.",
    linkText: "Silk Ribbon Sealed",
    linkHref: "/packaging",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-[#FAF5F0] py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(61,38,27,0.03)] border border-[#3D261B]/5 hover:shadow-[0_8px_30px_rgba(61,38,27,0.08)] transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Soft Warm Icon Pill Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#FCEFDF] flex items-center justify-center text-[#3D261B]">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#3D261B] tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-[#705342] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Footer Link */}
                <div className="pt-6 mt-4 border-t border-transparent group-hover:border-[#3D261B]/5 transition-colors">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A612A] hover:text-[#3D261B] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}