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

  var saveEventBtn = document.querySelector(".saveBtn");
  var eventDiv = document.querySelector(".row");
  var eventContent = document.querySelector(".input");

  renderLastRegistered();

  function displayMessage(type, message) {
    eventDiv.textContent = message;
  }

  function renderLastRegistered() {
    var userInput = localStorage.getItem(".input");

    if (userInput === null) {
      return;
    } 

    eventContent.textContent = email;
  }

  saveEventBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = document.querySelector(".input").value;

    if (userInput === " ") {
      alert("Please add an event");
    } else {
      alert("Event has been saved to your calendar");

      localStorage.setItem("Event", userInput);
      renderLastRegistered();
    }
  });
});
