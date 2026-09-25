"use client";

const LoadingSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="animate-pulse space-y-6">

          {/* Header */}
          <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-[0_18px_55px_rgba(88,47,27,0.06)] sm:p-9">
            <div className="flex gap-4">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-orange-100" />

              <div className="flex-1">
                <div className="h-3 w-24 rounded bg-orange-100" />

                <div className="mt-3 h-8 w-48 rounded bg-orange-100" />

                <div className="mt-3 h-4 max-w-xl rounded bg-orange-50" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map(
              (item) => (
                <div
                  key={item}
                  className="h-36 rounded-[1.5rem] border border-orange-100 bg-white"
                />
              )
            )}
          </div>

          {/* Filters */}
          <div className="rounded-[2rem] border border-orange-100 bg-white p-5">
            <div className="h-10 w-32 rounded bg-orange-50" />

            <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_1fr_1fr_1fr]">
              <div className="h-12 rounded-xl bg-orange-50" />

              <div className="h-12 rounded-xl bg-orange-50" />

              <div className="h-12 rounded-xl bg-orange-50" />

              <div className="h-12 rounded-xl bg-orange-50" />
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-[2rem] border border-orange-100 bg-white lg:block">
            <div className="h-14 border-b border-orange-100 bg-orange-50/50" />

            <div className="space-y-0">
              {[1, 2, 3, 4, 5].map(
                (item) => (
                  <div
                    key={item}
                    className="grid grid-cols-6 gap-4 border-b border-orange-50 px-6 py-6 last:border-b-0"
                  >
                    <div className="h-10 rounded-lg bg-orange-50" />
                    <div className="h-10 rounded-lg bg-orange-50" />
                    <div className="h-10 rounded-lg bg-orange-50" />
                    <div className="h-8 rounded-full bg-orange-50" />
                    <div className="h-10 rounded-lg bg-orange-50" />
                    <div className="mx-auto h-10 w-10 rounded-xl bg-orange-50" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 lg:hidden">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 rounded-[1.5rem] border border-orange-100 bg-white"
              />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
};

export default LoadingSkeleton;