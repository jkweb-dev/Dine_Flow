
const DealImage = ({ image, name }) => {
  const imageUrl =
    image?.url ||
    image ||
    "/images/food-placeholder.jpg";

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_20px_60px_rgba(88,47,27,0.1)]">
      <div className="relative aspect-square overflow-hidden bg-[#fff0e7] sm:aspect-[1.05/1]">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />

        {/* Promotional badge */}
        <div className="absolute left-4 top-4 rounded-full bg-[#c92a2a] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg sm:left-5 sm:top-5">
          🔥 Special Deal
        </div>
      </div>
    </div>
  );
};

export default DealImage;

