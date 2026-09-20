const CheckoutHeader = () => {
  return (
    <section className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#fffaf5] via-[#fff6ed] to-[#fff0e7]">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Small label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
          <span className="text-sm">🛍️</span>

          <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c92a2a]">
            Checkout
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#2b211d] sm:text-5xl lg:text-6xl">
          Let&apos;s get your
          <span className="text-[#c92a2a]"> order</span> to you.
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#725f55] sm:text-lg">
          Add your delivery location, review your order, and choose how you&apos;d
          like to pay. We&apos;ll take care of the rest.
        </p>

        {/* Checkout steps */}
        <div className="mt-7 flex flex-wrap items-center gap-2 text-xs font-bold text-[#725f55] sm:gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c92a2a] text-[10px] font-black text-white">
              1
            </span>
            <span>Delivery</span>
          </div>

          <span className="text-orange-300">→</span>

          <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[10px] font-black text-[#c92a2a]">
              2
            </span>
            <span>Review</span>
          </div>

          <span className="text-orange-300">→</span>

          <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[10px] font-black text-[#c92a2a]">
              3
            </span>
            <span>Place Order</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHeader;