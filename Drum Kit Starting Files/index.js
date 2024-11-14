
// var drmbtn= document.querySelectorAll(".drum").length
// for(var i=0;i< drmbtn;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// function handleClick(){
//     alert("I just Got Clicked !!!!");
// }
// }

// const fs = require('fs');

// fs.writeFile('msg.txt',"This i sthe first file created with the help of node",
//     (err)=>{
//         if(err) throw err;
//         console.log("The file is created")
//     }
// );
 const fs = require('fs')
 fs.readFile('msg.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
 });