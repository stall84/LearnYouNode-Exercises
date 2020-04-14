
const fs = require('fs');

var data = '';

var readerStream = fs.createReadStream('node.txt');
readerStream.setEncoding('UTF8');


// Stream events

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() { 
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('Reading of file complete');