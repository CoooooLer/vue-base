const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer(function (req, res){
  console.log(req.method);

  let arr = [];
  req.on('data', buffer => {
    arr.push(buffer);
  });
  req.on('end', () => {
    let buffer = Buffer.concat(arr);
    let post = querystring.parse(buffer.toString());

    console.log(post);
    // console.log(buffer.toString());
  });
});

server.listen(8080);
