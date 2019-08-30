const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

server.context.db = 'mysql.createPool()'; // 全局变量db

let router = new Router();

router.get('/login', async ctx => {
  // ctx.body = ctx.db;
  if(!ctx.query.username || !ctx.query.password) {
    ctx.throw(400, 'username and password is required');
  } else {
    ctx.body = 'success';
  }
});

server.use(router.routes());


