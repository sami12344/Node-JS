const fs = require('fs')
fs.writeFile('./greet.txt', 'Hello Sami', {flag:'a'}, (err)=>{
 if(err){
  console.log(err);

 }
 else{
  console.log("file is appended");
 }
})