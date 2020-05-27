const mysql = require('mysql2/promise')

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'test',
  connectionLimit: 100,
}

const pool = mysql.createPool(config)

module.exports = pool