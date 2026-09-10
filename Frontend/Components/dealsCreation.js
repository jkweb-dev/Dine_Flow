"use client";

import {
  CalendarDays,
  ChevronLeft,
  ImagePlus,
  Minus,
  Plus,
  Tag,
  Trash2,
  Upload,
  Utensils,
} from "lucide-react";

const CreateDeal = ({
  formData,
  imagePreview,
  onChange,
  onImageChange,
  onAddItem,
  onRemoveItem,
  onItemChange,
  onSubmit,
  loading,
  onCancel,
}) => {
  return (
    <div className="min-h-screen bg-[#fffaf7] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-7">
          <button
            type="button"
            onClick={onCancel}
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#c83b3b]"
          >
            <ChevronLeft size={18} />
            Back to Deals
          </button>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#fff0ed] px-3 py-1.5 text-xs font-semibold text-[#c83b3b]">
              <Tag size={14} />
              DEAL MANAGEMENT
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Create New Deal
            </h1>

            <p className="mt-1.5 text-sm text-gray-500 sm:text-base">
              Create an attractive offer for your customers.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            {/* Main Form */}
            <div className="space-y-6">
              {/* Basic Information */}
              <section className="rounded-2xl border border-[#f2e3de] bg-white p-5 shadow-[0_4px_20px_rgba(110,60,40,0.04)] sm:p-6">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c83b3b]">
                    <Tag size={19} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Deal Information
                    </h2>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Give your deal a clear and attractive identity.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Deal Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Deal Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      placeholder="e.g. Family Feast"
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d95b50] focus:ring-4 focus:ring-[#d95b50]/10 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Short Description
                    </label>

                    <textarea
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={onChange}
                      rows={4}
                      placeholder="e.g. Perfect meal for the whole family..."
                      disabled={loading}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d95b50] focus:ring-4 focus:ring-[#d95b50]/10 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </section>

              {/* Deal Items */}
              <section className="rounded-2xl border border-[#f2e3de] bg-white p-5 shadow-[0_4px_20px_rgba(110,60,40,0.04)] sm:p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff6e8] text-[#d58a25]">
                      <Utensils size={19} />
                    </div>

                    <div>
                      <h2 className="font-semibold text-gray-900">
                        Items in Deal
                      </h2>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Add the food items included in this offer.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onAddItem}
                    disabled={loading}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#fff0ed] px-3 py-2 text-xs font-semibold text-[#c83b3b] transition hover:bg-[#ffe3de] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus size={16} />
                    <span className="hidden sm:inline">Add Item</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-100 bg-[#fffdfc] p-3 sm:p-4"
                    >
                      <div className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff0ed] text-xs font-bold text-[#c83b3b]">
                          {index + 1}
                        </div>

                        <div className="grid min-w-0 flex-1 gap-3 sm:grid-cols-[1fr_130px]">
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-gray-500">
                              Item Name
                            </label>

                            <input
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
                              disabled={loading}
                              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d95b50] focus:ring-4 focus:ring-[#d95b50]/10"
                            />
                          </div>

                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-gray-500">
                              Quantity
                            </label>

                            <div className="flex h-[42px] items-center rounded-lg border border-gray-200 bg-white">
                              <button
                                type="button"
                                onClick={() =>
                                  onItemChange(
                                    index,
                                    "quantity",
                                    Math.max(1, Number(item.quantity) - 1)
                                  )
                                }
                                disabled={loading || Number(item.quantity) <= 1}
                                className="flex h-full w-10 items-center justify-center text-gray-500 transition hover:text-[#c83b3b] disabled:cursor-not-allowed disabled:opacity-30"
                              >
                                <Minus size={15} />
                              </button>

                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(event) =>
                                  onItemChange(
                                    index,
                                    "quantity",
                                    event.target.value
                                  )
                                }
                                disabled={loading}
                                className="h-full min-w-0 flex-1 border-x border-gray-100 bg-transparent text-center text-sm font-semibold text-gray-900 outline-none"
                              />

                              <button
                                type="button"
                                onClick={() =>
                                  onItemChange(
                                    index,
                                    "quantity",
                                    Number(item.quantity) + 1
                                  )
                                }
                                disabled={loading}
                                className="flex h-full w-10 items-center justify-center text-gray-500 transition hover:text-[#c83b3b]"
                              >
                                <Plus size={15} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {formData.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => onRemoveItem(index)}
                            disabled={loading}
                            className="mt-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500 disabled:opacity-50"
                            aria-label="Remove item"
                          >
                            <Trash2 size={17} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-[#fffaf7] px-4 py-3">
                  <p className="text-xs leading-5 text-gray-500">
                    <span className="font-semibold text-gray-700">
                      Tip:
                    </span>{" "}
                    Add every item included in the deal and specify its
                    quantity.
                  </p>
                </div>
              </section>

              {/* Pricing & Schedule */}
              <section className="rounded-2xl border border-[#f2e3de] bg-white p-5 shadow-[0_4px_20px_rgba(110,60,40,0.04)] sm:p-6">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8f1] text-[#32905a]">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Price & Schedule
                    </h2>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Set the deal price and when the offer should run.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Price */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Deal Price
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                        Rs.
                      </span>

                      <input
                        type="number"
                        name="dealPrice"
                        min="0"
                        value={formData.dealPrice}
                        onChange={onChange}
                        placeholder="999"
                        disabled={loading}
                        className="w-full rounded-xl border border-gray-200 bg-[#fffdfc] py-3 pl-12 pr-4 text-sm font-semibold text-gray-900 outline-none transition placeholder:font-normal placeholder:text-gray-400 focus:border-[#d95b50] focus:ring-4 focus:ring-[#d95b50]/10"
                      />
                    </div>
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Start Date
                    </label>

                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={onChange}
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#d95b50] focus:ring-4 focus:ring-[#d95b50]/10"
                    />
                  </div>

                  {/* End Date */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      End Date
                    </label>

                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={onChange}
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#d95b50] focus:ring-4 focus:ring-[#d95b50]/10"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* Image Upload */}
              <section className="rounded-2xl border border-[#f2e3de] bg-white p-5 shadow-[0_4px_20px_rgba(110,60,40,0.04)]">
                <div className="mb-4">
                  <h2 className="font-semibold text-gray-900">
                    Deal Image
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Use a clear image that makes the deal look delicious.
                  </p>
                </div>

                <label
                  htmlFor="deal-image"
                  className={`group relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#ead8d2] bg-[#fffaf7] transition hover:border-[#d95b50] hover:bg-[#fff5f2] ${
                    loading ? "pointer-events-none opacity-60" : ""
                  }`}
                >
                  {imagePreview ? (
                    <>
                      <img
                        src={imagePreview}
                        alt="Deal preview"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition group-hover:opacity-100">
                        <div className="rounded-xl bg-white/95 px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-lg">
                          Change Image
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="px-5 text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0ed] text-[#c83b3b]">
                        <ImagePlus size={27} />
                      </div>

                      <p className="text-sm font-semibold text-gray-800">
                        Upload deal image
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        JPG, PNG, JPEG or WEBP
                        <br />
                        Maximum size 5 MB
                      </p>

                      <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-100">
                        <Upload size={14} />
                        Choose Image
                      </div>
                    </div>
                  )}

                  <input
                    id="deal-image"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={onImageChange}
                    disabled={loading}
                    className="hidden"
                  />
                </label>
              </section>

              {/* Preview Summary */}
              <section className="overflow-hidden rounded-2xl border border-[#f2e3de] bg-white shadow-[0_4px_20px_rgba(110,60,40,0.04)]">
                <div className="bg-[#c83b3b] px-5 py-4 text-white">
                  <p className="text-xs font-medium text-white/75">
                    DEAL PREVIEW
                  </p>

                  <h3 className="mt-1 truncate text-lg font-bold">
                    {formData.name || "Your Deal"}
                  </h3>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Items
                    </span>

                    <span className="rounded-full bg-[#fff0ed] px-2.5 py-1 text-xs font-semibold text-[#c83b3b]">
                      {formData.items.length}{" "}
                      {formData.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {formData.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="truncate text-gray-600">
                          {item.productName || `Item ${index + 1}`}
                        </span>

                        <span className="shrink-0 font-semibold text-gray-900">
                          × {item.quantity || 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="my-4 border-t border-dashed border-gray-200" />

                  <div className="flex items-end justify-between">
                    <span className="text-sm text-gray-500">
                      Deal Price
                    </span>

                    <span className="text-2xl font-bold text-[#c83b3b]">
                      Rs. {formData.dealPrice || "0"}
                    </span>
                  </div>
                </div>
              </section>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#c83b3b] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b33232] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Creating Deal...
                    </>
                  ) : (
                    <>
                      <Tag size={17} />
                      Create Deal
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onCancel}
                  disabled={loading}
                  className="min-h-12 flex-1 rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
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

export default CreateDeal;