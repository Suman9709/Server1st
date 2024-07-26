let http = require('http');
let fs = require('fs'); 
const { response } = require('express');
const path=require('path');
const { log } = require('console');

// fs.readFile(response.html, 'utf8', (err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

// http. createServer(function(req,res)=>{

// })

// fs.writeFile("sample.txt", "hello suman",(err)=>{
// if(err){
//     console.log(err);
//     return
// }
// console.log("data write successful");
// });

// fs.appendFile("sample.txt", "hello suman", (err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("data appned successful");
// });

// fs.unlink("sample.txt",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("file deleted successfully");
// });

fs.rmdirSync("exampleDir");
fs.mkdirSync("exampleDir");
console.log("directory created successfully");
console.log(__dirname);
const folderPath = path.join(__dirname,'node_modules')
// const folderPath= path.join(__dirname,'node_modules')
console.log(folderPath);
const file = fs.readdirSync("folderPath")
console.log(file);
// fs.rmdirSync("exampleDir");
// console.log("directrory delete successfully");

// Files

// C - fs.writeFile
// R - fs.readFile
// U - fs.appendFile
// D - fs.unlink

// FOLDER / DIR
// C - fs.mkdir
// R - fs.readdir
// D - fs.rmdir