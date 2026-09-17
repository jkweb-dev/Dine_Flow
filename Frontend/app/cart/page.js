
"use client";

import { useRouter } from "next/navigation";

import { useCart } from "@/src/context/cartProvider";

import CartHeader from "@/Components/Cart/header";
import CartList from "@/Components/Cart/cartList";
import CartSummary from "@/Components/Cart/summary";
import EmptyCart from "@/Components/Cart/EmptyCart";

const CartPage = () => {
  const router = useRouter();

  const {
    cartItems,
    cartItemCount,
    cartTotal,
    loading,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const handleIncrease = (item) => {
    increaseQuantity(item);
  };

  const handleDecrease = (item) => {
    decreaseQuantity(item);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleStartOrdering = () => {
    router.push("/menu");
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-[#fffaf5]">
        <section className="border-b border-orange-100 bg-gradient-to-br from-[#fffaf5] via-[#fff6ed] to-[#fff0e7]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="h-8 w-32 animate-pulse rounded-full bg-orange-100" />

            <div className="mt-5 h-12 w-3/4 max-w-xl animate-pulse rounded-xl bg-orange-100 sm:h-16" />

            <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded bg-orange-100" />
            <div className="mt-2 h-5 w-2/3 max-w-xl animate-pulse rounded bg-orange-100" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-36 animate-pulse rounded-[1.5rem] bg-orange-100"
                />
              ))}
            </div>

            <div className="h-80 animate-pulse rounded-[2rem] bg-orange-100" />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf5]">
      <CartHeader itemCount={cartItemCount} />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        {cartItems.length === 0 ? (
          <EmptyCart onStartOrdering={handleStartOrdering} />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-10">
            {/* Cart Items */}
            <CartList
              cartItems={cartItems}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />

            {/* Order Summary */}
            <CartSummary
              cartItemCount={cartItemCount}
              cartTotal={cartTotal}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;

