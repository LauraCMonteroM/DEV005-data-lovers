function ordenarAlfabeticamente(param) {
  const characters = [...param];
  const personajesOrdenados = characters.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  return personajesOrdenados;
}

function filtrar(dataHarryPotter, string) {
  const dataCharacters = dataHarryPotter.characters;
  const filterCharacters = dataCharacters.filter(
    (personaje) => personaje.specie === "Muggle"
  );
  //console.log(filterCharacters);
}

export { ordenarAlfabeticamente, filtrar };
