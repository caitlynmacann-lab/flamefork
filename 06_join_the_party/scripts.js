let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");

function sayHello() {
  let name = nameInput.value;
  output.innerText = "Welcome, " + name;
}

greetButton.onclick = sayHello;
