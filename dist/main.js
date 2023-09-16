/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearInp() {
  const input = document.querySelector("#loc");
  input.value = "";
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearInp);


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getWeather() {
  // get user input or set to default
  const locationInp = document.querySelector("#loc").value || "constantine";
  // fetching the api
  const APIKEY = "4728c2c8b25f4f70abb182811230809";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${locationInp}`
  );
  const data = await response.json();

  // fetching the api code condition data
  const images = await fetch(
    "https://www.weatherapi.com/docs/weather_conditions.json"
  );
  const imData = await images.json();

  // constructing an object with needed data
  const objData = {
    code: data.current.condition.code,
    location: data.location.name,
    country: data.location.country,
    statue: data.current.condition.text,
    humidity: data.current.humidity,
    temp: data.current.feelslike_c,
  };

  // appending elements to DOM
  const location = document.querySelector(".location");
  const statue = document.querySelector(".condition");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");
  const img = document.querySelector("#icon");

  // finding the right icon
  function findIcon() {
    imData.forEach((element) => {
      if (element.code === objData.code) {
        img.src = `./assets/64x64/day/${element.icon}.png`;
      }
    });
  }

  findIcon();

  location.textContent = `${objData.location},${objData.country}`;
  statue.textContent = objData.statue;
  humidity.textContent = `humidity ${objData.humidity}%`;
  temp.textContent = `Temperature ${Math.round(objData.temp)}c`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



(0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])();
const sub = document.querySelector("#sub-btn");
sub.addEventListener("click", () => {
  (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ054QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsT0FBTyxLQUFLLFlBQVk7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQSw0QkFBNEIsaUJBQWlCLEdBQUcsZ0JBQWdCO0FBQ2hFO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RCxvQ0FBb0MseUJBQXlCO0FBQzdEOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2xEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDTjs7QUFFN0Isb0RBQVU7QUFDVjtBQUNBO0FBQ0EsRUFBRSxvREFBVTtBQUNaLEVBQUUsZ0RBQVE7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhcklucCgpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY1wiKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFySW5wO1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgLy8gZ2V0IHVzZXIgaW5wdXQgb3Igc2V0IHRvIGRlZmF1bHRcbiAgY29uc3QgbG9jYXRpb25JbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY1wiKS52YWx1ZSB8fCBcImNvbnN0YW50aW5lXCI7XG4gIC8vIGZldGNoaW5nIHRoZSBhcGlcbiAgY29uc3QgQVBJS0VZID0gXCI0NzI4YzJjOGIyNWY0ZjcwYWJiMTgyODExMjMwODA5XCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElLRVl9JnE9JHtsb2NhdGlvbklucH1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgLy8gZmV0Y2hpbmcgdGhlIGFwaSBjb2RlIGNvbmRpdGlvbiBkYXRhXG4gIGNvbnN0IGltYWdlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vZG9jcy93ZWF0aGVyX2NvbmRpdGlvbnMuanNvblwiXG4gICk7XG4gIGNvbnN0IGltRGF0YSA9IGF3YWl0IGltYWdlcy5qc29uKCk7XG5cbiAgLy8gY29uc3RydWN0aW5nIGFuIG9iamVjdCB3aXRoIG5lZWRlZCBkYXRhXG4gIGNvbnN0IG9iakRhdGEgPSB7XG4gICAgY29kZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxuICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgIHN0YXR1ZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgdGVtcDogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICB9O1xuXG4gIC8vIGFwcGVuZGluZyBlbGVtZW50cyB0byBET01cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuICBjb25zdCBzdGF0dWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvblwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIik7XG5cbiAgLy8gZmluZGluZyB0aGUgcmlnaHQgaWNvblxuICBmdW5jdGlvbiBmaW5kSWNvbigpIHtcbiAgICBpbURhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY29kZSA9PT0gb2JqRGF0YS5jb2RlKSB7XG4gICAgICAgIGltZy5zcmMgPSBgLi9hc3NldHMvNjR4NjQvZGF5LyR7ZWxlbWVudC5pY29ufS5wbmdgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmluZEljb24oKTtcblxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke29iakRhdGEubG9jYXRpb259LCR7b2JqRGF0YS5jb3VudHJ5fWA7XG4gIHN0YXR1ZS50ZXh0Q29udGVudCA9IG9iakRhdGEuc3RhdHVlO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBodW1pZGl0eSAke29iakRhdGEuaHVtaWRpdHl9JWA7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmUgJHtNYXRoLnJvdW5kKG9iakRhdGEudGVtcCl9Y2A7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCBjbGVhcklucCBmcm9tIFwiLi9kb21cIjtcblxuZ2V0V2VhdGhlcigpO1xuY29uc3Qgc3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWItYnRuXCIpO1xuc3ViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGdldFdlYXRoZXIoKTtcbiAgY2xlYXJJbnAoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9