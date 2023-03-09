import AddFlashcard from "./index";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React, { useState } from "react";
describe("AddFlashcard", () => {
  beforeEach(() => {
    render(<AddFlashcard />);
  });
  it("exists", () => {
    expect(AddFlashcard).toBeDefined();
  });
  it("has a state called", () => {
    expect(AddFlashcard).toHaveProperty("state");
  });
  it("has a state called questionInput", () => {
    expect(AddFlashcard.state).toHaveProperty("questionInput");
  });
  it("has a state called answerInput", () => {
    expect(AddFlashcard.state).toHaveProperty("answerInput");
  });
  it("has a state called categoryInput", () => {
    expect(AddFlashcard.state).toHaveProperty("categoryInput");
  });
});
