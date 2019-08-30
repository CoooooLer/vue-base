const mysql = require('mysql');
const co = require('co-mysql');

let conn = mysql.createPool({
  hostname: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

let db = co(conn);

module.exports = db;
