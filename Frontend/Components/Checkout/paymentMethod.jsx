const PaymentMethod = ({
  selectedMethod,
  onMethodChange,
}) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.07)]">
      {/* Header */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-[#fffaf5] to-[#fff6ed] px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff0e7] text-xl">
            💳
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
              Payment
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-[#2b211d] sm:text-2xl">
              How would you like to pay?
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#8c7468]">
              Choose your preferred payment method.
            </p>
          </div>
        </div>
      </div>

      {/* Payment options */}
      <div className="p-5 sm:p-6">
        <div className="space-y-3">
          {/* Cash on Delivery */}
          <label
            className={`group flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition duration-200 ${
              selectedMethod === "cash_on_delivery"
                ? "border-[#c92a2a] bg-[#fff8f1] shadow-sm"
                : "border-orange-100 bg-white hover:border-orange-200 hover:bg-[#fffaf5]"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="cash_on_delivery"
              checked={selectedMethod === "cash_on_delivery"}
              onChange={onMethodChange}
              className="sr-only"
            />

            {/* Icon */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl transition ${
                selectedMethod === "cash_on_delivery"
                  ? "bg-[#c92a2a] text-white shadow-md shadow-red-200"
                  : "bg-[#fff0e7] text-[#c92a2a]"
              }`}
            >
              💵
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-[#2b211d] sm:text-base">
                  Cash on Delivery
                </h3>

                <span className="rounded-full bg-orange-100 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-[#c92a2a]">
                  Available
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-[#8c7468] sm:text-sm">
                Pay in cash when your delicious order arrives.
              </p>
            </div>

            {/* Radio indicator */}
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                selectedMethod === "cash_on_delivery"
                  ? "border-[#c92a2a]"
                  : "border-orange-200"
              }`}
            >
              {selectedMethod === "cash_on_delivery" && (
                <div className="h-3 w-3 rounded-full bg-[#c92a2a]" />
              )}
            </div>
          </label>

          {/* Online payment — coming later */}
          <div className="flex items-center gap-4 rounded-2xl border border-dashed border-orange-200 bg-[#fffdfb] p-4 opacity-60">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-xl">
              💳
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-[#2b211d] sm:text-base">
                  Online Payment
                </h3>

                <span className="rounded-full bg-[#f5eee9] px-2 py-1 text-[9px] font-black uppercase tracking-wide text-[#8c7468]">
                  Coming Soon
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-[#a0877a] sm:text-sm">
                Card and online payment options will be available soon.
              </p>
            </div>

            <div className="h-6 w-6 shrink-0 rounded-full border-2 border-orange-100" />
          </div>
        </div>

        {/* Payment note */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
            💡
          </div>

          <p className="text-xs leading-5 text-[#806b60]">
            You&apos;ll pay the delivery partner in cash when your order
            arrives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;