import db from "../database/connect.js";

class Flashcard {
  constructor({ flashcard_id, user_id, question, answer, category_name }) {
    (this.id = flashcard_id),
      (this.user_id = user_id),
      (this.question = question),
      (this.answer = answer),
      (this.category_name = category_name);
  }

    static async getAll() {
        const response = await db.query(
            "SELECT * FROM flashcards;"
        );
        return response.rows.map((g) => new Flashcard(g));
    }

    static async getUserFlashcards(user) {
      const response = await db.query(
          "SELECT * FROM flashcards WHERE user_id = $1;",
          [user.id]
      );
      return response.rows.map((g) => new Flashcard(g));
    }

    // static async getCategory(category) {
    //   console.log(category)
    //   const response = await db.query(
    //     "SELECT * FROM flashcards WHERE category_name = $1;",
    //     [category]
    //   );
    //   return response.rows.map((g) => new Flashcard(g));
    // }

    static async getOneById(id) {
        const response = await db.query(
            "SELECT * FROM flashcards WHERE flashcard_id = $1;",
            [id]
        );
        if (response.rows.length != 1) {
            throw Error("Unable to locate flashcard.");
        }
        return new Flashcard(response.rows[0]);
    }
    
    static async create(data) {
        const {
            user_id,
            question,
            answer,
            category_name,
        } = data;
        const response = await db.query(
            "INSERT INTO flashcards (user_id, question, answer, category_name) VALUES ($1, $2, $3, $4) RETURNING *;",
            [
                user_id,
                question,
                answer,
                category_name,
            ]
        );

        return new Flashcard(response.rows[0]);
    }

    async destroy() {
        let response = await db.query(
            "DELETE FROM flashcards WHERE flashcard_id = $1 RETURNING *;",
            [this.id]
        );

        return new Flashcard(response.rows[0]);

  }

  static async getOneByUserName(username) {
    const response = await db.query(
      "SELECT * FROM flashcards WHERE username = $1",
      [username]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate flashcard.");
    }
    return new Flashcard(response.rows[0]);
  }

  static async create(data) {
    const { user_id, question, answer, category_name } = data;
    const response = await db.query(
      "INSERT INTO flashcards (user_id, question, answer, category_name) VALUES ($1, $2, $3, $4) RETURNING *;",
      [user_id, question, answer, category_name]
    );

    return new Flashcard(response.rows[0]);
  }

  async destroy() {
    let response = await db.query(
      "DELETE FROM flashcards WHERE flashcard_id = $1 RETURNING *;",
      [this.id]
    );

    return new Flashcard(response.rows[0]);
  }
}

export default Flashcard;
