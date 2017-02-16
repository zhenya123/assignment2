// By Zhenya Lindsay. Assignment 2

function validateForm() {
  console.log($);
  var fName = document.forms["fakeForm"]["firstName"].value;
  var lName = document.forms["fakeForm"]["lastName"].value;
  var ssn = document.forms["fakeForm"]["ssn"].value;
  var tomato = document.getElementById("tomato").value;
  var car = document.getElementById("car").value;
  var displayError = false;
  var tomatoHater = false;
  var earthLover = false;

  if (tomato == "selectOne") {
    $("#errorMessageTomato").text("Selection is required.");
  }
  else if (tomato == "tomato-hater") {
    tomatoHater = true;
  }
  else {
    $("#errorMessageTomato").text("")
  }

  if (car == "selectOne") {
    $("#errorMessageCar").text("Selection is required.");
  }
  else if (car == "hippie") {
    earthLover = true;
  }
  else {
    $("#errorMessageCar").text("")
  }

  if (fName == "") {
    $("#errorMessageFirstName").text("First name is required.");
    displayError = true;
  }
  else if (!/^[A-Za-z\s]+$/.test(fName)) {
    $("#errorMessageFirstName").text("No weird symbols, please.");
    displayError = true;
  }
  else {
    $("#errorMessageFirstName").text("")
  }

  if (lName == "") {
    $("#errorMessageLastName").text("Last name is required.");
    displayError = true;
  }
  else if (!/^[A-Za-z\s]+$/.test(lName)) {
    $("#errorMessageLastName").text("Only characters, please.");
    displayError = true;
  }
  else {
    $("#errorMessageLastName").text("")
  }

  if(ssn == ""){
    $("#errorMessageSSN").text("SSN is necessary for correct future prediction.");
    displayError = true;
  }
  else if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
    $("#errorMessageSSN").text("Follow this example: 123-45-6789");
    displayError = true;
  }
  else if (ssn == "123-45-6789") {
    $("#errorMessageSSN").text("If your ssn is really 123-45-6789, contact administration please.");
    displayError = true;
  }
  else {
    $("#errorMessageSSN").text("")
  }

  if (displayError){
    $("#errorMessage").text("Please fix the error(s) below.");
  }
  else {
    $(".error").text("");
    if (tomatoHater) {
      $(".fakeForm").hide();
      $("#regularMessage").show();
      $("#tomatoHaterMessage").show();
    }
    else if (earthLover) {
      $(".fakeForm").hide();
      $("#regularMessage").show();
      $("#earthLoverMessage").show();
    }
    else {
      $(".fakeForm").hide();
      $("#regularMessage").show();
      $("#goTomatoesMessage").show();
    }
  }
}
