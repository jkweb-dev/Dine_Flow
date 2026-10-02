"use client";

import ActiveOrderCard from "./OrderCard";

const ActiveOrderList = ({
  orders,
  onStartDelivery,
  onMarkDelivered,
  actionLoading,
}) => {
  return (
    <div className="space-y-5">
      {orders.map((order) => (
        <ActiveOrderCard
          key={order._id}
          order={order}
          onStartDelivery={onStartDelivery}
          onMarkDelivered={onMarkDelivered}
          actionLoading={actionLoading}
        />
      ))}
    </div>
  );
};

export default ActiveOrderList;