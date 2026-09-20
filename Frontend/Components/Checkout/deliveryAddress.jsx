const DeliveryAddress = ({
  address,
  onAddressChange,
}) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.07)]">
      {/* Section heading */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-[#fffaf5] to-[#fff6ed] px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff0e7] text-xl">
            🏠
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
              Delivery Details
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-[#2b211d] sm:text-2xl">
              Where should we deliver?
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#8c7468]">
              Give us the details so our delivery partner can find you easily.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5 p-5 sm:p-6">
        {/* Full address */}
        <div>
          <label
            htmlFor="delivery-address"
            className="mb-2 block text-sm font-extrabold text-[#3d2d26]"
          >
            Complete Address
            <span className="ml-1 text-[#c92a2a]">*</span>
          </label>

          <textarea
            id="delivery-address"
            name="address"
            value={address.address}
            onChange={onAddressChange}
            placeholder="House/Flat number, street, area, landmark..."
            rows={4}
            className="w-full resize-none rounded-2xl border border-orange-200 bg-[#fffdfb] px-4 py-3.5 text-sm font-medium text-[#2b211d] outline-none transition placeholder:text-[#b39d92] focus:border-[#c92a2a] focus:ring-4 focus:ring-red-100"
          />

          <p className="mt-2 text-xs font-medium text-[#9b8175]">
            Include a nearby landmark if it helps us find you.
          </p>
        </div>

        {/* Area + phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="delivery-area"
              className="mb-2 block text-sm font-extrabold text-[#3d2d26]"
            >
              Area / Locality
              <span className="ml-1 text-[#c92a2a]">*</span>
            </label>

            <input
              id="delivery-area"
              name="area"
              type="text"
              value={address.area}
              onChange={onAddressChange}
              placeholder="e.g. Main Bazaar"
              className="h-12 w-full rounded-2xl border border-orange-200 bg-[#fffdfb] px-4 text-sm font-medium text-[#2b211d] outline-none transition placeholder:text-[#b39d92] focus:border-[#c92a2a] focus:ring-4 focus:ring-red-100"
            />
          </div>

          <div>
            <label
              htmlFor="delivery-phone"
              className="mb-2 block text-sm font-extrabold text-[#3d2d26]"
            >
              Phone Number
              <span className="ml-1 text-[#c92a2a]">*</span>
            </label>

            <input
              id="delivery-phone"
              name="phone"
              type="tel"
              value={address.phone}
              onChange={onAddressChange}
              placeholder="03XX XXXXXXX"
              className="h-12 w-full rounded-2xl border border-orange-200 bg-[#fffdfb] px-4 text-sm font-medium text-[#2b211d] outline-none transition placeholder:text-[#b39d92] focus:border-[#c92a2a] focus:ring-4 focus:ring-red-100"
            />
          </div>
        </div>

        {/* Delivery instructions */}
        <div>
          <label
            htmlFor="delivery-instructions"
            className="mb-2 block text-sm font-extrabold text-[#3d2d26]"
          >
            Delivery Instructions
            <span className="ml-2 text-xs font-semibold text-[#a0877a]">
              Optional
            </span>
          </label>

          <textarea
            id="delivery-instructions"
            name="instructions"
            value={address.instructions}
            onChange={onAddressChange}
            placeholder="Anything our delivery partner should know?"
            rows={3}
            className="w-full resize-none rounded-2xl border border-orange-200 bg-[#fffdfb] px-4 py-3.5 text-sm font-medium text-[#2b211d] outline-none transition placeholder:text-[#b39d92] focus:border-[#c92a2a] focus:ring-4 focus:ring-red-100"
          />
        </div>

        {/* Privacy / usage note */}
        <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
            📍
          </div>

          <p className="text-xs leading-5 text-[#806b60]">
            Your address helps us deliver your order accurately. We&apos;ll
            also use your selected map location to confirm that your address
            is within our delivery area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAddress;