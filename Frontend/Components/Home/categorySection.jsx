"use client";

import {
  ArrowRight,
  Beef,
  CakeSlice,
  ChevronRight,
  Coffee,
  Croissant,
  Drumstick,
  Pizza,
  Sandwich,
  Soup,
} from "lucide-react";

const categories = [
  {
    name: "Burgers",
    icon: Beef,
    description: "Juicy & fresh",
  },
  {
    name: "Pizza",
    icon: Pizza,
    description: "Cheesy favorites",
  },
  {
    name: "Fries",
    icon: Croissant,
    description: "Crispy bites",
  },
  {
    name: "Sandwiches",
    icon: Sandwich,
    description: "Loaded & tasty",
  },
  {
    name: "Wraps",
    icon: Soup,
    description: "Freshly wrapped",
  },
  {
    name: "Chicken",
    icon: Drumstick,
    description: "Crispy goodness",
  },
  {
    name: "Drinks",
    icon: Coffee,
    description: "Cool & refreshing",
  },
  {
    name: "Desserts",
    icon: CakeSlice,
    description: "Sweet treats",
  },
];

const CategorySection = ({ onCategoryClick, onViewMenu }) => {
  const handleCategoryClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  const handleViewMenu = () => {
    if (onViewMenu) {
      onViewMenu();
    }
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1 w-7 rounded-full bg-[#f97316]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c96a3d]">
                Explore
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl lg:text-4xl">
              What are you craving?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#806f65] sm:text-base">
              Explore our menu and find something delicious for every
              craving.
            </p>
          </div>

          {/* Desktop View Menu */}
          <button
            type="button"
            onClick={handleViewMenu}
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-bold text-[#c92a2a] transition-colors hover:text-[#a91f1f] sm:flex"
          >
            View Full Menu

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Categories */}
        <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-3 sm:grid sm:min-w-0 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategoryClick(category.name)}
                  className="group relative flex w-[142px] flex-col items-center overflow-hidden rounded-3xl border border-orange-100 bg-[#fffaf5] px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg hover:shadow-orange-100/60 sm:w-auto"
                >
                  {/* Soft hover background */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#fff0e7] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-orange-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#fff0e7] group-hover:ring-orange-200">
                    <Icon className="h-6 w-6 text-[#c92a2a] transition-colors duration-300 group-hover:text-[#f97316]" />
                  </div>

                  {/* Category name */}
                  <span className="relative mt-3 text-sm font-extrabold text-[#3d302a]">
                    {category.name}
                  </span>

                  {/* Description */}
                  <span className="relative mt-1 text-[10px] font-medium text-[#9b887d]">
                    {category.description}
                  </span>

                  {/* Arrow */}
                  <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-white opacity-70 ring-1 ring-orange-100 transition-all duration-300 group-hover:bg-[#c92a2a] group-hover:opacity-100">
                    <ChevronRight className="h-3.5 w-3.5 text-[#a98f81] transition-colors group-hover:text-white" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile View Menu */}
        <button
          type="button"
          onClick={handleViewMenu}
          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-100 bg-[#fffaf5] px-4 py-3.5 text-sm font-bold text-[#c92a2a] transition-all duration-200 hover:border-orange-200 hover:bg-[#fff4eb] sm:hidden"
        >
          View Full Menu

          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default CategorySection;