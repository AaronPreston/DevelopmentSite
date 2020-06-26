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
    $(".resume").css("right", "-100%");
    $(".resume-title").html("<i class='fas fa-file'></i>");
  } else {
    $(".resume").css("right", "0%");
    $(".resume-title").html("<i class='fas fa-times'></i>");
  }
  resumeOpened = !resumeOpened;
});

function nextScreen() {
  if (clickCount == 1) {
    $("#back-text").html("Let's look.");
    $("#front-text").html("");
    $(".projects").css("display", "block");
    $(".tap-anywhere").remove();
  }
}
