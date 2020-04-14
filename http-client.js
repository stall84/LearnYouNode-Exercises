// This is a simple http-client app so it will simply take in a url/endpoint argument, run a GET request, and retrn the webpage in newlines of text only


const http = require('http');


// write logic to early-return if url/endpoint is not entered as argument
if (process.argv.length < 3) {
    console.log('Please specifiy a URL/endpoint');
    return;
}

// assign the input url/endpoint to variable
const endpoint = process.argv[2];

http.get(endpoint, (response) => {
    response.setEncoding('UTF8');

    response.on('error', (err) => {
        console.log(`There was the following error: ${err}`)
    });

    response.on('data', (data) => {
        console.log(data);
    });
});