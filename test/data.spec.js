import { filtrar, ordenarAlfabeticamente, calcular } from "../src/data.js";

describe("Testea la función filtrar", () => {
  it("is a function", () => {
    expect(typeof filtrar).toBe("function");
  });

  it("returns `2`", () => {
    const character = [
      { id: 1, ancestry: "Pure-blood or Half-blood" },
      { id: 2, ancestry: "Muggle" },
      { id: 3, ancestry: null },
      { id: 4, ancestry: "Muggle" },
    ];
    expect(filtrar(character, "Muggle").length).toBe(2);
  });

  it("returns `3`", () => {
    const character = [
      { id: 1, house: "Gryffindor" },
      { id: 2, house: "Slytherin" },
      { id: 3, house: "Gryffindor" },
      { id: 4, house: "Gryffindor" },
    ];
    expect(filtrar(character, "Gryffindor").length).toBe(3);
  });

  it("returns `2`", () => {
    const character = [
      { id: 1, species: "Human" },
      { id: 2, species: "Human" },
      { id: 3, species: "Peacock" },
      { id: 4, species: "Peacock" },
    ];
    expect(filtrar(character, "Human").length).toBe(2);
  });

  it('returns `[{ id: 1, name:"Euan Abercrombie"}, { id: 2, name: "Stewart Ackerley" }]`', () => {
    const character = [
      { id: 1, name: "Euan Abercrombie" },
      { id: 2, name: "Stewart Ackerley" },
    ];
    expect(filtrar(character, "character")).toEqual([
      { id: 1, name: "Euan Abercrombie" },
      { id: 2, name: "Stewart Ackerley" },
    ]);
  });

});

describe("Testea la función ordenarAlfabeticamente", () => {
  it("is a function", () => {
    expect(typeof ordenarAlfabeticamente).toBe("function");
  });

  it('returns `[{ name: "Arthur Weasley" }, { name: "Cassius Warrington" }, { name: "Cornelius Agrippa" }, { name: "Xenophilius Lovegood" }]`', () => {
    const characters = [
      { name: "Cornelius Agrippa" },
      { name: "Xenophilius Lovegood" },
      { name: "Cassius Warrington" },
      { name: "Arthur Weasley" },
    ];
    expect(ordenarAlfabeticamente(characters)).toEqual([
      { name: "Arthur Weasley" },
      { name: "Cassius Warrington" },
      { name: "Cornelius Agrippa" },
      { name: "Xenophilius Lovegood" },
    ]);
  });
});

describe("Testea la función calcular", () => {
  it("is a function", () => {
    expect(typeof calcular).toBe("function");
  });

  it("returns `1`", () => {
    const element = [
      { id: 1, gender: "Female" },
      { id: 2, gender: "Male" },
      { id: 3, gender: "Male" },
    ];
    expect(calcular(element, "Female")).toBe(1);
  });
});
