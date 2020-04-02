const fs = require('fs');

const fileName = process.argv[2];

const file = fs.readFile(fileName, 'utf8', function(err,data) {

    if (err) {
        console.log(err);
        return;
    }
    
    console.log(data.split('\n').length - 1)

});
