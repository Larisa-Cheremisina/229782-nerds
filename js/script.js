var link = document.querySelector(".btn-form-js");
var popup = document.querySelector(".block-form");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=your-name]");
var email = popup.querySelector("[name=your-e-mail]");

var storage = localStorage.getItem("your-name-input");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});
