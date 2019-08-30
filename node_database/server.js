const http = require('http');
const mysql = require('mysql');

let db = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'test'});
// db.query('select * from user', (err, data) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

let username = 'mike', password = 22;

db.query(`insert into user (username, password) values('${username}', '${password}')`, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
