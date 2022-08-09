import data from "./data/harrypotter/data.js";
//FILTRO PERSONAJES POR CASA
export function filterCharacterHouse (characters, house){ 
    characters.innerHTML = " ";
    let charactersHp = characters.filter(person => person.house === house) 
    return(charactersHp)
}


let hogwart = data.characters;

export function showGender (event){
    let genders = hogwart.filter( person => person.gender === "Male" ? person.gender === this.value : person.gender !== "Male")
    document.getElementById('parrafo').innerHTML = genders.map (c =>
        `<div class="box">
            <h5>Name: ${c.name}</h5>
            <ul>
            <li>Gender: ${c.gender}</li>
            <li>Specie: ${c.species}</li>
            <li>Birthd: ${c.birthd}</li>
            <li>Books in which it appears: ${c.books_featured_in}</li>

        </div>`
    ).join('')
}