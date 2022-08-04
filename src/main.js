// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/harrypotter/';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);
import data from "./data/harrypotter/data.js";
console.log(data); // me muestra toda la data como objeto



const divRoot = document.querySelector(".infoGriffyndor");
console.log(divRoot);

let hola = "Gryffindor";
const houses = data.Houses.filter((house) => house.name === hola);
console.log(houses);

const newDivTitle = document.createElement("div");
const newH1Title = document.createElement("h1");
const newTextTitle = document.createTextNode("Nombre: " + houses[0].name);
const newUl = document.createElement("ul");
    const newLi = document.createElement("p"); //Hijos de newUl     
        const head = document.createTextNode("Head: " + houses[0].head_of_house);
    const newLi2 = document.createElement("p");
        const colors = document.createTextNode("Colors: " + houses[0].colors);
    const newLi3 = document.createElement("p");
        const animal = document.createTextNode("Representative Animal: " + houses[0].representative_animal);
    const newLi4 = document.createElement("p");
        const founder = document.createTextNode("Founder: " + houses[0].founder);
    const newLi5 = document.createElement("p");
        const ghost = document.createTextNode("Ghoust: " + houses[0].ghost);
    const newLi6 = document.createElement("p");
        const element = document.createTextNode("Element: " + houses[0].element);

divRoot.appendChild(newDivTitle);
newDivTitle.appendChild(newH1Title);
newH1Title.appendChild(newTextTitle);
newDivTitle.appendChild(newUl);
newUl.appendChild(newLi);
newUl.appendChild(newLi2);
newUl.appendChild(newLi3);
newUl.appendChild(newLi4);
newUl.appendChild(newLi5);
newUl.appendChild(newLi6);
newLi.appendChild(head);
newLi2.appendChild(colors);
newLi3.appendChild(animal);
newLi4.appendChild(founder);
newLi5.appendChild(ghost);
newLi6.appendChild(element);




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


//characters

let personajes = document.getElementById("personajes").addEventListener("click", function(){
    showCharacters()
})

function showCharacters(characters) {
    const filter = document.querySelector(".filter");
    characters.forEach(function (person) {
      let charactersH = document.createElement("h3");
      let houseC = document.createElement("h5");
      filter.innerHTML = " ";
      filter.appendChild(charactersH);
      filter.appendChild(houseC);
  
      charactersH.innerText = person.name;
      houseC.innerText = person.house;
    });
  }
  showCharacters(data.characters.filter((person)=> person.house=== "Gryffindor"));

  let mostrarPers = document.getElementById("showcharacter")
  