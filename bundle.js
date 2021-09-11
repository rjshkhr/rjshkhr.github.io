/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/cleanfolio.png
/* harmony default export */ const cleanfolio = (__webpack_require__.p + "assets/images/cleanfolio.png");
;// CONCATENATED MODULE: ./src/assets/images/startpage.png
/* harmony default export */ const startpage = (__webpack_require__.p + "assets/images/startpage.png");
;// CONCATENATED MODULE: ./src/modules/scroll.js
var scrollUp = function scrollUp() {
  var btnScrollUp = document.querySelector('.scroll-up');

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnScrollUp.style.display = 'block';
  } else {
    btnScrollUp.style.display = 'none';
  }
};

/* harmony default export */ const modules_scroll = ({
  scrollUp: scrollUp
});
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
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

/* harmony default export */ const modules_displayList = (displayList);
;// CONCATENATED MODULE: ./src/index.js






var src_btnHamburger = document.querySelector('.fa-bars');
var src_btnTheme = document.querySelector('.fa-moon');
src_btnHamburger.addEventListener('click', modules_displayList);
src_btnTheme.addEventListener('click', toggleTheme);
document.addEventListener('scroll', modules_scroll.scrollUp);
addBodyClass();
addBtnClass();
/******/ })()
;
//# sourceMappingURL=bundle.js.map