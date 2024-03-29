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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var myEmojis = ["👨‍💻", "⛷", "🍲"];
var emojiContainer = document.getElementById("emoji-container");
var emojiInput = document.getElementById("emoji-input");
var pushBtn = document.getElementById("push-btn");
var unshiftBtn = document.getElementById("unshift-btn");
var popBtn = document.getElementById("pop-btn");
var shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
    emojiContainer.innerHTML = "";
    for (var i = 0; i < myEmojis.length; i++) {
        var emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        renderEmojis();
    }
});

// unshiftBtn.addEventListener("click", function(){
//     if (emojiInput.value) {
//         myEmojis.unshift(emojiInput.value)
//         emojiInput.value = ""
//         renderEmojis()
//     }
// })

// popBtn.addEventListener("click", function() {
//     myEmojis.pop()
//     renderEmojis()
// })

shiftBtn.addEventListener("click", function () {
    myEmojis.shift();
    renderEmojis();
});

function addEmoji(emoji) {
    var inputEle = document.getElementById('emoji-input');

    input.value += emoji;
}

function toggleEmojiDrawer() {
    var drawer = document.getElementById('drawer');

    if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

/***/ })
/******/ ]);