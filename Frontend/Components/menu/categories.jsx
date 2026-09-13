
"use client";

import {
  Beef,
  CakeSlice,
  ChefHat,
  Coffee,
  Croissant,
  Drumstick,
  Flame,
  Pizza,
  Sandwich,
} from "lucide-react";

const categories = [
  {
    name: "All",
    icon: ChefHat,
  },
  {
    name: "Burgers",
    icon: Beef,
  },
  {
    name: "Pizza",
    icon: Pizza,
  },
  {
    name: "Fries",
    icon: Flame,
  },
  {
    name: "Sandwiches",
    icon: Sandwich,
  },
  {
    name: "Wraps",
    icon: Croissant,
  },
  {
    name: "Chicken",
    icon: Drumstick,
  },
  {
    name: "Drinks",
    icon: Coffee,
  },
  {
    name: "Desserts",
    icon: CakeSlice,
  },
];

const MenuCategories = ({
  selectedCategory = "All",
  onCategoryChange,
}) => {
  return (
    <section className="bg-[#fffaf5] pb-7 sm:pb-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile horizontal scroll */}
        <div className="-mx-4 overflow-x-auto px-4 pb-2 scrollbar-none sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2.5 sm:w-full sm:flex-wrap sm:justify-center sm:gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => onCategoryChange?.(category.name)}
                  className={`group flex min-h-11 shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 active:scale-[0.98] sm:min-h-12 sm:px-5 ${
                    isSelected
                      ? "border-[#c92a2a] bg-[#c92a2a] text-white shadow-[0_8px_22px_-10px_rgba(201,42,42,0.7)]"
                      : "border-orange-100 bg-white text-[#624f47] shadow-sm hover:-translate-y-0.5 hover:border-orange-200 hover:text-[#c92a2a] hover:shadow-md"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-white/15"
                        : "bg-[#fff1e8] group-hover:bg-[#ffe6d7]"
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 ${
                        isSelected ? "text-white" : "text-[#e35d32]"
                      }`}
                    />
                  </span>

                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;

