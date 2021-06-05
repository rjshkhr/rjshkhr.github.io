/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/scroll.js
var scrollDown = function scrollDown() {
  var btnScrollDown = document.querySelector('.scroll-down');

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    btnScrollDown.style.display = 'none';
  } else {
    btnScrollDown.style.display = 'block';
  }
};

var scrollUp = function scrollUp() {
  var btnScrollUp = document.querySelector('.scroll-up');

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnScrollUp.style.display = 'block';
  } else {
    btnScrollUp.style.display = 'none';
  }
};


;// CONCATENATED MODULE: ./src/modules/toggleTheme.js
var getBodyClass = localStorage.getItem('class-body-theme');
var getBtnClass = localStorage.getItem('class-btn-theme');
var btnTheme = document.querySelector('.fa-moon');

var isDark = function isDark() {
  return document.body.classList.contains('body-dark');
};

var toggleLight = function toggleLight() {
  document.body.classList.remove('body-dark');
  btnTheme.classList.remove('fa-sun');
  document.body.classList.add('body-light');
  btnTheme.classList.add('fa-moon');
  localStorage.setItem('class-body-theme', 'body-light');
  localStorage.setItem('class-btn-theme', 'fa-moon');
};

var toggleDark = function toggleDark() {
  document.body.classList.remove('body-light');
  btnTheme.classList.remove('fa-moon');
  document.body.classList.add('body-dark');
  btnTheme.classList.add('fa-sun');
  localStorage.setItem('class-body-theme', 'body-dark');
  localStorage.setItem('class-btn-theme', 'fa-sun');
};

var toggleTheme = function toggleTheme() {
  isDark() ? toggleLight() : toggleDark();
};

var addBodyClass = function addBodyClass() {
  return document.body.classList.add(getBodyClass);
};

var addBtnClass = function addBtnClass() {
  return btnTheme.classList.add(getBtnClass);
};


;// CONCATENATED MODULE: ./src/modules/displayList.js
var btnHamburger = document.querySelector('.fa-bars');

var displayList = function displayList() {
  var navUl = document.querySelector('nav ul');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.style.width = '100%';
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.style.width = '0';
  }
};

/* harmony default export */ const modules_displayList = (displayList);
;// CONCATENATED MODULE: ./src/index.js




var src_btnHamburger = document.querySelector('.fa-bars');
var src_btnTheme = document.querySelector('.fa-moon');
src_btnHamburger.addEventListener('click', modules_displayList);
src_btnTheme.addEventListener('click', toggleTheme);
document.addEventListener('scroll', function () {
  scrollDown();
  scrollUp();
});
addBodyClass();
addBtnClass();
/******/ })()
;
//# sourceMappingURL=bundle.js.map