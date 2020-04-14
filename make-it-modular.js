const mymodule = require('./my-module');
const filePath = process.argv[2];
const fileExt = process.argv[3];


mymodule(filePath, fileExt, function(err, data) {
    if (err) {
        console.log(`An error occurred: ${err}`);
        return;
    }

    data.forEach(function(result) {
        console.log(result);
    })

})