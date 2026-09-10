"use client";

import {
  AlertTriangle,
  Bike,
  Loader2,
  Phone,
  Plus,
  RefreshCw,
  Trash2,
  User,
  Users,
  X,
} from "lucide-react";

const DeliveryList = ({
  deliveryBoys,
  loading,
  error,
  onCreateDeliveryBoy,
  onDeleteDeliveryBoy,
  deleteDialogOpen,
  selectedDeliveryBoy,
  deleting,
  onConfirmDelete,
  onCloseDeleteDialog,
  onRetry,
}) => {
  return (
    <div className="min-h-full bg-[#fffaf6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                <Bike size={21} strokeWidth={2.2} />
              </div>

              <span className="text-sm font-semibold text-[#c92a2a]">
                Delivery Management
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#241b16] sm:text-3xl">
              Delivery Boys
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#806f66] sm:text-base">
              Manage the delivery team responsible for getting orders to
              customers.
            </p>
          </div>

          <button
            type="button"
            onClick={onCreateDeliveryBoy}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b92323] hover:shadow-md active:scale-[0.98]"
          >
            <Plus size={18} />
            Add Delivery Boy
          </button>
        </div>

        {/* Stats */}
        {!loading && !error && (
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-[0_6px_24px_rgba(70,40,20,0.04)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#806f66]">
                    Total Delivery Boys
                  </p>

                  <p className="mt-1 text-2xl font-bold text-[#241b16]">
                    {deliveryBoys.length}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                  <Users size={21} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-[0_6px_24px_rgba(70,40,20,0.04)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#806f66]">
                    Team Status
                  </p>

                  <p className="mt-1 text-base font-bold text-[#287a45]">
                    Team Ready
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf9f0] text-[#287a45]">
                  <Bike size={21} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl border border-[#eadfd7] bg-white px-5 py-16 text-center shadow-[0_8px_30px_rgba(70,40,20,0.05)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0eb] text-[#c92a2a]">
              <Loader2 size={24} className="animate-spin" />
            </div>

            <h2 className="mt-4 text-base font-semibold text-[#382b24]">
              Loading delivery boys...
            </h2>

            <p className="mt-1 text-sm text-[#8d7c73]">
              Please wait while we fetch the delivery team.
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-[#eadfd7] bg-white px-5 py-16 text-center shadow-[0_8px_30px_rgba(70,40,20,0.05)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0eb] text-[#c92a2a]">
              <AlertTriangle size={24} />
            </div>

            <h2 className="mt-4 text-base font-semibold text-[#382b24]">
              Unable to load delivery boys
            </h2>

            <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-[#8d7c73]">
              Something went wrong while loading the delivery team. Please
              try again.
            </p>

            <button
              type="button"
              onClick={onRetry}
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl border border-[#ded2ca] bg-white px-4 text-sm font-semibold text-[#594940] transition hover:bg-[#fff8f4]"
            >
              <RefreshCw size={16} />
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && deliveryBoys.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#dccdc4] bg-white px-5 py-16 text-center shadow-[0_8px_30px_rgba(70,40,20,0.04)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0eb] text-[#c92a2a]">
              <Bike size={27} />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#241b16]">
              No delivery boys yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8d7c73]">
              Your delivery team is currently empty. Create your first
              delivery boy account to start managing deliveries.
            </p>

            <button
              type="button"
              onClick={onCreateDeliveryBoy}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#c92a2a] px-5 text-sm font-semibold text-white transition hover:bg-[#b92323]"
            >
              <Plus size={18} />
              Add Delivery Boy
            </button>
          </div>
        )}

        {/* Delivery Boys */}
        {!loading && !error && deliveryBoys.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-[#eadfd7] bg-white shadow-[0_8px_30px_rgba(70,40,20,0.05)]">
            {/* Desktop Header */}
            <div className="hidden border-b border-[#f0e6df] bg-[#fffaf7] px-6 py-4 md:grid md:grid-cols-[1.2fr_1fr_1.2fr_auto] md:items-center md:gap-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#907e74]">
                Delivery Boy
              </p>

              <p className="text-xs font-bold uppercase tracking-wider text-[#907e74]">
                User ID
              </p>

              <p className="text-xs font-bold uppercase tracking-wider text-[#907e74]">
                Phone
              </p>

              <p className="text-right text-xs font-bold uppercase tracking-wider text-[#907e74]">
                Action
              </p>
            </div>

            <div className="divide-y divide-[#f1e8e2]">
              {deliveryBoys.map((deliveryBoy) => (
                <div
                  key={deliveryBoy._id}
                  className="px-4 py-4 transition hover:bg-[#fffaf7] sm:px-6"
                >
                  {/* Desktop */}
                  <div className="hidden md:grid md:grid-cols-[1.2fr_1fr_1.2fr_auto] md:items-center md:gap-6">
                    {/* Name */}
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                        <User size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#30231d]">
                          {deliveryBoy.name}
                        </p>

                        <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#edf9f0] px-2 py-0.5 text-[11px] font-semibold text-[#287a45]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#287a45]" />
                          Delivery Boy
                        </div>
                      </div>
                    </div>

                    {/* User ID */}
                    <div>
                      <span className="rounded-lg bg-[#f8f3ef] px-2.5 py-1 text-sm font-medium text-[#594940]">
                        {deliveryBoy.userId}
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 text-sm text-[#65564e]">
                      <Phone size={16} className="text-[#a5948b]" />
                      {deliveryBoy.phone}
                    </div>

                    {/* Delete */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => onDeleteDeliveryBoy(deliveryBoy)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-[#a45b52] transition hover:bg-[#fff0eb] hover:text-[#c92a2a]"
                        aria-label={`Delete ${deliveryBoy.name}`}
                        title="Delete delivery boy"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden">
                    <div className="flex items-start justify-between gap-3">
                        
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                          <User size={20} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#30231d]">
                            {deliveryBoy.name}
                          </p>

                          <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#edf9f0] px-2 py-0.5 text-[11px] font-semibold text-[#287a45]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#287a45]" />
                            Delivery Boy
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onDeleteDeliveryBoy(deliveryBoy)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#a45b52] transition hover:bg-[#fff0eb] hover:text-[#c92a2a]"
                        aria-label={`Delete ${deliveryBoy.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#faf6f2] p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9a8980]">
                          User ID
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-[#594940]">
                          {deliveryBoy.userId}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#faf6f2] p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9a8980]">
                          Phone
                        </p>

                        <p className="mt-1 flex items-center gap-1.5 truncate text-sm font-semibold text-[#594940]">
                          <Phone size={14} className="shrink-0 text-[#a5948b]" />
                          {deliveryBoy.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && selectedDeliveryBoy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241b16]/45 px-4 backdrop-blur-[2px]">
          <div
            className="w-full max-w-md overflow-hidden rounded-2xl border border-[#eadfd7] bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-delivery-title"
          >
            {/* Dialog Header */}
            <div className="flex items-start justify-between border-b border-[#f0e6df] px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                  <Trash2 size={20} />
                </div>

                <div>
                  <h2
                    id="delete-delivery-title"
                    className="text-base font-bold text-[#241b16]"
                  >
                    Delete Delivery Boy
                  </h2>

                  <p className="mt-0.5 text-xs text-[#8d7c73]">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onCloseDeleteDialog}
                disabled={deleting}
                className="rounded-lg p-1.5 text-[#9a8980] transition hover:bg-[#faf3ef] hover:text-[#594940] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close dialog"
              >
                <X size={19} />
              </button>
            </div>

            {/* Dialog Body */}
            <div className="px-5 py-5 sm:px-6">
              <div className="rounded-xl border border-[#f1e1da] bg-[#fff8f5] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#c92a2a] shadow-sm">
                    <User size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#382b24]">
                      {selectedDeliveryBoy.name}
                    </p>

                    <p className="mt-0.5 text-xs text-[#8d7c73]">
                      ID: {selectedDeliveryBoy.userId}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#65564e]">
                Are you sure you want to permanently delete this delivery boy
                account? They will no longer be able to use their account.
              </p>
            </div>

            {/* Dialog Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-[#f0e6df] bg-[#fffaf7] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={onCloseDeleteDialog}
                disabled={deleting}
                className="h-11 rounded-xl border border-[#ded2ca] bg-white px-5 text-sm font-semibold text-[#594940] transition hover:bg-[#fff8f4] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={onConfirmDelete}
                disabled={deleting}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 text-sm font-semibold text-white transition hover:bg-[#b92323] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={17} />
                    Delete Delivery Boy
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

export default DeliveryList;