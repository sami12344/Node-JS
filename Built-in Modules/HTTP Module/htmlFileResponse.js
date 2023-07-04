const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
 const html = fs.readFileSync('./index.html')

 res.writeHead(200, {'Content-Type':'text/html'})
 // res.end(html)
 fs.createReadStream(__dirname +'/index.html').pipe(res)
})
server.listen(3000,()=>{
 console.log('Server is running at 3000');
})