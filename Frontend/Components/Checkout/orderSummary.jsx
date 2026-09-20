const OrderSummary = ({
  cartItems,
  cartItemCount,
  cartTotal,
  deliveryFee,
}) => {
  const grandTotal = cartTotal + deliveryFee;

  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.07)]">
      {/* Header */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-[#fffaf5] to-[#fff6ed] px-5 py-5 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
              Your Order
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-[#2b211d] sm:text-2xl">
              Order Summary
            </h2>
          </div>

          <div className="flex h-9 min-w-9 items-center justify-center rounded-full bg-[#c92a2a] px-3 text-xs font-black text-white">
            {cartItemCount}
          </div>
        </div>
      </div>

      {/* Cart items */}
      <div className="p-5 sm:p-6">
        <div className="space-y-4">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            const itemKey =
              item.type === "product"
                ? `${item.productId}-${item.size}`
                : item.dealId;

            return (
              <div
                key={itemKey}
                className="flex gap-3"
              >
                {/* Image */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#fff0e7]">
                  <img
                    src={
                      item.image?.url ||
                      item.image ||
                      "/images/food-placeholder.jpg"
                    }
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white/95 px-1 text-[10px] font-black text-[#c92a2a] shadow-sm">
                    {item.quantity}
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-black text-[#2b211d]">
                        {item.name}
                      </h3>

                      {item.type === "product" && item.size && (
                        <p className="mt-1 text-xs font-semibold text-[#8c7468]">
                          Size: {item.size}
                        </p>
                      )}

                      {item.type === "deal" && (
                        <p className="mt-1 text-xs font-semibold text-[#c92a2a]">
                          Special Deal
                        </p>
                      )}
                    </div>

                    <p className="shrink-0 text-sm font-black text-[#2b211d]">
                      Rs. {itemTotal}
                    </p>
                  </div>

                  <p className="mt-1 text-xs font-medium text-[#a0877a]">
                    Rs. {item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-orange-100" />

        {/* Price breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-[#725f55]">
              Subtotal
            </span>

            <span className="font-black text-[#2b211d]">
              Rs. {cartTotal}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 text-sm">
            <div>
              <p className="font-semibold text-[#725f55]">
                Delivery Fee
              </p>

              <p className="mt-1 text-xs text-[#a0877a]">
                Based on your delivery location
              </p>
            </div>

            <span className="shrink-0 font-black text-[#2b211d]">
              Rs. {deliveryFee}
            </span>
          </div>
        </div>

        {/* Total */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#fff8f1] to-[#fff0e7] p-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#725f55]">
                Total
              </p>

              <p className="mt-1 text-xs font-medium text-[#a0877a]">
                Includes delivery
              </p>
            </div>

            <p className="text-2xl font-black text-[#c92a2a] sm:text-3xl">
              Rs. {grandTotal}
            </p>
          </div>
        </div>

        {/* Security note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-[#8c7468]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50">
            🔒
          </span>

          <span>Your order details are securely handled</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;