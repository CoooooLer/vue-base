const fs = require('fs'); // fs系统函数

/*fs.writeFile('./test.txt', 'afsdf dsfwerfwerf wef ds13e123e ', err => {
	if (err) {
		console.log('fail',err);
	} else {
		console.log('success');
	}
});*/

fs.readFile('./test.txt', (err, data) => {
	if(err) {
		console.log('fail',err);
	} else {
		console.log('success', data.toString());
	}
});