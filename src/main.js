import dataHarryPotter from "./data/harrypotter/harry.js";
import {
  ordenarAlfabeticamente,
  filtrar
} from "./data.js";


const dataCharacters = dataHarryPotter.characters;
const dataBooks = dataHarryPotter.books;
const container = document.getElementById("temp-characters");
const contenidoPrincipal = document.getElementById("sectionMostrando");
const imagenPrincipal = document.getElementById("imgPrincipal");

//CARDS
function template(card) {
  let fragment = '';
  card.forEach(element => {
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

//ORDENA  
document.querySelector(".btn-ordenar").addEventListener("change", function (x) {
  if (x.target.value === "A-Z") {
    const resultAZ = ordenarAlfabeticamente(dataCharacters);
    container.innerHTML = "";
    template(resultAZ);
  } else if (x.target.value === "Z-A") {
    container.innerHTML = "";
    const resultZA = ordenarAlfabeticamente(dataCharacters).reverse();
    template(resultZA);
  } else if (x.target.value === "ordenar") {
    container.innerHTML = "";
    template(dataCharacters);
  }
});


//FILTRAR 
document.querySelector(".btn-filtrar").addEventListener("change", function (e) {
  const selectedValue = e.target.value;
  const data = filtrar(dataCharacters, selectedValue);
  template(data);
})

