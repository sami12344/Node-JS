const fs = require('node:fs/promises')


const readFile = async()=>{
 try {
  const data = await fs.readFile('./file.txt', 'utf-8')
  console.log(data);
 } catch (error) {
  console.log(error);
 }
}
readFile()