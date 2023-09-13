const { log } = require('console');
const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);



// Sync Blocking

console.log(1);
const result = fs.readFileSync('./text.txt','utf-8');
console.log(result);
console.log(2);


// Async Non - Blocking..

/******/
console.log(1);

fs.readFile('./text.txt','utf-8',(err,result)=>{
    console.log(result);
});

console.log(2);

