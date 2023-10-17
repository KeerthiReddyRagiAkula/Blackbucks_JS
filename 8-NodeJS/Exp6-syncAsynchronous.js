const fs=require("fs");
//fs.writeFileSync("readme.txt","This is readme file");
//Synchronous first data is excuted through it is heavy weight
/*const data=fs.readFileSync("readme.txt","utf-8");
console.log(data);
console.log("This is Synchro");*/
//Asynchronous first synchro is excuted and then data
fs.readFile("readme.txt","utf-8",(err,data)=>{
console.log(data);})
console.log("This is Synchro");
