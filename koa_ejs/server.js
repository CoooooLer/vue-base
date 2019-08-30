const Koa = require('koa');
const Router = require('koa-router');
const ejs = require('koa-ejs');
const path = require('path');

let server = new Koa();
server.listen(8080);

ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: true
});

server.use(async ctx => {
  await ctx.render('1', {
    arr: [1, 2, 3]
  });
});
