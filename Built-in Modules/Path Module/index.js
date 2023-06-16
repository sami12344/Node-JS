const path = require('node:path')

// console.log(__filename); // => c:\Users\sadiq\OneDrive\Desktop\Sami\Node JS\built_in_module\index.js
// console.log(__dirname); // => c:\Users\sadiq\OneDrive\Desktop\Sami\Node JS\Built-in Modules

//==========================path.basename=====================//
// console.log(path.basename(__filename)); // => index.js
// console.log(path.basename(__dirname)); // => built_in_module


//==========================path.extname=====================//
// console.log(path.extname(__filename)); // => .js
// console.log(path.extname(__dirname)); // => 

//==========================path.parse=====================//
// console.log(path.parse(__filename)) 
/* => {
  root: 'c:\\',
  dir: 'c:\\Users\\sadiq\\OneDrive\\Desktop\\Sami\\Node JS\\Built-in Modules',
  base: 'index.js',
  ext: '.js',
  name: 'index'
} */

//==========================path.format=====================//
// console.log(path.format(path.parse(__filename))); // => c:\Users\sadiq\OneDrive\Desktop\Sami\Node JS\Built-in Modules\index.js

//==========================path.isAbsolute=====================//
// console.log(path.isAbsolute(__filename)); // => true
// console.log(path.isAbsolute('../Importing JSON and Watch mode/data.json')); // => false

//==========================path.join=====================//
// console.log(path.join('folder1', 'folder2', 'index.html')); //=> folder1\folder2\index.html

// console.log(path.join('/folder1','folder2','index.html')); //=> \folder1\folder2\index.html

// console.log(path.join('/folder1','//folder2', 'index.html')); // => \folder1\folder2\index.html

// console.log(path.join('/folder1', '//folder2', '../index.html')) // => \folder1\index.html

// console.log(path.join(__dirname, 'index.html')) // => c:\Users\sadiq\OneDrive\Desktop\Sami\Node JS\Built-in Modules\index.html

//==========================path.resolve=====================//

console.log(path.resolve('folder1', 'folder2', 'index.html')) //=> c:\Users\sadiq\OneDrive\Desktop\Sami\Node JS\Built-in Modules\folder1\folder2\index.html
console.log(path.resolve('/folder1', 'folder2', 'index.html')) // => c:\folder1\folder2\index.html
console.log(path.resolve('/folder1', '//folder2', 'index.html')) // => c:\folder2\index.html
console.log(path.resolve('/folder1', '//folder2', '../index.html')) // => c:\index.html
console.log(path.resolve(__dirname, 'index.html')) // => c:\Users\sadiq\OneDrive\Desktop\Sami\Node JS\Built-in Modules\index.html  