const fs = require('fs')

fs.rename('./rename.txt','renamed.txt',(err)=>{
 if (err) console.log(err);
 console.log('File is renamed');
})