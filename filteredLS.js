
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const fileEXT = process.argv[3];

const file = fs.readdir(filePath, function(err,data) {
    if (err) {
        console.error(err);
        return;
    }

    let filtered = data.filter(function(element) {
        return path.extname(element) === "." + fileEXT;
    })

    console.log(filtered);
});


// Objective - Our script should mimic the output of ls | grep *.fileExt
// const fs = require('fs');
// const path = require('path');\
// const filePath = process.argv[2];
// const fileExt = process.argv[3];

// const file = fs.readdir(filePath, function(err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     // DO work
//     let filtered = data.filter(function(element) {
//         return path.extname(element) === "." + fileExt
//     })

//     console.log(filtered);
// });