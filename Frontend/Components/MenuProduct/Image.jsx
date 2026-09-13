const ProductImage = ({ image, name }) => {
  const imageUrl =
    image?.url || image || "/images/food-placeholder.jpg";

  return (
    <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_20px_60px_rgba(88,47,27,0.08)]">
      <div className="relative aspect-square overflow-hidden bg-[#fff0e7]">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
      </div>
    </div>
  );
};

export default ProductImage;