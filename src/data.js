//FILTRAR
function filtrar(dataHarryPotter, type) {
  const characters = [...dataHarryPotter]
  const filtrado = characters.filter(function (character) {
    if (character.ancestry === type) {
      return true;
    } else if (character.gender === type) {
      return true;
    } else if (character.species === type) {
      return true;
    } else if ('character' === type) {
      return true
    } else {
      return false
    }
  });
  return filtrado;
};


//ORDENAR
function ordenarAlfabeticamente(param) {
  const characters = [...param];
  const personajesOrdenados = characters.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a > b) {
      return 1;
    }
    else if (a < b) {
      return -1;
    } else
      return 0;
  })

  return personajesOrdenados;
}

export {
  ordenarAlfabeticamente,
  filtrar
}

