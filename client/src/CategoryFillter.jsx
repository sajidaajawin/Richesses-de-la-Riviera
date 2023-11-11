import React from "react";

const CategoryFilters = ({ selectedCatalog, onFilterChange }) => {
  const categories = ["All", "Clothes", "Food", "HandMade", "Accessories"];

  return (
    <div className="flex justify-center space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${
            selectedCatalog === category
              ? "bg-[#C08261] text-white"
              : "bg-white text-[#C08261] border-[#C08261] border hover:bg-[#C08261] hover:text-white"
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
