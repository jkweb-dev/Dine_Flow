"use client";

import { PackageOpen } from "lucide-react";

import OrderCard from "./OrderCard";

const OrderList = ({ orders, onView }) => {
  if (!orders.length) {
    return (
      <div className="rounded-[1.75rem] border border-dashed border-orange-200 bg-white px-6 py-16 text-center shadow-[0_10px_35px_rgba(88,47,27,0.04)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff8f1] text-[#f97316]">
          <PackageOpen size={28} />
        </div>

        <h3 className="mt-5 text-lg font-black text-[#3d2922]">
          No orders found
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9b867b]">
          There are no orders in this category right now.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {orders.map((order) => (
        <OrderCard
          key={order._id}
          order={order}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default OrderList;