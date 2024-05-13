/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  height: 100%;
}

body {
  min-height: 100%;
}

#page-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 48px;
  column-gap: 96px;
}

.player-board {
  display: grid;
  margin: 24px;
  grid-template-columns: repeat(11, 32px);
  grid-template-rows: repeat(11, 32px);
  width: 320px;
  height: 320px;
}

.board-label {
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.battlefield-cell {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  border: 1px solid #b4b4ff;
  height: 32px;
  width: 32px;
}

.battlefield-cell:hover {
  cursor: pointer;
}

.ship-box {
  background-color: #7878c9;
}

.hit {
  background-color: lightcoral;
}

.hit::after {
  display: inline-block;
  content: '\\274c'; /* This will render the 'X' */
}

.miss {
  background: transparent;
}

.miss::after {
  display: inline-block;
  content: '●'; /* This will render the 'X' */
}

#resultsBoard {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 800;
  width: 100%;
  margin: 48px;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;;;EAGE,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uCAAuC;EACvC,oCAAoC;EACpC,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,gBAAgB,EAAE,6BAA6B;AACjD;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,YAAY,EAAE,6BAA6B;AAC7C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n#page-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 48px;\n  column-gap: 96px;\n}\n\n.player-board {\n  display: grid;\n  margin: 24px;\n  grid-template-columns: repeat(11, 32px);\n  grid-template-rows: repeat(11, 32px);\n  width: 320px;\n  height: 320px;\n}\n\n.board-label {\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.battlefield-cell {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  outline: inherit;\n  border: 1px solid #b4b4ff;\n  height: 32px;\n  width: 32px;\n}\n\n.battlefield-cell:hover {\n  cursor: pointer;\n}\n\n.ship-box {\n  background-color: #7878c9;\n}\n\n.hit {\n  background-color: lightcoral;\n}\n\n.hit::after {\n  display: inline-block;\n  content: '\\274c'; /* This will render the 'X' */\n}\n\n.miss {\n  background: transparent;\n}\n\n.miss::after {\n  display: inline-block;\n  content: '●'; /* This will render the 'X' */\n}\n\n#resultsBoard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  width: 100%;\n  margin: 48px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


function Ship(size = null) {
  let length = size;
  let hitCounter = null;

  function isSunk() {
    return length ? length === hitCounter : false;
  }

  function hit() {
    hitCounter += 1;
    return hitCounter;
  }

  return {
    get length() {
      return length;
    },
    set length(newLength) {
      length = newLength;
    },
    get hitCounter() {
      return hitCounter;
    },
    hit,
    isSunk,
  };
}

const Gameboard = () => {
  function new2DArray(size) {
    return Array.from(Array(size), () => new Array(size).fill(null));
  }

  const boardSize = 10;
  let board = new2DArray(boardSize);
  let missedAttacks = [];

  function coordinateToIndex(coordinate) {
    const row = coordinate[0].toUpperCase();
    const col = coordinate.substring(1);
    const rowCharCode = row.charCodeAt();
    const rowIndexValue = rowCharCode - 65;
    const colIndexValue = Number(col) - 1;
    return [rowIndexValue, colIndexValue];
  }

  function indexToCoordinate(row, col) {
    const rowCharCode = String.fromCharCode(row + 65);
    return rowCharCode + (col + 1);
  }

  function isValidCoordinate(coordinate) {
    let isValid = true;
    const [rowIndex, colIndex] = [...coordinateToIndex(coordinate)];
    [rowIndex, colIndex].forEach((index) => {
      if (typeof index !== 'number' || index < 0 || index > boardSize - 1) {
        isValid = false;
      }
    });
    return isValid;
  }

  function isOccupied(coordinate) {
    const [row, col] = [...coordinateToIndex(coordinate)];
    return !!board[row][col];
  }

  function placeShip(ship, coordinates) {
    if (
      ship.length !== coordinates.length ||
      coordinates.some((coord) => !isValidCoordinate(coord)) ||
      coordinates.some((coord) => isOccupied(coord))
    ) {
      return false;
    }
    coordinates.forEach((coord) => {
      const [row, col] = coordinateToIndex(coord);
      board[row][col] = ship;
    });
    return true;
  }

  function receiveAttack(coordinate) {
    const [row, col] = [...coordinateToIndex(coordinate)];
    if (board[row][col]) {
      board[row][col].hit();
      return true;
    }
    missedAttacks.push(coordinate);
    return coordinate;
  }

  function reset() {
    board = new2DArray(boardSize);
    missedAttacks = [];
  }

  function isEveryShipSunk() {
    let shipsSunk = true;
    board.forEach((row) =>
      row.forEach((ship) => {
        if (ship !== null && !ship.isSunk()) {
          shipsSunk = false;
        }
      }),
    );
    return shipsSunk;
  }

  return {
    placeShip,
    receiveAttack,
    reset,
    isEveryShipSunk,
    indexToCoordinate,
    coordinateToIndex,
    get board() {
      return board;
    },
    get missedAttacks() {
      return missedAttacks;
    },
  };
};

const Player = (isComputer = false) => {
  const attacksList = new Set();
  let availableMovesSet = new Set();
  let activePlayer = false;

  function generateMovesSet() {
    const movesSet = new Set();
    for (let i = 65; i <= 74; i += 1) {
      // A-J unicode
      for (let j = 1; j <= 10; j += 1) {
        movesSet.add(String.fromCharCode(i) + j);
      }
    }
    return movesSet;
  }

  if (isComputer) availableMovesSet = generateMovesSet();

  function randomAttack() {
    const random = Math.floor(Math.random() * availableMovesSet.size);
    const randomCoordinate = Array.from(availableMovesSet)[random];
    availableMovesSet.delete(randomCoordinate);
    attacksList.add(randomCoordinate);
    return randomCoordinate;
  }

  return {
    get isComputer() {
      return isComputer;
    },
    get attacksList() {
      return attacksList;
    },
    get activePlayer() {
      return activePlayer;
    },
    set activePlayer(activeFlag) {
      activePlayer = activeFlag;
    },
    randomAttack,
  };
};

const gameController = (() => {
  const playerOne = Player();
  const playerTwo = Player(true);
  const playerOneBoard = Gameboard();
  const playerTwoBoard = Gameboard();
  let gameOver = false;
  let winner = null;
  playerOne.activePlayer = true;

  const playerOneShipOne = Ship(5);
  const playerOneShipTwo = Ship(3);
  const playerOneShipThree = Ship(2);

  const playerTwoShipOne = Ship(4);
  const playerTwoShipTwo = Ship(1);
  const playerTwoShipThree = Ship(2);

  const playerOneShipPositions = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['C3', 'D3', 'E3'],
    ['J2', 'J3'],
  ];

  const playerTwoShipPositions = [
    ['B1', 'B2', 'B3', 'B4'],
    ['D5'],
    ['I4', 'I5'],
  ];

  playerOneBoard.placeShip(playerOneShipOne, playerOneShipPositions[0]);
  playerOneBoard.placeShip(playerOneShipTwo, playerOneShipPositions[1]);
  playerOneBoard.placeShip(playerOneShipThree, playerOneShipPositions[2]);

  playerTwoBoard.placeShip(playerTwoShipOne, playerTwoShipPositions[0]);
  playerTwoBoard.placeShip(playerTwoShipTwo, playerTwoShipPositions[1]);
  playerTwoBoard.placeShip(playerTwoShipThree, playerTwoShipPositions[2]);

  const playRound = (attackCoord, playerTwoTurn = false) => {
    let randomAttackCoord = null;
    if (!gameOver) {
      if (!playerTwoTurn) {
        playerTwoBoard.receiveAttack(attackCoord);
      } else {
        randomAttackCoord = playerTwo.randomAttack();
        playerOneBoard.receiveAttack(randomAttackCoord);
      }
      if (playerOneBoard.isEveryShipSunk()) {
        winner = playerTwo;
        gameOver = true;
      } else if (playerTwoBoard.isEveryShipSunk()) {
        winner = playerOne;
        gameOver = true;
      }
    }
    return randomAttackCoord;
  };

  return {
    get playerOneBoard() {
      return playerOneBoard;
    },
    get playerTwoBoard() {
      return playerTwoBoard;
    },
    get gameOver() {
      return gameOver;
    },
    get winner() {
      return winner;
    },
    get playerOne() {
      return playerOne;
    },
    get playerTwo() {
      return playerTwo;
    },
    playRound,
  };
})();

const displayController = (() => {
  const playerOneBoardDiv = document.querySelector('#playerOneBoard');
  const playerTwoBoardDiv = document.querySelector('#playerTwoBoard');
  const { playerOneBoard, playerTwoBoard } = gameController;

  const refreshBoard = (playerBoard, isComputer = false) => {
    const boardDiv = document.createElement('div');
    const { board } = playerBoard;
    let initAlphaCharCode = 63;

    function nextChar(charCode) {
      return String.fromCharCode(charCode + 1);
    }

    function newLabelDiv(charCode, isNum = false) {
      const labelDiv = document.createElement('div');
      labelDiv.classList.add('board-label');
      if (isNum) {
        labelDiv.textContent = charCode;
      } else {
        labelDiv.textContent = nextChar(charCode);
      }
      return labelDiv;
    }

    board.forEach((row, rowIndex) =>
      row.forEach((cell, colIndex) => {
        const cellButton = document.createElement('button');
        const coordinates = playerBoard.indexToCoordinate(rowIndex, colIndex);
        cellButton.dataset.coord = coordinates;
        cellButton.classList.add('battlefield-cell');
        if (!isComputer) {
          cellButton.disabled = true;
          cellButton.classList.add('player');
          if (cell) {
            cellButton.classList.add('ship-box');
          }
        }
        cellButton.addEventListener('click', (ev) => clickHandlerCell(ev));

        boardDiv.classList.add('player-board');

        // add alphabetic row labels to the left side of board
        if (colIndex % 10 === 0) {
          boardDiv.appendChild(newLabelDiv((initAlphaCharCode += 1)));
        }

        boardDiv.appendChild(cellButton);
      }),
    );

    // add numeric column labels under the board
    boardDiv.appendChild(newLabelDiv(-1));
    for (let i = 1; i <= 10; i += 1) {
      boardDiv.appendChild(newLabelDiv(i, true));
    }

    return boardDiv;
  };

  function clickHandlerCell(ev) {
    const selectedCell = ev.target;
    const selectedCellCoordinates = selectedCell.dataset.coord;
    const [row, col] = playerOneBoard.coordinateToIndex(
      selectedCellCoordinates,
    );
    gameController.playRound(selectedCellCoordinates);
    if (playerTwoBoard.board[row][col]) {
      selectedCell.classList.add('hit');
    } else {
      selectedCell.classList.add('miss');
    }

    function delay(time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }

    const playerOneAttackCooord = gameController.playRound(undefined, true);
    if (playerOneAttackCooord) {
      delay(200).then(() => {
        const playerOneAttackCell = document.querySelector(
          `[data-coord="${playerOneAttackCooord}"]`,
        );
        const [playerOneRow, playerOneCol] = playerOneBoard.coordinateToIndex(
          playerOneAttackCooord,
        );
        playerOneAttackCell.disabled = false;

        if (playerOneBoard.board[playerOneRow][playerOneCol]) {
          playerOneAttackCell.classList.add('hit');
        } else {
          playerOneAttackCell.classList.add('miss');
        }
        selectedCell.disabled = true;
        playerOneAttackCell.disabled = true;
      });
    }

    if (gameController.gameOver) {
      displayWinner(gameController.winner);
    }
  }

  function displayWinner(winningPlayer) {
    const resultsDiv = document.querySelector('#resultsBoard');
    if (winningPlayer === gameController.playerOne) {
      resultsDiv.textContent = 'You Win!';
    } else {
      resultsDiv.textContent = 'Opponent Wins!';
    }
  }

  playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
  playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
})();

const funcs = {
  Ship,
  Gameboard,
  Player,
  gameController,
  displayController,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funcs);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlDQUFpQzs7QUFFM0M7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDA7MSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuI3BhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNDhweDtcbiAgY29sdW1uLWdhcDogOTZweDtcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMjRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDMycHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMzJweCk7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbn1cblxuLmJvYXJkLWxhYmVsIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iYXR0bGVmaWVsZC1jZWxsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgb3V0bGluZTogaW5oZXJpdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRmZjtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmJhdHRsZWZpZWxkLWNlbGw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGlwLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODc4Yzk7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uaGl0OjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogJ1xcXFwyNzRjJzsgLyogVGhpcyB3aWxsIHJlbmRlciB0aGUgJ1gnICovXG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5taXNzOjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogJ+KXjyc7IC8qIFRoaXMgd2lsbCByZW5kZXIgdGhlICdYJyAqL1xufVxuXG4jcmVzdWx0c0JvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0OHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFFLDZCQUE2QjtBQUNqRDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUUsNkJBQTZCO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDA7MSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxuICBjb2x1bW4tZ2FwOiA5NnB4O1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDI0cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMzJweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMzJweCk7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmF0dGxlZmllbGQtY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGZmO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5iYXR0bGVmaWVsZC1jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODc4Yzk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLmhpdDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29udGVudDogJ1xcXFwyNzRjJzsgLyogVGhpcyB3aWxsIHJlbmRlciB0aGUgJ1gnICovXFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWlzczo6YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29udGVudDogJ+KXjyc7IC8qIFRoaXMgd2lsbCByZW5kZXIgdGhlICdYJyAqL1xcbn1cXG5cXG4jcmVzdWx0c0JvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNDhweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5mdW5jdGlvbiBTaGlwKHNpemUgPSBudWxsKSB7XG4gIGxldCBsZW5ndGggPSBzaXplO1xuICBsZXQgaGl0Q291bnRlciA9IG51bGw7XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiBsZW5ndGggPyBsZW5ndGggPT09IGhpdENvdW50ZXIgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBoaXRDb3VudGVyICs9IDE7XG4gICAgcmV0dXJuIGhpdENvdW50ZXI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgc2V0IGxlbmd0aChuZXdMZW5ndGgpIHtcbiAgICAgIGxlbmd0aCA9IG5ld0xlbmd0aDtcbiAgICB9LFxuICAgIGdldCBoaXRDb3VudGVyKCkge1xuICAgICAgcmV0dXJuIGhpdENvdW50ZXI7XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIG5ldzJEQXJyYXkoc2l6ZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHNpemUpLCAoKSA9PiBuZXcgQXJyYXkoc2l6ZSkuZmlsbChudWxsKSk7XG4gIH1cblxuICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgbGV0IGJvYXJkID0gbmV3MkRBcnJheShib2FyZFNpemUpO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZS5zdWJzdHJpbmcoMSk7XG4gICAgY29uc3Qgcm93Q2hhckNvZGUgPSByb3cuY2hhckNvZGVBdCgpO1xuICAgIGNvbnN0IHJvd0luZGV4VmFsdWUgPSByb3dDaGFyQ29kZSAtIDY1O1xuICAgIGNvbnN0IGNvbEluZGV4VmFsdWUgPSBOdW1iZXIoY29sKSAtIDE7XG4gICAgcmV0dXJuIFtyb3dJbmRleFZhbHVlLCBjb2xJbmRleFZhbHVlXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZGV4VG9Db29yZGluYXRlKHJvdywgY29sKSB7XG4gICAgY29uc3Qgcm93Q2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdyArIDY1KTtcbiAgICByZXR1cm4gcm93Q2hhckNvZGUgKyAoY29sICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkQ29vcmRpbmF0ZShjb29yZGluYXRlKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IFtyb3dJbmRleCwgY29sSW5kZXhdID0gWy4uLmNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpXTtcbiAgICBbcm93SW5kZXgsIGNvbEluZGV4XS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gYm9hcmRTaXplIC0gMSkge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc09jY3VwaWVkKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gWy4uLmNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpXTtcbiAgICByZXR1cm4gISFib2FyZFtyb3ddW2NvbF07XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAoXG4gICAgICBzaGlwLmxlbmd0aCAhPT0gY29vcmRpbmF0ZXMubGVuZ3RoIHx8XG4gICAgICBjb29yZGluYXRlcy5zb21lKChjb29yZCkgPT4gIWlzVmFsaWRDb29yZGluYXRlKGNvb3JkKSkgfHxcbiAgICAgIGNvb3JkaW5hdGVzLnNvbWUoKGNvb3JkKSA9PiBpc09jY3VwaWVkKGNvb3JkKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZGluYXRlVG9JbmRleChjb29yZCk7XG4gICAgICBib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgY29uc3QgW3JvdywgY29sXSA9IFsuLi5jb29yZGluYXRlVG9JbmRleChjb29yZGluYXRlKV07XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXSkge1xuICAgICAgYm9hcmRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGJvYXJkID0gbmV3MkRBcnJheShib2FyZFNpemUpO1xuICAgIG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlcnlTaGlwU3VuaygpIHtcbiAgICBsZXQgc2hpcHNTdW5rID0gdHJ1ZTtcbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+XG4gICAgICByb3cuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcCAhPT0gbnVsbCAmJiAhc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgIHNoaXBzU3VuayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICAgIHJldHVybiBzaGlwc1N1bms7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJlc2V0LFxuICAgIGlzRXZlcnlTaGlwU3VuayxcbiAgICBpbmRleFRvQ29vcmRpbmF0ZSxcbiAgICBjb29yZGluYXRlVG9JbmRleCxcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgbWlzc2VkQXR0YWNrcygpIHtcbiAgICAgIHJldHVybiBtaXNzZWRBdHRhY2tzO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBQbGF5ZXIgPSAoaXNDb21wdXRlciA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGF0dGFja3NMaXN0ID0gbmV3IFNldCgpO1xuICBsZXQgYXZhaWxhYmxlTW92ZXNTZXQgPSBuZXcgU2V0KCk7XG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZU1vdmVzU2V0KCkge1xuICAgIGNvbnN0IG1vdmVzU2V0ID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSA2NTsgaSA8PSA3NDsgaSArPSAxKSB7XG4gICAgICAvLyBBLUogdW5pY29kZVxuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGogKz0gMSkge1xuICAgICAgICBtb3Zlc1NldC5hZGQoU3RyaW5nLmZyb21DaGFyQ29kZShpKSArIGopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW92ZXNTZXQ7XG4gIH1cblxuICBpZiAoaXNDb21wdXRlcikgYXZhaWxhYmxlTW92ZXNTZXQgPSBnZW5lcmF0ZU1vdmVzU2V0KCk7XG5cbiAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKCkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZU1vdmVzU2V0LnNpemUpO1xuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBBcnJheS5mcm9tKGF2YWlsYWJsZU1vdmVzU2V0KVtyYW5kb21dO1xuICAgIGF2YWlsYWJsZU1vdmVzU2V0LmRlbGV0ZShyYW5kb21Db29yZGluYXRlKTtcbiAgICBhdHRhY2tzTGlzdC5hZGQocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBpc0NvbXB1dGVyKCkge1xuICAgICAgcmV0dXJuIGlzQ29tcHV0ZXI7XG4gICAgfSxcbiAgICBnZXQgYXR0YWNrc0xpc3QoKSB7XG4gICAgICByZXR1cm4gYXR0YWNrc0xpc3Q7XG4gICAgfSxcbiAgICBnZXQgYWN0aXZlUGxheWVyKCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgICB9LFxuICAgIHNldCBhY3RpdmVQbGF5ZXIoYWN0aXZlRmxhZykge1xuICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlRmxhZztcbiAgICB9LFxuICAgIHJhbmRvbUF0dGFjayxcbiAgfTtcbn07XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKCk7XG4gIGNvbnN0IHBsYXllclR3byA9IFBsYXllcih0cnVlKTtcbiAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gIGxldCB3aW5uZXIgPSBudWxsO1xuICBwbGF5ZXJPbmUuYWN0aXZlUGxheWVyID0gdHJ1ZTtcblxuICBjb25zdCBwbGF5ZXJPbmVTaGlwT25lID0gU2hpcCg1KTtcbiAgY29uc3QgcGxheWVyT25lU2hpcFR3byA9IFNoaXAoMyk7XG4gIGNvbnN0IHBsYXllck9uZVNoaXBUaHJlZSA9IFNoaXAoMik7XG5cbiAgY29uc3QgcGxheWVyVHdvU2hpcE9uZSA9IFNoaXAoNCk7XG4gIGNvbnN0IHBsYXllclR3b1NoaXBUd28gPSBTaGlwKDEpO1xuICBjb25zdCBwbGF5ZXJUd29TaGlwVGhyZWUgPSBTaGlwKDIpO1xuXG4gIGNvbnN0IHBsYXllck9uZVNoaXBQb3NpdGlvbnMgPSBbXG4gICAgWydBMScsICdBMicsICdBMycsICdBNCcsICdBNSddLFxuICAgIFsnQzMnLCAnRDMnLCAnRTMnXSxcbiAgICBbJ0oyJywgJ0ozJ10sXG4gIF07XG5cbiAgY29uc3QgcGxheWVyVHdvU2hpcFBvc2l0aW9ucyA9IFtcbiAgICBbJ0IxJywgJ0IyJywgJ0IzJywgJ0I0J10sXG4gICAgWydENSddLFxuICAgIFsnSTQnLCAnSTUnXSxcbiAgXTtcblxuICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcE9uZSwgcGxheWVyT25lU2hpcFBvc2l0aW9uc1swXSk7XG4gIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJPbmVTaGlwVHdvLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzFdKTtcbiAgcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllck9uZVNoaXBUaHJlZSwgcGxheWVyT25lU2hpcFBvc2l0aW9uc1syXSk7XG5cbiAgcGxheWVyVHdvQm9hcmQucGxhY2VTaGlwKHBsYXllclR3b1NoaXBPbmUsIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbMF0pO1xuICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcFR3bywgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1sxXSk7XG4gIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChwbGF5ZXJUd29TaGlwVGhyZWUsIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbMl0pO1xuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChhdHRhY2tDb29yZCwgcGxheWVyVHdvVHVybiA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IHJhbmRvbUF0dGFja0Nvb3JkID0gbnVsbDtcbiAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICBpZiAoIXBsYXllclR3b1R1cm4pIHtcbiAgICAgICAgcGxheWVyVHdvQm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5kb21BdHRhY2tDb29yZCA9IHBsYXllclR3by5yYW5kb21BdHRhY2soKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21BdHRhY2tDb29yZCk7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyT25lQm9hcmQuaXNFdmVyeVNoaXBTdW5rKCkpIHtcbiAgICAgICAgd2lubmVyID0gcGxheWVyVHdvO1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllclR3b0JvYXJkLmlzRXZlcnlTaGlwU3VuaygpKSB7XG4gICAgICAgIHdpbm5lciA9IHBsYXllck9uZTtcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrQ29vcmQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcGxheWVyT25lQm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyT25lQm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgcGxheWVyVHdvQm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyVHdvQm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgZ2FtZU92ZXIoKSB7XG4gICAgICByZXR1cm4gZ2FtZU92ZXI7XG4gICAgfSxcbiAgICBnZXQgd2lubmVyKCkge1xuICAgICAgcmV0dXJuIHdpbm5lcjtcbiAgICB9LFxuICAgIGdldCBwbGF5ZXJPbmUoKSB7XG4gICAgICByZXR1cm4gcGxheWVyT25lO1xuICAgIH0sXG4gICAgZ2V0IHBsYXllclR3bygpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJUd287XG4gICAgfSxcbiAgICBwbGF5Um91bmQsXG4gIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck9uZUJvYXJkJyk7XG4gIGNvbnN0IHBsYXllclR3b0JvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclR3b0JvYXJkJyk7XG4gIGNvbnN0IHsgcGxheWVyT25lQm9hcmQsIHBsYXllclR3b0JvYXJkIH0gPSBnYW1lQ29udHJvbGxlcjtcblxuICBjb25zdCByZWZyZXNoQm9hcmQgPSAocGxheWVyQm9hcmQsIGlzQ29tcHV0ZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgeyBib2FyZCB9ID0gcGxheWVyQm9hcmQ7XG4gICAgbGV0IGluaXRBbHBoYUNoYXJDb2RlID0gNjM7XG5cbiAgICBmdW5jdGlvbiBuZXh0Q2hhcihjaGFyQ29kZSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUgKyAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdMYWJlbERpdihjaGFyQ29kZSwgaXNOdW0gPSBmYWxzZSkge1xuICAgICAgY29uc3QgbGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGxhYmVsRGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWxhYmVsJyk7XG4gICAgICBpZiAoaXNOdW0pIHtcbiAgICAgICAgbGFiZWxEaXYudGV4dENvbnRlbnQgPSBjaGFyQ29kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsRGl2LnRleHRDb250ZW50ID0gbmV4dENoYXIoY2hhckNvZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhYmVsRGl2O1xuICAgIH1cblxuICAgIGJvYXJkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHBsYXllckJvYXJkLmluZGV4VG9Db29yZGluYXRlKHJvd0luZGV4LCBjb2xJbmRleCk7XG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb29yZCA9IGNvb3JkaW5hdGVzO1xuICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZWZpZWxkLWNlbGwnKTtcbiAgICAgICAgaWYgKCFpc0NvbXB1dGVyKSB7XG4gICAgICAgICAgY2VsbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKTtcbiAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGlwLWJveCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjZWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiBjbGlja0hhbmRsZXJDZWxsKGV2KSk7XG5cbiAgICAgICAgYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgncGxheWVyLWJvYXJkJyk7XG5cbiAgICAgICAgLy8gYWRkIGFscGhhYmV0aWMgcm93IGxhYmVscyB0byB0aGUgbGVmdCBzaWRlIG9mIGJvYXJkXG4gICAgICAgIGlmIChjb2xJbmRleCAlIDEwID09PSAwKSB7XG4gICAgICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQobmV3TGFiZWxEaXYoKGluaXRBbHBoYUNoYXJDb2RlICs9IDEpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICAvLyBhZGQgbnVtZXJpYyBjb2x1bW4gbGFiZWxzIHVuZGVyIHRoZSBib2FyZFxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKG5ld0xhYmVsRGl2KC0xKSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQobmV3TGFiZWxEaXYoaSwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBib2FyZERpdjtcbiAgfTtcblxuICBmdW5jdGlvbiBjbGlja0hhbmRsZXJDZWxsKGV2KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHNlbGVjdGVkQ2VsbENvb3JkaW5hdGVzID0gc2VsZWN0ZWRDZWxsLmRhdGFzZXQuY29vcmQ7XG4gICAgY29uc3QgW3JvdywgY29sXSA9IHBsYXllck9uZUJvYXJkLmNvb3JkaW5hdGVUb0luZGV4KFxuICAgICAgc2VsZWN0ZWRDZWxsQ29vcmRpbmF0ZXMsXG4gICAgKTtcbiAgICBnYW1lQ29udHJvbGxlci5wbGF5Um91bmQoc2VsZWN0ZWRDZWxsQ29vcmRpbmF0ZXMpO1xuICAgIGlmIChwbGF5ZXJUd29Cb2FyZC5ib2FyZFtyb3ddW2NvbF0pIHtcbiAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllck9uZUF0dGFja0Nvb29yZCA9IGdhbWVDb250cm9sbGVyLnBsYXlSb3VuZCh1bmRlZmluZWQsIHRydWUpO1xuICAgIGlmIChwbGF5ZXJPbmVBdHRhY2tDb29vcmQpIHtcbiAgICAgIGRlbGF5KDIwMCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUF0dGFja0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb29yZD1cIiR7cGxheWVyT25lQXR0YWNrQ29vb3JkfVwiXWAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IFtwbGF5ZXJPbmVSb3csIHBsYXllck9uZUNvbF0gPSBwbGF5ZXJPbmVCb2FyZC5jb29yZGluYXRlVG9JbmRleChcbiAgICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDb29vcmQsXG4gICAgICAgICk7XG4gICAgICAgIHBsYXllck9uZUF0dGFja0NlbGwuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAocGxheWVyT25lQm9hcmQuYm9hcmRbcGxheWVyT25lUm93XVtwbGF5ZXJPbmVDb2xdKSB7XG4gICAgICAgICAgcGxheWVyT25lQXR0YWNrQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RlZENlbGwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDZWxsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChnYW1lQ29udHJvbGxlci5nYW1lT3Zlcikge1xuICAgICAgZGlzcGxheVdpbm5lcihnYW1lQ29udHJvbGxlci53aW5uZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIod2lubmluZ1BsYXllcikge1xuICAgIGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0c0JvYXJkJyk7XG4gICAgaWYgKHdpbm5pbmdQbGF5ZXIgPT09IGdhbWVDb250cm9sbGVyLnBsYXllck9uZSkge1xuICAgICAgcmVzdWx0c0Rpdi50ZXh0Q29udGVudCA9ICdZb3UgV2luISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHNEaXYudGV4dENvbnRlbnQgPSAnT3Bwb25lbnQgV2lucyEnO1xuICAgIH1cbiAgfVxuXG4gIHBsYXllck9uZUJvYXJkRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCb2FyZChwbGF5ZXJPbmVCb2FyZCkpO1xuICBwbGF5ZXJUd29Cb2FyZERpdi5hcHBlbmRDaGlsZChyZWZyZXNoQm9hcmQocGxheWVyVHdvQm9hcmQsIHRydWUpKTtcbn0pKCk7XG5cbmNvbnN0IGZ1bmNzID0ge1xuICBTaGlwLFxuICBHYW1lYm9hcmQsXG4gIFBsYXllcixcbiAgZ2FtZUNvbnRyb2xsZXIsXG4gIGRpc3BsYXlDb250cm9sbGVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3M7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=