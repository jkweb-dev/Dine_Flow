"use client";

import {
  Clock3,
  CircleCheck,
  Bike,
  PackageCheck,
  XCircle,
  Ban,
  UserRoundCheck,
} from "lucide-react";

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock3,
    className: "bg-orange-50 text-orange-700 ring-orange-100",
  },

  confirmed: {
    label: "Confirmed",
    icon: CircleCheck,
    className: "bg-blue-50 text-blue-700 ring-blue-100",
  },

  assigned: {
    label: "Assigned",
    icon: UserRoundCheck,
    className: "bg-purple-50 text-purple-700 ring-purple-100",
  },

  out_for_delivery: {
    label: "Out for Delivery",
    icon: Bike,
    className: "bg-amber-50 text-amber-700 ring-amber-100",
  },

  delivered: {
    label: "Delivered",
    icon: PackageCheck,
    className: "bg-green-50 text-green-700 ring-green-100",
  },

  cancelled: {
    label: "Cancelled",
    icon: XCircle,
    className: "bg-red-50 text-red-700 ring-red-100",
  },

  rejected: {
    label: "Rejected",
    icon: Ban,
    className: "bg-red-50 text-red-700 ring-red-100",
  },
};

const StatusBadge = ({ status }) => {
  const config = statusConfig[status] || {
    label: status || "Unknown",
    icon: Clock3,
    className: "bg-gray-50 text-gray-700 ring-gray-100",
  };

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-extrabold ring-1 ${config.className}`}
    >
      <Icon size={13} strokeWidth={2.4} />

      {config.label}
    </span>
  );
};

export default StatusBadge;