


const arguments = process.argv
let result = 0;

for (let i = 2; i < arguments.length; i++) {

    result += Number(arguments[i]);

};

console.log(result);
