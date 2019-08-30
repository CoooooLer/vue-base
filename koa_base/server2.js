const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

let router = new Router();

router.get('/news/:id/', async ctx => {
  let {id} = ctx.params;

  ctx.body = "新闻" + id;
});

router.get('/news/:id/:id2', async ctx => {
  let {id, id2} = ctx.params;

  ctx.body = `新闻+${id}+${id2}`
});



server.use(router.routes());
