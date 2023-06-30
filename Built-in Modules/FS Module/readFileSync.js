const fs = require('node:fs')
const fileContentsWithoutEncoding = fs.readFileSync('./file.txt')
const fileContents = fs.readFileSync('./file.txt', "utf-8")

console.log(fileContentsWithoutEncoding);
// => <Buffer 48 65 6c 6c 6f 20 53 61 6d 69 20 49 73 6c 61 6d>

console.log(fileContents);
// => Hello Sami Islam

