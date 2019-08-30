const http = require('http');
const mysql = require('mysql');
const co = require('co-mysql');
const url = require('url');
const fs = require('fs');
const validator = require('./libs/valitator');

let conn = mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'test'});
let db = co(conn);

http.createServer(async (req, res) => {
  const {pathname, query} = url.parse(req.url, true);

  if(pathname == '/reg') {
    let {username, password} = query;
    let err = validator.username(username);
    if(err) {
      res.write(err);
    } else {
      let err = validator.password(password);
      if(err) {
        res.write(err);
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
      }
    }
    res.end();
  } else if(pathname == '/login') {
    let {username, password} = query;
    let err = validator.username(username);
    if(err) {
      res.write(err);
    } else {
      let err = validator.password(password);
      if(err) {
        res.write(err);
      } else {
        try {
         let data = await db.query(`select id,password from user where username = '${username}'`);
         if(data.length == 0) {
          res.write('用户名不存在');
         } else if(data[0].password != password) {
           res.write('密码错误');
         } else {
           res.write('成功');
         }
        } catch(e) {
          res.write('数据库繁忙00');
        }
      }
    }
    res.end();
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
