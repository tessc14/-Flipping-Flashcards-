import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "./index";
describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
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
describe("Login", () => {
  it("has a handleSubmit function", () => {
    expect(handleSubmit()).toBeDefined();
  });
});
