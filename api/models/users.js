import db from "../database/connect.js";

class User {
  constructor({ user_id, username, password }) {
    this.id = user_id;
    this.username = username;
    this.password = password;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM user_account;");
    return response.rows.map((g) => new User(g));
  }

  static async getOneById(id) {
    const response = await db.query(
      "SELECT * FROM user_account WHERE user_id = $1",
      [id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate user.");
    }
    return new User(response.rows[0]);
  }

  static async create(data) {
    console.log("Hey");
    const { username, password } = data;
    const response = await db.query(
      "INSERT INTO user_account (username, password) VALUES ($1, $2) RETURNING *;",
      [username, password]
    );
    return new User(response.rows[0]);
  }

  static async update(id, data) {
    const { username, password } = data;
    const response = await db.query(
      "UPDATE user_account SET username = $1, password = $2 WHERE user_id = $3 RETURNING *;",
      [username, password, id]
    );
    return new User(response.rows[0]);
  }

  static async delete(id) {
    const response = await db.query(
      "DELETE FROM user_account WHERE user_id = $1 RETURNING *;",
      [id]
    );
    return new User(response.rows[0]);
  }

  static async findByUsername(username) {
    const response = await db.query(
      "SELECT * FROM user_account WHERE username = $1;",
      [username]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate user.");
    }
    return new User(response.rows[0]);
  }
}

export default User;
