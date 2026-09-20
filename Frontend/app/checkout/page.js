"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { useAuth } from "@/src/context/authProvider";
import { useCart } from "@/src/context/cartProvider";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import CheckoutHeader from "@/Components/Checkout/header";
import DeliveryAddress from "@/Components/Checkout/deliveryAddress";
import OrderSummary from "@/Components/Checkout/orderSummary";
import PaymentMethod from "@/Components/Checkout/paymentMethod";
import PlaceOrder from "@/Components/Checkout/placeOrder";

const DeliveryMap = dynamic(
  () => import("@/Components/Checkout/deliveryMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[360px] animate-pulse items-center justify-center rounded-[1.5rem] bg-orange-100 sm:h-[440px]">
        <div className="text-center">
          <div className="text-4xl">🗺️</div>

          <p className="mt-3 text-sm font-bold text-[#8c7468]">
            Loading map...
          </p>
        </div>
      </div>
    ),
  }
);

const CheckoutPage = () => {
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const {
    cartItems,
    cartItemCount,
    cartTotal,
    loading: cartLoading,
    clearCart,
  } = useCart();

  const [address, setAddress] = useState({
    address: "",
    area: "",
    phone: "",
    instructions: "",
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState(
    "cash_on_delivery"
  );

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const restaurantLocation = {
    latitude: 33.99430778710625,
    longitude: 72.93326673753486,
  };

  const deliveryFee = 100;

  // Protect checkout page
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      router.replace("/login?redirect=/checkout");
    }
  }, [user, authLoading, router]);

  // Authentication loading
  if (authLoading) {
    return (
      <main className="min-h-screen bg-[#fffaf5]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-12 w-2/3 rounded-xl bg-orange-100" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="space-y-6">
                <div className="h-72 rounded-[2rem] bg-orange-100" />

                <div className="h-96 rounded-[2rem] bg-orange-100" />
              </div>

              <div className="h-[500px] rounded-[2rem] bg-orange-100" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  // User is not authenticated
  if (!user) {
    return null;
  }

  // Handle delivery address input changes
  const handleAddressChange = (event) => {
    const { name, value } = event.target;

    setAddress((currentAddress) => ({
      ...currentAddress,
      [name]: value,
    }));
  };

  // Handle map location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  // Place order
  const handlePlaceOrder = async () => {
    if (!selectedLocation) {
      toast.error("Please select your delivery location.");
      return;
    }

    if (!address.address.trim()) {
      toast.error("Please enter your complete delivery address.");
      return;
    }

    if (!address.area.trim()) {
      toast.error("Please enter your area or locality.");
      return;
    }

    if (!address.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      setIsPlacingOrder(true);

      const items = cartItems.map((item) => {
        if (item.type === "product") {
          return {
            type: "product",
            productId: item.productId,
            size: item.size,
            quantity: item.quantity,
          };
        }

        return {
          type: "deal",
          dealId: item.dealId,
          quantity: item.quantity,
        };
      });

      const response = await api.post("/orders", {
        items,

        delivery: {
          address: address.address.trim(),
          area: address.area.trim(),
          phone: address.phone.trim(),
          instructions: address.instructions.trim(),

          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        },

        paymentMethod,
      });

      clearCart();

      toast.success(
        response.data.message || "Order placed successfully!"
      );

     
    } catch (error) {
      handleError(error, router);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  /*
   * Empty cart
   */
  if (!cartLoading && cartItems.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#fff0e7] text-5xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-black text-[#2b211d]">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#725f55]">
            Add something delicious to your cart before heading
            to checkout.
          </p>

          <button
            type="button"
            onClick={() => router.push("/menu")}
            className="mt-7 rounded-2xl bg-[#c92a2a] px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#ad2020]"
          >
            Explore Menu
          </button>
        </div>
      </main>
    );
  }

  /*
   * Cart loading
   */
  if (cartLoading) {
    return (
      <main className="min-h-screen bg-[#fffaf5]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-12 w-2/3 rounded-xl bg-orange-100" />

            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              <div className="space-y-6">
                <div className="h-72 rounded-[2rem] bg-orange-100" />

                <div className="h-96 rounded-[2rem] bg-orange-100" />
              </div>

              <div className="h-[500px] rounded-[2rem] bg-orange-100" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf5]">
      <CheckoutHeader />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
          {/* Left side */}
          <div className="space-y-6">
            <DeliveryAddress
              address={address}
              onAddressChange={handleAddressChange}
            />

            <DeliveryMap
              restaurantLocation={restaurantLocation}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
          </div>

          {/* Right side */}
          <div className="space-y-6 lg:sticky lg:top-6">
            <OrderSummary
              cartItems={cartItems}
              cartItemCount={cartItemCount}
              cartTotal={cartTotal}
              deliveryFee={deliveryFee}
            />

            <PaymentMethod
              selectedMethod={paymentMethod}
              onMethodChange={(event) =>
                setPaymentMethod(event.target.value)
              }
            />

            <PlaceOrder
              cartTotal={cartTotal}
              deliveryFee={deliveryFee}
              isLocationValid={Boolean(selectedLocation)}
              isPlacingOrder={isPlacingOrder}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;