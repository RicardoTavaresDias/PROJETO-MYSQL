import mysql from "mysql2"

export const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '2478be40dd94892b1e2573d234d4529d',
  database: 'APITasks'
})