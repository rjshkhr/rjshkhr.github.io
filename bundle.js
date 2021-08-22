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

var setTheme = function setTheme(bodyClass, buttonClass) {
  document.body.classList.remove(localStorage.getItem('class-body-theme'));
  btnTheme.classList.remove(localStorage.getItem('class-btn-theme'));
  document.body.classList.add(bodyClass);
  btnTheme.classList.add(buttonClass);
  localStorage.setItem('class-body-theme', bodyClass);
  localStorage.setItem('class-btn-theme', buttonClass);
};

var toggleTheme = function toggleTheme() {
  return isDark() ? setTheme('body-light', 'fa-moon') : setTheme('body-dark', 'fa-sun');
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