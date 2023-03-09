import Flashcard from "./flashcards";
import { describe, it, expect } from "vitest";

describe("Flashcard", () => {
  it("exists", () => {
    expect(Flashcard).toBeDefined();
  });
  it("has the class Flashcard", () => {
    expect(Flashcard).toHaveProperty("class");
  });
  it("has the function getAll", () => {
    expect(Flashcard).toHaveProperty("getAll");
  });
  it("has the function getOne", () => {
    expect(Flashcard).toHaveProperty("getOneById");
  });
  it("has the function create", () => {
    expect(Flashcard).toHaveProperty("create");
  });
  it("has the function destroy", () => {
    expect(Flashcard).toHaveProperty("destroy");
  });
});
