import data from "./data/pokemon/pokemon.js";
//Crea un contenedor para pantalla principal

/*const container1 = document.getElementById("temp-characters");
for (let i = 0; i < data.characters.length; i++) {
  const containerCharacter = document.createElement("div");
  container1.appendChild(containerCharacter);
  containerCharacter.innerHTML =
    "<img src='./img/Ppersonaje.png' class='img-character'>" +
    data.characters[i].name;
  containerCharacter.className = "characterBox";
}
//Crea un contenedor con info de los personajes
const container2 = (obj) => {
  const containerInfo = document.createElement("div");
  containerInfo.innerHTML = "div class= containerModal";
  "<h3>${obj.name}</h3>" +
    "<p> Especie: ${obj.species}</p>" +
    "<p> Género: ${obj.gender}</p>" +
    "<p> Casa: ${obj.house}</p>" +
    "<p> Libros en los que aparece: ${obj.books_featured_in}</p>";
};*/
const containerElement = (obj) => {
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'div-Element');
  divElement.innerHTML = `
  <div class="contenedorAdelante">
    <p>${obj.id}</p>
    <h2>${obj.name}</h2>
    <img src='${obj.img}'/>
  </div>
  <div class="contenedorModal">
    <span class="close">&times;</span>
    <h2>${obj.name}</h2>
    <img src="${obj.img}"/>
    <p> Tipo: ${obj.type}</p>
    <p> Tamaño: ${obj.height}</p>
    <p> Peso: ${obj.weight}</p>
    <p> Debilidades: ${obj.weaknesses}</p>
  </div>`;
  divElement.querySelector('.contenedorAdelante').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'block';
    document.querySelector('.miModal').style.display = 'block';
  });

  divElement.querySelector('.close').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'none';
    document.querySelector('.miModal').style.display = 'none';
  });

  return divElement;
};