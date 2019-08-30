module.exports = {
  username(username) {
    if(!username) {
      return '用户名不能为空';
    } else if(username.length > 10) {
      return '用户名不能超过10位';
    } else if(!/^\w{3,32}$/.test(username)) {
      return '用户名格式错误'
    } else {
      return null;
    }
  },
  password(password) {
    if(!password) {
      return '密码不能为空';
    } else if(password.length > 10) {
      return '密码不能超过10位';
    } else {
      return null;
    }
  }
};
