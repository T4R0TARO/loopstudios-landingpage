"use strict";

// navbar buttons variables
const hamburger = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

// navbar variables
const navBar = document.querySelector(".navbar-nav");

// navbar toggle function
const navbarToggle = function () {
  navBar.classList.toggle("active");
};

// added toggle func on navbar button
hamburger.addEventListener("click", navbarToggle);
closeBtn.addEventListener("click", navbarToggle);
