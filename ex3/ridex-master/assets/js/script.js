'use strict';

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

function showInfo(id){
  var idElem = document.getElementById(id)
  if (idElem.style.display == "none")
    idElem.style.display = "grid"
  else
    idElem.style.display = "none"

  var infos = document.getElementsByClassName("featured-car-card-info")
  for (let i = 0; i < infos.length; i++) {
    var elem = infos[i]
    if (elem.id != id)
      elem.style.display = "none"
  }
}