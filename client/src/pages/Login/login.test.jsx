import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Login from "./index";
describe("Login", () => {

  beforeEach(() => {

    vi.mock("user", {
        test: "5,          
    })
  });
    

  });
  it("exists", () => {
    expect(Login).toBeDefined();
  });
  it("renders", () => {
    render(<Login />);
  });
  it("renders a form", () => {
    render(<Login />);
    expect(screen.getByRole("form")).toBeDefined();
  });
  it("renders a username input", () => {
    render(<Login />);
    expect(screen.getByLabelText("Username")).toBeDefined();
  });
  it("renders a password input", () => {
    render(<Login />);
    expect(screen.getByLabelText("Password")).toBeDefined();
  });
  it("renders a submit button", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeDefined();
  });
});
