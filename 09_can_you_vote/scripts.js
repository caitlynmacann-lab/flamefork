// Instructions in the CSS

function checkAge () {
  let age = document.getElementById("ageBox").value;
  let message

  if (age == '') {
    message = "Please enter your age."
  } else if (age > 100) {
    message = "You're very old 😦"
  } else if  (age >= 18) {
    message = "You can vote!";
  } else if (age >= 16) {
    message = "You can pre-enrol.";
  } else if (age < 0) {
    message = "Are you a time traveller?"
  } else {
    message = "Sorry, you can't register yet.";
  }

  document.getElementById("results").innerText = message;
}

document.getElementById("submit").onclick = checkAge