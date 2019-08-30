const Koa = require('koa');
const Router = require('koa-router');
const session = require('koa-session');

let server = new Koa();
server.listen(8080);

// 签名
server.keys = [
  'asdfdsafsdf',
    'asdfsdfdsfdsf'
];

server.use(session({
  maxAge: 30*60*1000,   // 有效期
  renew: true           // 自动续期
}, server));

server.use(async ctx => {
  if(!ctx.session['login']) {
    ctx.session['login'] = 0;
  }

  ctx.session['login']++;

  ctx.body = `第${ctx.session['login']}次登陆`
});

