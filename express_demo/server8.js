const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

server.use(cookieParser());


server.get('/a', (req, res) => {

  console.log(req.cookies);

  res.cookie('amount', 999.999, {
    //domain: 'www.com',
    //path: '/',
    maxAge: 86400*1000,
  });



  res.send('success');

});

