
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const fileEXT = process.argv[3];

var file = fs.readdir(filePath, function(err,data) {
    if (err) {
        console.error(err);
        return;
    }
    
    let filtered = data.filter(function(element) {
        return path.extname(element) === "." + fileEXT;
    })

    filtered.forEach((elem) => {
        console.log(elem);
    })
});


