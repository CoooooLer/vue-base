const express = require('express');
const cookieSession = require('cookie-session');

let server = express();
server.listen(8080);

server.use(cookieSession({
  keys: ['afasdf34sdfsdfsdf ', 'dsfewjljl0909sd0f0090', 'd8d8d8d8dd8fg9d9g9dg9d0g0dg9d0f8ds7f'],
  maxAge: 30*60*1000,
}));


server.get('/a', (req, res) => {
  if(!req.session['view']) {
    req.session['view'] = 1;
  } else {
    req.session['view']++;
  }

  req.session['amount'] = 102930.123;

  res.send(`第${req.session['view']}次登录,余额为${req.session['amount']}`);

});

