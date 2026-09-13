import SizeSelector from "./sizeSelector";
import QuantitySelector from "./quantitySelector";

const ProductDetails = ({
  product,
  selectedSize,
  onSizeChange,
  quantity,
  onIncrease,
  onDecrease,
  totalPrice,
  onAddToCart,
}) => {
  const isAvailable = product.available;

  return (
    <div className="flex flex-col">
      {/* Category + Availability */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#fff0e7] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#c4512c]">
          {product.category}
        </span>

        {isAvailable ? (
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
            Available
          </span>
        ) : (
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
            Currently unavailable
          </span>
        )}
      </div>

      {/* Product Name */}
      <h1 className="text-3xl font-black leading-tight tracking-tight text-[#2b211d] sm:text-4xl lg:text-5xl">
        {product.name}
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm leading-6 text-[#8b766d] sm:text-base sm:leading-7">
        {product.shortDescription}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-orange-100" />

      {/* Size */}
      {product.sizes?.length > 0 && (
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeChange={onSizeChange}
        />
      )}

      {/* Quantity */}
      <div className="mt-6">
        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>

      {/* Price + Add to Cart */}
      <div className="mt-7 rounded-[1.5rem] border border-orange-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#a28d84]">
              Total
            </p>

            <p className="mt-1 text-2xl font-black text-[#c92a2a] sm:text-3xl">
              Rs. {totalPrice}
            </p>
          </div>

          <button
            type="button"
            onClick={onAddToCart}
            disabled={!isAvailable || !selectedSize}
            className="rounded-2xl bg-[#c92a2a] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ad2222] active:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#d8c9c3] disabled:shadow-none sm:px-7 sm:py-3.5"
          >
            Add to Cart
          </button>
        </div>

        {selectedSize && (
          <p className="mt-3 text-xs font-semibold text-[#8b766d]">
            {selectedSize.name} × {quantity}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;