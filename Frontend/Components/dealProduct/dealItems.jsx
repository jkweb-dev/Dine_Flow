const DealItems = ({ items }) => {
  return (
    <div className="mt-8">
      <div className="mb-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
          What&apos;s Included
        </p>

        <h2 className="mt-1 text-2xl font-black text-[#2b211d]">
          Inside this deal
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
        {items.map((item, index) => (
          <div
            key={`${item.productName}-${index}`}
            className={`flex items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
              index !== items.length - 1 ? "border-b border-orange-50" : ""
            }`}
          >
            {/* Product Name */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-sm">
                🍽️
              </div>

              <p className="truncate text-sm font-bold text-[#3d2d26] sm:text-base">
                {item.productName}
              </p>
            </div>

            {/* Quantity */}
            <div className="shrink-0 rounded-full bg-[#fff8f1] px-3 py-1.5 text-xs font-black text-[#c92a2a]">
              × {item.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealItems;