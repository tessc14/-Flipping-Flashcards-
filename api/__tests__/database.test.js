import { Pool } from "pg";
import dotenv from "dotenv";
import {
  beforeAll,
  afterAll,
  describe,
  it,
  expect,
  beforeEach,
  vi,
  test,
} from "vitest";
dotenv.config();

describe("Database Tests", () => {
  let db;
  beforeAll(() => {
    db = new Pool({
      connectionString: process.env.DB_URL,
    });
  });

  afterAll(async () => {
    await db.end();
  });

  test("should check flashcard_id from first event from table events", async () => {
    const result = await db.query(
      "SELECT * FROM flashcards WHERE flashcard_id=1"
    );
    expect(result.rows[0].flashcard_id).toEqual(1);
  });

  test("should check user_id from first event from table flashcards", async () => {
    const result = await db.query(
      "SELECT * FROM flashcards WHERE flashcard_id=1"
    );
    expect(result.rows[0].user_id).toEqual(1);
  });

  test("should check question from first flashcard", async () => {
    const result = await db.query(
      "SELECT * FROM flashcards WHERE flashcard_id=1"
    );
    expect(result.rows[0].question).toEqual(
      "What is the capital city of France?"
    );
  });

  test("should check answer from first flashcard", async () => {
    const result = await db.query(
      "SELECT * FROM flashcards WHERE flashcard_id=1"
    );
    expect(result.rows[0].answer).toEqual("Paris");
  });

  test("should check category from first flashcard", async () => {
    const result = await db.query(
      "SELECT * FROM flashcards WHERE flashcard_id=1"
    );
    expect(result.rows[0].category_name).toEqual("Geography");
  });
});
