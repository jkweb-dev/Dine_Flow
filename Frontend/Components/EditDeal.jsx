"use client";

import {
  CalendarDays,
  ChevronLeft,
  ImagePlus,
  Minus,
  Plus,
  RefreshCw,
  Tag,
  Trash2,
  Upload,
  Utensils,
} from "lucide-react";

const EditDeal = ({
  formData,
  existingImage,
  imagePreview,
  loading,
  saving,
  error,
  onChange,
  onImageChange,
  onAddItem,
  onRemoveItem,
  onItemChange,
  onSubmit,
  onCancel,
  onRetry,
}) => {
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffaf5] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 h-8 w-48 animate-pulse rounded-lg bg-[#f1e5dc]" />

          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6">
              <div className="h-72 animate-pulse rounded-2xl bg-white shadow-sm" />
              <div className="h-72 animate-pulse rounded-2xl bg-white shadow-sm" />
            </div>

            <div className="h-96 animate-pulse rounded-2xl bg-white shadow-sm" />
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#fffaf5] px-4">
        <div className="w-full max-w-md rounded-2xl border border-[#f0e2d9] bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0ee] text-[#c92a2a]">
            <RefreshCw size={24} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-[#29231f]">
            Unable to load deal
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#81766e]">
            Something went wrong while loading this deal. Please
            try again.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onRetry}
              className="rounded-xl bg-[#c92a2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b52323]"
            >
              Try Again
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border border-[#e5d8cf] bg-white px-5 py-2.5 text-sm font-semibold text-[#625750] transition hover:bg-[#fffaf7]"
            >
              Back to Deals
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-7">
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#756960] transition hover:text-[#c92a2a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft size={18} />
            Back to Deals
          </button>

          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e6] text-[#e4572e]">
              <Tag size={21} />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e4572e]">
                Deal Management
              </span>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#29231f] sm:text-3xl">
                Edit Deal
              </h1>

              <p className="mt-1 text-sm text-[#81766e]">
                Update the deal information, items, pricing and
                schedule.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Deal Information */}
              <section className="rounded-2xl border border-[#f0e1d7] bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e6] text-[#e4572e]">
                    <Tag size={18} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-[#29231f]">
                      Deal Information
                    </h2>

                    <p className="text-xs text-[#93877f]">
                      Basic information customers will see.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#4e443e]"
                    >
                      Deal Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      placeholder="e.g. Family Feast"
                      disabled={saving}
                      className="w-full rounded-xl border border-[#e4d8d0] bg-[#fffdfb] px-4 py-3 text-sm text-[#302923] outline-none transition placeholder:text-[#b2a69f] focus:border-[#d75b3c] focus:ring-4 focus:ring-[#d75b3c]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="shortDescription"
                      className="mb-2 block text-sm font-semibold text-[#4e443e]"
                    >
                      Short Description
                    </label>

                    <textarea
                      id="shortDescription"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={onChange}
                      placeholder="Describe what makes this deal special..."
                      rows={4}
                      disabled={saving}
                      className="w-full resize-none rounded-xl border border-[#e4d8d0] bg-[#fffdfb] px-4 py-3 text-sm leading-6 text-[#302923] outline-none transition placeholder:text-[#b2a69f] focus:border-[#d75b3c] focus:ring-4 focus:ring-[#d75b3c]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>
              </section>

              {/* Items */}
              <section className="rounded-2xl border border-[#f0e1d7] bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff4e9] text-[#e4572e]">
                      <Utensils size={18} />
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-[#29231f]">
                        Items in Deal
                      </h2>

                      <p className="text-xs text-[#93877f]">
                        Add the food items and their quantities.
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#faf3ee] px-2.5 py-1 text-xs font-bold text-[#8c7163]">
                    {formData.items.length}{" "}
                    {formData.items.length === 1
                      ? "Item"
                      : "Items"}
                  </span>
                </div>

                <div className="space-y-3">
                  {formData.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-[#eee3dc] bg-[#fffaf7] p-3 sm:p-4"
                    >
                      <div className="flex gap-3">
                        {/* Number */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fbe3d7] text-sm font-bold text-[#c94d28]">
                          {index + 1}
                        </div>

                        {/* Item Name */}
                        <div className="min-w-0 flex-1">
                          <label
                            htmlFor={`item-${index}`}
                            className="mb-1.5 block text-xs font-semibold text-[#655950]"
                          >
                            Item Name
                          </label>

                          <input
                            id={`item-${index}`}
                            type="text"
                            value={item.productName}
                            onChange={(event) =>
                              onItemChange(
                                index,
                                "productName",
                                event.target.value
                              )
                            }
                            placeholder="e.g. Zinger Burger"
                            disabled={saving}
                            className="w-full rounded-lg border border-[#e3d8d1] bg-white px-3 py-2.5 text-sm text-[#302923] outline-none transition placeholder:text-[#b5aaa3] focus:border-[#d75b3c] focus:ring-4 focus:ring-[#d75b3c]/10 disabled:cursor-not-allowed disabled:opacity-60"
                          />
                        </div>

                        {/* Quantity */}
                        <div className="w-[92px] shrink-0">
                          <label className="mb-1.5 block text-xs font-semibold text-[#655950]">
                            Quantity
                          </label>

                          <div className="flex h-[42px] items-center overflow-hidden rounded-lg border border-[#e3d8d1] bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                onItemChange(
                                  index,
                                  "quantity",
                                  Math.max(
                                    1,
                                    Number(item.quantity) - 1
                                  )
                                )
                              }
                              disabled={
                                saving ||
                                Number(item.quantity) <= 1
                              }
                              className="flex h-full w-8 items-center justify-center text-[#756960] transition hover:bg-[#fff3ec] hover:text-[#c92a2a] disabled:cursor-not-allowed disabled:opacity-35"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="flex-1 text-center text-sm font-bold text-[#403731]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                onItemChange(
                                  index,
                                  "quantity",
                                  Number(item.quantity) + 1
                                )
                              }
                              disabled={saving}
                              className="flex h-full w-8 items-center justify-center text-[#756960] transition hover:bg-[#fff3ec] hover:text-[#c92a2a] disabled:cursor-not-allowed disabled:opacity-50"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Delete */}
                        {formData.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => onRemoveItem(index)}
                            disabled={saving}
                            className="mt-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#a89b93] transition hover:bg-[#fff0ee] hover:text-[#c92a2a] disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label={`Remove item ${index + 1}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={onAddItem}
                  disabled={saving}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-dashed border-[#dcbfb0] bg-[#fffaf7] px-4 py-2.5 text-sm font-semibold text-[#c94d28] transition hover:border-[#c94d28] hover:bg-[#fff3ec] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Plus size={17} />
                  Add Another Item
                </button>
              </section>

              {/* Price & Schedule */}
              <section className="rounded-2xl border border-[#f0e1d7] bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff7d6] text-[#c58b00]">
                    <CalendarDays size={18} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-[#29231f]">
                      Price & Schedule
                    </h2>

                    <p className="text-xs text-[#93877f]">
                      Set the deal price and active period.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {/* Price */}
                  <div>
                    <label
                      htmlFor="dealPrice"
                      className="mb-2 block text-sm font-semibold text-[#4e443e]"
                    >
                      Deal Price
                    </label>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9b8e86]">
                        Rs.
                      </span>

                      <input
                        id="dealPrice"
                        type="number"
                        name="dealPrice"
                        value={formData.dealPrice}
                        onChange={onChange}
                        min="1"
                        step="1"
                        placeholder="999"
                        disabled={saving}
                        className="w-full rounded-xl border border-[#e4d8d0] bg-[#fffdfb] py-3 pl-11 pr-3 text-sm font-semibold text-[#302923] outline-none transition placeholder:font-normal placeholder:text-[#b2a69f] focus:border-[#d75b3c] focus:ring-4 focus:ring-[#d75b3c]/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Start */}
                  <div>
                    <label
                      htmlFor="startDate"
                      className="mb-2 block text-sm font-semibold text-[#4e443e]"
                    >
                      Start Date & Time
                    </label>

                    <input
                      id="startDate"
                      type="datetime-local"
                      name="startDate"
                      value={formData.startDate}
                      onChange={onChange}
                      disabled={saving}
                      className="w-full rounded-xl border border-[#e4d8d0] bg-[#fffdfb] px-3 py-3 text-sm text-[#302923] outline-none transition focus:border-[#d75b3c] focus:ring-4 focus:ring-[#d75b3c]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* End */}
                  <div>
                    <label
                      htmlFor="endDate"
                      className="mb-2 block text-sm font-semibold text-[#4e443e]"
                    >
                      End Date & Time
                    </label>

                    <input
                      id="endDate"
                      type="datetime-local"
                      name="endDate"
                      value={formData.endDate}
                      onChange={onChange}
                      disabled={saving}
                      className="w-full rounded-xl border border-[#e4d8d0] bg-[#fffdfb] px-3 py-3 text-sm text-[#302923] outline-none transition focus:border-[#d75b3c] focus:ring-4 focus:ring-[#d75b3c]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Image */}
              <section className="rounded-2xl border border-[#f0e1d7] bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e6] text-[#e4572e]">
                    <ImagePlus size={18} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-[#29231f]">
                      Deal Image
                    </h2>

                    <p className="text-xs text-[#93877f]">
                      Upload a new image if you want to replace it.
                    </p>
                  </div>
                </div>

                {/* Image Preview */}
                <div className="relative overflow-hidden rounded-2xl border border-[#eaded6] bg-[#f8f1ec]">
                  {imagePreview || existingImage ? (
                    <img
                      src={imagePreview || existingImage}
                      alt="Deal preview"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] flex-col items-center justify-center text-[#aa9d95]">
                      <ImagePlus size={34} />
                      <p className="mt-2 text-sm font-medium">
                        No image available
                      </p>
                    </div>
                  )}

                  {imagePreview && (
                    <div className="absolute left-3 top-3 rounded-full bg-[#16834d] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm">
                      New Image
                    </div>
                  )}
                </div>

                {/* Upload */}
                <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#d9b9a9] bg-[#fffaf7] px-4 py-3 text-sm font-semibold text-[#c94d28] transition hover:border-[#c94d28] hover:bg-[#fff3ec]">
                  <Upload size={17} />
                  {imagePreview
                    ? "Choose Different Image"
                    : "Replace Image"}

                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={onImageChange}
                    disabled={saving}
                    className="hidden"
                  />
                </label>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#9a8d85]">
                  JPG, JPEG, PNG or WEBP · Maximum 5 MB
                </p>

                {!imagePreview && (
                  <div className="mt-4 rounded-xl bg-[#fff7ed] p-3 text-xs leading-5 text-[#8b6959]">
                    Your current deal image will remain unchanged unless
                    you upload a new one.
                  </div>
                )}
              </section>

              {/* Preview */}
              <section className="rounded-2xl border border-[#f0e1d7] bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-[#29231f]">
                      Deal Preview
                    </h2>

                    <p className="text-xs text-[#93877f]">
                      How the deal information looks together.
                    </p>
                  </div>

                  <Tag
                    size={18}
                    className="text-[#e4572e]"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#eee1d9] bg-[#fffaf7]">
                  {(imagePreview || existingImage) && (
                    <img
                      src={imagePreview || existingImage}
                      alt={formData.name || "Deal"}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  )}

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-bold text-[#29231f]">
                          {formData.name || "Deal Name"}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#81766e]">
                          {formData.shortDescription ||
                            "Your deal description will appear here."}
                        </p>
                      </div>

                      <div className="shrink-0 rounded-lg bg-[#fff0e6] px-2.5 py-1.5">
                        <p className="text-[9px] font-bold uppercase text-[#a56b55]">
                          Price
                        </p>

                        <p className="text-sm font-extrabold text-[#c92a2a]">
                          Rs.{" "}
                          {formData.dealPrice
                            ? Number(
                                formData.dealPrice
                              ).toLocaleString("en-PK")
                            : "0"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      {formData.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-3 text-xs"
                        >
                          <span className="truncate text-[#5c5048]">
                            {item.productName ||
                              `Item ${index + 1}`}
                          </span>

                          <span className="shrink-0 rounded-md bg-white px-2 py-1 font-bold text-[#756960] shadow-sm">
                            × {item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Actions */}
              <div className="rounded-2xl border border-[#f0e1d7] bg-white p-4 shadow-sm sm:p-5">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#b52323] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Saving Changes...
                    </>
                  ) : (
                    <>
                      <Tag size={17} />
                      Save Changes
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onCancel}
                  disabled={saving}
                  className="mt-2.5 w-full rounded-xl border border-[#e5d8cf] bg-white px-5 py-3 text-sm font-semibold text-[#625750] transition hover:bg-[#fffaf7] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDeal;