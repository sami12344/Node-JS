const http = require('http')

const server = http.createServer((req,res)=>{
 const superHero = {
  firstName:"Bruce",
  lastName:"Wayne"
 }
 res.writeHead(200, {"Content-type":"application/json"})
 res.end(JSON.stringify(superHero))

 
})

server.listen(3000, ()=>{
 console.log(
  'Server is listening at 3000'
 );
})