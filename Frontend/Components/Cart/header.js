const CartHeader = ({ itemCount }) => {
  return (
    <section className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#fffaf5] via-[#fff6ed] to-[#fff0e7]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-red-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
          <span className="text-sm">🛒</span>

          <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c92a2a]">
            Your Cart
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#2b211d] sm:text-5xl lg:text-6xl">
          Your delicious
          <span className="text-[#c92a2a]"> choices.</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#725f55] sm:text-lg">
          Everything you picked is right here. Review your items, adjust
          quantities, and get ready for a delicious order.
        </p>

        {/* Item count */}
        {itemCount > 0 && (
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#6f5549]">
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#c92a2a] px-2 text-xs font-black text-white">
              {itemCount}
            </span>

            <span>
              {itemCount === 1 ? "item" : "items"} in your cart
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartHeader;