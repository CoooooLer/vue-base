const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

let users = {};

http.createServer((req, res) => {

  // res.setHeader("Access-Control-Allow-Origin", "*");


  let path = '', get = {}, post = {};
  if (req.method == 'GET') {
    let {pathname, query} = url.parse(req.url, true);

    path = pathname;
    get = query;

    complate();
  } else if(req.method == 'POST') {
    let arr = [];
    path = req.url;
    req.on('data', buffer => {
      arr.push(buffer);
    });
    req.on('end', () => {
      let buffer = Buffer.concat(arr);

      post = querystring.parse(buffer.toString());

      complate();
    });
  }

  function complate() {
    if(path == '/reg') {
      let {username, password} = get;

      if(users[username]) {
        res.write(JSON.stringify({error: 1, msg: '此用户已存在'}));
        res.end();
      } else {
        users[username] = password;

        res.write(JSON.stringify({error: 0, msg: '注册成功'}));
        res.end();
      }
    } else if(path == '/login') {
      let {username, password} = get;

      if(!users[username]) {
        res.write(JSON.stringify({error: 1, msg: '该用户未注册'}));
        res.end();
      } else if(users[username] != password) {
        res.write(JSON.stringify({error: 1, msg: '密码错误'}));
        res.end();
      } else {
        res.write(JSON.stringify({error: 0, msg: '登录成功'}));
        res.end();
      }
    } else {
      fs.readFile(`www${path}`, (err, buffer) => {
        if(err) {
          res.writeHeader(404);
          res.write('Not Found');
          res.end();
        } else {
          res.write(buffer);
          res.end();
        }
      });
    }

    // console.log(path, get, post);
  }

}).listen(8080);
