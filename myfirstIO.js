const fs = require('fs');

const fileName = process.argv[2];


let file = fs.readFileSync(fileName);

let array = file.toString().split('\n');
console.log(array.length - 1);



