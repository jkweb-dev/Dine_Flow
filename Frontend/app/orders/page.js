"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/src/context/authProvider";
import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import Header from "@/Components/orders/header";
import OrderCard from "@/Components/orders/orderCard";

const OrdersPage = () => {
  const { user, loading: authLoading } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);

        const response = await api.get("/orders");

        setOrders(response.data.orders || []);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, authLoading]);

  if (authLoading || loading) {
    return (
      <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header skeleton */}
          <div className="animate-pulse rounded-[2rem] border border-orange-100 bg-white p-7 shadow-[0_18px_55px_rgba(88,47,27,0.06)]">
            <div className="flex gap-4">
              <div className="h-14 w-14 rounded-2xl bg-orange-100" />

              <div className="flex-1">
                <div className="h-3 w-20 rounded bg-orange-100" />

                <div className="mt-3 h-8 w-44 rounded bg-orange-100" />

                <div className="mt-3 h-4 max-w-md rounded bg-orange-50" />
              </div>
            </div>
          </div>

          {/* Order skeletons */}
          <div className="mt-6 space-y-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_18px_55px_rgba(88,47,27,0.06)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="h-3 w-14 rounded bg-orange-100" />
                    <div className="mt-2 h-5 w-28 rounded bg-orange-100" />
                  </div>

                  <div className="h-8 w-32 rounded-full bg-orange-50" />
                </div>

                <div className="mt-6 h-28 rounded-2xl bg-orange-50" />

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="h-32 rounded-2xl bg-orange-50" />
                  <div className="h-32 rounded-2xl bg-orange-50" />
                </div>

                <div className="mt-5 h-32 rounded-2xl bg-[#4a352c]" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Header orderCount={orders.length} />

        {orders.length === 0 ? (
          <section className="mt-6 overflow-hidden rounded-[2rem] border border-orange-100 bg-white px-6 py-14 text-center shadow-[0_18px_55px_rgba(88,47,27,0.06)] sm:px-10 sm:py-20">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl">
              🍔
            </div>

            <h2 className="mt-6 text-2xl font-black tracking-tight text-[#3d2922]">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm font-medium leading-6 text-[#8c7468]">
              Your delicious orders will appear here once you place your
              first order with DineFlow.
            </p>
          </section>
        ) : (
          <section className="mt-6 space-y-6">
            {orders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default OrdersPage;