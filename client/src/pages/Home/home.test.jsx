import Home from "./index";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React, { useState } from "react";
describe("Home", () => {
  it("exists", () => {
    expect(Home).toBeDefined();
  });
  it("has a h2 component", () => {
    render(<Home />);
    expect(Home).toHaveProperty("h2");
  });
  it("has a h2 component with text", () => {
    render(<Home />);
    expect(Home.h2).toHaveProperty("text");
  });
  it("has a h3 component", () => {
    render(<Home />);
    expect(Home).toHaveProperty("h3");
  });
  it("has a h3 component with text", () => {
    render(<Home />);
    expect(Home.h3).toHaveProperty("text");
  });
  it("has a div component", () => {
    render(<Home />);
    expect(Home).toHaveProperty("div");
  });
});
