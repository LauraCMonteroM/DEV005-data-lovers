import dataHarryPotter from "./data/harrypotter/harry.js";
import { ordenarAlfabeticamente, filtrar } from "./data.js";

const dataCharacters = dataHarryPotter.characters;
const dataBooks = dataHarryPotter.books;
const dataFacts = dataHarryPotter.funFacts;
const container = document.getElementById("temp-characters");
const contenidoPrincipal = document.getElementById("sectionMostrando");
const imagenPrincipal = document.getElementById("imgPrincipal");
const charactersSection = document.getElementById("temp-characters");
const booksSection = document.getElementById("bookssection");
const books = document.getElementById("books");
const imgHeader = document.getElementById("header-img");
const navBarTexts = document.getElementById("sections");
const buttons = document.getElementById("btns");
const sectionTitle = document.getElementById("titleSection");
const facts = document.getElementById('funfacts')
const funFactssection = document.getElementById('funFactssection');
const btncalcular = document.getElementById('calc')

//CARDS CHARACTERS
function template(card) {
  let fragment = "";
  card.forEach((element) => {
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

//SORT BY
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

//FILTER
document.querySelector(".btn-filtrar").addEventListener("change", function (e) {
  const selectedValue = e.target.value;
  const data = filtrar(dataCharacters, selectedValue);
  template(data);
});

//CALCULATE
/*btncalcular.addEventListener("change", function (a) {
  const selectedValue = a.target.value;
  const data = calcular(dataCharacters, selectedValue);
  template(data);
})*/

//CHANGE TO s.LIBROS

function templateBooks(cardbooks) {
  let fragment = "";
  cardbooks.forEach((element) => {
    fragment += `
<div class="covercards">
<img src="${element.img}" class="bookCover"/>
<p class="objectname">${element.title}</p>
</div>
`;
  });
  booksSection.innerHTML = fragment;
}
templateBooks(dataBooks);

books.addEventListener("click", function (e) {
  e.preventDefault(); // prevenir la acción por defecto del enlace
  charactersSection.style.display = "none";
  imagenPrincipal.style.display = "none";
  buttons.style.display = "none";
  funFactssection.style.display = "none";
  btncalcular.style.display = "none"
  booksSection.style.display = "block";
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  navBarTexts.style.marginTop = "0px";
  contenidoPrincipal.style.marginTop = "0px";
  sectionTitle.textContent = "LIBROS";
  sectionTitle.style.marginTop = "100px"
  sectionTitle.style.marginLeft = "93px"
  books.textContent = "PERSONAJES";
  templateBooks(dataBooks)
});

////CHANGE TO s.DATOS CURIOSOS
function templateFunFacts(cardfacts) {
  let fragment = "";
  cardfacts.forEach((element) => {
    fragment += `
<div class="factscards">
<h3 class= typeFunFact>${element.type}</h3> 
<img src="${element.img}" class="imgFact"/>
<p class="objectname">${element.content}</p>
</div>
`;
  });
  funFactssection.innerHTML = fragment;
}
templateFunFacts(dataFacts);

facts.addEventListener("click", function (e) {
  e.preventDefault(); // prevenir la acción por defecto del enlace
  charactersSection.style.display = "none";
  imagenPrincipal.style.display = "none";
  booksSection.style.display = "none";
  buttons.style.display = "none";  
  booksSection.style.display = "none";
  funFactssection.style.display = "block";
  btncalcular.style.display = "block"
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  navBarTexts.style.marginTop = "0px";
  contenidoPrincipal.style.marginTop = "0px";
  sectionTitle.textContent = "DATOS CURIOSOS";
  sectionTitle.style.marginTop = "100px"
  sectionTitle.style.marginLeft = "93px"
  facts.textContent = "PERSONAJES";
  templateBooks(dataBooks)
});