const http = require('http');
const mysql = require('mysql');
const co = require('co-mysql');
const url = require('url');
const fs = require('fs');

let conn = mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'test'});
let db = co(conn);

http.createServer(async (req, res) => {
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
      try {
        let data = await db.query(`select id from user where username = '${username}'`);
        if(data.length > 0) {
          res.write('此用户名已被使用');
        } else {
          await db.query(`insert into user (username, password) values ('${username}', '${password}')`);
          res.write('成功');
        }
      } catch(e) {
        res.write('数据库繁忙');
      }
      res.end();
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
