const cluster = require('node:cluster')
const os = require('os')
const http = require('http')

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`numCPUs: ${numCPUs}`)
    for (let i = 0; i < numCPUs; i++) {

        cluster.fork();
    }
    // Listen for the 'exit' event to respawn any crashed worker processes

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
     
        cluster.fork();
    });
} else {
const server = http.createServer((req,res)=>{
 if(req.url === '/'){
  res.writeHead(200, {"Content-Type":"text/plain"})
  res.end('Home Page')
 }

})
server.listen(3000, ()=> {
 console.log('Server is listening at 3000');
})
}