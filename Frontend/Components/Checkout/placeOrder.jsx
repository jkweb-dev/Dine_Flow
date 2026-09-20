const PlaceOrder = ({
  cartTotal,
  deliveryFee,
  isLocationValid,
  isPlacingOrder,
  onPlaceOrder,
}) => {
  const grandTotal = cartTotal + deliveryFee;

  const canPlaceOrder =
    isLocationValid &&
    !isPlacingOrder;

  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_20px_60px_rgba(88,47,27,0.08)]">
      {/* Top accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#c92a2a] via-[#f97316] to-[#c92a2a]" />

      <div className="p-5 sm:p-6">
        {/* Final total */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
              Final Total
            </p>

            <p className="mt-1 text-sm font-semibold text-[#725f55]">
              Food + delivery
            </p>
          </div>

          <p className="text-3xl font-black tracking-tight text-[#2b211d]">
            Rs. {grandTotal}
          </p>
        </div>

        {/* Sign-in notice */}
       

        {/* Invalid location notice */}
        {!isLocationValid && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
              📍
            </div>

            <div>
              <p className="text-sm font-black text-[#9f2929]">
                Select a valid delivery location
              </p>

              <p className="mt-1 text-xs leading-5 text-[#a34e4e]">
                Your delivery location must be within 5 km of DineFlow.
              </p>
            </div>
          </div>
        )}

        {/* Place order button */}
        <button
          type="button"
          onClick={onPlaceOrder}
          disabled={!canPlaceOrder}
          className={`mt-5 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-black text-white shadow-lg transition duration-300 ${
            canPlaceOrder
              ? "bg-[#c92a2a] shadow-red-200 hover:-translate-y-0.5 hover:bg-[#ad2020] hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
              : "cursor-not-allowed bg-[#d8c9c1] shadow-none"
          }`}
        >
          {isPlacingOrder ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              <span>Placing Order...</span>
            </>
          ) : (
            <>
              <span>
                "Place Order"
                 
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </>
          )}
        </button>

        {/* Security note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-[#8c7468]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50">
            🛡️
          </span>

          <span>Your order is safe with DineFlow</span>
        </div>

        {/* COD note */}
        <p className="mt-3 text-center text-[11px] leading-5 text-[#a0877a]">
          By placing this order, you agree to provide accurate delivery
          information and pay the displayed total through your selected
          payment method.
        </p>
      </div>
    </section>
  );
};

export default PlaceOrder;