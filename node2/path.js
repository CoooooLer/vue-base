const path = require('path');

let str = "/root/a/b/c/test.txt";

console.log(path.dirname(str));
console.log(path.extname(str));
console.log(path.basename(str));

console.log(path.resolve('/root/1/32', '../a', 'dist'));

console.log(path.resolve(__dirname, 'dist'));
