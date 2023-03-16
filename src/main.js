import dataHarryPotter from "./data/harrypotter/harry.js";
import { ordenarAlfabeticamente } from "./data.js";

const dataCharacters = dataHarryPotter.characters;
const dataBooks = dataHarryPotter.books;
const container = document.getElementById("temp-characters");

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
  } else {
    container.innerHTML = "";
    const resultZA = ordenarAlfabeticamente(dataCharacters).reverse();
    template(resultZA);
  }
});
const contenidoPrincipal = document.getElementById("sectionMostrando");
const imagenPrincipal = document.getElementById("imgPrincipal");

//OCULTAR PERSONAJES
document.getElementById("books").addEventListener("click", function (y) {
  container.style.display = "none";
  imagenPrincipal.style.display = "none";
});
//VISTA DE LIBROS
/*const sectionBooks = document.createElement("section");
  contenidoPrincipal.appendChild(sectionBooks);
  sectionBooks.innerHTML = data.books;
  console.log("mostar", data.books);
  sectionBooks.className = "books";
*/
