const url = require('url');

let str = "http://www.bai.com:8000/123/a?user=mike&pass=123";

console.log(url.parse(str, true));
