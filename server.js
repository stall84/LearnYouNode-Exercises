const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello my baby-wabies! Hows your night tonight?\n');

});

server.listen(port, hostname, () => {
    console.log(`Your node-js server is running at http://${hostname}:${port}/`);
})