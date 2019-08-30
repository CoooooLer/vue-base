const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {
  fs.readFile(`www${req.url}`, (err, buffer) => { // http://localhost:8080/1.html
    console.log(req.url);

    if(err){
      res.writeHeader(404);
      res.write('Not Found');
      res.end();
    } else {
      res.write(buffer);
      res.end();
    }
  });
});


server.listen(8080);
