"use client";

import {
  CalendarDays,
  ChevronRight,
  Edit3,
  ImageOff,
  Package,
  Plus,
  Tag,
  Trash2,
  Utensils,
  X,
} from "lucide-react";

const DealList = ({
  deals,
  loading,
  error,
  onCreateDeal,
  onEditDeal,
  onDeleteDeal,
  onToggleAvailability,
  deleteDialogOpen,
  selectedDeal,
  deleting,
  onConfirmDelete,
  onCloseDeleteDialog,
  onRetry,
}) => {
  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PK").format(price);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[#fff0e6] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e4572e]">
                Deal Management
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#29231f] sm:text-3xl">
              Deals
            </h1>

            <p className="mt-1 text-sm text-[#81766e]">
              Create and manage special offers for your customers.
            </p>
          </div>

          <button
            type="button"
            onClick={onCreateDeal}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b52323] active:scale-[0.98] sm:w-auto"
          >
            <Plus size={18} />
            Create Deal
          </button>
        </div>

        {/* Stats */}
        {!loading && !error && (
          <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#f2e4da] bg-white p-4 shadow-sm">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0e6] text-[#e4572e]">
                <Tag size={18} />
              </div>

              <p className="text-xs font-medium text-[#8c8078]">
                Total Deals
              </p>

              <p className="mt-1 text-2xl font-bold text-[#29231f]">
                {deals.length}
              </p>
            </div>

            <div className="rounded-2xl border border-[#f2e4da] bg-white p-4 shadow-sm">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#16834d]">
                <Utensils size={18} />
              </div>

              <p className="text-xs font-medium text-[#8c8078]">
                Available
              </p>

              <p className="mt-1 text-2xl font-bold text-[#29231f]">
                {deals.filter((deal) => deal.available).length}
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-[#f2e4da] bg-white p-4 shadow-sm sm:col-span-1">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff7d6] text-[#c58b00]">
                <Package size={18} />
              </div>

              <p className="text-xs font-medium text-[#8c8078]">
                Unavailable
              </p>

              <p className="mt-1 text-2xl font-bold text-[#29231f]">
                {deals.filter((deal) => !deal.available).length}
              </p>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-[#f2e4da] bg-white shadow-sm"
              >
                <div className="h-52 animate-pulse bg-[#f5eee8]" />

                <div className="space-y-4 p-5">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-[#f5eee8]" />
                  <div className="h-4 w-full animate-pulse rounded bg-[#f5eee8]" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-[#f5eee8]" />
                  <div className="h-10 w-full animate-pulse rounded-xl bg-[#f5eee8]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-[#f2e4da] bg-white px-6 py-12 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e6] text-[#c92a2a]">
              <ImageOff size={25} />
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#29231f]">
              Unable to load deals
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#81766e]">
              Something went wrong while loading the deals. Please try
              again.
            </p>

            <button
              type="button"
              onClick={onRetry}
              className="mt-5 rounded-xl bg-[#c92a2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b52323]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && deals.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#e8d7ca] bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0e6] text-[#e4572e]">
              <Tag size={28} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#29231f]">
              No deals yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#81766e]">
              Create your first special deal and start offering
              attractive packages to your customers.
            </p>

            <button
              type="button"
              onClick={onCreateDeal}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b52323]"
            >
              <Plus size={18} />
              Create Your First Deal
            </button>
          </div>
        )}

        {/* Deal Cards */}
        {!loading && !error && deals.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {deals.map((deal) => (
              <div
                key={deal._id}
                className="group overflow-hidden rounded-2xl border border-[#f0e1d7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#f7eee8]">
                  {deal.image?.url ? (
                    <img
                      src={deal.image.url}
                      alt={deal.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#b7a79d]">
                      <ImageOff size={38} />
                    </div>
                  )}

                  {/* Availability badge */}
                  <div className="absolute left-4 top-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur-sm ${
                        deal.available
                          ? "bg-white/95 text-[#16834d]"
                          : "bg-white/95 text-[#8c8078]"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          deal.available
                            ? "bg-[#22a45a]"
                            : "bg-[#aaa09a]"
                        }`}
                      />

                      {deal.available ? "Available" : "Unavailable"}
                    </span>
                  </div>

                  {/* Deal ID */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-lg bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {deal.dealId}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Name + Price */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-bold text-[#29231f]">
                        {deal.name}
                      </h2>

                      <p className="mt-1 line-clamp-2 text-sm leading-5 text-[#81766e]">
                        {deal.shortDescription}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-xl bg-[#fff0e6] px-3 py-2 text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#a56b55]">
                        Price
                      </p>

                      <p className="text-base font-extrabold text-[#c92a2a]">
                        Rs. {formatPrice(deal.dealPrice)}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mt-5 rounded-xl border border-[#f2e8e2] bg-[#fffaf7] p-3.5">
                    <div className="mb-3 flex items-center gap-2">
                      <Utensils
                        size={15}
                        className="text-[#e4572e]"
                      />

                      <p className="text-xs font-bold uppercase tracking-wide text-[#6f625a]">
                        Included Items
                      </p>
                    </div>

                    <div className="space-y-2">
                      {deal.items?.map((item, index) => (
                        <div
                          key={`${item.productName}-${index}`}
                          className="flex items-center justify-between gap-3 text-sm"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#fbe2d5] text-[10px] font-bold text-[#c94d28]">
                              {index + 1}
                            </span>

                            <span className="truncate text-[#514740]">
                              {item.productName}
                            </span>
                          </div>

                          <span className="shrink-0 rounded-md bg-white px-2 py-1 text-xs font-bold text-[#6f625a] shadow-sm">
                            × {item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#faf7f4] p-3">
                      <div className="flex items-center gap-1.5 text-[#8c8078]">
                        <CalendarDays size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wide">
                          Starts
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs font-semibold text-[#4d433d]">
                        {formatDate(deal.startDate)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#faf7f4] p-3">
                      <div className="flex items-center gap-1.5 text-[#8c8078]">
                        <CalendarDays size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wide">
                          Ends
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs font-semibold text-[#4d433d]">
                        {formatDate(deal.endDate)}
                      </p>
                    </div>
                  </div>

                  {/* Availability Toggle */}
                  <div className="mt-5 flex items-center justify-between rounded-xl border border-[#f0e5de] px-3.5 py-3">
                    <div>
                      <p className="text-sm font-semibold text-[#403731]">
                        Deal Availability
                      </p>

                      <p className="mt-0.5 text-xs text-[#93877f]">
                        {deal.available
                          ? "Customers can see this deal."
                          : "Deal is currently hidden."}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onToggleAvailability(deal._id)
                      }
                      aria-label={`Toggle availability for ${deal.name}`}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                        deal.available
                          ? "bg-[#c92a2a]"
                          : "bg-[#cfc5be]"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                          deal.available
                            ? "-translate-x-5"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => onEditDeal(deal._id)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#eadbd1] bg-white px-4 py-2.5 text-sm font-semibold text-[#594c44] transition hover:border-[#d9c5b8] hover:bg-[#fffaf7]"
                    >
                      <Edit3 size={16} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => onDeleteDeal(deal)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#f0d5d1] bg-[#fff8f7] px-4 py-2.5 text-sm font-semibold text-[#c92a2a] transition hover:bg-[#fff0ee]"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && selectedDeal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            
            {/* Dialog Header */}
            <div className="flex items-start justify-between border-b border-[#f1e5de] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ee] text-[#c92a2a]">
                  <Trash2 size={19} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#29231f]">
                    Delete Deal
                  </h3>

                  <p className="text-xs text-[#93877f]">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onCloseDeleteDialog}
                disabled={deleting}
                className="rounded-lg p-1.5 text-[#93877f] transition hover:bg-[#f8f2ee] hover:text-[#403731] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Dialog Body */}
            <div className="px-5 py-5 sm:px-6">
              <p className="text-sm leading-6 text-[#625750]">
                Are you sure you want to delete{" "}
                <span className="font-bold text-[#29231f]">
                  {selectedDeal.name}
                </span>
                ? The deal and its image will be permanently
                removed.
              </p>

              <div className="mt-4 rounded-xl bg-[#fffaf7] p-3">
                <div className="flex items-center gap-3">
                  {selectedDeal.image?.url ? (
                    <img
                      src={selectedDeal.image.url}
                      alt={selectedDeal.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5eee8] text-[#aa9b91]">
                      <ImageOff size={18} />
                    </div>
                  )}

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#403731]">
                      {selectedDeal.name}
                    </p>

                    <p className="text-xs text-[#93877f]">
                      {selectedDeal.dealId}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dialog Actions */}
            <div className="flex flex-col-reverse gap-2 border-t border-[#f1e5de] bg-[#fffaf7] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={onCloseDeleteDialog}
                disabled={deleting}
                className="rounded-xl border border-[#e7d9d0] bg-white px-5 py-2.5 text-sm font-semibold text-[#625750] transition hover:bg-[#faf6f3] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={onConfirmDelete}
                disabled={deleting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b52323] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={16} />
                    Delete Deal
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealList;