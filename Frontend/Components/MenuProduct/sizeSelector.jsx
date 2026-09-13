const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-[#2b211d] sm:text-base">
          Choose your size
        </h3>

        {selectedSize && (
          <span className="text-xs font-bold text-[#c4512c]">
            {selectedSize.name}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {sizes.map((size) => {
          const isSelected = selectedSize?.name === size.name;

          return (
            <button
              key={size.name}
              type="button"
              onClick={() => onSizeChange(size)}
              className={`rounded-2xl border-2 px-3 py-3 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[#c92a2a] bg-[#fff1ea] shadow-sm"
                  : "border-orange-100 bg-white hover:border-orange-200 hover:bg-[#fffaf5]"
              }`}
            >
              <p
                className={`text-sm font-extrabold ${
                  isSelected ? "text-[#c92a2a]" : "text-[#2b211d]"
                }`}
              >
                {size.name}
              </p>

              <p className="mt-1 text-xs font-bold text-[#8b766d]">
                Rs. {size.price}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;