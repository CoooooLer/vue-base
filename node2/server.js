const http = require('http');
const util = require('util');

http.createServer((req, res) => {
  let arr = [];

  console.log(req.headers);


  req.on('data', buffer => {
    arr.push(buffer);
  });

  req.on('end', () => {
    let buffer = Buffer.concat(arr);

    console.log(buffer.toString());
  });

}).listen(8080);
