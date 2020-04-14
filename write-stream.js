const fs = require('fs');

// make a data variable to hold the data being written to the stream

var data = 'This is an example of a specific string input. We are trying to write this data to a stream. Let\'s see what happens';

// this will create a writable stream creating the output file in parentheses 

var writeStream = fs.createWriteStream('NodeWrite.txt');

// Begin the actual start of the stream writing & specify UTF-8 encoding

writeStream.write(data,'UTF8');

// close out the stream / end the file .. this is required, otherwise the program just keeps the stream 'open'

writeStream.end();

// handles events here.. this is the finish handle that takes a callback

writeStream.on('finish', () => {
    console.log('Write completed successfully')
});

// handle any errors with callback

writeStream.on('error', (err) => {
    console.log(err.stack);
});

console.log("You've successfully completed writing the stream. Congrats!");


