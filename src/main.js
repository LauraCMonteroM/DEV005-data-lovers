import dataHarryPotter from "./data/harrypotter/harry.js";
import { ordenarAlfabeticamente } from "./data.js";

const dataCharacters = dataHarryPotter.characters;
const dataBooks = dataHarryPotter.books;
const container = document.getElementById("temp-characters");
const contenidoPrincipal = document.getElementById("sectionMostrando");
const imagenPrincipal = document.getElementById("imgPrincipal");

//TEMPLATE-CARDS
function template(dataCharacters) {
  let fragment = "";
  dataCharacters.forEach((element) => {
    fragment += `
<div class="cards">
<img src="./img/Ppersonaje.png" class="imgCharacter">
<p class="objetname">${element.name}</p>
</div>
`;
  });
  container.innerHTML = fragment;
}
template(dataCharacters);

//SORT BY A-Z & Z-A
document.querySelector(".btn-ordenar").addEventListener("change", function (x) {
  if (x.target.value === "A-Z") {
    const resultAZ = ordenarAlfabeticamente(dataCharacters);
    container.innerHTML = "";
    template(resultAZ);
  } else {
    container.innerHTML = "";
    const resultZA = ordenarAlfabeticamente(dataCharacters).reverse();
    template(resultZA);
  }
});


//FILTER BY SPECIE & GENRE
document.querySelector(".btn-filtrar").addEventListener("change", function (y) {
  if (y.target.value === "Muggle") {
    const especieMuggle = filtrar(dataCharacters);
    container.innerHTML = "";
    template(especieMuggle);
  } else if (y.target.value === "Human") {
    const especieHuman = filtrar(dataCharacters);
    container.innerHTML = "";
    template(especieHuman);
  }
});
