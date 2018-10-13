let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

window.onload = function() {
  navMain.classList.add("main-nav--closed");
};

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navMain.classList.toggle("main-nav--closed");
});

let sliderHandler = document.querySelector(".slider__handler");
let sliderBeforeBtn = document.querySelector(".slider__btn--before");
let sliderAfterBtn = document.querySelector(".slider__btn--after");
let sliderWrapper = document.querySelector(".slider__inner-wrapper");
let sliderBefore = document.querySelector(".slider__before");
let sliderAfter = document.querySelector(".slider__after");
let reg = /[0-9]+/;
let sliderBeforeWidth = sliderBefore.clientWidth;
let sliderAfterWidth = sliderAfter.clientWidth;
let sliderHandlerLeft = parseInt(getComputedStyle(sliderHandler).left.match(reg)[0]);

let w = window.innerWidth;

window.addEventListener("resize", function(evt) {
  w = window.innerWidth;
  sliderBefore.style.width = "";
  sliderAfter.style.width = "";
  sliderHandler.style.left = "";
});

if (w < 767) {
  sliderBeforeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderWrapper.classList.remove("slider__inner-wrapper--after");
    sliderHandler.classList.remove("slider__handler--after");
  })

  sliderAfterBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderWrapper.classList.add("slider__inner-wrapper--after");
    sliderHandler.classList.add("slider__handler--after");
  })
} else {
  sliderBeforeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderBeforeWidth = sliderBefore.clientWidth;
    sliderAfterWidth = sliderAfter.clientWidth;
    sliderHandlerLeft = parseInt(getComputedStyle(sliderHandler).left.match(reg)[0]);
    sliderBefore.style.width = sliderBeforeWidth + 25 + "px";
    sliderAfter.style.width = sliderAfterWidth - 25 + "px";
    sliderHandler.style.left = sliderHandlerLeft + 25 + "px";
  })

  sliderAfterBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderBeforeWidth = sliderBefore.clientWidth;
    sliderAfterWidth = sliderAfter.clientWidth;
    sliderHandlerLeft = parseInt(getComputedStyle(sliderHandler).left.match(reg)[0]);
    sliderBefore.style.width = sliderBeforeWidth - 25 + "px";
    sliderAfter.style.width = sliderAfterWidth + 25 + "px";
    sliderHandler.style.left = sliderHandlerLeft - 25 + "px";
  })
}
