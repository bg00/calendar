

document.addEventListener("DOMContentLoaded", function(event) {
  var currentTime = moment().format("dddd, MMMM Do", true);
  var currentDay = document.getElementById("currentDay");
  currentDay.append(currentTime);
  console.log(currentTime);
});

document.addEventListener("DOMContentLoaded", function(event) {
  $(function changeColor() {
    var today = new Date(),
      thisTime =
        today.getHours() +
        "-" +
        (today.getMinutes() + 1) +
        "-" +
        today.getSeconds();
    $(".input").each(function() {
      var specifiedDate = $(this).data(".input");
      if (specifiedDate === thisTime) {
        $(this).addClass("current");
      } else if (_thisTime => specifiedDate) {
        $(this).addClass("past");
      } else if (_thisTime => specifiedDate) {
        $(this).addClass("future");
      }
      console.log(thisTime);
      console.log(today);
      console.log(specifiedDate);
    });
  });

 
  var signUpButton = document.querySelector(".saveBtn");
  var msgDiv = document.querySelector(".row");
  var userEmailSpan = document.querySelector(".input");


  renderLastRegistered();

  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  function renderLastRegistered() {
    event.preventDefault();
    var email = localStorage.getItem(".input");


    if (email === null) {
      return;
    }

    userEmailSpan.textContent = email;
  }

  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    var email = document.querySelector(".input").value;

    if (email === " ") {
      alert("Email cannot be blank");
    } else {
      alert("Registered successfully");

      localStorage.setItem("email", email);
      renderLastRegistered();
    }
  });

});
