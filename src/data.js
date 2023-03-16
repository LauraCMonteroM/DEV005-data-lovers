function ordenarAlfabeticamente(param) {
  const characters = [...param]
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
  })

  return personajesOrdenados;
}

export {
  ordenarAlfabeticamente,
}