// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/harrypotter/';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

import data from "./data/harrypotter/data.js";
//console.log(data); 

import {filterCharacterHouse,
  showGender,
  sortAtoZ} from './data.js';

const divRoot = document.querySelector(".info");
// console.log(divRoot);

// ESTRUCTURA HTML DE VENTANA MODAL
function showModal(house) {
  const newDivTitle = document.createElement("div");
  const newH1Title = document.createElement("h1");
/*   const newImage = document.createElement("img");
  newImage.setAttribute(house.image); */
  const newTextTitle = document.createTextNode("Name: " + house.name);
  const newButton = document.createElement("button");
  newButton.innerHTML = "X";
  newButton.id = "close";
  const newUl = document.createElement("ul");
  const newLi = document.createElement("p"); //Hijos de newUl
  const head = document.createTextNode("Head: " + house.head_of_house);
  const newLi2 = document.createElement("p");
  const colors = document.createTextNode("Colors: " + house.colors);
  const newLi3 = document.createElement("p");
  const animal = document.createTextNode(
    "Representative Animal: " + house.representative_animal
  );
  const newLi4 = document.createElement("p");
  const founder = document.createTextNode("Founder: " + house.founder);
  const newLi5 = document.createElement("p");
  const ghost = document.createTextNode("Ghoust: " + house.ghost);
  const newLi6 = document.createElement("p");
  const element = document.createTextNode("Element: " + house.element);
  divRoot.innerHTML = "";
  divRoot.appendChild(newDivTitle);
  newDivTitle.appendChild(newButton);
/*   newDivTitle.appendChild(newImage);
  newImage.appendChild(houseimage); */
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
}

// BOTONES DE CASAS 
const open = document.getElementById("openGriffyndor");
const openS = document.getElementById("openSlytherin");
const openH = document.getElementById("openHufflepuff");
const openR = document.getElementById("openRavenclaw");

open.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Gryffindor"
  );
  console.log(selectedHouse[0]);
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

openS.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Slytherin"
  );
  console.log(selectedHouse[0]);
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

openH.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Hufflepuff"
  );
  console.log(selectedHouse[0]);
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

openR.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Ravenclaw"
  );
  console.log(selectedHouse[0]);
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

let characters = data.characters;
function showTemplate(characters){
  document.getElementById('filterContent').innerHTML = characters.map (c =>
  ` <div class="box">
      <img class="img-houses ${c.house}"/>
      <h5>Name: ${c.name}</h5>
      <ul>
      <li>Gender: ${c.gender}</li>
      <li>Specie: ${c.species}</li>
      <li>Birthd: ${c.birthd}</li>
      <li>Books in which it appears: ${c.books_featured_in}</li>
      <li>House: ${c.house}</li>
      </ul>
  </div>`
).join('')
}


//character house

let submitGryffindor = document.getElementById("submitGryffindor");
submitGryffindor.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Gryffindor")
  showTemplate(hP)
}); 

let submitSlytherin = document.getElementById("submitSlytherin");
submitSlytherin.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Slytherin")
  showTemplate(hP)
});

let submitHufflepuff = document.getElementById("submitHufflepuff");
submitHufflepuff.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Hufflepuff")
  showTemplate(hP)
});

let submitRavenclaw = document.getElementById("submitRavenclaw");
submitRavenclaw.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Ravenclaw")
  showTemplate(hP)
});


// character gender

let gender = document.getElementById("selectgenders");
gender.addEventListener("change", showGender);

// SORT

document.getElementById("selectSort").addEventListener("change", () => {
  const selectSort = document.getElementById("selectSort");
  const selectedValue = selectSort.value;
  if (selectedValue === "A-Z"){
  const resultSort = sortAtoZ() 
  console.log(resultSort)
  }
})
