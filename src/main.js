import data from "./data/harrypotter/harry.js";

const container = document.getElementById("temp-characters");
//console.log(container);
for (let i = 0; i < data.characters.length; i++) {
  const containerCharacter = document.createElement("div");
  //console.log(i)
  container.appendChild(containerCharacter);
  containerCharacter.innerHTML ="<p>" + data.characters[i].name + "<p/>";
  containerCharacter.className = "characterBox"
  console.log(containerCharacter.outerHTML);
}