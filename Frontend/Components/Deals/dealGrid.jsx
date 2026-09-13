
import DealCard from "./dealCard";

const DealsGrid = ({ deals, onViewDeal }) => {
  if (!deals || deals.length === 0) {
    return (
      <div className="rounded-[2rem] border border-orange-100 bg-white px-6 py-14 text-center shadow-sm sm:px-10 sm:py-20">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1ea] text-4xl">
          🍕
        </div>

        <h3 className="mt-5 text-xl font-black text-[#2b211d] sm:text-2xl">
          No deals found
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8b766d]">
          We couldn't find any deals matching your search. Try a
          different craving or check back soon for more tasty offers.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {deals.map((deal) => (
        <DealCard
          key={deal._id}
          deal={deal}
          onViewDeal={onViewDeal}
        />
      ))}
    </div>
  );
};

export default DealsGrid;

