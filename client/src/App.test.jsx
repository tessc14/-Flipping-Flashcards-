import App from "./App.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("exists", () => {
    expect(App).toBeDefined();
  });
  it("renders", () => {
    render(<App />);
  });
});
