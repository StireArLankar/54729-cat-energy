var form = document.querySelector(".programm-form");
var catName = document.getElementById("cat-name-field");
var catWeight = document.getElementById("cat-weight-field");
var ownerEmail = document.getElementById("owner-email-field");
var ownerPhone = document.getElementById("owner-phone-field");
var regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
var regPhone = /8\s\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}/;

var check = (!catName.value) || (!catWeight.value) || (regEmail.test(ownerEmail.value)) || (regPhone.test(ownerPhone.value));

form.addEventListener("submit", function (evt) {
  if (check === true) {
    evt.preventDefault();

    if (!catName.value) {
      catName.classList.add("programm-form__input--invalid");
    }

    if (!catWeight.value) {
      catWeight.classList.add("programm-form__input--invalid");
    }

    if (!regEmail.test(ownerEmail.value)) {
      ownerEmail.classList.add("programm-form__input--invalid");
    }

    if (!regPhone.test(ownerPhone.value)) {
      ownerPhone.classList.add("programm-form__input--invalid");
    }
  }
});

catName.addEventListener("click", function () {
  catName.classList.remove("programm-form__input--invalid");
});

catWeight.addEventListener("click", function () {
  catWeight.classList.remove("programm-form__input--invalid");
});

ownerEmail.addEventListener("click", function () {
  ownerEmail.classList.remove("programm-form__input--invalid");
});

ownerPhone.addEventListener("click", function () {
  ownerPhone.classList.remove("programm-form__input--invalid");
});
