// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/harrypotter/';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);
let allCharacter;

fetch("https://raw.githubusercontent.com/Seabird15/SCL021-data-lovers/main/src/data/harrypotter/harry.json")
.then(function(response) {
return response.json();
}) //traer data
.then(function(data) {
allCharacter= data.harry;
console.log(allCharacter)
})
