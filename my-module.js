// Objective - Our script should mimic the output of ls | grep *.fileExt
const fs = require('fs');
const path = require('path');

// Function signature for mymodule.js 
module.exports = function(filePath, fileExt, callback) {
    const file = fs.readdir(filePath, function(err, data) {
        if (err) {
            return callback(err);
        }
        // DO work
        let filtered = data.filter(function(element) {
                return path.extname(element) === "." + fileExt
            })
            // Successful
        return callback(null, filtered);

    });
}