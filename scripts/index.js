function handleSizing() {
  if (window.innerWidth > 900) {
    $(".right-panel").css("top", "0");
    $(".right-panel").css("left", "35%");
  } else {
    $(".right-panel").css("left", "0");
    $(".right-panel").css("top", "35%");
  }
}

var clickCount = 0;
var resumeOpened = false;

$(document).ready(function () {
  handleSizing();
});

$(window).resize(function () {
  handleSizing();
});

$(document).click(function () {
  clickCount++;
  nextScreen();
});

$(".resume-title-bar").click(function () {
  if (resumeOpened) {
    $(".resume").css("right", "-50%");
  } else {
    $(".resume").css("right", "0%");
  }
  resumeOpened = !resumeOpened;
});

function nextScreen() {
  if (clickCount == 1) {
    $("#back-text").html("Let's look.");
    $("#front-text").html("");
    $(".projects").css("visibility", "visible");
    $(".tap-anywhere").remove();
  }
}
