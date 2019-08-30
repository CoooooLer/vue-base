let Koa = require('koa');
let Router = require('koa-router');

let server = new Koa();
server.listen(8080);

// 签名
server.keys = [
    '123123123123123123213',
    'sdfsdfsdfsdfsdfsdfewrf',
];

server.use(async ctx => {
  // ctx.cookies.set('user', 'mike', { signed: true });

  console.log(ctx.cookies.get('user', { singed: true }));
});
