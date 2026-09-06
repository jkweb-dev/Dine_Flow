"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  ChefHat,
  Check,
  ChevronDown,
  ImagePlus,
  LoaderCircle,
  PackagePlus,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";

const categories = [
  "Burgers",
  "Pizza",
  "Fries",
  "Sandwiches",
  "Wraps",
  "Chicken",
  "Drinks",
  "Desserts",
  "Other",
];

const sizeLabels = {
  small: "Small",
  medium: "Medium",
  large: "Large",
  extraLarge: "Extra Large",
};

const ProductCreateForm = ({
  formData,
  image,
  imagePreview,
  loading,
  success,
  onChange,
  onImageChange,
  onSizeAvailabilityChange,
  onSizePriceChange,
  onAvailabilityChange,
  onSubmit,
}) => {
  return (
    <main className="min-h-full bg-[#fffaf6] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <Link
            href="/admin/products"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#eadfd7] bg-white text-[#756b65] shadow-sm transition hover:border-[#c92a2a] hover:text-[#c92a2a]"
          >
            <ArrowLeft size={19} />
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#f97316]" />

              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f97316]">
                Menu creation
              </p>
            </div>

            <h1 className="mt-1 text-2xl font-black tracking-tight text-[#241b16] sm:text-3xl">
              Create a delicious product
            </h1>

            <p className="mt-1 text-sm text-[#8b817b]">
              Add a new item to your restaurant menu.
            </p>
          </div>
        </div>

        {/* ================================================== */}
        {/* MESSAGES */}
        {/* ================================================== */}

       

        {success && (
          <div className="mb-5 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            <Check size={18} className="mt-0.5 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {/* ================================================== */}
        {/* MAIN GRID */}
        {/* ================================================== */}

        <form onSubmit={onSubmit}>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* ================================================== */}
            {/* LEFT SIDE */}
            
            {/* ================================================== */}

            <div className="space-y-6">
              {/* IMAGE */}
              <section className="overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm">
                <div className="border-b border-[#f0e5dd] px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f97316]">
                      <Camera size={20} />
                    </div>

                    <div>
                      <h2 className="font-black text-[#241b16]">
                        Food photo
                      </h2>

                      <p className="text-xs text-[#9b918b]">
                        Upload a beautiful picture of your product.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <label
                    htmlFor="product-image"
                    className="group relative block cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-[#eadfd7] bg-[#fffaf6] transition hover:border-[#f97316] hover:bg-[#fff6ef]"
                  >
                    {imagePreview ? (
                      <div className="relative aspect-[16/10] w-full">
                        <img
                          src={imagePreview}
                          alt="Product preview"
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                          <div className="scale-90 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#241b16] opacity-0 shadow-xl transition group-hover:scale-100 group-hover:opacity-100">
                            Change photo
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex min-h-[240px] flex-col items-center justify-center px-6 py-10 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-lg shadow-[#c92a2a]/20 transition group-hover:scale-105">
                          <ImagePlus size={28} />
                        </div>

                        <h3 className="font-black text-[#241b16]">
                          Add your food photo
                        </h3>

                        <p className="mt-2 max-w-xs text-xs leading-5 text-[#9b918b]">
                          Tap here to choose a JPG, PNG or WEBP image.
                          Maximum size 5 MB.
                        </p>
                      </div>
                    )}

                    <input
                      id="product-image"
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={onImageChange}
                      className="hidden"
                    />
                  </label>

                  {image && (
                    <div className="mt-3 flex items-center justify-between rounded-xl bg-[#fff7f0] px-3 py-2">
                      <p className="min-w-0 truncate text-xs font-semibold text-[#756b65]">
                        {image.name}
                      </p>

                      <span className="ml-3 shrink-0 text-xs font-bold text-[#f97316]">
                        {(image.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  )}
                </div>
              </section>

              {/* BASIC INFORMATION */}
              <section className="rounded-3xl border border-[#eadfd7] bg-white shadow-sm">
                <div className="border-b border-[#f0e5dd] px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e7] text-[#c92a2a]">
                      <UtensilsCrossed size={20} />
                    </div>

                    <div>
                      <h2 className="font-black text-[#241b16]">
                        Product details
                      </h2>

                      <p className="text-xs text-[#9b918b]">
                        Tell customers what you are serving.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-5 sm:p-6">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#241b16]"
                    >
                      Product name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={onChange}
                      placeholder="e.g. Zinger Burger"
                      className="h-12 w-full rounded-2xl border border-[#e7ddd5] bg-[#fffdfb] px-4 text-sm font-medium text-[#241b16] outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <label
                      htmlFor="shortDescription"
                      className="mb-2 block text-sm font-bold text-[#241b16]"
                    >
                      Short description
                    </label>

                    <textarea
                      id="shortDescription"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={onChange}
                      rows={4}
                      placeholder="Crispy chicken fillet with fresh lettuce, cheese and our special sauce."
                      className="w-full resize-none rounded-2xl border border-[#e7ddd5] bg-[#fffdfb] px-4 py-3 text-sm font-medium leading-6 text-[#241b16] outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                    />
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-bold text-[#241b16]"
                    >
                      Category
                    </label>

                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={onChange}
                        className="h-12 w-full appearance-none rounded-2xl border border-[#e7ddd5] bg-[#fffdfb] px-4 pr-11 text-sm font-medium text-[#241b16] outline-none transition focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                      >
                        <option value="">Choose a category</option>

                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9b918b]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* SIZES & PRICES */}
              <section className="rounded-3xl border border-[#eadfd7] bg-white shadow-sm">
                <div className="border-b border-[#f0e5dd] px-5 py-4 sm:px-6">
                  <div className="flex items-center  gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f97316]">
                      <PackagePlus size={20} />
                    </div>

                    <div>
                      <h2 className="font-black text-[#241b16]">
                        Sizes & prices
                      </h2>

                      <p className="text-xs text-[#9b918b]">
                        Choose available sizes and set their prices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-5 sm:p-6">
                  {Object.entries(formData.sizes).map(
                    ([size, sizeData]) => (
                      <div
                        key={size}
                        className={`rounded-2xl border p-3 transition sm:p-4 ${
                          sizeData.available
                            ? "border-[#f4c9b4] bg-[#fffaf6]"
                            : "border-[#eee4dd] bg-[#faf8f6]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* SIZE TOGGLE */}
                          <button
                            type="button"
                            onClick={() =>
                              onSizeAvailabilityChange(size)
                            }
                            aria-label={`Toggle ${sizeLabels[size]} size`}
                            aria-pressed={sizeData.available}
                            className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                              sizeData.available
                                ? "bg-[#c92a2a]"
                                : "bg-[#d9d0ca]"
                            }`}
                          >
                            <span
                              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
                                sizeData.available
                                  ? "left-6"
                                  : "left-1"
                              }`}
                            />
                          </button>

                          {/* SIZE NAME */}
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-black text-[#241b16]">
                              {sizeLabels[size]}
                            </p>

                            <p className="text-[11px] text-[#9b918b]">
                              {sizeData.available
                                ? "Available"
                                : "Not offered"}
                            </p>
                          </div>

                          {/* PRICE */}
                          {sizeData.available && (
                            <div className="relative w-[125px] shrink-0">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9b918b]">
                                Rs.
                              </span>

                              <input
                                type="number"
                                min="1"
                                step="1"
                                value={sizeData.price}
                                onChange={(event) =>
                                  onSizePriceChange(
                                    size,
                                    event.target.value
                                  )
                                }
                                placeholder="Price"
                                className="h-11 w-full rounded-xl border border-[#e7ddd5] bg-white pl-10 pr-3 text-sm font-bold text-[#241b16] outline-none transition focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            </div>

            {/* ================================================== */}
            {/* RIGHT SIDE */}
            {/* ================================================== */}

            <div className="space-y-6">
              {/* LIVE PREVIEW */}
              <section className="overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm">
                <div className="bg-[#c92a2a] px-5 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/65">
                        Live preview
                      </p>

                      <h2 className="mt-1 text-lg font-black text-white">
                        Your menu item
                      </h2>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                      <ChefHat size={20} />
                    </div>
                  </div>
                </div>

                {/* PRODUCT CARD */}
                <div className="p-5 sm:p-6">
                  <div className="overflow-hidden rounded-3xl border border-[#eee3db] bg-[#fffaf6]">
                    {/* Preview image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#f8eee7]">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Product preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center text-[#c9bdb5]">
                          <UtensilsCrossed size={40} />
                          <p className="mt-2 text-xs font-bold">
                            Food photo preview
                          </p>
                        </div>
                      )}

                      <div
                        className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-black ${
                          formData.available
                            ? "bg-green-500 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                      >
                        {formData.available
                          ? "AVAILABLE"
                          : "UNAVAILABLE"}
                      </div>
                    </div>

                    {/* Preview information */}
                    <div className="p-4 sm:p-5">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="truncate text-lg font-black text-[#241b16]">
                          {formData.name || "Your product name"}
                        </h3>

                        {formData.category && (
                          <span className="shrink-0 rounded-full bg-[#ffe8d8] px-2.5 py-1 text-[10px] font-black text-[#c92a2a]">
                            {formData.category}
                          </span>
                        )}
                      </div>

                      <p className="min-h-[48px] text-xs leading-5 text-[#8b817b]">
                        {formData.shortDescription ||
                          "Your delicious product description will appear here."}
                      </p>

                      {/* Preview sizes */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {Object.entries(formData.sizes)
                          .filter(([, sizeData]) => sizeData.available)
                          .map(([size, sizeData]) => (
                            <div
                              key={size}
                              className="rounded-xl border border-[#eadfd7] bg-white px-3 py-2"
                            >
                              <p className="text-[10px] font-bold text-[#9b918b]">
                                {sizeLabels[size]}
                              </p>

                              <p className="mt-0.5 text-xs font-black text-[#c92a2a]">
                                {sizeData.price
                                  ? `Rs. ${sizeData.price}`
                                  : "Rs. —"}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* AVAILABILITY */}
              <section className="rounded-3xl border border-[#eadfd7] bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      formData.available
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Check size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-black text-[#241b16]">
                      Product availability
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-[#9b918b]">
                      {formData.available
                        ? "Customers can currently order this product."
                        : "Customers will not be able to order this product."}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onAvailabilityChange}
                    aria-label="Toggle product availability"
                    aria-pressed={formData.available}
                    className={`relative h-8 w-14 shrink-0 rounded-full transition ${
                      formData.available
                        ? "bg-[#c92a2a]"
                        : "bg-[#d9d0ca]"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
                        formData.available
                          ? "left-7"
                          : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </section>

              {/* CREATE BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-6 text-sm font-black text-white shadow-lg shadow-[#c92a2a]/20 transition hover:bg-[#ad2020] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <LoaderCircle
                      size={19}
                      className="animate-spin"
                    />
                    Creating product...
                  </>
                ) : (
                  <>
                    <ChefHat
                      size={19}
                      className="transition-transform group-hover:-rotate-6"
                    />
                    Create Product
                  </>
                )}
              </button>

              <p className="text-center text-[11px] leading-5 text-[#a39a94]">
                Your image will be securely uploaded to Cloudinary and
                the product information will be saved to DineFlow.
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ProductCreateForm;