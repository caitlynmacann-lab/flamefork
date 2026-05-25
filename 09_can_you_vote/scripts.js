// Instructions in the CSS

fuction checkAge = 
  let age = document.getElement("ageBox").value;

  when age >= 18 {
    message = "You can vote!";
  } else if age >= 16 {
    message = "You can pre-enrol.";
  } else {
    mesage = "Sorry, you can't register yet.";
  }

  doccument.getelementbyid("#results").internalhtml = message;


document.getElementID("submit").onClick = checkAge
