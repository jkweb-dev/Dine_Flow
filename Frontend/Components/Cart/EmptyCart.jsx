const EmptyCart = ({ onStartOrdering }) => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white px-5 py-14 text-center shadow-[0_20px_60px_rgba(88,47,27,0.06)] sm:px-8 sm:py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-red-100/40 blur-3xl" />

      {/* Cart illustration */}
      <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#fff0e7] to-orange-100 shadow-inner sm:h-28 sm:w-28">
        <span className="text-5xl sm:text-6xl">🛒</span>
      </div>

      {/* Heading */}
      <h2 className="relative mt-7 text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl">
        Your cart is feeling a little empty
      </h2>

      {/* Description */}
      <p className="relative mx-auto mt-3 max-w-lg text-sm leading-6 text-[#725f55] sm:text-base">
        Good news — there&apos;s plenty of delicious food waiting for you.
        Explore our menu and find something you&apos;ll love.
      </p>

      {/* CTA */}
      <button
        type="button"
        onClick={onStartOrdering}
        className="relative mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-0.5 hover:bg-[#ad2020] hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
      >
        <span>Explore Our Menu</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14m-6-6 6 6-6 6"
          />
        </svg>
      </button>
    </section>
  );
};

export default EmptyCart;