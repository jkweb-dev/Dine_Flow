"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/src/context/cartProvider";
import toast from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import DealDetails from "@/Components/dealProduct/dealDetails";

const DealDetailsPage = () => {

  const {addToCart} = useCart()
  
  const params = useParams();
  const router = useRouter();

  const dealId = params.id;

  const [deal, setDeal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchDeal = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/home/deals/${dealId}`);

      setDeal(response.data.deal);
    } catch (error) {
      handleError(error, router);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dealId) {
      fetchDeal();
    }
  }, [dealId]);

  const handleDecrease = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1)
    );
  };

  const handleIncrease = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

 const handleAddToCart = () => {
  if (!deal) return;

  const cartItem = {
    type: "deal",
    dealId: deal._id,
  };

  addToCart(cartItem);

  toast.success("Deal added to cart");
};

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fffaf5] px-4 py-10">
        <div className="mx-auto grid max-w-7xl animate-pulse gap-8 lg:grid-cols-2">
          <div className="aspect-square rounded-[2rem] bg-orange-100" />

          <div className="space-y-5 py-4">
            <div className="h-8 w-40 rounded-full bg-orange-100" />
            <div className="h-12 w-3/4 rounded-xl bg-orange-100" />
            <div className="h-5 w-full rounded bg-orange-100" />
            <div className="h-5 w-5/6 rounded bg-orange-100" />
            <div className="h-28 rounded-2xl bg-orange-100" />
            <div className="h-20 rounded-2xl bg-orange-100" />
          </div>
        </div>
      </main>
    );
  }

  if (!deal) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4">
        <div className="text-center">
          <div className="text-5xl">🍔</div>

          <h1 className="mt-4 text-2xl font-black text-[#2b211d]">
            Deal not found
          </h1>

          <p className="mt-2 text-sm text-[#725f55]">
            This deal may no longer be available.
          </p>

          <button
            type="button"
            onClick={() => router.push("/deals")}
            className="mt-6 rounded-xl bg-[#c92a2a] px-6 py-3 font-bold text-white transition hover:bg-[#ad2020]"
          >
            Browse Deals
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf5]">
      <DealDetails
        deal={deal}
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
};

export default DealDetailsPage;