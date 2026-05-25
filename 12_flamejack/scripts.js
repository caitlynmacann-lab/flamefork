let energy = 0;

function chargeReactor() {
  let pulse = Math.floor(Math.random() * 10) + 1; // 1-10
  energy += pulse;

  document.getElementById("energyDisplay").innerText = "Energy: " + energy + " / 100";

  if (energy < 16) {
    document.getElementById("statusMessage").innerText = " Charging...";
  } else if (energy <= 21) {
    document.getElementById("statusMessage").innerText = " Stable energy level!";
  } else {
    document.getElementById("statusMessage").innerText = " Overload! Core meltdown!";
    document.getElementById("chargeButton").disabled = true;
  }
}

document.getElementById("chargeButton").onclick = chargeReactor;
