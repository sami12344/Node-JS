const fs = require('fs')

fs.writeFile('./greetAsyc.txt','hello Sami', (err)=>{
 if(err){
  console.log(err);
 }else{
  console.log("File is written");
 }
})