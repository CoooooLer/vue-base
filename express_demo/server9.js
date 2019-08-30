const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

server.use(cookieParser(
    'aaaaaddddddddddddddbbbbbbbb'
));


server.get('/a', (req, res) => {

  console.log('cookie', req.cookies); // 未签名
  console.log('signed', req.signedCookies); // 签名

  res.cookie('amount', 999.999, {
    //domain: 'www.com',
    //path: '/',
    maxAge: 86400*1000,
    signed: true,
  });



  res.send('success');

});

