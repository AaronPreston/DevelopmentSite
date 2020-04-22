function handleSizing() {
  if (window.innerWidth > 900) {
    $(".right-panel").css("top", "0");
    $(".right-panel").css("left", "35%");
  } else {
    $(".right-panel").css("left", "0");
    $(".right-panel").css("top", "35%");
  }
}

$(document).ready(function () {
  handleSizing();
});

$(window).resize(function () {
  handleSizing();
});
