"use client";

import { CalendarDays, Hash } from "lucide-react";

import OrderStatus from "./status";
import OrderItems from "./items";
import DeliveryInfo from "./deliveryInfo";
import PaymentInfo from "./payment";
import OrderPricing from "./orderPricing";

const OrderCard = ({ order }) => {
  const orderDate = new Date(order.createdAt);

  const formattedDate = orderDate.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedTime = orderDate.toLocaleTimeString("en-PK", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <article className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.07)]">
      {/* Order heading */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-[#fffaf6] to-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#a58b7d]">
              Order
            </p>

            <div className="mt-1 flex items-center gap-2">
              <Hash size={17} className="text-[#c92a2a]" />

              <h2 className="text-lg font-black tracking-tight text-[#3d2922]">
                {order.orderId}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#7f685d] ring-1 ring-orange-100">
              <CalendarDays size={14} className="text-[#f97316]" />

              <span>
                {formattedDate} · {formattedTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Order content */}
      <div className="space-y-5 p-5 sm:p-6">
        <OrderStatus status={order.orderStatus} />

        <OrderItems items={order.items} />

        <div className="grid gap-5 lg:grid-cols-2">
          <DeliveryInfo delivery={order.delivery} />

          <PaymentInfo payment={order.payment} />
        </div>

        <OrderPricing pricing={order.pricing} />
      </div>
    </article>
  );
};

export default OrderCard;