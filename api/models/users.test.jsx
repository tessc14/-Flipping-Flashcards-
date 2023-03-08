import User from "./users";
import { describe, it, expect } from "vitest";

describe("users", () => {
  it("exists", () => {
    expect(User).toBeDefined();
  });
});
