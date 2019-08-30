const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static');
const path = require('path');
const body = require('koa-better-body');
const session = require('koa-session');
const fs = require('fs');
const ejs = require('koa-ejs');
const config = require('./config');

let server = new Koa();
server.listen(config.HTTP_PORT);
console.log(`server running at ${config.HTTP_PORT}`);

let router = new Router();

// 中间件
server.use(body({
  uploadDir: path.resolve(__dirname, './static/upload'),
}));



// 错误统一处理
// router.use(async (ctx, next) => {
//   try{
//     await next();
//   }catch(e) {
//     // ctx.state = 500;
//     // ctx.body = 'Internal Server Error'
//     ctx.throw(500, 'server Error 000');
//   }
// });

server.keys = fs.readFileSync('.keys').toString().split('\n');
server.use(session({
  maxAge: 7*86400*1000,
  renew: true
}, server));

// 数据库
server.context.db = require('./libs/database');
server.context.config = config;

// 渲染
ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

// 路由和static
router.use('/admin', require('./routers/admin'));
router.use('/', require('./routers/www'));
router.use('/api', require('./routers/api'));

static(router, {
  html: 365,
});

server.use(router.routes());
