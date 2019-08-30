const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

let router = new Router();

router.get('/login', async ctx => {
  ctx.assert(ctx.query.username, 400, 'username is required');
  ctx.assert(ctx.query.password, 400, 'password is required');

  ctx.body = 'success';
});

server.use(router.routes());
