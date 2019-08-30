const express = require('express');

let server = express();
server.listen(8080);

server.get('/a', (req, res, next) => {
  console.log('a');

  req.username = 'mike';  // 传参

  next(); // 执行下一个路由
});

server.get('/a', (req, res, next) => {
  console.log(req.username);
});
