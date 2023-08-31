import { consult } from '../database/connection.js'

class UserRepository {
  // CRUD
  create(user) {
    const sql = `INSERT INTO users SET ?;`
    return consult(sql, user, 'it was not possible to create the user')
  }

  findAll() {
    const sql = "SELECT * FROM users;"
    return consult(sql, 'it was not possible to find all users')
  }

  findById(id) {
    const sql = `SELECT * FROM users WHERE id=?;`
    return consult(sql, id, 'it was not possible to find the user')
  }

  update(user, id) {
    const sql = `UPDATE users SET ? WHERE id=?;`
    return consult(sql, [user, id], 'it was not possible to update the user')
  }

  delete(id) {
    const sql = `DELETE FROM users WHERE id=?;`
    return consult(sql, id, 'it was not possible to delete the user')
  }
}

export default new UserRepository()
