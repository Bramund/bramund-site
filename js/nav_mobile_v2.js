const menu = document.getElementById("nav-links");
const fade = document.getElementById("fade");
const menuBtn = document.getElementById("nav-btn");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const body = document.body;
var shown = false;

function menuToggle() {
  menuBtn.classList.toggle("bg-primary-400");
  menuBtn.classList.toggle("border-2");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

function showMenu() {
  shown = true;
  menu.classList.toggle("hidden");
  setTimeout(function () {
    menu.classList.toggle("mt-[-1000px]");
  }, 10);
  fade.classList.toggle("hidden");
  setTimeout(function () {
    fade.classList.toggle("!opacity-70");
  }, 10);
  menuToggle();
}

function hideMenu() {
  shown = false;
  menu.classList.toggle("mt-[-1000px]");
  setTimeout(function () {
    menu.classList.toggle("hidden");
  }, 500);
  fade.classList.toggle("!opacity-70");
  setTimeout(function () {
    fade.classList.toggle("hidden");
  }, 500);
  menuToggle();
}

function conditional() {
  if (shown === false) {
    showMenu();
  } else {
    hideMenu();
  }
}

menuBtn.onclick = conditional;
fade.onclick = conditional;
