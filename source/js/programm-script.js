var form = document.querySelector(".programm-form");
var array = [
  {
    element: document.querySelector("#cat-name-field"),
    reg: /\w+/
  },
  {
    element: document.querySelector("#cat-weight-field"),
    reg: /[0-9]/
  },
  {
    element: document.querySelector("#owner-email-field"),
    reg: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  },
  {
    element: document.querySelector("#owner-phone-field"),
    reg: /8\s\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}/
  }
];

form.addEventListener("submit", function (evt) {
  var check = array
              .map(function(x) {return x.reg.test(x.element.value)})
              .reduce(function(a,b) {return a && b});

  if (!check) {
    evt.preventDefault();

    array.forEach(function(x) {
      if (!x.reg.test(x.element.value)) {
        x.element.classList.add("programm-form__input--invalid");
      }
    });
  }
});

array.forEach(function(x) {
  x.element.addEventListener("click", function () {
    x.element.classList.remove("programm-form__input--invalid");
  });
});
