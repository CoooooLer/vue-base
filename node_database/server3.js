const http = require('http');
const mysql = require('mysql');
const url = require('url');
const fs = require('fs');

let db = mysql.createPool({
  host: 'localhost', user: 'root', password: '', database: 'test'
});

http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);

  if(pathname == '/reg') {
    let {username, password} = query;

    if(!username || !password) {
      res.write('用户名、密码不能为空');
      res.end();
    } else if(username.length > 10) {
      res.write('用户名不能超过10个字符');
      res.end();
    } else if(password.length > 10) {
      res.write('密码不能超过10个字符');
      res.end();
    } else {
      db.query(`select id from user where username = '${username}'`, (err, data) => {
        if(err) {
          res.write('数据库繁忙');
          res.end();
        } else if(data.length > 0){
          res.write('此用户名已被使用');
          res.end();
        } else {
          db.query(`insert into user (username, password) values ('${username}', '${password}')`, err => {
            if(err) {
              res.write('数据库繁忙');
              res.end();
            } else {
              res.write('成功');
              res.end();
            }
          });
        }
      });
    }
  } else if(pathname == '/login') {

  } else {
    fs.readFile('www' + pathname, (err, buffer) => {
      if(err) {
        res.writeHeader(404);
        res.write('Not Found');
      } else {
        res.write(buffer);
      }
      res.end();
    });
  }
}).listen(8080);
