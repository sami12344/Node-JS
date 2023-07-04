const {Worker} = require('node:worker_threads')
const http = require('http')

const server = http.createServer((req,res)=>{


 if(req.url==='/'){
  res.writeHead(200, {"Content-Type":"text/plain"})
  res.end('Hello World')
 }
 if(req.url==='/heavy'){
  const worker = new Worker('./worker.js')
 worker.on('message', (data)=>{
  res.writeHead(200,{"Content-Type":"text/plain"})
  res.end(data)
 })
 }
})


