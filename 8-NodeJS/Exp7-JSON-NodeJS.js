const fs=require("fs");
const bioData={
    name:"sammy",
    age:24,
    skills:"NODE.JS"
};
console.log(bioData);
const jsonData=JSON.stringify(bioData);
const buf_data=jsonData.toString();
console.log(buf_data);
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("Process Completed");
    
})

fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);

})