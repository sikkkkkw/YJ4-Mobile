function toggleIcon() {
  var label = document.querySelector(".right");
  var checkbox = document.getElementById("toggle");

  if (checkbox.checked) {
    label.innerHTML = "&#9776;";
  } else {
    label.innerHTML = "&#8285;";
  }
}
