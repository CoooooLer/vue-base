const Router = require('koa-router');
const fs = require('await-fs');
const path = require('path');
const common = require('../../libs/common');

let router = new Router();

router.get('/login', async ctx => {
  await ctx.render('admin/login', {
    HTTP_ROOT: ctx.config.HTTP_ROOT,
    msg: ctx.query.msg
  });
});

router.post('/login', async ctx => {
  const {HTTP_ROOT} = ctx.config;

  let {username, password} = ctx.request.fields;
  let admins = JSON.parse((await fs.readFile(
    path.resolve(__dirname, '../../admins.json')
  )).toString());

  function findAdmin(username){
    let a = null;
    admins.forEach(admin => {
      if(admin.username == username) {
        a = admin;
      }
    })
    return a;
  }

  let admin = findAdmin(username);
  if(!admin) {
    ctx.redirect(`${HTTP_ROOT}/admin/login?msg=${encodeURIComponent('用户不存在')}`);
  } else if(admin.password != common.md5(password + ctx.config.admin_suffix)) {
    ctx.redirect(`${HTTP_ROOT}/admin/login?msg=${encodeURIComponent('密码错误')}`);
  } else {
    ctx.session['admin'] = username;
    ctx.redirect(`${HTTP_ROOT}/admin/`);
  }
});




module.exports = router.routes();
