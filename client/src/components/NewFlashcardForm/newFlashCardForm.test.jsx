import NewFlashcardForm from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("NewFlashcardForm", () => {
  it("exists", () => {
    expect(NewFlashcardForm).toBeDefined();
  });
  it("renders", () => {
    render(<NewFlashcardForm />);
  });
  it("has a function called handleSubmit", () => {
    expect(NewFlashcardForm.handleSubmit).toBeDefined();
  });
});
