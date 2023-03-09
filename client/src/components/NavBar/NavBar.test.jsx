import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavBar from "./";

describe("NavBar", () => {
  it("exists", () => {
    expect(NavBar).toBeDefined();
  });
  it("renders", () => {
    render(<NavBar />);
  });
  it("has a div component", () => {
    render(<NavBar />);
    expect(NavBar).toHaveProperty("div");
  });
  it("has a div component with text", () => {
    render(<NavBar />);
    expect(NavBar.div).toHaveProperty("text");
  });
  it("has a div component with text Home", () => {
    render(<NavBar />);
    expect(NavBar.div.text).toBe("Home");
  });
  it("has a div component with text Add Flashcard", () => {
    render(<NavBar />);
    expect(NavBar.div.text).toBe("Add Flashcard");
  });
  it("has a div component with text Flashcard Gallery", () => {
    render(<NavBar />);
    expect(NavBar.div.text).toBe("Flashcard Gallery");
  });
});
