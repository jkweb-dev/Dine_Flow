const DealQuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="mt-7">
      <p className="mb-3 text-sm font-extrabold text-[#3d2d26]">
        Quantity
      </p>

      <div className="flex w-fit items-center overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
        {/* Decrease */}
        <button
          type="button"
          onClick={onDecrease}
          disabled={quantity <= 1}
          className="flex h-12 w-12 items-center justify-center text-xl font-bold text-[#c92a2a] transition hover:bg-[#fff0e7] disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Decrease quantity"
        >
          −
        </button>

        {/* Quantity */}
        <div className="flex h-12 min-w-14 items-center justify-center border-x border-orange-100 bg-[#fffaf5] px-4 text-base font-black text-[#2b211d]">
          {quantity}
        </div>

        {/* Increase */}
        <button
          type="button"
          onClick={onIncrease}
          className="flex h-12 w-12 items-center justify-center text-xl font-bold text-[#c92a2a] transition hover:bg-[#fff0e7]"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DealQuantitySelector;