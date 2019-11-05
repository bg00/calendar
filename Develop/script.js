document.addEventListener("DOMContentLoaded", function(event) {
  var currentTime = moment().format("dddd, MMMM Do", true);
  var currentDay = document.getElementById("currentDay");
  currentDay.append(currentTime);

  console.log(currentTime);
});
