import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'db-users'
})

connection.connect()

/**
 * execute query with or without values
 * @param {string} sql // sql query
 * @param {string=id | [user, id]} values // values to be inserted 
 * @param {string} rejectMessage // reject message
 * @returns // promise result
 */
export const consult = (sql, values = '', rejectMessage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
      if (err) {
        reject(rejectMessage)
      }
      resolve(result)
    })
  })
}

export default connection
