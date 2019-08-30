const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

http.createServer((req, res) => {
  let path = '', get = {}, post = {};

  if (req.method == 'GET') {
    let {pathname, query} = url.parse(req.url, true);

    path = pathname;
    get = query;

    complate();
  } else if(req.method == 'POST') {
    let arr = [];
    path = req.url;
    req.on('data', buffer => {
      arr.push(buffer);
    });
    req.on('end', () => {
      let buffer = Buffer.concat(arr);

      post = querystring.parse(buffer.toString());

      complate();
    });
  }

  function complate() {
    console.log(path, get, post);
  }

}).listen(8080);
