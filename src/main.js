import data from "./data/harrypotter/harry.js";

const container = document.getElementById("temp-characters");
//console.log(container);
for (let i = 0; i < data.characters.length; i++) {
  const containerCharacter = document.createElement("div");
  //console.log(i)
  container.appendChild(containerCharacter);
  containerCharacter.innerHTML ="<img src='./img/Ppersonaje.png' class='img-character'>" + data.characters[i].name;
  containerCharacter.className = "characterBox"
  console.log(containerCharacter.outerHTML);
}