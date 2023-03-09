import {
  index,
  show,
  showByUserName,
  create,
  destroy,
  loginUser,
} from "./user";
import { describe, it, expect, expectTypeOf } from "vitest";

describe("user", () => {
  it("exists", () => {
    expect(index).toBeDefined();
  });
  it("has the function index", () => {
    expectTypeOf(index).toBeFunction();
  });
});
