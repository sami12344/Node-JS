const { parentPort } = require('worker_threads')

let total = 0
for (let i; i < 100000000; i++) {
  total++
}
parentPort.postMessage(total)