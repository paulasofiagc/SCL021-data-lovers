import data from "./data/harrypotter/data.js";

import {
  filterCharacterHouse,
  showGender,
  sortAtoZ,
  sortZtoA,
} from "./data.js";
//nav responsive

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const divRoot = document.querySelector(".info");

// HTML STRUCTURE OF MODAL WINDOW
function showModal(house) {
  const newDivTitle = document.createElement("div");
  const newH1Title = document.createElement("h1");
  /*   const newImage = document.createElement("img");
  newImage.setAttribute(house.image); */
  const newTextTitle = document.createTextNode(house.name);
  const newButton = document.createElement("button");
  newButton.innerHTML = "X";
  newButton.id = "close";
  const newUl = document.createElement("ul");
  const newLi = document.createElement("p"); 
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

// SHOW MODAL WINDOW ACCORDING TO SELECTED BUTTON
const openModalGryffindor = document.getElementById("openModalGryffindor");
const openModalSlytherin = document.getElementById("openModalSlytherin");
const openModalHufflepuff = document.getElementById("openModalHufflepuff");
const openModalRavenclaw = document.getElementById("openModalRavenclaw");

openModalGryffindor.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Gryffindor"
  );
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

openModalSlytherin.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Slytherin"
  );
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

openModalHufflepuff.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Hufflepuff"
  );
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

openModalRavenclaw.addEventListener("click", () => {
  divRoot.classList.add("show");
  const selectedHouse = data.Houses.filter(
    (house) => house.name === "Ravenclaw"
  );
  showModal(selectedHouse[0]);
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    divRoot.classList.remove("show");
  });
});

// HTML CHARACTERS
let characters = data.characters;
function showTemplate(characters) {
  document.getElementById("filterContent").innerHTML = characters
    .map(
      (c) =>
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
    )
    .join("");
}

// SHOW ALL CHARACTERS
let submitAll = document.getElementById("submitAll")
submitAll.addEventListener("click", () => {
  showTemplate(characters)
});

//FILTER AND SHOW CHARACTERS ACCORDGIN TO SELECTED HOUSE



let submitGryffindor = document.getElementById("submitGryffindor");
submitGryffindor.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Gryffindor");
  showTemplate(hP);
});
/*
function fn1(e){
filtrado 
show(filtrcdo)
}

const fn2 = ()=> console.log("adios")

submitGryffindor.addEventListener("click", fn1);
*/

let submitSlytherin = document.getElementById("submitSlytherin");
submitSlytherin.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Slytherin");
  showTemplate(hP);
});
let submitHufflepuff = document.getElementById("submitHufflepuff");
submitHufflepuff.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Hufflepuff");
  showTemplate(hP);
});
let submitRavenclaw = document.getElementById("submitRavenclaw");
submitRavenclaw.addEventListener("click", () => {
  let hP = filterCharacterHouse(characters, "Ravenclaw");
  showTemplate(hP);
});
// FILTER AND SHOW CHARACTERS ACCORDGIN TO SELECTED GENDER

let gender = document.getElementById("selectgenders");
gender.addEventListener("change", (event) => {
  const selectedGender = event.target.value;
  let result = showGender(characters, selectedGender);
  showTemplate(result);
});

// SORT AND SHOW CHARACTERS ACCORDGIN TO SELECTED SORT
document.getElementById("selectSort").addEventListener("change", () => {
  const selectSort = document.getElementById("selectSort");
  const selectedValue = selectSort.value;

  if (selectedValue === "A-Z") {
    const result = sortAtoZ(characters);
    showTemplate(result);
  } else {
    const result2 = sortZtoA(characters);
    showTemplate(result2);
  }
});
