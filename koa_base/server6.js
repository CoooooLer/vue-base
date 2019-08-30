const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

let router = new Router();

router.get('/login', async ctx => {
  ctx.redirect('https://www.baidu.com');

});

server.use(router.routes());
