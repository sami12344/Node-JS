const fs = require('node:fs')

fs.appendFile('mynewfile1.txt', 'Hello Content!!', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Saved')
  }
})