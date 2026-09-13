
"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

const ProductCard = ({ product }) => {
  

  const imageUrl =
    product.image?.url || product.image || "/images/food-placeholder.jpg";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white shadow-[0_8px_30px_-18px_rgba(80,40,20,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(80,40,20,0.35)]">
      {/* Food Image */}
      <div className="relative aspect-[1.05/1] overflow-hidden bg-[#fff1e7]">
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

        {/* Category */}
        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/90 px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#a94329] shadow-sm backdrop-blur-sm sm:px-3 sm:text-[11px]">
            {product.category}
          </span>
        </div>

        {/* Availability */}
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          {product.available ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#244b35]/90 px-2.5 py-1.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8f28b]" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/65 px-2.5 py-1.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-sm">
              Unavailable
            </span>
          )}
        </div>

        {/* Small floating detail icon */}
        <Link
          href={`/menu/${product._id}`}
          aria-label={`View ${product.name}`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/90 text-[#c92a2a] shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white sm:bottom-4 sm:right-4"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <h2 className="line-clamp-1 text-base font-black tracking-tight text-[#2b211d] sm:text-lg">
            {product.name}
          </h2>

          <p className="mt-1.5 line-clamp-2 min-h-[2.5rem] text-xs leading-5 text-[#806d64] sm:text-sm">
            {product.shortDescription}
          </p>
        </div>

        {/* Price + preparation info */}
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#a28e84]">
              Starting from
            </p>

            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#c92a2a]">Rs.</span>

              <span className="text-xl font-black tracking-tight text-[#2b211d] sm:text-2xl">
                {product.sizes[0].price}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl bg-[#fff6ef] px-2.5 py-2 text-[#8c6c5d]">
            <Clock3 className="h-3.5 w-3.5 text-[#f97316]" />

            <span className="text-[10px] font-bold sm:text-[11px]">
              Fresh
            </span>
          </div>
        </div>

        {/* Details button */}
        <Link
          href={`/menu/${product._id}`}
          className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#fff0e7] px-4 text-xs font-extrabold text-[#c92a2a] transition-all duration-200 hover:bg-[#c92a2a] hover:text-white active:scale-[0.98] sm:min-h-12 sm:text-sm"
        >
          View Details
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;

