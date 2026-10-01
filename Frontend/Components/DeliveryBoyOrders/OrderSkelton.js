"use client";

const OrdersSkeleton = () => {
  return (
    <div className="space-y-5">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-orange-50 p-5 sm:p-6">
            <div className="space-y-3">
              <div className="h-5 w-32 animate-pulse rounded-lg bg-orange-100" />

              <div className="h-3 w-40 animate-pulse rounded bg-orange-50" />
            </div>

            <div className="space-y-2">
              <div className="ml-auto h-3 w-12 animate-pulse rounded bg-orange-50" />

              <div className="h-6 w-24 animate-pulse rounded-lg bg-orange-100" />
            </div>
          </div>

          {/* Middle */}
          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <div className="h-24 animate-pulse rounded-2xl bg-orange-50" />

            <div className="h-24 animate-pulse rounded-2xl bg-orange-50" />
          </div>

          {/* Items */}
          <div className="border-t border-orange-50 px-5 py-5 sm:px-6">
            <div className="h-4 w-24 animate-pulse rounded bg-orange-50" />

            <div className="mt-3 flex gap-2">
              <div className="h-7 w-24 animate-pulse rounded-lg bg-orange-100" />
              <div className="h-7 w-28 animate-pulse rounded-lg bg-orange-100" />
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between border-t border-orange-50 p-5 sm:p-6">
            <div className="h-8 w-24 animate-pulse rounded-lg bg-orange-50" />

            <div className="h-11 w-28 animate-pulse rounded-xl bg-orange-100" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersSkeleton;