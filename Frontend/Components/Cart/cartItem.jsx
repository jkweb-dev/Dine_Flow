const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const itemTotal = item.price * item.quantity;

  const isDeal = item.type === "deal";

  const imageUrl =
    item.image?.url ||
    item.image ||
    "/images/food-placeholder.jpg";

  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white p-3 shadow-[0_10px_35px_rgba(88,47,27,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(88,47,27,0.1)] sm:p-4">
      <div className="flex gap-4 sm:gap-5">
        {/* Image */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#fff0e7] sm:h-32 sm:w-32">
          <img
            src={imageUrl}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Type badge */}
          <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-[#c92a2a] shadow-sm backdrop-blur-sm">
            {isDeal ? "Deal" : "Item"}
          </div>
        </div>

        {/* Main content */}
        <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
          {/* Name + Remove */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base font-black text-[#2b211d] sm:text-lg">
                {item.name}
              </h3>

              {/* Product size */}
              {!isDeal && item.size && (
                <p className="mt-1 text-xs font-semibold text-[#8c7468] sm:text-sm">
                  Size:{" "}
                  <span className="font-bold text-[#5e493f]">
                    {item.size}
                  </span>
                </p>
              )}

              {/* Deal indicator */}
              {isDeal && (
                <p className="mt-1 text-xs font-semibold text-[#c92a2a] sm:text-sm">
                  Special deal
                </p>
              )}
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => onRemove(item)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#9b8175] transition hover:bg-red-50 hover:text-[#c92a2a]"
              aria-label={`Remove ${item.name} from cart`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 7h12M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m-7 0 .7 12.5A1.5 1.5 0 0 0 10.2 21h3.6a1.5 1.5 0 0 0 1.5-1.5L16 7M10 11v6m4-6v6"
                />
              </svg>
            </button>
          </div>

          {/* Bottom section */}
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            {/* Quantity */}
            <div className="flex items-center overflow-hidden rounded-xl border border-orange-100 bg-[#fffaf5]">
              <button
                type="button"
                onClick={() => onDecrease(item)}
                disabled={item.quantity <= 1}
                className="flex h-9 w-9 items-center justify-center text-lg font-bold text-[#c92a2a] transition hover:bg-[#fff0e7] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className="flex h-9 min-w-9 items-center justify-center border-x border-orange-100 px-2 text-sm font-black text-[#2b211d]">
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={() => onIncrease(item)}
                className="flex h-9 w-9 items-center justify-center text-lg font-bold text-[#c92a2a] transition hover:bg-[#fff0e7]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-xs font-semibold text-[#9b8175]">
                Rs. {item.price} × {item.quantity}
              </p>

              <p className="mt-0.5 text-lg font-black text-[#2b211d] sm:text-xl">
                Rs. {itemTotal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;