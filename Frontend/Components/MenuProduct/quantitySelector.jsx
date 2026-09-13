const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div>
      <h3 className="mb-3 text-sm font-extrabold text-[#2b211d] sm:text-base">
        Quantity
      </h3>

      <div className="inline-flex items-center overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
        <button
          type="button"
          onClick={onDecrease}
          disabled={quantity <= 1}
          className="flex h-11 w-11 items-center justify-center text-xl font-bold text-[#c4512c] transition hover:bg-[#fff1ea] disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <div className="flex h-11 min-w-12 items-center justify-center border-x border-orange-100 px-3">
          <span className="text-sm font-black text-[#2b211d]">
            {quantity}
          </span>
        </div>

        <button
          type="button"
          onClick={onIncrease}
          className="flex h-11 w-11 items-center justify-center text-xl font-bold text-[#c4512c] transition hover:bg-[#fff1ea]"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;