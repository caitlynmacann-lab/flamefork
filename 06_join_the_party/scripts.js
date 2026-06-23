let nameInput = document.getElementById("nameInput");
let roleInput = document.getElementById("roleInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");

function sayHello() {
  let name = nameInput.value;
  let role = roleInput.value;
  output.innerText = `Welcome, ${name}, to the party! 🐛😁🐡`;
}

greetButton.onclick = sayHello;