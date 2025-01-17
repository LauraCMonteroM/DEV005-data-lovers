//FILTRAR
function filtrar(dataHarryPotter, type) {
  const characters = [...dataHarryPotter]
  const filtrado = characters.filter(function (character) {
    if (character.ancestry === type) {
      return true;
    } else if (character.species === type) {
      return true;
    } else if (character.house === type) {
      return true;
    } else if ('character' === type) {
      return true
    } else {
      return false
    }
  });
  return filtrado;
}


//ORDENAR
function ordenarAlfabeticamente(param) {
  const characters = [...param];
  const personajesOrdenados = characters.sort((a, b) => {
    const A = a.name.toLowerCase();
    const B = b.name.toLowerCase();
    if (A > B) {
      return 1;
    } else {
      return -1;
    }
  })
  return personajesOrdenados;
}

//CALCULAR

//CALCULAR
function calcular(dataHarryPotter, gender) {
  const characters = [...dataHarryPotter];
  const cantidadFemale = characters.reduce(function (contador, personaje) {
    if (personaje.gender === gender) {
      return contador + 1;
    } else {
      return contador
    }
  }, 0);
  return cantidadFemale;
}



export {
  ordenarAlfabeticamente,
  filtrar,
  calcular
}

