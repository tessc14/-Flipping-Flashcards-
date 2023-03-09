import User from "./users";
import { describe, it, expect } from "vitest";

describe("users", () => {
  it("exists", () => {
    expect(User).toBeDefined();
  });
  it("has the class User", () => {
    expect(User).toHaveProperty("class");
  });
  it("has the function getAll", () => {
    expect(User).toHaveProperty("getAll");
  });
  it("has the function getOne", () => {
    expect(User).toHaveProperty("getOneById");
  });
  it("has the function create", () => {
    expect(User).toHaveProperty("create");
  });
  it("has the function destroy", () => {
    expect(User).toHaveProperty("delete");
  });
});
