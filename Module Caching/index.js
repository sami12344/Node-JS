const SuperHero = require('./super-hero')
console.log(SuperHero.getname());

superHero.setName('Superman')

console(superHero.getname())

const newSuperHero = require('./super-hero')
console.log(newSuperHero.getname());

// Outputs =>

// Batman
// Superman
// Superman



/* Node js loaded module with batman and then used superman. newSuperman uses superman but not batman. Because node js once loads a module if it is used again in a different variable, node js recognises it and use the last value of that but does not reload the module. And it is module caching */