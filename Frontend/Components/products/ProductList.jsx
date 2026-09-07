"use client";
import { useState } from "react";
import {
  AlertCircle,
  Check,
  ChefHat,
  Edit3,
  EyeOff,
  Package,
  Plus,
  RefreshCw,
  ShoppingBag,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";

const ProductList = ({
  products,
  loading,
  error,
  onCreateProduct,
  onEditProduct,
  onDeleteProduct,
   onToggleAvailability,
  onRetry,
}) => {

    const [deleteProduct, setDeleteProduct] = useState(null);

  return (
    <main className="min-h-full bg-[#fffaf6] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <UtensilsCrossed
                size={16}
                className="text-[#f97316]"
              />

              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f97316]">
                Menu management
              </p>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-[#241b16] sm:text-4xl">
              Your Products
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#8b817b]">
              Manage your restaurant menu, prices, availability and
              delicious food items from one place.
            </p>
          </div>

          <button
            type="button"
            onClick={onCreateProduct}
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-5 text-sm font-black text-white shadow-lg shadow-[#c92a2a]/20 transition hover:bg-[#ad2020] hover:shadow-xl sm:w-auto"
          >
            <Plus
              size={19}
              className="transition-transform duration-200 group-hover:rotate-90"
            />

            Add Product
          </button>
        </div>

        {/* ================================================== */}
        {/* SUMMARY */}
        {/* ================================================== */}

        {!loading && !error && (
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">

            {/* Total Products */}

            <div className="rounded-2xl border border-[#eadfd7] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e7] text-[#c92a2a]">
                  <Package size={19} />
                </div>

                <span className="text-2xl font-black text-[#241b16]">
                  {products.length}
                </span>
              </div>

              <p className="mt-3 text-xs font-bold text-[#8b817b]">
                Total products
              </p>
            </div>

            {/* Available Products */}

            <div className="rounded-2xl border border-[#eadfd7] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Check size={19} />
                </div>

                <span className="text-2xl font-black text-[#241b16]">
                  {
                    products.filter(
                      (product) => product.available
                    ).length
                  }
                </span>
              </div>

              <p className="mt-3 text-xs font-bold text-[#8b817b]">
                Available now
              </p>
            </div>

            {/* Categories */}

            <div className="col-span-2 rounded-2xl border border-[#eadfd7] bg-white p-4 shadow-sm sm:col-span-1">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f97316]">
                  <ShoppingBag size={19} />
                </div>

                <span className="text-2xl font-black text-[#241b16]">
                  {
                    new Set(
                      products.map(
                        (product) => product.category
                      )
                    ).size
                  }
                </span>
              </div>

              <p className="mt-3 text-xs font-bold text-[#8b817b]">
                Categories
              </p>
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* LOADING */}
        {/* ================================================== */}

        {loading && (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-[#eadfd7] bg-white px-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#c92a2a]">
              <RefreshCw
                size={28}
                className="animate-spin"
              />
            </div>

            <h2 className="mt-5 text-lg font-black text-[#241b16]">
              Preparing your menu...
            </h2>

            <p className="mt-2 text-sm text-[#9b918b]">
              We're loading your delicious products.
            </p>
          </div>
        )}

        {/* ================================================== */}
        {/* ERROR STATE */}
        {/* ================================================== */}

        {!loading && error && (
          <div className="overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm">
            <div className="flex min-h-[400px] flex-col items-center justify-center px-6 py-12 text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-red-50 text-red-500">
                <AlertCircle size={38} />
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#241b16]">
                Couldn't load your products
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#8b817b]">
                Something went wrong while loading your menu.
                Please try again.
              </p>

              <button
                type="button"
                onClick={onRetry}
                className="mt-6 flex h-12 items-center gap-2 rounded-2xl bg-[#c92a2a] px-6 text-sm font-black text-white shadow-lg shadow-[#c92a2a]/20 transition hover:bg-[#ad2020]"
              >
                <RefreshCw size={18} />
                Try again
              </button>
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* EMPTY STATE */}
        {/* ================================================== */}

        {!loading && !error && products.length === 0 && (
          <div className="overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm">
            <div className="relative flex min-h-[460px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center">

              <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#fff0e7]" />

              <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-[#fff0e7]" />

              <div className="relative">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#c92a2a] text-white shadow-xl shadow-[#c92a2a]/20">
                  <ChefHat size={42} />
                </div>

                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f97316] text-white">
                  <Plus size={17} />
                </div>
              </div>

              <h2 className="relative mt-7 text-2xl font-black text-[#241b16]">
                Your menu is waiting
              </h2>

              <p className="relative mt-2 max-w-md text-sm leading-6 text-[#8b817b]">
                You haven't added any products yet. Start building
                your menu with your first delicious item.
              </p>

              <button
                type="button"
                onClick={onCreateProduct}
                className="relative mt-6 flex h-12 items-center gap-2 rounded-2xl bg-[#c92a2a] px-6 text-sm font-black text-white shadow-lg shadow-[#c92a2a]/20 transition hover:bg-[#ad2020]"
              >
                <Plus size={18} />
                Create your first product
              </button>
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* PRODUCT GRID */}
        {/* ================================================== */}

        {!loading && !error && products.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onEdit={onEditProduct}
                 onToggleAvailability={onToggleAvailability}
                  onDelete={() => setDeleteProduct(product)}
              />
            ))}
          </div>
        )}
      </div>

      {deleteProduct && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

      <h2 className="text-xl font-black text-[#241b16]">
        Delete product?
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#8b817b]">
        Are you sure you want to delete{" "}
        <span className="font-bold text-[#241b16]">
          {deleteProduct.name}
        </span>
        ?
        <br />
        This action cannot be undone.
      </p>

      <div className="mt-6 flex gap-3">

        <button
          type="button"
          onClick={() => setDeleteProduct(null)}
          className="flex-1 rounded-xl border border-[#eadfd7] py-3 text-sm font-bold text-[#756b65]"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => {
            onDeleteProduct(deleteProduct._id);
            setDeleteProduct(null);
          }}
          className="flex-1 rounded-xl bg-[#c92a2a] py-3 text-sm font-black text-white"
        >
          Delete
        </button>

      </div>
    </div>
  </div>
)}
    </main>
  );
};




// ==========================================================
// PRODUCT CARD
// ==========================================================

const ProductCard = ({
  product,
  onEdit,
  onDelete,
   onToggleAvailability,
   
}) => {
  const imageUrl =
    product.image?.url ||
    product.imageUrl ||
    product.image ||
    "";

  const isAvailable = product.available;

  const sizes = Array.isArray(product.sizes)
    ? product.sizes
    : [];

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#eadfd7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f1d1b]/10">

      {/* IMAGE */}

      <div className="relative aspect-[16/10] overflow-hidden bg-[#f8eee7]">

        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-[#c9bdb5]">
            <UtensilsCrossed size={40} />

            <span className="mt-2 text-xs font-bold">
              No image
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {product.category && (
          <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#c92a2a] shadow-sm backdrop-blur">
            {product.category}
          </div>
        )}

        <div
          className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-black shadow-sm ${
            isAvailable
              ? "bg-green-500 text-white"
              : "bg-[#3d3632] text-white"
          }`}
        >
          {isAvailable ? (
            <Check size={12} />
          ) : (
            <EyeOff size={12} />
          )}

          {isAvailable
            ? "Available"
            : "Unavailable"}
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <h2 className="truncate text-xl font-black text-white">
            {product.name}
          </h2>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-4 sm:p-5">

        <p className="min-h-[40px] text-xs leading-5 text-[#8b817b]">
          {product.shortDescription ||
            "A delicious DineFlow menu item."}
        </p>

        {sizes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {sizes.map((size) => (
              <div
                key={size.name}
                className="rounded-xl border border-[#eee3db] bg-[#fffaf6] px-3 py-2"
              >
                <p className="text-[10px] font-bold capitalize text-[#9b918b]">
                  {formatSizeName(size.name)}
                </p>

                <p className="mt-0.5 text-xs font-black text-[#c92a2a]">
                  Rs. {size.price}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2 border-t border-[#f0e5dd] pt-4">

          <button
            type="button"
            onClick={() => onEdit(product._id)}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#fff0e7] text-xs font-black text-[#c92a2a] transition hover:bg-[#ffe3d2]"
          >
            <Edit3 size={16} />
            Edit product
          </button>

          <button
            type="button"
            onClick={onDelete}
            aria-label={`Delete ${product.name}`}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100"
          >
            <Trash2 size={17} />
          </button>

        </div>


<button
  type="button"
  onClick={() =>
    onToggleAvailability(product._id)
  }
  className={`mt-3 flex h-11 w-full items-center justify-between rounded-xl border px-3.5 transition ${
    isAvailable
      ? "border-green-100 bg-green-50 hover:bg-green-100"
      : "border-[#e8ddd5] bg-[#f8f3ef] hover:bg-[#eee6df]"
  }`}
>
  <div className="flex items-center gap-2.5">

    <span
      className={`flex h-7 w-7 items-center justify-center rounded-lg ${
        isAvailable
          ? "bg-green-500 text-white"
          : "bg-[#756b65] text-white"
      }`}
    >
      {isAvailable ? (
        <Check size={14} />
      ) : (
        <EyeOff size={14} />
      )}
    </span>

    <div className="text-left">
      <p
        className={`text-xs font-black ${
          isAvailable
            ? "text-green-700"
            : "text-[#756b65]"
        }`}
      >
        {isAvailable
          ? "Available"
          : "Unavailable"}
      </p>

      <p className="text-[10px] font-medium text-[#9b918b]">
        Tap to change
      </p>
    </div>
  </div>

  {/* Toggle */}

  <span
    className={`relative h-6 w-11 rounded-full transition ${
      isAvailable
        ? "bg-green-500"
        : "bg-[#c9beb7]"
    }`}
  >
    <span
      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
        isAvailable
          ? "-translate-x-5"
          : "translate-x-1"
      }`}
    />
  </span>
</button>
      </div>
    </article>
  );
};


// ==========================================================
// SIZE FORMATTER
// ==========================================================

const formatSizeName = (size) => {
  if (!size) {
    return "";
  }

  if (size === "extraLarge") {
    return "Extra Large";
  }

  return size.charAt(0).toUpperCase() + size.slice(1);
};


export default ProductList;