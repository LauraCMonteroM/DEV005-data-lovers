import dataHarryPotter from "./data/harrypotter/harry.js";
import { ordenarAlfabeticamente, filtrar, calcular } from "./data.js";

const dataCharacters = dataHarryPotter.characters;
const dataBooks = dataHarryPotter.books;
const dataFacts = dataHarryPotter.funFacts;
const charactersSection = document.getElementById("temp-characters");
const booksSection = document.getElementById("bookssection");
const funFactssection = document.getElementById("funFactssection");
const contenidoPrincipal = document.getElementById("sectionMostrando");
const imagenPrincipal = document.getElementById("imgPrincipal");
const books = document.getElementById("books");
const imgHeader = document.getElementById("header-img");
const navBarTexts = document.getElementById("sections");
const buttons = document.getElementById("btns");
const sectionTitle = document.getElementById("titleSection");
const facts = document.getElementById("funfacts");
const btncalcular = document.getElementById("calc");
const calculatedFunfact = document.getElementById("funFactnswer");

//CARDS CHARACTERS

const imgHouses = {
  Gryffindor: "./img/Gryffindor.png",
  Hufflepuff: "./img/Hufflepuff.jpg",
  Ravenclaw: "./img/Ravenclaw.jpg",
  Slytherin: "./img/Slytherin.jpg",
  null: 
};

function template(card) {
  let fragment = "";
  card.forEach((element) => {
    fragment += `
<div class="cards">
  <img src="${imgHouses[element.house]}" class="imgHouse" >
  <p class="objetname">${element.name}</p>
</div>
`;
  });
  charactersSection.innerHTML = fragment;
}
template(dataCharacters);

//SORT BY
document.querySelector(".btn-ordenar").addEventListener("change", function (x) {
  if (x.target.value === "A-Z") {
    const resultAZ = ordenarAlfabeticamente(dataCharacters);
    charactersSection.innerHTML = "";
    template(resultAZ);
  } else if (x.target.value === "Z-A") {
    charactersSection.innerHTML = "";
    const resultZA = ordenarAlfabeticamente(dataCharacters).reverse();
    template(resultZA);
  } else if (x.target.value === "ordenar") {
    charactersSection.innerHTML = "";
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
btncalcular.addEventListener("click", function () {
  const data = calcular(dataCharacters, "Female");
  const h3 = '<h3 class= "typeFunFact1">Sabías qué...</h3>';
  const imgwomen = '<img src="./img/datocuriosomujeres.png" class="imgFact1">';
  calculatedFunfact.style.display = "block";
  calculatedFunfact.innerHTML = h3 + imgwomen + "Existen " + data + " personajes femeninos en la saga?";
});

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
  btncalcular.style.display = "none";
  booksSection.style.display = "block";
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  navBarTexts.style.marginTop = "0px";
  contenidoPrincipal.style.marginTop = "0px";
  sectionTitle.textContent = "LIBROS";
  sectionTitle.style.marginTop = "100px";
  sectionTitle.style.marginLeft = "93px";
  templateBooks(dataBooks);
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
  e.preventDefault();
  charactersSection.style.display = "none";
  imagenPrincipal.style.display = "none";
  booksSection.style.display = "none";
  buttons.style.display = "none";
  booksSection.style.display = "none";
  funFactssection.style.display = "block";
  btncalcular.style.display = "block";
  imgHeader.style.display = "block";
  calculatedFunfact.style.display = "block";
  imgHeader.style.marginTop = "0px";
  navBarTexts.style.marginTop = "0px";
  contenidoPrincipal.style.marginTop = "0px";
  sectionTitle.textContent = "DATOS CURIOSOS";
  sectionTitle.style.marginTop = "100px";
  sectionTitle.style.marginLeft = "93px";
  templateBooks(dataFacts);
});

//GO BACK TO CHARACTERS
imgHeader.addEventListener("click", function (p) {
  p.preventDefault();
  btncalcular.style.display = "none";
  booksSection.style.display = "none";
  funFactssection.style.display = "none";
  charactersSection.style.display = "block";
  imagenPrincipal.style.display = "block";
  imgHeader.style.display = "block";
  buttons.style.display = "block";
  imgHeader.style.marginTop = "-595px";
  navBarTexts.style.marginTop = "-595px";
  contenidoPrincipal.style.marginTop = "435px";
  sectionTitle.textContent = "PERSONAJES";
});
