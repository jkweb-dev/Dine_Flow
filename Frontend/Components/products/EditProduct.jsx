"use client";

import {
  ArrowLeft,
  Camera,
  Check,
  ChefHat,
  ImagePlus,
  Loader2,
  Plus,
  Save,
  Trash2,
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

const EditProduct = ({
  formData,
  currentImage,
  imageFile,
  previewImage,
  loading,
  saving,
  onChange,
  onImageChange,
  onSizeChange,
  onAddSize,
  onRemoveSize,
  onSubmit,
  onCancel,
}) => {
  // ======================================================
  // LOADING STATE
  // ======================================================

  if (loading) {
    return (
      <main className="min-h-full bg-[#fffaf6] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[500px] max-w-5xl flex-col items-center justify-center rounded-3xl border border-[#eadfd7] bg-white px-6 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#c92a2a]">
            <Loader2
              size={30}
              className="animate-spin"
            />
          </div>

          <h2 className="mt-5 text-xl font-black text-[#241b16]">
            Preparing your product...
          </h2>

          <p className="mt-2 text-sm text-[#8b817b]">
            We're loading the delicious details for you.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-full bg-[#fffaf6] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mb-6 sm:mb-8">
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="mb-5 flex items-center gap-2 text-sm font-bold text-[#756b65] transition hover:text-[#c92a2a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowLeft size={17} />
            Back to products
          </button>

          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-md shadow-[#c92a2a]/20">
              <ChefHat
                size={23}
                strokeWidth={2.5}
              />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <UtensilsCrossed
                  size={14}
                  className="text-[#f97316]"
                />

                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f97316]">
                  Menu management
                </p>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[#241b16] sm:text-3xl">
                Edit Product
              </h1>

              <p className="mt-1 text-sm text-[#8b817b]">
                Update your menu item and keep your
                offerings fresh.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* FORM */}
        {/* ================================================== */}

        <form onSubmit={onSubmit}>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">

            {/* ================================================== */}
            {/* IMAGE SECTION */}
            {/* ================================================== */}

            <section className="overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm">

              <div className="border-b border-[#f0e5dd] px-5 py-4 sm:px-6">
                <h2 className="text-base font-black text-[#241b16]">
                  Product image
                </h2>

                <p className="mt-1 text-xs text-[#9b918b]">
                  Upload a new image or keep the
                  current one.
                </p>
              </div>

              <div className="p-5 sm:p-6">

                {/* IMAGE PREVIEW */}

                <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#f8eee7]">

                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt={
                        formData.name ||
                        "Product preview"
                      }
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-[#c9bdb5]">
                      <ImagePlus size={45} />

                      <p className="mt-3 text-sm font-bold">
                        No image available
                      </p>
                    </div>
                  )}

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-12">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <Camera size={15} />

                      {imageFile
                        ? "New image selected"
                        : "Current product image"}
                    </div>
                  </div>
                </div>

                {/* UPLOAD BUTTON */}

                <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#e8d8ce] bg-[#fffaf6] px-4 py-4 text-sm font-bold text-[#756b65] transition hover:border-[#f97316] hover:bg-[#fff0e7] hover:text-[#c92a2a]">
                  <ImagePlus size={19} />

                  {imageFile
                    ? "Choose another image"
                    : "Replace product image"}

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(event) => {
                      onImageChange(
                        event.target.files?.[0]
                      );

                      // Allows selecting the same
                      // image again later.
                      event.target.value = "";
                    }}
                  />
                </label>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#a39a94]">
                  JPG, PNG or WEBP · Maximum 5MB
                </p>
              </div>
            </section>

            {/* ================================================== */}
            {/* PRODUCT DETAILS */}
            {/* ================================================== */}

            <section className="overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm">

              <div className="border-b border-[#f0e5dd] px-5 py-4 sm:px-6">
                <h2 className="text-base font-black text-[#241b16]">
                  Product details
                </h2>

                <p className="mt-1 text-xs text-[#9b918b]">
                  Give your product a delicious identity.
                </p>
              </div>

              <div className="space-y-5 p-5 sm:p-6">

                {/* ================================================== */}
                {/* PRODUCT NAME */}
                {/* ================================================== */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-black text-[#241b16]"
                  >
                    Product name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="e.g. Chicken Cheese Burger"
                    disabled={saving}
                    className="h-12 w-full rounded-2xl border border-[#e7ddd5] bg-[#fffdfb] px-4 text-sm font-medium text-[#241b16] outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* ================================================== */}
                {/* CATEGORY */}
                {/* ================================================== */}

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
                        disabled={saving}
                        className="h-12 w-full appearance-none rounded-2xl border border-[#e7ddd5] bg-[#fffdfb] px-4 pr-11 text-sm font-medium text-[#241b16] outline-none transition focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                      >
                        <option value="">Choose a category</option>

                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>

                      
                    </div>
                  </div>

                {/* ================================================== */}
                {/* DESCRIPTION */}
                {/* ================================================== */}

                <div>
                  <label
                    htmlFor="shortDescription"
                    className="mb-2 block text-sm font-black text-[#241b16]"
                  >
                    Short description
                  </label>

                  <textarea
                    id="shortDescription"
                    name="shortDescription"
                    rows={4}
                    value={formData.shortDescription}
                    onChange={onChange}
                    placeholder="Describe what makes this product delicious..."
                    disabled={saving}
                    className="w-full resize-none rounded-2xl border border-[#e7ddd5] bg-[#fffdfb] px-4 py-3 text-sm font-medium leading-6 text-[#241b16] outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* ================================================== */}
                {/* SIZES */}
                {/* ================================================== */}

                <div>

                  <div className="mb-3 flex items-end justify-between gap-3">
                    <div>
                      <label className="block text-sm font-black text-[#241b16]">
                        Sizes & prices
                      </label>

                      <p className="mt-1 text-xs text-[#9b918b]">
                        Add the sizes available for
                        this product.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={onAddSize}
                      disabled={saving}
                      className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#fff0e7] px-3 py-2 text-xs font-black text-[#c92a2a] transition hover:bg-[#ffe3d2] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Plus size={15} />
                      Add size
                    </button>
                  </div>

                  <div className="space-y-3">

                    {formData.sizes.map(
                      (size, index) => (
                        <div
                          key={`${size.name}-${index}`}
                          className="rounded-2xl border border-[#eee2da] bg-[#fffaf6] p-3 sm:p-4"
                        >
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">

                            {/* SIZE */}

                            <div className="flex-1">
                              <label className="mb-1.5 block text-[11px] font-bold text-[#9b918b]">
                                Size
                              </label>

                              <select
                                value={
                                  size.name || ""
                                }
                                onChange={(event) =>
                                  onSizeChange(
                                    index,
                                    "name",
                                    event.target
                                      .value
                                  )
                                }
                                disabled={saving}
                                className="h-11 w-full rounded-xl border border-[#e7ddd5] bg-white px-3 text-sm font-bold text-[#241b16] outline-none transition focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                <option value="">
                                  Select size
                                </option>

                                <option value="small">
                                  Small
                                </option>

                                <option value="medium">
                                  Medium
                                </option>

                                <option value="large">
                                  Large
                                </option>

                                <option value="extraLarge">
                                  Extra Large
                                </option>
                              </select>
                            </div>

                            {/* PRICE */}

                            <div className="flex-1">
                              <label className="mb-1.5 block text-[11px] font-bold text-[#9b918b]">
                                Price (Rs.)
                              </label>

                              <input
                                type="number"
                                min="0"
                                value={
                                  size.price ?? ""
                                }
                                onChange={(event) =>
                                  onSizeChange(
                                    index,
                                    "price",
                                    event.target
                                      .value
                                  )
                                }
                                placeholder="0"
                                disabled={saving}
                                className="h-11 w-full rounded-xl border border-[#e7ddd5] bg-white px-3 text-sm font-bold text-[#241b16] outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10 disabled:cursor-not-allowed disabled:opacity-60"
                              />
                            </div>

                            {/* REMOVE */}

                            <button
                              type="button"
                              onClick={() =>
                                onRemoveSize(index)
                              }
                              disabled={
                                saving ||
                                formData.sizes
                                  .length === 1
                              }
                              aria-label={`Remove ${
                                size.name ||
                                "product size"
                              }`}
                              className="flex h-11 w-full items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40 sm:w-11"
                            >
                              <Trash2 size={17} />
                            </button>

                          </div>
                        </div>
                      )
                    )}

                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ================================================== */}
          {/* ACTION BAR */}
          {/* ================================================== */}

          <div className="mt-5 rounded-3xl border border-[#eadfd7] bg-white p-4 shadow-sm sm:flex sm:items-center sm:justify-between sm:p-5">

            {/* Desktop helper */}

            <div className="hidden items-center gap-2 text-xs font-medium text-[#9b918b] sm:flex">
              <Check
                size={15}
                className="text-green-500"
              />

              Changes will be saved to your menu.
            </div>

            {/* Buttons */}

            <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto">

              <button
                type="button"
                onClick={onCancel}
                disabled={saving}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#e4d8cf] bg-white px-5 text-sm font-black text-[#756b65] transition hover:bg-[#f9eee7] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X size={17} />
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-5 text-sm font-black text-white shadow-lg shadow-[#c92a2a]/20 transition hover:bg-[#ad2020] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />

                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={17} />

                    Save changes
                  </>
                )}
              </button>

            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditProduct;