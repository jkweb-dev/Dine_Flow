const DealsSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <section className="relative -mt-5 px-4 sm:-mt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[1.5rem] border border-orange-100 bg-white p-2 shadow-[0_15px_45px_rgba(88,47,27,0.1)] sm:rounded-[1.75rem] sm:p-2.5">
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1ea] text-[#c4512c] sm:h-12 sm:w-12 sm:rounded-2xl">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 sm:h-6 sm:w-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path
                  d="m20 20-4-4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search for a deal, combo or craving..."
              className="min-w-0 flex-1 bg-transparent px-1 text-sm font-semibold text-[#2b211d] outline-none placeholder:text-[#b5a39b] sm:text-base"
            />

            {/* Clear Button */}
            {searchTerm && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#8b766d] transition hover:bg-[#fff1ea] hover:text-[#c92a2a]"
                aria-label="Clear search"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}

            {/* Search Label */}
            <div className="hidden rounded-xl bg-[#c92a2a] px-4 py-2.5 text-xs font-extrabold text-white sm:block">
              Find Deals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSearch;