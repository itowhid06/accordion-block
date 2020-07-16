/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/accordion/src/view/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block-components/gb-components/build-script/accordion.js":
/*!******************************************************************!*\
  !*** ./block-components/gb-components/build-script/accordion.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./block-components/gb-components/node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * External dependencies
 */

/**
 * Script to be used on front-end.
 */

var accordion = {
  /**
   * Initialize.
   *
   * @param {Object} settings Settings.
   *
   * @return {Object} According instance.
   */
  init: function init(settings) {
    if (settings === void 0) {
      settings = {};
    }

    if (!document.querySelector('.gbc-accordion.gbc-active')) {
      return;
    }

    var config = Object.assign({
      elementClass: 'gbc-accordion__row',
      questionClass: 'gbc-accordion__header',
      answerClass: 'gbc-accordion__content',
      duration: 200,
      showItem: false
    }, settings);
    return new accordion_js__WEBPACK_IMPORTED_MODULE_0___default.a('.gbc-accordion.gbc-active', config);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./block-components/gb-components/node_modules/accordion-js/dist/accordion.min.js":
/*!****************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/accordion-js/dist/accordion.min.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Accordion v2.8.0
 * Simple accordion created in pure Javascript.
 * https://github.com/michu2k/Accordion
 *
 * Copyright 2017-2019 Michał Strumpf
 * Published under MIT License
 */
!function(i){function u(o,l){var c=this,t={init:function(){if(Array.isArray(o))return o.length&&o.map(function(e){return new u(e,l)}),!1;this.options=h({duration:600,itemNumber:0,aria:!0,closeOthers:!0,showItem:!1,elementClass:"ac",questionClass:"ac-q",answerClass:"ac-a",targetClass:"ac-target",onToggle:function(){}},l),this.container=document.querySelector(o),this.elements=this.container.querySelectorAll("."+this.options.elementClass);var e=this.options,t=e.aria,n=e.showItem,i=e.itemNumber;t&&this.container.setAttribute("role","tablist");for(var s=0;s<this.elements.length;s++){var r=this.elements[s];r.classList.add("js-enabled"),this.hideElement(r),this.setTransition(r),this.generateID(r),t&&this.setARIA(r)}if(n){var a=this.elements[0];"number"==typeof i&&i<this.elements.length&&(a=this.elements[i]),this.toggleElement(a,!1)}c.attachEvents()},setTransition:function(e){var t=this.options,n=t.duration,i=t.answerClass,s=e.querySelector("."+i),r=a("transition");s.style[r]=n+"ms"},generateID:function(e){e.setAttribute("id","ac-".concat(s)),s++},setARIA:function(e){var t=this.options,n=t.questionClass,i=t.answerClass,s=e.querySelector("."+n),r=e.querySelector("."+i);s.setAttribute("role","tab"),s.setAttribute("aria-expanded","false"),r.setAttribute("role","tabpanel")},updateARIA:function(e,t){var n=this.options.questionClass;e.querySelector("."+n).setAttribute("aria-expanded",t)},callSpecificElement:function(e){for(var t=e.target,n=this.options,i=n.questionClass,s=n.targetClass,r=n.closeOthers,a=0;a<this.elements.length;a++)if(this.elements[a].contains(t)){(t.className.match(i)||t.className.match(s))&&(e.preventDefault(),r&&this.closeAllElements(a),this.toggleElement(this.elements[a]));break}},hideElement:function(e){var t=this.options.answerClass;e.querySelector("."+t).style.height=0},toggleElement:function(e,t){var n,i=!(1<arguments.length&&void 0!==t)||t,s=this.options,r=s.answerClass,a=s.aria,o=s.onToggle,l=e.querySelector("."+r),c=l.scrollHeight;e.classList.toggle("is-active"),i||(l.style.height="auto"),0<parseInt(l.style.height)?(n=!1,requestAnimationFrame(function(){l.style.height=0})):(n=!0,requestAnimationFrame(function(){l.style.height=c+"px"})),a&&this.updateARIA(e,n),i&&o(e,this.elements)},closeAllElements:function(e){for(var t=this.options.aria,n=this.elements.length,i=0;i<n;i++)if(i!=e){var s=this.elements[i];s.classList.contains("is-active")&&s.classList.remove("is-active"),t&&this.updateARIA(s,!1),this.hideElement(s)}},resizeHandler:function(){for(var e,t,n=this.options,i=n.elementClass,s=n.answerClass,r=this.container.querySelectorAll("."+i+".is-active"),a=0;a<r.length;a++)t=r[a].querySelector("."+s),requestAnimationFrame(function(){t.style.height="auto",e=t.offsetHeight,requestAnimationFrame(function(){t.style.height=e+"px"})})},clickHandler:function(e){this.callSpecificElement(e)},keydownHandler:function(e){13===e.keyCode&&this.callSpecificElement(e)}};this.attachEvents=function(){var e=t;e.clickHandler=e.clickHandler.bind(e),e.keydownHandler=e.keydownHandler.bind(e),e.resizeHandler=e.resizeHandler.bind(e),e.container.addEventListener("click",e.clickHandler),e.container.addEventListener("keydown",e.keydownHandler),i.addEventListener("resize",e.resizeHandler)},this.detachEvents=function(){var e=t;e.container.removeEventListener("click",e.clickHandler),e.container.removeEventListener("keydown",e.keydownHandler),i.removeEventListener("resize",e.resizeHandler)};var a=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=n(e),e="webkit".concat(e))},n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},h=function(e,t){for(var n in t)e[n]=t[n];return e};i.requestAnimationFrame=i.requestAnimationFrame||i.webkitRequestAnimationFrame||function(e){i.setTimeout(e,1e3/60)},t.init()}var s=0; true&&void 0!==module.exports?module.exports=u:i.Accordion=u}(window);

/***/ }),

/***/ "./blocks/accordion/src/view/index.js":
/*!********************************************!*\
  !*** ./blocks/accordion/src/view/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/accordion/src/view/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rtcamp_gb_components_build_script_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rtcamp/gb-components/build-script/accordion */ "./block-components/gb-components/build-script/accordion.js");

 // Initialise accordions.

_rtcamp_gb_components_build_script_accordion__WEBPACK_IMPORTED_MODULE_1__["default"].init(0);

/***/ }),

/***/ "./blocks/accordion/src/view/style.scss":
/*!**********************************************!*\
  !*** ./blocks/accordion/src/view/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=index.js.map