import React from "react";

const categories = ["All", "History", "Geography", "Math", "Language", "Art"];

function FlashcardFilter({ category, setCategory }) {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);

  };

  return (
    <div className="flashcard-filters">
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FlashcardFilter;
