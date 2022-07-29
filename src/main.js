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
    console.log(data)
}) 


const open = document.getElementById("openGriffyndor");
const modal_containerG = document.getElementById("modal_containerG");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modal_containerG.classList.add("show");
});

close.addEventListener("click", () => {
    modal_containerG.classList.remove("show");
});

const openS = document.getElementById("openSlytherin");
const modal_containerS = document.getElementById("modal_containerS");
const closeS = document.getElementById("closeS");

openS.addEventListener("click", () => {
    modal_containerS.classList.add("show");
})

closeS.addEventListener("click", () => {
    modal_containerS.classList.remove("show");
});

const openH = document.getElementById("openHufflepuff");
const modal_containerH = document.getElementById("modal_containerH");
const closeH = document.getElementById("closeH");

openH.addEventListener("click", () => {
    modal_containerH.classList.add("show");
})

closeH.addEventListener("click", () => {
    modal_containerH.classList.remove("show");
});

const openR = document.getElementById("openRavenclaw");
const modal_containerR = document.getElementById("modal_containerR");
const closeR = document.getElementById("closeR");

openR.addEventListener("click", () => {
    modal_containerR.classList.add("show");
})

closeR.addEventListener("click", () => {
    modal_containerR.classList.remove("show");
});

