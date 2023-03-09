import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useNavigate } from "react-router-dom";
import Login from "./index";
describe("Login", () => {
  it("exists", () => {
    expect(Login).toBeDefined();
  });
  it("renders", () => {
    render(<Login />);
    expect(1 == 1).toBe(true);
  });
  it("renders a form", () => {
    render(<Login />);
    expect(screen.getByRole("form")).toBeDefined();
  });
  it("renders a username input", () => {
    render(<Login />);
    expect(screen.getByLabelText("username")).toBeDefined();
  });
  it("renders a password input", () => {
    render(<Login />);
    expect(screen.getByLabelText("password")).toBeDefined();
  });
  it("renders a submit button", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeDefined();
  });
  it("renders a h1", () => {
    render(<Login />);
    expect(screen.getByRole("heading")).toBeDefined();
  });
  it("has a state called userName", () => {
    render(<Login />);
    expect(Login.state).toHaveProperty("userName");
  });
  it("has a state called password", () => {
    render(<Login />);
    expect(Login.state).toHaveProperty("password");
  });
  it("has a state called confirmPassword", () => {
    render(<Login />);
    expect(Login.state).toHaveProperty("confirmPassword");
  });
  it("has a state called isLogin", () => {
    render(<Login />);
    expect(Login.state).toHaveProperty("isLogin");
  });
});
