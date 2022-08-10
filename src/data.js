
//CHARACTER FILTER BY HOUSE
export function filterCharacterHouse(characters, house) {
  let charactersHp = characters.filter((person) => person.house === house);
  return charactersHp;
}

//CHARACTER FILTER BY GENDER
export function showGender(character, gender) {
  let charactersByGender = character.filter(
    (person) => person.gender === gender
  );
  return charactersByGender;
}

//SORT CHARACTERS A TO Z
export function sortAtoZ(charactersName) {
  const sort = charactersName.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return sort;
}

//SORT CHARACTERS Z TO A
export function sortZtoA(charactersName) {
  let zToA = charactersName.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return zToA;
}
