"use client";

import DealImage from "./image";
import DealInfo from "./info";
import DealItems from "./dealItems";
import DealQuantitySelector from "./quantityselector";

const DealDetails = ({ deal, quantity, onDecrease, onIncrease, onAddToCart }) => {
  const totalPrice = deal.dealPrice * quantity;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        {/* Deal Image */}
        <DealImage image={deal.image} name={deal.name} />

        {/* Deal Information */}
        <div>
          <DealInfo deal={deal} />

          {/* Included Items */}
          <DealItems items={deal.items} />

          {/* Quantity */}
          <DealQuantitySelector
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />

          {/* Order Summary */}
          <div className="mt-7 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#725f55]">
                {deal.dealPrice} × {quantity} deal
                {quantity > 1 ? "s" : ""}
              </span>

              <span className="text-xl font-black text-[#2b211d]">
                Rs. {totalPrice}
              </span>
            </div>

            <button
              type="button"
              onClick={onAddToCart}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-6 py-4 text-base font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#ad2020] hover:shadow-xl active:scale-[0.98]"
            >
              <span>🛒</span>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealDetails;