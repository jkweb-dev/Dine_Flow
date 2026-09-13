
const DealsHeader = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff3e9]">
      {/* Decorative background shapes */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f97316]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#c92a2a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="text-base">🔥</span>

            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#c4512c]">
              Hot Deals & Special Offers
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#2b211d] sm:text-5xl lg:text-6xl">
            Big Deals.
            <span className="block text-[#c92a2a]">
              Bigger Cravings.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#8b766d] sm:text-base sm:leading-7 lg:text-lg">
            Get more of what you love for less. Discover our specially
            crafted meal deals, loaded combos, and limited-time offers
            made for every kind of craving.
          </p>

          {/* Promotional highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-extrabold text-[#c4512c]">
                COMBOS
              </p>
              <p className="mt-0.5 text-xs font-semibold text-[#8b766d]">
                More for less
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-extrabold text-[#c4512c]">
                FAMILY
              </p>
              <p className="mt-0.5 text-xs font-semibold text-[#8b766d]">
                Made to share
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-extrabold text-[#c4512c]">
                LIMITED
              </p>
              <p className="mt-0.5 text-xs font-semibold text-[#8b766d]">
                Don't miss out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsHeader;

