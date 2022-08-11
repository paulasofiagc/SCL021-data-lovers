import { filterCharacterHouse, showGender, sortAtoZ, sortZtoA } from "../src/data.js";
const testFilterHarryPotter = [
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
     {
    id: 367,
    name: "Newton Scamander",
    species: "Human",
    gender: "Male",
    house: "Hufflepuff",
  }, 
  {
    id: 17,
    name: "Avery I",
    species: "Human",
    gender: "Male",
    house: "Slytherin",
  },
  {
    id: 37,
    name: "Bem",
    species: "Human",
    gender: "Male",
    house: "Gryffindor",
  },
  {
    id: 610,
    name: "Angelina Johnson",
    birth: "24 – 30 October, 1977",
    species: "Human",
    gender: "Female",
    house: "Gryffindor",
  },
  {
    id: 621,
    name: "Leanne",
    species: "Human",
    gender: "Female",
    house: "Hufflepuff",
  },
  {
    id: 625,
    name: "Luna Lovegood",
    species: "Human",
    gender: "Female",
    house: "Ravenclaw",
  },
  {
    id: 630,
    name: "Mafalda",
    species: "Human",
    gender: "Female",
    house: "Slytherin",
  },
];
const gryffindortest = [
  {
    id: 37,
    name: "Bem",
    species: "Human",
    gender: "Male",
    house: "Gryffindor",
  },
  {
    id: 610,
    name: "Angelina Johnson",
    birth: "24 – 30 October, 1977",
    species: "Human",
    gender: "Female",
    house: "Gryffindor",
  },
];
const slytherintest = [
  {
    id: 17,
    name: "Avery I",
    species: "Human",
    gender: "Male",
    house: "Slytherin",
  },
  {
    id: 630,
    name: "Mafalda",
    species: "Human",
    gender: "Female",
    house: "Slytherin",
  },
];
const hufflepufftest = [
  {
    id: 367,
    name: "Newton Scamander",
    species: "Human",
    gender: "Male",
    house: "Hufflepuff",
  }, 
  {
    id: 621,
    name: "Leanne",
    species: "Human",
    gender: "Female",
    house: "Hufflepuff",
  },
];
const ravenclawtest = [
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 625,
    name: "Luna Lovegood",
    species: "Human",
    gender: "Female",
    house: "Ravenclaw",
  },
];

describe("filterCharacterHouse", () => {
  it("is a function", () => {
    expect(typeof filterCharacterHouse).toBe("function");
  });
  it("Return all Gryffindor characters`", () => {
    expect(
      filterCharacterHouse(testFilterHarryPotter, "Gryffindor")
    ).toStrictEqual(gryffindortest);
  });
  it("Return all Slytherin characters`", () => {
    expect(
      filterCharacterHouse(testFilterHarryPotter, "Slytherin")
    ).toStrictEqual(slytherintest);
  });
  it("Return all Hufflepuf characters`", () => {
    expect(
      filterCharacterHouse(testFilterHarryPotter, "Hufflepuff")
    ).toStrictEqual(hufflepufftest);
  });
  it("Return all Ravenclaw characters`", () => {
    expect(
      filterCharacterHouse(testFilterHarryPotter, "Ravenclaw")
    ).toStrictEqual(ravenclawtest);
  });
});

// variable tipo valor y variables tipo referencia
const femaleCharacter = [
  {
    id: 610,
    name: "Angelina Johnson",
    birth: "24 – 30 October, 1977",
    species: "Human",
    gender: "Female",
    house: "Gryffindor",
  },
  {
    id: 621,
    name: "Leanne",
    species: "Human",
    gender: "Female",
    house: "Hufflepuff",
  },
  {
    id: 625,
    name: "Luna Lovegood",
    species: "Human",
    gender: "Female",
    house: "Ravenclaw",
  },
  {
    id: 630,
    name: "Mafalda",
    species: "Human",
    gender: "Female",
    house: "Slytherin",
  },
];
const maleCharacter = [
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 367,
    name: "Newton Scamander",
    species: "Human",
    gender: "Male",
    house: "Hufflepuff",
  },
  {
    id: 17,
    name: "Avery I",
    species: "Human",
    gender: "Male",
    house: "Slytherin",
  },
  {
    id: 37,
    name: "Bem",
    species: "Human",
    gender: "Male",
    house: "Gryffindor",
  },

];
describe("showGender", () => {
  it("is a function", () => {
    expect(typeof showGender).toBe("function");
  });

  it("return female characters`", () => {
    expect(showGender(testFilterHarryPotter, "Female")).toStrictEqual(
      femaleCharacter
    );
  });
  it("return male characters`", () => {
    expect(showGender(testFilterHarryPotter, "Male")).toStrictEqual(
      maleCharacter
    );
  });
});
const orderedCharacters=[
  {
    id: 610,
    name: "Angelina Johnson",
    birth: "24 – 30 October, 1977",
    species: "Human",
    gender: "Female",
    house: "Gryffindor",
  },
  {
    id: 17,
    name: "Avery I",
    species: "Human",
    gender: "Male",
    house: "Slytherin",
  },
  {
    id: 37,
    name: "Bem",
    species: "Human",
    gender: "Male",
    house: "Gryffindor",
  },
  {
    id: 621,
    name: "Leanne",
    species: "Human",
    gender: "Female",
    house: "Hufflepuff",
  },
  {
    id: 625,
    name: "Luna Lovegood",
    species: "Human",
    gender: "Female",
    house: "Ravenclaw",
  },
  {
    id: 630,
    name: "Mafalda",
    species: "Human",
    gender: "Female",
    house: "Slytherin",
  },
  {
    id: 367,
    name: "Newton Scamander",
    species: "Human",
    gender: "Male",
    house: "Hufflepuff",
  }, 
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
]

describe("sortAtoZ,", () => {
  it("is a function", () => {
    expect(typeof sortAtoZ).toBe("function");
  });

    it('returns characters sorted from A to Z', () => {
      expect(sortAtoZ(testFilterHarryPotter)).toStrictEqual(orderedCharacters);
    });
});

const reverseCharacters=[
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 2,
    name: "Stewart Ackerley",
    species: "Human",
    gender: "Male",
    house: "Ravenclaw",
  },
  {
    id: 367,
    name: "Newton Scamander",
    species: "Human",
    gender: "Male",
    house: "Hufflepuff",
  }, 
  {
    id: 630,
    name: "Mafalda",
    species: "Human",
    gender: "Female",
    house: "Slytherin",
  },
  {
    id: 625,
    name: "Luna Lovegood",
    species: "Human",
    gender: "Female",
    house: "Ravenclaw",
  },
  {
    id: 621,
    name: "Leanne",
    species: "Human",
    gender: "Female",
    house: "Hufflepuff",
  },
  {
    id: 37,
    name: "Bem",
    species: "Human",
    gender: "Male",
    house: "Gryffindor",
  },
  {
    id: 17,
    name: "Avery I",
    species: "Human",
    gender: "Male",
    house: "Slytherin",
  },
  {
    id: 610,
    name: "Angelina Johnson",
    birth: "24 – 30 October, 1977",
    species: "Human",
    gender: "Female",
    house: "Gryffindor",
  },
];
describe("sortZtoA,", () => {
  it("is a function", () => {
    expect(typeof sortZtoA).toBe("function");
  });

   it('returns characters sorted from Z to A', () => {
     expect(sortZtoA(testFilterHarryPotter)).toStrictEqual(reverseCharacters);
    });
});
