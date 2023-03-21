import {
  filtrar,
  ordenarAlfabeticamente,
  calcular
} from '../src/data.js';


describe('Testea la función filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('returns `2`', () => {
    const character = [{ id: 1, species: "Human" }, { id: 2, species: "Human" }, { id: 3, species: "Peacock" }, { id: 4, species: "Peacock" }]
    expect(filtrar(character, "Human").length).toBe(2);
  });
});


describe('Testea la función ordenarAlfabeticamente', () => {
  it('is a function', () => {
    expect(typeof ordenarAlfabeticamente).toBe('function');
  });

  it('returns `[{ name: "Ana" }, { name: "Belen" }, { name: "Mary" }, { name: "Zeyla" }]`', () => {
    const characters = [{ name: "Zeyla" }, { name: "Mary" }, { name: "Belen" }, { name: "Ana" }]
    expect(ordenarAlfabeticamente(characters)).toEqual([{ name: "Ana" }, { name: "Belen" }, { name: "Mary" }, { name: "Zeyla" }]);
  });
});


describe('Testea la función calcular', () => {
  it('is a function', () => {
    expect(typeof calcular).toBe('function');
  });

  it('returns `1`', () => {
    const element = [{ id: 1, gender: "Famele" }, { id: 2, gender: "Male" }, { id: 3, gender: "Male" }] 
    expect(calcular(element,"Famele")).toBe(1);
  });
});
