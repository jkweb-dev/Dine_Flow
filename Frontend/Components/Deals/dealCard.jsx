const DealCard = ({ deal, onViewDeal }) => {
  const imageUrl =
    deal.image?.url ||
    deal.image ||
    "/images/food-placeholder.jpg";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-[0_12px_40px_rgba(88,47,27,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(88,47,27,0.12)]">
      {/* Image */}
      <div className="relative aspect-[1.15/1] overflow-hidden bg-[#fff0e7]">
        <img
          src={imageUrl}
          alt={deal.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* Deal Badge */}
        <div className="absolute left-3 top-3 rounded-full bg-[#c92a2a] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-lg sm:left-4 sm:top-4">
          🔥 Special Deal
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 rounded-2xl bg-white px-3 py-2 shadow-lg sm:bottom-4 sm:right-4">
          <p className="text-[9px] font-extrabold uppercase tracking-wider text-[#a28d84]">
            Deal Price
          </p>

          <p className="text-lg font-black text-[#c92a2a] sm:text-xl">
            Rs. {deal.dealPrice}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Name */}
        <h3 className="line-clamp-1 text-lg font-black tracking-tight text-[#2b211d] sm:text-xl">
          {deal.name}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#8b766d] sm:text-sm">
          {deal.shortDescription}
        </p>

        {/* Included Items */}
        {deal.items?.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#a28d84]">
              Includes
            </p>

            <div className="flex flex-wrap gap-1.5">
              {deal.items.slice(0, 3).map((item, index) => (
                <span
                  key={`${item.productName}-${index}`}
                  className="rounded-full bg-[#fff4ed] px-2.5 py-1 text-[10px] font-bold text-[#8b5a47]"
                >
                  {item.quantity}× {item.productName}
                </span>
              ))}

              {deal.items.length > 3 && (
                <span className="rounded-full bg-[#f8f3f0] px-2.5 py-1 text-[10px] font-bold text-[#a28d84]">
                  +{deal.items.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <button
          type="button"
          onClick={() => onViewDeal(deal)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#fff1ea] px-4 py-3 text-sm font-extrabold text-[#c4512c] transition-all duration-200 hover:bg-[#c92a2a] hover:text-white"
        >
          View Deal

          <span
            aria-hidden="true"
            className="text-base transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default DealCard;