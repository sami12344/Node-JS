const fs = require('fs')

fs.unlink('./delete.txt', (err)=>{
 if(err) console.log(err);
 console.log('File is deleted');
})