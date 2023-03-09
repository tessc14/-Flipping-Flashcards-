import FlashcardGallery from ".";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React, { useState } from "react";

describe("FlashcardGallery", () => {
  it("exists", () => {
    expect(FlashcardGallery).toBeDefined();
  });
  it("renders", () => {
    render(<FlashcardGallery />);
  });
  it("renders a flashcard", () => {
    render(<FlashcardGallery />);
    expect(screen.getByTestId("flashcard")).toBeDefined();
  });
  it("renders a flashcard with a question", () => {
    render(<FlashcardGallery />);
    expect(screen.getByTestId("flashcard-question")).toBeDefined();
  });
  it("renders a flashcard with an answer", () => {
    render(<FlashcardGallery />);
    expect(screen.getByTestId("flashcard-answer")).toBeDefined();
  });
});
