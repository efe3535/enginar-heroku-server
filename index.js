const fs =require('fs')


const http = require('http');const server = http.createServer((req, res) => {

	if(req.method === 'POST') {
	let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
//        console.log(body);
		fs.writeFile('test.txt', content,err => {});
		res.end('ok');
    });
	}

});server.listen(3000);


