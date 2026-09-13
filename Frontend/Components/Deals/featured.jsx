
const DealsFeatured = ({ deal, onViewDeal }) => {
  if (!deal) {
    return null;
  }

  const imageUrl =
    deal.image?.url ||
    deal.image ||
    "/images/food-placeholder.jpg";

  return (
    <section className="px-4 pb-10 pt-10 sm:px-6 sm:pb-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#c4512c]">
            Today's spotlight
          </p>

          <h2 className="mt-1 text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl">
            Deal you don't want to miss
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#2b211d] shadow-[0_25px_70px_rgba(88,47,27,0.16)]">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[430px]">
              <img
                src={imageUrl}
                alt={deal.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-[#2b211d]" />

              {/* Featured Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-[#f97316] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg sm:left-6 sm:top-6">
                🔥 Featured Deal
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center overflow-hidden p-6 sm:p-8 lg:p-12">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c92a2a]/20 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f97316]">
                  Limited-time offer
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  {deal.name}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {deal.shortDescription}
                </p>

                {/* Included Items */}
                {deal.items?.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white/50">
                      What's included
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {deal.items.slice(0, 4).map((item, index) => (
                        <span
                          key={`${item.productName}-${index}`}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-white"
                        >
                          {item.quantity}× {item.productName}
                        </span>
                      ))}

                      {deal.items.length > 4 && (
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/60">
                          +{deal.items.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Price + CTA */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Deal price
                    </p>

                    <p className="mt-1 text-3xl font-black text-white sm:text-4xl">
                      Rs. {deal.dealPrice}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onViewDeal(deal)}
                    className="rounded-2xl bg-[#f97316] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ea640b] active:translate-y-0"
                  >
                    View Deal
                  </button>
                </div>

                {/* Date */}
                {deal.endDate && (
                  <p className="mt-5 text-xs font-semibold text-white/45">
                    Offer available for a limited time
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsFeatured;


