import React, { useEffect, useState } from "react";
import { Flashcard } from "../../components";
import FlashcardFilter from "../FlashcardFilter";
import "./style.css";

function FlashcardGallery() {
  let prevScrollPos = window.pageYOffset;
  const navContainer = document.querySelector(".nav-container");

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // User is scrolling up
      if (currentScrollPos < 100) {
        navContainer.style.display = "flex";
      }
    } else {
      // User is scrolling down
      if (currentScrollPos > 100) {
        navContainer.style.display = "none";
      }
    }

    prevScrollPos = currentScrollPos;
  });

  const [flashcards, setFlashcards] = useState([]);
  const [category, setCategory] = useState(false);

  async function loadFlashcards() {
    const response = await fetch("http://localhost:3000/api/flashcards");
    const data = await response.json();
    setFlashcards(data);
  }

  useEffect(() => {
    loadFlashcards();
  }, [flashcards]);

  function displayFlashcards(category) {
    if (category === "All") {
      return flashcards.map((f) => (
        <Flashcard
          key={f.id}
          id={f.id}
          question={f.question}
          answer={f.answer}
          deleteFlashcard={deleteFlashcard}
        />
      ));
    }
    return flashcards
      .filter((f) => !category || f.category_name === category)
      .map((f) => (
        <Flashcard
          key={f.id}
          id={f.id}
          question={f.question}
          answer={f.answer}
          deleteFlashcard={deleteFlashcard}
        />
      ));
  }

  async function deleteFlashcard(id) {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:3000/api/flashcards/${id}`,
      options
    );
    await response.json();
    
    setFlashcards(flashcards.filter(item => item !== flashcards.id))
    
}


  return (
    <>
      <FlashcardFilter category={category} setCategory={setCategory} />
      <div className="flashcard-container">{displayFlashcards(category)}</div>
    </>
  );
}

export default FlashcardGallery;
