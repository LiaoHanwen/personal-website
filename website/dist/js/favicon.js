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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/favicon/favicon.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/favicon/android-chrome-192x192.png":
/*!************************************************!*\
  !*** ./src/favicon/android-chrome-192x192.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"android-chrome-192x192.png\");\n\n//# sourceURL=webpack:///./src/favicon/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/favicon/android-chrome-256x256.png":
/*!************************************************!*\
  !*** ./src/favicon/android-chrome-256x256.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"android-chrome-256x256.png\");\n\n//# sourceURL=webpack:///./src/favicon/android-chrome-256x256.png?");

/***/ }),

/***/ "./src/favicon/apple-touch-icon.png":
/*!******************************************!*\
  !*** ./src/favicon/apple-touch-icon.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"apple-touch-icon.png\");\n\n//# sourceURL=webpack:///./src/favicon/apple-touch-icon.png?");

/***/ }),

/***/ "./src/favicon/browserconfig.xml":
/*!***************************************!*\
  !*** ./src/favicon/browserconfig.xml ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"browserconfig.xml\");\n\n//# sourceURL=webpack:///./src/favicon/browserconfig.xml?");

/***/ }),

/***/ "./src/favicon/favicon-16x16.png":
/*!***************************************!*\
  !*** ./src/favicon/favicon-16x16.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicon-16x16.png\");\n\n//# sourceURL=webpack:///./src/favicon/favicon-16x16.png?");

/***/ }),

/***/ "./src/favicon/favicon-32x32.png":
/*!***************************************!*\
  !*** ./src/favicon/favicon-32x32.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicon-32x32.png\");\n\n//# sourceURL=webpack:///./src/favicon/favicon-32x32.png?");

/***/ }),

/***/ "./src/favicon/favicon.ico":
/*!*********************************!*\
  !*** ./src/favicon/favicon.ico ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicon.ico\");\n\n//# sourceURL=webpack:///./src/favicon/favicon.ico?");

/***/ }),

/***/ "./src/favicon/favicon.js":
/*!********************************!*\
  !*** ./src/favicon/favicon.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _favicon_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/favicon/android-chrome-192x192.png */ \"./src/favicon/android-chrome-192x192.png\");\n/* harmony import */ var _favicon_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/favicon/safari-pinned-tab.svg */ \"./src/favicon/safari-pinned-tab.svg\");\n/* harmony import */ var _favicon_android_chrome_256x256_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/favicon/android-chrome-256x256.png */ \"./src/favicon/android-chrome-256x256.png\");\n/* harmony import */ var _favicon_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/favicon/apple-touch-icon.png */ \"./src/favicon/apple-touch-icon.png\");\n/* harmony import */ var _favicon_browserconfig_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/favicon/browserconfig.xml */ \"./src/favicon/browserconfig.xml\");\n/* harmony import */ var _favicon_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/favicon/favicon-16x16.png */ \"./src/favicon/favicon-16x16.png\");\n/* harmony import */ var _favicon_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/favicon/favicon-32x32.png */ \"./src/favicon/favicon-32x32.png\");\n/* harmony import */ var _favicon_favicon_ico__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/favicon/favicon.ico */ \"./src/favicon/favicon.ico\");\n/* harmony import */ var _favicon_mstile_150x150_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/favicon/mstile-150x150.png */ \"./src/favicon/mstile-150x150.png\");\n/* harmony import */ var _favicon_site_webmanifest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/favicon/site.webmanifest */ \"./src/favicon/site.webmanifest\");\n/* harmony import */ var _favicon_profile_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/favicon/profile.png */ \"./src/favicon/profile.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/favicon/favicon.js?");

/***/ }),

/***/ "./src/favicon/mstile-150x150.png":
/*!****************************************!*\
  !*** ./src/favicon/mstile-150x150.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"mstile-150x150.png\");\n\n//# sourceURL=webpack:///./src/favicon/mstile-150x150.png?");

/***/ }),

/***/ "./src/favicon/profile.png":
/*!*********************************!*\
  !*** ./src/favicon/profile.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"profile.png\");\n\n//# sourceURL=webpack:///./src/favicon/profile.png?");

/***/ }),

/***/ "./src/favicon/safari-pinned-tab.svg":
/*!*******************************************!*\
  !*** ./src/favicon/safari-pinned-tab.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"safari-pinned-tab.svg\");\n\n//# sourceURL=webpack:///./src/favicon/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/favicon/site.webmanifest":
/*!**************************************!*\
  !*** ./src/favicon/site.webmanifest ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"site.webmanifest\");\n\n//# sourceURL=webpack:///./src/favicon/site.webmanifest?");

/***/ })

/******/ });