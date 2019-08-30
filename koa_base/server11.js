const Koa = require('koa');
const Router = require('koa-router');


let server = new Koa();
server.listen(8080);

server.context.db = require('./libs/database');

// 全局错误处理
server.use(async (ctx, next) => {
  try{
    await next();
  } catch(e) {
    ctx.body = e;
  }
});

// server.use(async ctx => {
//   let data = await ctx.db.query('select * from user0');
//
//   ctx.body = data;
// });

let router = new Router();
// 全局路由错误处理
router.all('*', async (ctx, next) => {
  try{
    await next();
  }catch(e){
    ctx.body = 'router:'+e;
  }
});

router.get('/a', async ctx => {
  ctx.body = sd.as;
});

server.use(router.routes());

