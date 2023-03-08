import Flashcards from ".";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React, { useState } from "react";
describe("Flashcards", () => {
  it("exists", () => {
    expect(Flashcards).toBeDefined();
  });
  it("renders", () => {
    render(<Flashcards />);
  });
  it("renders a flashcard gallery", () => {
    render(<Flashcards />);
    expect(screen.getByTestId("flashcard-gallery")).toBeDefined();
  });
});
