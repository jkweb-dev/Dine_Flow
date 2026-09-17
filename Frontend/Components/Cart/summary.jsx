const CartSummary = ({
  cartItemCount,
  cartTotal,
  onCheckout,
}) => {
  return (
    <aside className="lg:sticky lg:top-6">
      <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_20px_60px_rgba(88,47,27,0.08)]">
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-[#c92a2a] via-[#f97316] to-[#c92a2a]" />

        <div className="p-5 sm:p-6">
          {/* Heading */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
              Order Summary
            </p>

            <h2 className="mt-1 text-2xl font-black tracking-tight text-[#2b211d]">
              Almost there!
            </h2>
          </div>

          {/* Items count */}
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="font-semibold text-[#725f55]">
              Items
            </span>

            <span className="font-black text-[#2b211d]">
              {cartItemCount}
            </span>
          </div>

          {/* Subtotal */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="font-semibold text-[#725f55]">
              Subtotal
            </span>

            <span className="font-black text-[#2b211d]">
              Rs. {cartTotal}
            </span>
          </div>

          {/* Delivery */}
          <div className="mt-4 flex items-start justify-between gap-4 text-sm">
            <div>
              <p className="font-semibold text-[#725f55]">
                Delivery
              </p>

              <p className="mt-1 text-xs text-[#a0877a]">
                Calculated at checkout
              </p>
            </div>

            <span className="font-bold text-[#8c7468]">
              —
            </span>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-orange-100" />

          {/* Total */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#725f55]">
                Total
              </p>

              <p className="mt-1 text-xs text-[#a0877a]">
                Before delivery
              </p>
            </div>

            <p className="text-2xl font-black text-[#c92a2a] sm:text-3xl">
              Rs. {cartTotal}
            </p>
          </div>

          {/* Checkout button */}
          <button
            type="button"
            onClick={onCheckout}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#c92a2a] px-6 py-4 text-sm font-black text-white shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-0.5 hover:bg-[#ad2020] hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
          >
            <span>Proceed to Checkout</span>

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

          {/* Trust message */}
          <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-[#8c7468]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50">
              🔒
            </span>

            <span>Secure and easy checkout</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CartSummary;