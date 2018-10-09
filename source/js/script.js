var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

window.onload = function() {
  navMain.classList.toggle("main-nav--closed");
};

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navMain.classList.toggle("main-nav--closed");
});
