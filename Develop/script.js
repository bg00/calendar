document.addEventListener("DOMContentLoaded", function(event) {
  var currentTime = moment().format("dddd, MMMM Do", true);
  var currentDay = document.getElementById("currentDay");
  currentDay.append(currentTime);
    console.log(currentTime);
});

  document.addEventListener("DOMContentLoaded", function(event) {

$(function() {
  var today = new Date(),
    thisTime =
      today.getHours() + "-" + (today.getMinutes() + 1) + "-" + today.getSeconds();
  $("#input").each(function() {
    var specifiedDate = $(this).data("row");
    if (specifiedDate === thisTime) {
      $(this).addClass("current");
    } else if (_thisTime => specifiedDate) {
      $(this).addClass("past");
    } else if (_thisTime => specifiedDate) {
      $(this).addClass("future");
    }
  });
});
});

