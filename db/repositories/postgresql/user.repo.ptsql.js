import UserRepository from "../../../core/repositories/user.repositorie.js";
import pool from "../../db/connection.js";

export default class UserRepoPostgresql extends UserRepository {
  async createUser(user) {
    const { username, email, passwordhash } = user;
    const query =
      "INSERT INTO users (username, email, passwordhash) VALUES ($1, $2, $3) RETURNING *";
    const values = [username, email, passwordhash];

    const res = await pool.query(query, values)
    return res.rows[0]
  }
  async deleteUser(id) {
    const query = "DELETE FROM users WHERE id = $1";
    const values = [id];

    const res = await pool.query(query, values)
    return res.rows[0]
  }
  async getUserById(id) {
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [id];

     const res = await pool.query(query, values)
    return res.rows[0]
  }
  async getUserByLogin(email, password) {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];

    try {
      const result = await pool.query(query, values);
      const user = result.rows[0];
      if (!user) return null;

      const match = await bcrypt.compare(password, user.password);
      if (!match) return null;

      return user;
    } catch (err) {
      throw err;
    }
  }

  async addOrganization(userid, organizationid) {
    const query =
      "UPDATE users SET organizationsid = array_append(organizationsid, $2) WHERE id = $1";
    const values = [userid, organizationid];

    const res = await pool.query(query, values)
    return res.rows[0]
  }
  async updateDataOrganization(userid, organizationsid,data) {
    const query =
      "UPDATE users SET organizationsid = $2, data = $3 WHERE id = $1 RETURNING *";
    const values = [userid, organizationsid, data];
    
    const res = await pool.query(query, values)
    return res.rows[0]
  }
}
