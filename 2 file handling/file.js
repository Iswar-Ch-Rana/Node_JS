const { log } = require('console');
const fs = require('fs');


// Sync ( This return something )
// fs.writeFileSync('./text.txt','Hello world1',(err)=>{});
// const result = fs.readFileSync('./contact.txt','utf-8');
// console.log(result);


// Async ( This doesn't return any values )
// fs.writeFile('./text.txt','Hello world1',(err)=>{});

fs.readFile("./text.txt",'utf-8',(err , result)=>{
    if(err){
        console.log('Error' + err);
    }else{
        console.log(result);
    }
})

fs.appendFileSync("./text.txt",new Date().getDate().toLocaleString()); //Append data

// fs.copyFileSync('./text.txt','./copy.txt'); Copy the file to new 

// Delete a file
// fs.unlinkSync('./copy.txt');


