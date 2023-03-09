import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useNavigate } from "react-router-dom";
import Flashcard from "./";

describe("Flashcard", () => {
  it("exists", () => {
    expect(Flashcard).toBeDefined();
  });
  it("renders", () => {
    render(<Flashcard />);
  });
  it("renders a question", () => {
    render(<Flashcard />);
    expect(screen.getByTestId("flashcard-question")).toBeDefined();
  });
  it("renders an answer", () => {
    render(<Flashcard />);
    expect(screen.getByTestId("flashcard-answer")).toBeDefined();
  });
  it("renders a button", () => {
    render(<Flashcard />);
    expect(screen.getByRole("button")).toBeDefined();
  });
});
