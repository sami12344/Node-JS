const fs = require('fs')



const readableStream = fs.createReadStream('./file.txt',{
 encoding:"utf-8",
 highWaterMark:2

})

const writeableStream = fs.createReadStream('./file2.txt')


readableStream.pipe(writeableStream)