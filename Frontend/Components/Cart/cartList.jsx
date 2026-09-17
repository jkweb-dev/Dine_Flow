import CartItem from "./cartItem";

const CartList = ({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <section>
      {/* Section heading */}
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
            Your Selection
          </p>

          <h2 className="mt-1 text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl">
            Your order
          </h2>
        </div>

        <div className="hidden rounded-full bg-orange-50 px-4 py-2 text-xs font-bold text-[#8c5d48] sm:block">
          {cartItems.length}{" "}
          {cartItems.length === 1 ? "selection" : "selections"}
        </div>
      </div>

      {/* Cart items */}
      <div className="space-y-4">
        {cartItems.map((item) => {
          const itemKey =
            item.type === "product"
              ? `${item.productId}-${item.size}`
              : item.dealId;

          return (
            <CartItem
              key={itemKey}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CartList;