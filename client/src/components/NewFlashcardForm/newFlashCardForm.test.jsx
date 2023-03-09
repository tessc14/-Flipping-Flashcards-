import NewFlashcardForm from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React, { useState } from "react";

describe("NewFlashcardForm", () => {
  it("exists", () => {
    expect(NewFlashcardForm).toBeDefined();
  });
  it("renders", () => {
    render(<NewFlashcardForm />);
  });
  it("renders all form fields correctly", () => {
    const { getByLabelText } = render(<NewFlashcardForm />);
    expect(getByLabelText("Choose a category:")).toBeInTheDocument();
    expect(getByLabelText("Question")).toBeInTheDocument();
    expect(getByLabelText("Answer")).toBeInTheDocument();
  });
});
