import React from "react";
import "./style.css";

const categories = ["All", "History", "Geography", "Math", "Language", "Art"];

function FlashcardFilter({ category, setCategory }) {
  const handleCategoryChange = (event) => {

    setCategory(event.target.value);

  };

  return (

    <div className="flashcard-filters">
      <label className="category-label">
        Category:
      </label>
      <select value={category} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
    </div>
  );
}

export default FlashcardFilter;
