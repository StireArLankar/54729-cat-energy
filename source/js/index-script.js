var sliderHandler = document.querySelector(".slider__handler");
var sliderBeforeBtn = document.querySelector(".slider__btn--before");
var sliderAfterBtn = document.querySelector(".slider__btn--after");
var sliderWrapper = document.querySelector(".slider__inner-wrapper");
var sliderBefore = document.querySelector(".slider__before");
var sliderAfter = document.querySelector(".slider__after");
var reg = /[0-9]+/;
var sliderBeforeWidth = sliderBefore.clientWidth;
var sliderAfterWidth = sliderAfter.clientWidth;
var sliderInput = document.querySelector(".slider__range-input");
var sliderToggle = document.querySelector(".slider__range-toggle");

var w = window.innerWidth;

window.addEventListener("resize", function(evt) {
  w = window.innerWidth;
  sliderBefore.style.width = "";
  sliderAfter.style.width = "";
  sliderToggle.style.left = 50 + "%";
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
    sliderToggle.style.left = 0 + "%";
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
    sliderToggle.style.left = 100 + "%";
  }
});

sliderToggle.addEventListener("keydown", function (e) {
  var parentWidth = e.target.parentNode.offsetWidth;
  var target = e.target;
  var currentPosition = target.offsetLeft / parentWidth;

  if (e.keyCode === 39) {
    // right
    if (target.offsetLeft < parentWidth) {
      target.style.left = (target.offsetLeft * 100 / parentWidth + 2) + "%";
      sliderBefore.style.width = 100 - (target.offsetLeft * 100 / parentWidth + 2) + "%";
      sliderAfter.style.width = (target.offsetLeft * 100 / parentWidth + 2) + "%";
    }
  }

  if (e.keyCode === 37) {
    // left
    if (target.offsetLeft > 0) {
      target.style.left = (target.offsetLeft * 100 / parentWidth - 2) + "%";
      sliderBefore.style.width = 100 - (target.offsetLeft * 100 / parentWidth - 2) + "%";
      sliderAfter.style.width = (target.offsetLeft * 100 / parentWidth - 2) + "%";
    }
  }
});

sliderToggle.addEventListener("mousedown", function (pressEvt) {
  var currentPointX = pressEvt.clientX; // записываем положение
  var parentWidth = pressEvt.target.parentNode.offsetWidth;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var pressedX = currentPointX - moveEvt.clientX
    currentPointX = moveEvt.clientX

    var passedX = pressEvt.target.offsetLeft - pressedX

    if (passedX < 0) {
      passedX = 0
    }

    if (passedX > parentWidth) {
      passedX = parentWidth
    }

    pressEvt.target.style.left = passedX * 100 / parentWidth + "%";
    sliderBefore.style.width = 100 - passedX * 100 / parentWidth + "%";
    sliderAfter.style.width = passedX * 100 / parentWidth + "%";
  }

  var onMouseUp = function (upEvt) {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
  }

  document.addEventListener("mouseup", onMouseUp)
  document.addEventListener("mousemove", onMouseMove)
});
