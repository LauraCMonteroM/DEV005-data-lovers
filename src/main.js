import dataHarryPotter from "./data/harrypotter/harry.js";
import { ordenarAlfabeticamente, filtrar, calcular } from "./data.js";

const dataCharacters = dataHarryPotter.characters;
const dataBooks = dataHarryPotter.books;
const dataFacts = dataHarryPotter.funFacts;
const dataPotions = dataHarryPotter.potions;
const dataSpells = dataHarryPotter.spells;
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
const potions = document.getElementById("potions");
const potionsSection = document.getElementById("potionsSection");
const spells = document.getElementById("spells");
const spellsSection = document.getElementById("spellsSection");
const btnOrdenarSpells = document.getElementById("spellsBtnOrdenar");
const potionsBtnOrdenar = document.getElementById("potionsBtnOrdenar");

//CARDS CHARACTERS
const imgHouses = {
  Gryffindor: "./img/Gryffindor.png",
  Hufflepuff: "./img/Hufflepuff.jpg",
  Ravenclaw: "./img/Ravenclaw.jpg",
  Slytherin: "./img/Slytherin.jpg",
  null: "./img/sinCasa.png",
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
  const h3 = '<h3 class= "typeFunFact1">Did you know ...</h3>';
  const imgwomen = '<img src="./img/datocuriosomujeres.png" class="imgFact1">';
  calculatedFunfact.style.display = "block";
  calculatedFunfact.innerHTML =
    h3 + imgwomen + "There are " + data + " female characters in this saga?";
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
  btnOrdenarSpells.style.display = "none";
  calculatedFunfact.style.display = "none";
  potionsSection.style.display = "none";
  spellsSection.style.display = "none";
  charactersSection.style.display = "none";
  imagenPrincipal.style.display = "none";
  buttons.style.display = "none";
  funFactssection.style.display = "none";
  btncalcular.style.display = "none";
  calculatedFunfact.style.display = "none";
  booksSection.style.display = "block";
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  imgHeader.style.marginLeft = "0px";
  navBarTexts.style.marginTop = "0px";
  contenidoPrincipal.style.marginTop = "0px";
  sectionTitle.textContent = "BOOKS";
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
  potionsBtnOrdenar.style.display = "none";
  calculatedFunfact.style.display = "none";
  spellsSection.style.display = "none";
  potionsSection.style.display = "none";
  funFactssection.style.display = "block";
  btncalcular.style.display = "block";
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  imgHeader.style.marginLeft = "0px";
  navBarTexts.style.marginTop = "0px";
  contenidoPrincipal.style.marginTop = "-10px";
  sectionTitle.textContent = "FUN FACTS";
  sectionTitle.style.marginTop = "100px";
  sectionTitle.style.marginLeft = "93px";

  templateFunFacts(dataFacts);
});

//GO BACK TO CHARACTERS
imgHeader.addEventListener("click", function (p) {
  p.preventDefault();
  btncalcular.style.display = "none";
  booksSection.style.display = "none";
  funFactssection.style.display = "none";
  calculatedFunfact.style.display = "none";
  charactersSection.style.display = "block";
  imagenPrincipal.style.display = "block";
  imgHeader.style.display = "block";
  buttons.style.display = "block";
  imgHeader.style.marginTop = "-595px";
  imgHeader.style.marginLeft = "0px";
  navBarTexts.style.marginTop = "-595px";
  contenidoPrincipal.style.marginTop = "435px";
  sectionTitle.textContent = "CHARACTERS";
  sectionTitle.style.marginTop = "4px";
});

//CHANGE TO s.potions
const imgPotions = "./img/potions.png";
function templatePotions(cardPotions) {
  let fragment = "";
  cardPotions.forEach((element) => {
    fragment += `
<div class="cardsPotions">
<p class="potionstName"><strong>${element.name}</strong> </p>
<img src="${imgPotions}" class="potionsImg"/>
<p class="potionsDescripcion">${element.description}</p>
</div>
`;
  });
  potionsSection.innerHTML = fragment;
}
templatePotions(dataPotions);

potions.addEventListener("click", function (d) {
  d.preventDefault();
  charactersSection.style.display = "none";
  btnOrdenarSpells.style.display = "none";
  imagenPrincipal.style.display = "none";
  funFactssection.style.display = "none";
  buttons.style.display = "none";
  btncalcular.style.display = "none";
  buttons.style.display = "none";
  calculatedFunfact.style.display = "none";
  booksSection.style.display = "none";
  spellsSection.style.display = "none";
  potionsSection.style.display = "block";
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  imgHeader.style.marginLeft = "0px";
  navBarTexts.style.marginTop = "0px";
  sectionTitle.textContent = "POTIONS";
  sectionTitle.style.marginTop = "90px";
  sectionTitle.style.marginLeft = "26px";
  contenidoPrincipal.style.marginTop = "-10px";
  potionsBtnOrdenar.style.display = "block";

  templatePotions(dataPotions);
});

//SORT BY - POTIONS
potionsBtnOrdenar.addEventListener("change", function (x) {
  if (x.target.value === "A-Z") {
    const resultAZ = ordenarAlfabeticamente(dataPotions);
    spellsSection.innerHTML = "";
    templatePotions(resultAZ);
  } else if (x.target.value === "Z-A") {
    spellsSection.innerHTML = "";
    const resultZA = ordenarAlfabeticamente(dataPotions).reverse();
    templatePotions(resultZA);
  } else if (x.target.value === "ordenar") {
    spellsSection.innerHTML = "";
    templatePotions(dataPotions);
  }
});

//CHANGE TO s.Spells
function templateSpells(cardSpells) {
  let fragment = "";
  cardSpells.forEach((element) => {
    fragment += `
<div class="cardsSpells">
<p class="spellsName"><strong>${element.name}</strong> </p>
<img class= "imgSpell" src="./img/varita.png"/>
<p class="spellsName"> Type:    ${element.spell_type} </p>
<p class="spellsDescripcion"> Pronunciation:    ${element.pronunciation}</p>
</div>
`;
  });
  spellsSection.innerHTML = fragment;
}
templateSpells(dataSpells);

spells.addEventListener("click", function (d) {
  d.preventDefault(); 
  charactersSection.style.display = "none";
  imagenPrincipal.style.display = "none";
  funFactssection.style.display = "none";
  calculatedFunfact.style.display = "none";
  booksSection.style.display = "none";
  potionsSection.style.display = "none";
  btncalcular.style.display = "none";
  potionsBtnOrdenar.style.display = "none";
  buttons.style.display = "none";
  spellsSection.style.display = "block";
  imgHeader.style.display = "block";
  imgHeader.style.marginTop = "0px";
  imgHeader.style.marginLeft = "0px";
  navBarTexts.style.marginTop = "0px";
  sectionTitle.textContent = "SPELLS";
  sectionTitle.style.marginTop = "80px";
  sectionTitle.style.marginLeft = "26px";
  contenidoPrincipal.style.marginTop = "-10px";
  btnOrdenarSpells.style.display = "block";

  templatePotions(dataSpells);
});

//SORT BY - SPELLS
btnOrdenarSpells.addEventListener("change", function (x) {
  if (x.target.value === "A-Z") {
    const resultAZ = ordenarAlfabeticamente(dataSpells);
    spellsSection.innerHTML = "";
    templateSpells(resultAZ);
  } else if (x.target.value === "Z-A") {
    spellsSection.innerHTML = "";
    const resultZA = ordenarAlfabeticamente(dataSpells).reverse();
    templateSpells(resultZA);
  } else if (x.target.value === "ordenar") {
    spellsSection.innerHTML = "";
    templateSpells(dataSpells);
  }
});

//HAMB MENU FOR PHONE
const nav = document.getElementById("sections");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  nav.style.display = "flex";
  open.style.display = "none";
});

close.addEventListener("click", () => {
  nav.style.display = "none";
  open.style.display = "block";
});
