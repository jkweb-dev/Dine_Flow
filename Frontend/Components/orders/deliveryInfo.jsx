"use client";

import {
  MapPin,
  Navigation,
  Phone,
  MessageSquare,
} from "lucide-react";

const DeliveryInfo = ({ delivery }) => {
  return (
    <section className="rounded-2xl border border-orange-100 bg-[#fffaf6] p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <MapPin size={18} className="text-[#c92a2a]" />

        <h3 className="text-sm font-black uppercase tracking-wide text-[#5d4035]">
          Delivery details
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
            Address
          </p>

          <p className="mt-1 text-sm font-bold leading-6 text-[#4d372e]">
            {delivery.address}
          </p>

          <p className="text-sm font-medium text-[#8c7468]">
            {delivery.area}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-orange-100">
            <Phone size={17} className="shrink-0 text-[#f97316]" />

            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Phone
              </p>

              <p className="mt-0.5 truncate text-sm font-bold text-[#4d372e]">
                {delivery.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-orange-100">
            <Navigation size={17} className="shrink-0 text-[#f97316]" />

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Distance
              </p>

              <p className="mt-0.5 text-sm font-bold text-[#4d372e]">
                {delivery.distance.toFixed(2)} km
              </p>
            </div>
          </div>
        </div>

        {delivery.instructions && (
          <div className="flex gap-3 rounded-xl bg-white p-3 ring-1 ring-orange-100">
            <MessageSquare
              size={17}
              className="mt-0.5 shrink-0 text-[#f97316]"
            />

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Delivery instructions
              </p>

              <p className="mt-1 text-sm font-medium leading-6 text-[#5d4035]">
                {delivery.instructions}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeliveryInfo;