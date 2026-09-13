const DealInfo = ({ deal }) => {
  return (
    <div className="flex flex-col">
      {/* Deal Badge */}
      <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#c92a2a]">
        <span>🔥</span>
        <span>Limited Time Deal</span>
      </div>

      {/* Deal Name */}
      <h1 className="text-3xl font-black leading-tight tracking-tight text-[#2b211d] sm:text-4xl lg:text-5xl">
        {deal.name}
      </h1>

      {/* Short Description */}
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#725f55] sm:text-lg">
        {deal.shortDescription}
      </p>

      {/* Price */}
      <div className="mt-7 rounded-2xl border border-orange-100 bg-gradient-to-br from-[#fff8f1] to-[#fff0e7] p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#8c7468]">
          Special Deal Price
        </p>

        <div className="mt-1 flex items-end gap-2">
          <span className="text-3xl font-black text-[#c92a2a] sm:text-4xl">
            Rs. {deal.dealPrice}
          </span>

          <span className="pb-1 text-sm font-semibold text-[#8c7468]">
            per deal
          </span>
        </div>
      </div>

      {/* Validity */}
      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50/70 p-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c92a2a] text-white">
          ⏰
        </div>

        <div>
          <p className="text-sm font-extrabold text-[#7f2020]">
            Limited availability
          </p>

          <p className="mt-1 text-sm leading-6 text-[#8c514b]">
            Grab this special deal while it&apos;s available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealInfo;