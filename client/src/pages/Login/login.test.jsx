import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "./index";

describe("Login", () => {
  it("exists", () => {
    expect(Login).toBeDefined();
  });
});
