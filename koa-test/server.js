const Koa = require('koa');
const static = require('koa-static');

let server = new Koa();
server.listen(8081);

// server.use(async (ctx, next) => {
// 	ctx.set('Access-Control-Allow-Origin', '*');

// 	await next();
// });



server.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});


server.use(static('./static'));