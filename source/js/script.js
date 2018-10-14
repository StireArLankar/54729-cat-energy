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
let sliderInput = document.querySelector(".slider__range-input");

let w = window.innerWidth;

window.addEventListener("resize", function(evt) {
  w = window.innerWidth;
  sliderBefore.style.width = "";
  sliderAfter.style.width = "";
  sliderInput.value = 50;
});

sliderBeforeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (window.innerWidth < 768) {
    sliderWrapper.classList.remove("slider__inner-wrapper--after");
    sliderHandler.classList.remove("slider__handler--after");
  } else {
    sliderBeforeWidth = sliderBefore.clientWidth;
    sliderAfterWidth = sliderAfter.clientWidth;
    sliderBefore.style.width = 100 + "%";
    sliderAfter.style.width = 0 + "%";
    sliderInput.value = 100;
  }
});

sliderAfterBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (window.innerWidth < 768) {
    sliderWrapper.classList.add("slider__inner-wrapper--after");
    sliderHandler.classList.add("slider__handler--after");
  } else {
    sliderBeforeWidth = sliderBefore.clientWidth;
    sliderAfterWidth = sliderAfter.clientWidth;
    sliderBefore.style.width = 0 + "%";
    sliderAfter.style.width = 100 + "%";
    sliderInput.value = 0;
  }
});

sliderInput.oninput = function () {
  sliderBefore.style.width = this.value + "%";
  sliderAfter.style.width = (100 - this.value) + "%";
};
