function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;

  let message = `Welcome, ${name} from ${region} Thanks for joining the party`
  document.getElementById("output").innerText = message;
}

document.getElementById("signupButton").onclick = showSignupMessage
