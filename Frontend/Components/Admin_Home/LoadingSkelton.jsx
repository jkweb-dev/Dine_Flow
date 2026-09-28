"use client";

const LoadingSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-48 rounded-[2rem] border border-orange-100 bg-white" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-40 rounded-[1.5rem] border border-orange-100 bg-white"
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
          <div className="h-[390px] rounded-[2rem] border border-orange-100 bg-white" />
          <div className="h-[390px] rounded-[2rem] border border-orange-100 bg-white" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="h-[400px] rounded-[2rem] border border-orange-100 bg-white" />
          <div className="h-[400px] rounded-[2rem] border border-orange-100 bg-white" />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="h-[330px] rounded-[2rem] border border-orange-100 bg-white" />
          <div className="h-[330px] rounded-[2rem] border border-orange-100 bg-white" />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="h-[330px] rounded-[2rem] border border-orange-100 bg-white" />
          <div className="h-[330px] rounded-[2rem] border border-orange-100 bg-white" />
        </div>
      </div>
    </main>
  );
};

export default LoadingSkeleton;