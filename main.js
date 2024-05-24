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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);"]);
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
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header'
    'content content'
    'footer footer';
  place-items: center;
}

#content {
  grid-area: content;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'playerBoard playerBoard'
    'resultsBoard resultsBoard'
    'playAgainButton playAgainButton';
  align-self: start;
  padding-top: 48px;
  place-items: center;
}

#header {
  grid-area: header;
  font-family: 'Black Ops One', system-ui;
  font-weight: 400;
  font-size: 48px;
  font-style: normal;
  padding: 16px;
  background-color: #ebebeb;
  width: 100%;
  text-align: center;
}

#playerOneTitle,
#playerTwoTitle {
  grid-area: playerOneTitle;
  /* font-family: 'Black Ops One', system-ui; */
  font-size: 24px;
  font-weight: 800;
  font-style: normal;
  padding: 24px 0px 12px 0px;
}

#playerOneTitle {
  color: rgba(64, 95, 127, 0.765);
}

#playerTwoTitle {
  color: rgb(212, 106, 106);
}

#boards {
  grid-area: playerBoard;
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  align-items: center;
}

.player-board {
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(11, 32px);
  grid-template-rows: repeat(11, 32px);
}

.board-label {
  height: 32px;
  width: 32px;
  font-weight: 600;
  color: rgb(125, 125, 125);
  display: flex;
  justify-content: center;
  align-items: center;
}

.battlefield-cell {
  background: none;
  border-radius: 2px;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  border: 1px solid #dcdbdb;
  height: 32px;
  width: 32px;
  transition: all 0.2s ease-out;
}

#playerOneBoard,
#playerTwoBoard {
  text-align: center;
}

#playerTwoBoard .battlefield-cell:hover:not(.hit) {
  cursor: pointer;
  background-color: #ebebeb;
}

.ship-box {
  background-color: rgba(64, 95, 127, 0.669);
}

.hit {
  background-color: rgba(212, 106, 106, 0.669);
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
  grid-area: resultsBoard;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 800;
  width: 100%;
  margin-top: 48px;
}

.loser {
  color: lightcoral;
}

.winner {
  color: #407f7f;
}

.play-again-btn {
  grid-area: playAgainButton;
  margin: 2rem;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #407f7f;
  color: white;
  display: none;
}

.play-again-btn:hover {
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

#footer {
  grid-area: footer;
  max-height: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.639);
  padding: 12px;
}

.copyright {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.copyright a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright img {
  height: 16px;
}

#footer a {
  color: inherit;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAGA;;;EAGE,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,iCAAiC;EACjC;;;mBAGiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mCAAmC;EACnC;;;qCAGmC;EACnC,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;EACvC,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,yBAAyB;EACzB,6CAA6C;EAC7C,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,6BAA6B;AAC/B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;EACrB,gBAAgB,EAAE,6BAA6B;AACjD;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,YAAY,EAAE,6BAA6B;AAC7C;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf;qCACmC;AACrC;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n#page-container {\n  display: grid;\n  min-height: 100vh;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    'header header'\n    'content content'\n    'footer footer';\n  place-items: center;\n}\n\n#content {\n  grid-area: content;\n  display: grid;\n  grid-template-rows: repeat(3, auto);\n  grid-template-areas:\n    'playerBoard playerBoard'\n    'resultsBoard resultsBoard'\n    'playAgainButton playAgainButton';\n  align-self: start;\n  padding-top: 48px;\n  place-items: center;\n}\n\n#header {\n  grid-area: header;\n  font-family: 'Black Ops One', system-ui;\n  font-weight: 400;\n  font-size: 48px;\n  font-style: normal;\n  padding: 16px;\n  background-color: #ebebeb;\n  width: 100%;\n  text-align: center;\n}\n\n#playerOneTitle,\n#playerTwoTitle {\n  grid-area: playerOneTitle;\n  /* font-family: 'Black Ops One', system-ui; */\n  font-size: 24px;\n  font-weight: 800;\n  font-style: normal;\n  padding: 24px 0px 12px 0px;\n}\n\n#playerOneTitle {\n  color: rgba(64, 95, 127, 0.765);\n}\n\n#playerTwoTitle {\n  color: rgb(212, 106, 106);\n}\n\n#boards {\n  grid-area: playerBoard;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 48px;\n  justify-content: center;\n  align-items: center;\n}\n\n.player-board {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(11, 32px);\n  grid-template-rows: repeat(11, 32px);\n}\n\n.board-label {\n  height: 32px;\n  width: 32px;\n  font-weight: 600;\n  color: rgb(125, 125, 125);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.battlefield-cell {\n  background: none;\n  border-radius: 2px;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  outline: inherit;\n  border: 1px solid #dcdbdb;\n  height: 32px;\n  width: 32px;\n  transition: all 0.2s ease-out;\n}\n\n#playerOneBoard,\n#playerTwoBoard {\n  text-align: center;\n}\n\n#playerTwoBoard .battlefield-cell:hover:not(.hit) {\n  cursor: pointer;\n  background-color: #ebebeb;\n}\n\n.ship-box {\n  background-color: rgba(64, 95, 127, 0.669);\n}\n\n.hit {\n  background-color: rgba(212, 106, 106, 0.669);\n}\n\n.hit::after {\n  display: inline-block;\n  content: '\\274c'; /* This will render the 'X' */\n}\n\n.miss {\n  background: transparent;\n}\n\n.miss::after {\n  display: inline-block;\n  content: '●'; /* This will render the 'X' */\n}\n\n#resultsBoard {\n  grid-area: resultsBoard;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  width: 100%;\n  margin-top: 48px;\n}\n\n.loser {\n  color: lightcoral;\n}\n\n.winner {\n  color: #407f7f;\n}\n\n.play-again-btn {\n  grid-area: playAgainButton;\n  margin: 2rem;\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: #407f7f;\n  color: white;\n  display: none;\n}\n\n.play-again-btn:hover {\n  cursor: pointer;\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n    0 17px 50px 0 rgba(0, 0, 0, 0.19);\n}\n\n#footer {\n  grid-area: footer;\n  max-height: 48px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: rgba(0, 0, 0, 0.639);\n  padding: 12px;\n}\n\n.copyright {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n\n.copyright a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.copyright img {\n  height: 16px;\n}\n\n#footer a {\n  color: inherit;\n}\n"],"sourceRoot":""}]);
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
  const id = Math.floor(Math.random() * Date.now());

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
    get id() {
      return id;
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

  function placeShipRandomly(ship) {
    // const newShipCoordinates = new Array(ship.length).fill(null);
    placeShip(ship, randomCoordinates(ship.length));

    // function randomCloseCoord(coord) {
    //   const changeValue = [-1, 0, 1];
    //   const randomXIndex = Math.floor(Math.random() * changeValue.length);
    //   const randomYIndex = Math.floor(Math.random() * changeValue.length);
    //   const randomX = changeValue[randomXIndex];
    //   const randomY = changeValue[randomYIndex];

    //   let xCoord = Number(coord.substring(1)) + randomY;
    //   let yCoordCharCode = coord.charCodeAt(0) + randomX;
    //   const newCoord = String.fromCharCode(yCoordCharCode) + xCoord.toString();

    //   if (!isValidCoordinate(newCoord)) {
    //     if (isOccupied(newCoord)) {
    //     }
    //   }

    //   if (xCoord > 74) xCoord = 65;
    //   else if (xCoord < 65) xCoord = 74;
    //   if (yCoordCharCode > 74) yCoordCharCode = 65;
    //   else if (yCoordCharCode < 65) yCoordCharCode = 74;
    // }

    function randomCoordinates(shipLength) {
      const randomRowIndex = Math.floor(Math.random() * boardSize);
      const randomColIndex = Math.floor(Math.random() * boardSize);
      const orientation = ['horizontal', 'vertical'];
      const randomOrientation =
        orientation[Math.floor(Math.random() * orientation.length)];
      const coordinates = [];

      if (!isOccupied(indexToCoordinate(randomRowIndex, randomColIndex))) {
        const verticalCoords = [];
        const horizontalCoords = [];
        if (shipLength === 5) {
          verticalCoords.push(
            indexToCoordinate(randomRowIndex - 2, randomColIndex),
            indexToCoordinate(randomRowIndex - 1, randomColIndex),
            indexToCoordinate(randomRowIndex, randomColIndex),
            indexToCoordinate(randomRowIndex + 1, randomColIndex),
            indexToCoordinate(randomRowIndex + 2, randomColIndex),
          );
          horizontalCoords.push(
            indexToCoordinate(randomRowIndex, randomColIndex - 2),
            indexToCoordinate(randomRowIndex, randomColIndex - 1),
            indexToCoordinate(randomRowIndex, randomColIndex),
            indexToCoordinate(randomRowIndex, randomColIndex + 1),
            indexToCoordinate(randomRowIndex, randomColIndex + 2),
          );
          if (
            randomOrientation === 'vertical' &&
            hasValidCoordinates(verticalCoords)
          ) {
            return verticalCoords;
          }
          if (hasValidCoordinates(horizontalCoords)) {
            return horizontalCoords;
          }
          if (hasValidCoordinates(verticalCoords)) {
            return verticalCoords;
          }
        }
      }
      return randomCoordinates(shipLength);
      function hasValidCoordinates(coords) {
        return coords.every((newCoord) => isValidCoordinate(newCoord));
      }
    }
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
    placeShipRandomly,
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
  let playerOne;
  let playerTwo;
  let playerOneBoard;
  let playerTwoBoard;
  let gameOver;
  let winner;

  let playerOneShipOne;
  let playerOneShipTwo;
  let playerOneShipThree;
  let playerOneShipFour;
  let playerOneShipFive;

  let playerTwoShipOne;
  let playerTwoShipTwo;
  let playerTwoShipThree;
  let playerTwoShipFour;
  let playerTwoShipFive;

  const playerOneShipPositions = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B7', 'C7', 'D7', 'E7'],
    ['C3', 'D3', 'E3'],
    ['G8', 'G9', 'G10'],
    ['J2', 'J3'],
  ];

  const playerTwoShipPositions = [
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['E2', 'F2', 'G2', 'H2'],
    ['F8', 'F9', 'F10'],
    ['A9', 'B9', 'C9'],
    ['I4', 'I5'],
  ];

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

  const reset = () => {
    playerOne = Player();
    playerTwo = Player(true);
    playerOneBoard = Gameboard();
    playerTwoBoard = Gameboard();
    gameOver = false;
    winner = null;
    playerOneShipOne = Ship(5);
    playerOneShipTwo = Ship(4);
    playerOneShipThree = Ship(3);
    playerOneShipFour = Ship(3);
    playerOneShipFive = Ship(2);
    playerTwoShipOne = Ship(5);
    playerTwoShipTwo = Ship(4);
    playerTwoShipThree = Ship(3);
    playerTwoShipFour = Ship(3);
    playerTwoShipFive = Ship(2);
    // playerOneBoard.placeShip(playerOneShipOne, playerOneShipPositions[0]);
    // playerOneBoard.placeShip(playerOneShipTwo, playerOneShipPositions[1]);
    // playerOneBoard.placeShip(playerOneShipThree, playerOneShipPositions[2]);
    // playerOneBoard.placeShip(playerOneShipFour, playerOneShipPositions[3]);
    // playerOneBoard.placeShip(playerOneShipFive, playerOneShipPositions[4]);
    playerTwoBoard.placeShip(playerTwoShipOne, playerTwoShipPositions[0]);
    playerTwoBoard.placeShip(playerTwoShipTwo, playerTwoShipPositions[1]);
    playerTwoBoard.placeShip(playerTwoShipThree, playerTwoShipPositions[2]);
    playerTwoBoard.placeShip(playerTwoShipFour, playerTwoShipPositions[3]);
    playerTwoBoard.placeShip(playerTwoShipFive, playerTwoShipPositions[4]);
    playerOneBoard.placeShipRandomly(playerOneShipOne);
  };

  reset();

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
    reset,
  };
})();

const displayController = (() => {
  const playerOneBoardDiv = document.querySelector('#playerOneBoard');
  const playerTwoBoardDiv = document.querySelector('#playerTwoBoard');
  const resultsDiv = document.querySelector('#resultsBoard');
  let { playerOneBoard, playerTwoBoard } = gameController;
  const playAgainButton = document.createElement('button');
  playAgainButton.textContent = 'Play Again';
  playAgainButton.classList.add('play-again-btn');

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

    const playerOneAttackCooord = gameController.playRound(undefined, true);
    if (playerOneAttackCooord) {
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
    }

    if (gameController.gameOver) {
      displayWinner(gameController.winner);
      togglePlayAgainButton();
      Array.from(
        playerTwoBoardDiv.querySelector('.player-board').children,
      ).forEach((childNode) => {
        childNode.disabled = true;
      });
    }
  }

  function togglePlayAgainButton() {
    if (playAgainButton.style.display === 'block') {
      playAgainButton.style.display = 'none';
    } else playAgainButton.style.display = 'block';
  }

  function resetPage() {
    playerOneBoardDiv.removeChild(playerOneBoardDiv.lastChild);
    playerTwoBoardDiv.removeChild(playerTwoBoardDiv.lastChild);
    resultsDiv.textContent = '';
    togglePlayAgainButton();
    playerOneBoard = gameController.playerOneBoard;
    playerTwoBoard = gameController.playerTwoBoard;
    playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
    playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
  }

  function clickHandlerPlayAgainButton() {
    gameController.reset();
    resetPage();
  }

  function displayWinner(winningPlayer) {
    if (winningPlayer === gameController.playerOne) {
      resultsDiv.textContent = 'You Win!';
      resultsDiv.classList.add('winner');
      resultsDiv.classList.remove('loser');
    } else {
      resultsDiv.textContent = 'You Lose';
      resultsDiv.classList.add('loser');
      resultsDiv.classList.remove('winner');
    }
  }

  playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
  playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
  playAgainButton.addEventListener('click', () =>
    clickHandlerPlayAgainButton(),
  );
  document.querySelector('#content').append(playAgainButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUNBQWlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDA7MSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4jcGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdoZWFkZXIgaGVhZGVyJ1xuICAgICdjb250ZW50IGNvbnRlbnQnXG4gICAgJ2Zvb3RlciBmb290ZXInO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gIGdyaWQtYXJlYTogY29udGVudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ3BsYXllckJvYXJkIHBsYXllckJvYXJkJ1xuICAgICdyZXN1bHRzQm9hcmQgcmVzdWx0c0JvYXJkJ1xuICAgICdwbGF5QWdhaW5CdXR0b24gcGxheUFnYWluQnV0dG9uJztcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiA0OHB4O1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4jaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIHN5c3RlbS11aTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXJPbmVUaXRsZSxcbiNwbGF5ZXJUd29UaXRsZSB7XG4gIGdyaWQtYXJlYTogcGxheWVyT25lVGl0bGU7XG4gIC8qIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIHN5c3RlbS11aTsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHBhZGRpbmc6IDI0cHggMHB4IDEycHggMHB4O1xufVxuXG4jcGxheWVyT25lVGl0bGUge1xuICBjb2xvcjogcmdiYSg2NCwgOTUsIDEyNywgMC43NjUpO1xufVxuXG4jcGxheWVyVHdvVGl0bGUge1xuICBjb2xvcjogcmdiKDIxMiwgMTA2LCAxMDYpO1xufVxuXG4jYm9hcmRzIHtcbiAgZ3JpZC1hcmVhOiBwbGF5ZXJCb2FyZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDQ4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWVyLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAzMnB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDMycHgpO1xufVxuXG4uYm9hcmQtbGFiZWwge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiKDEyNSwgMTI1LCAxMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJhdHRsZWZpZWxkLWNlbGwge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IGluaGVyaXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RiZGI7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4jcGxheWVyT25lQm9hcmQsXG4jcGxheWVyVHdvQm9hcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXJUd29Cb2FyZCAuYmF0dGxlZmllbGQtY2VsbDpob3Zlcjpub3QoLmhpdCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi5zaGlwLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDk1LCAxMjcsIDAuNjY5KTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAxMDYsIDEwNiwgMC42NjkpO1xufVxuXG4uaGl0OjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogJ1xcXFwyNzRjJzsgLyogVGhpcyB3aWxsIHJlbmRlciB0aGUgJ1gnICovXG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5taXNzOjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogJ+KXjyc7IC8qIFRoaXMgd2lsbCByZW5kZXIgdGhlICdYJyAqL1xufVxuXG4jcmVzdWx0c0JvYXJkIHtcbiAgZ3JpZC1hcmVhOiByZXN1bHRzQm9hcmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5sb3NlciB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4ud2lubmVyIHtcbiAgY29sb3I6ICM0MDdmN2Y7XG59XG5cbi5wbGF5LWFnYWluLWJ0biB7XG4gIGdyaWQtYXJlYTogcGxheUFnYWluQnV0dG9uO1xuICBtYXJnaW46IDJyZW07XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDdmN2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksXG4gICAgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4jZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIG1heC1oZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzOSk7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLmNvcHlyaWdodCBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3B5cmlnaHQgaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4jZm9vdGVyIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakM7OzttQkFHaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7OztxQ0FHbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFFLDZCQUE2QjtBQUNqRDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUUsNkJBQTZCO0FBQzdDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Y7cUNBQ21DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDA7MSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdjb250ZW50IGNvbnRlbnQnXFxuICAgICdmb290ZXIgZm9vdGVyJztcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdwbGF5ZXJCb2FyZCBwbGF5ZXJCb2FyZCdcXG4gICAgJ3Jlc3VsdHNCb2FyZCByZXN1bHRzQm9hcmQnXFxuICAgICdwbGF5QWdhaW5CdXR0b24gcGxheUFnYWluQnV0dG9uJztcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy10b3A6IDQ4cHg7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgc3lzdGVtLXVpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJPbmVUaXRsZSxcXG4jcGxheWVyVHdvVGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBwbGF5ZXJPbmVUaXRsZTtcXG4gIC8qIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIHN5c3RlbS11aTsgKi9cXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBwYWRkaW5nOiAyNHB4IDBweCAxMnB4IDBweDtcXG59XFxuXFxuI3BsYXllck9uZVRpdGxlIHtcXG4gIGNvbG9yOiByZ2JhKDY0LCA5NSwgMTI3LCAwLjc2NSk7XFxufVxcblxcbiNwbGF5ZXJUd29UaXRsZSB7XFxuICBjb2xvcjogcmdiKDIxMiwgMTA2LCAxMDYpO1xcbn1cXG5cXG4jYm9hcmRzIHtcXG4gIGdyaWQtYXJlYTogcGxheWVyQm9hcmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA0OHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAzMnB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAzMnB4KTtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiByZ2IoMTI1LCAxMjUsIDEyNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmF0dGxlZmllbGQtY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkYmRiO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuI3BsYXllck9uZUJvYXJkLFxcbiNwbGF5ZXJUd29Cb2FyZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJUd29Cb2FyZCAuYmF0dGxlZmllbGQtY2VsbDpob3Zlcjpub3QoLmhpdCkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcXG59XFxuXFxuLnNoaXAtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDk1LCAxMjcsIDAuNjY5KTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMTA2LCAxMDYsIDAuNjY5KTtcXG59XFxuXFxuLmhpdDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29udGVudDogJ1xcXFwyNzRjJzsgLyogVGhpcyB3aWxsIHJlbmRlciB0aGUgJ1gnICovXFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWlzczo6YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29udGVudDogJ+KXjyc7IC8qIFRoaXMgd2lsbCByZW5kZXIgdGhlICdYJyAqL1xcbn1cXG5cXG4jcmVzdWx0c0JvYXJkIHtcXG4gIGdyaWQtYXJlYTogcmVzdWx0c0JvYXJkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogNDhweDtcXG59XFxuXFxuLmxvc2VyIHtcXG4gIGNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGNvbG9yOiAjNDA3ZjdmO1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idG4ge1xcbiAgZ3JpZC1hcmVhOiBwbGF5QWdhaW5CdXR0b247XFxuICBtYXJnaW46IDJyZW07XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDdmN2Y7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLFxcbiAgICAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBtYXgtaGVpZ2h0OiA0OHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MzkpO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbi5jb3B5cmlnaHQgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29weXJpZ2h0IGltZyB7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbiNmb290ZXIgYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5mdW5jdGlvbiBTaGlwKHNpemUgPSBudWxsKSB7XG4gIGxldCBsZW5ndGggPSBzaXplO1xuICBsZXQgaGl0Q291bnRlciA9IG51bGw7XG4gIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSk7XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiBsZW5ndGggPyBsZW5ndGggPT09IGhpdENvdW50ZXIgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBoaXRDb3VudGVyICs9IDE7XG4gICAgcmV0dXJuIGhpdENvdW50ZXI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgc2V0IGxlbmd0aChuZXdMZW5ndGgpIHtcbiAgICAgIGxlbmd0aCA9IG5ld0xlbmd0aDtcbiAgICB9LFxuICAgIGdldCBoaXRDb3VudGVyKCkge1xuICAgICAgcmV0dXJuIGhpdENvdW50ZXI7XG4gICAgfSxcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIG5ldzJEQXJyYXkoc2l6ZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHNpemUpLCAoKSA9PiBuZXcgQXJyYXkoc2l6ZSkuZmlsbChudWxsKSk7XG4gIH1cblxuICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgbGV0IGJvYXJkID0gbmV3MkRBcnJheShib2FyZFNpemUpO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZS5zdWJzdHJpbmcoMSk7XG4gICAgY29uc3Qgcm93Q2hhckNvZGUgPSByb3cuY2hhckNvZGVBdCgpO1xuICAgIGNvbnN0IHJvd0luZGV4VmFsdWUgPSByb3dDaGFyQ29kZSAtIDY1O1xuICAgIGNvbnN0IGNvbEluZGV4VmFsdWUgPSBOdW1iZXIoY29sKSAtIDE7XG4gICAgcmV0dXJuIFtyb3dJbmRleFZhbHVlLCBjb2xJbmRleFZhbHVlXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZGV4VG9Db29yZGluYXRlKHJvdywgY29sKSB7XG4gICAgY29uc3Qgcm93Q2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdyArIDY1KTtcbiAgICByZXR1cm4gcm93Q2hhckNvZGUgKyAoY29sICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkQ29vcmRpbmF0ZShjb29yZGluYXRlKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IFtyb3dJbmRleCwgY29sSW5kZXhdID0gWy4uLmNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpXTtcbiAgICBbcm93SW5kZXgsIGNvbEluZGV4XS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gYm9hcmRTaXplIC0gMSkge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc09jY3VwaWVkKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gWy4uLmNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpXTtcbiAgICByZXR1cm4gISFib2FyZFtyb3ddW2NvbF07XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAoXG4gICAgICBzaGlwLmxlbmd0aCAhPT0gY29vcmRpbmF0ZXMubGVuZ3RoIHx8XG4gICAgICBjb29yZGluYXRlcy5zb21lKChjb29yZCkgPT4gIWlzVmFsaWRDb29yZGluYXRlKGNvb3JkKSkgfHxcbiAgICAgIGNvb3JkaW5hdGVzLnNvbWUoKGNvb3JkKSA9PiBpc09jY3VwaWVkKGNvb3JkKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZGluYXRlVG9JbmRleChjb29yZCk7XG4gICAgICBib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwUmFuZG9tbHkoc2hpcCkge1xuICAgIC8vIGNvbnN0IG5ld1NoaXBDb29yZGluYXRlcyA9IG5ldyBBcnJheShzaGlwLmxlbmd0aCkuZmlsbChudWxsKTtcbiAgICBwbGFjZVNoaXAoc2hpcCwgcmFuZG9tQ29vcmRpbmF0ZXMoc2hpcC5sZW5ndGgpKTtcblxuICAgIC8vIGZ1bmN0aW9uIHJhbmRvbUNsb3NlQ29vcmQoY29vcmQpIHtcbiAgICAvLyAgIGNvbnN0IGNoYW5nZVZhbHVlID0gWy0xLCAwLCAxXTtcbiAgICAvLyAgIGNvbnN0IHJhbmRvbVhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYW5nZVZhbHVlLmxlbmd0aCk7XG4gICAgLy8gICBjb25zdCByYW5kb21ZSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFuZ2VWYWx1ZS5sZW5ndGgpO1xuICAgIC8vICAgY29uc3QgcmFuZG9tWCA9IGNoYW5nZVZhbHVlW3JhbmRvbVhJbmRleF07XG4gICAgLy8gICBjb25zdCByYW5kb21ZID0gY2hhbmdlVmFsdWVbcmFuZG9tWUluZGV4XTtcblxuICAgIC8vICAgbGV0IHhDb29yZCA9IE51bWJlcihjb29yZC5zdWJzdHJpbmcoMSkpICsgcmFuZG9tWTtcbiAgICAvLyAgIGxldCB5Q29vcmRDaGFyQ29kZSA9IGNvb3JkLmNoYXJDb2RlQXQoMCkgKyByYW5kb21YO1xuICAgIC8vICAgY29uc3QgbmV3Q29vcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHlDb29yZENoYXJDb2RlKSArIHhDb29yZC50b1N0cmluZygpO1xuXG4gICAgLy8gICBpZiAoIWlzVmFsaWRDb29yZGluYXRlKG5ld0Nvb3JkKSkge1xuICAgIC8vICAgICBpZiAoaXNPY2N1cGllZChuZXdDb29yZCkpIHtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuXG4gICAgLy8gICBpZiAoeENvb3JkID4gNzQpIHhDb29yZCA9IDY1O1xuICAgIC8vICAgZWxzZSBpZiAoeENvb3JkIDwgNjUpIHhDb29yZCA9IDc0O1xuICAgIC8vICAgaWYgKHlDb29yZENoYXJDb2RlID4gNzQpIHlDb29yZENoYXJDb2RlID0gNjU7XG4gICAgLy8gICBlbHNlIGlmICh5Q29vcmRDaGFyQ29kZSA8IDY1KSB5Q29vcmRDaGFyQ29kZSA9IDc0O1xuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKHNoaXBMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVJvd0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvbEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG4gICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9XG4gICAgICAgIG9yaWVudGF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9uLmxlbmd0aCldO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgaWYgKCFpc09jY3VwaWVkKGluZGV4VG9Db29yZGluYXRlKHJhbmRvbVJvd0luZGV4LCByYW5kb21Db2xJbmRleCkpKSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsQ29vcmRzID0gW107XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxDb29yZHMgPSBbXTtcbiAgICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgICB2ZXJ0aWNhbENvb3Jkcy5wdXNoKFxuICAgICAgICAgICAgaW5kZXhUb0Nvb3JkaW5hdGUocmFuZG9tUm93SW5kZXggLSAyLCByYW5kb21Db2xJbmRleCksXG4gICAgICAgICAgICBpbmRleFRvQ29vcmRpbmF0ZShyYW5kb21Sb3dJbmRleCAtIDEsIHJhbmRvbUNvbEluZGV4KSxcbiAgICAgICAgICAgIGluZGV4VG9Db29yZGluYXRlKHJhbmRvbVJvd0luZGV4LCByYW5kb21Db2xJbmRleCksXG4gICAgICAgICAgICBpbmRleFRvQ29vcmRpbmF0ZShyYW5kb21Sb3dJbmRleCArIDEsIHJhbmRvbUNvbEluZGV4KSxcbiAgICAgICAgICAgIGluZGV4VG9Db29yZGluYXRlKHJhbmRvbVJvd0luZGV4ICsgMiwgcmFuZG9tQ29sSW5kZXgpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaG9yaXpvbnRhbENvb3Jkcy5wdXNoKFxuICAgICAgICAgICAgaW5kZXhUb0Nvb3JkaW5hdGUocmFuZG9tUm93SW5kZXgsIHJhbmRvbUNvbEluZGV4IC0gMiksXG4gICAgICAgICAgICBpbmRleFRvQ29vcmRpbmF0ZShyYW5kb21Sb3dJbmRleCwgcmFuZG9tQ29sSW5kZXggLSAxKSxcbiAgICAgICAgICAgIGluZGV4VG9Db29yZGluYXRlKHJhbmRvbVJvd0luZGV4LCByYW5kb21Db2xJbmRleCksXG4gICAgICAgICAgICBpbmRleFRvQ29vcmRpbmF0ZShyYW5kb21Sb3dJbmRleCwgcmFuZG9tQ29sSW5kZXggKyAxKSxcbiAgICAgICAgICAgIGluZGV4VG9Db29yZGluYXRlKHJhbmRvbVJvd0luZGV4LCByYW5kb21Db2xJbmRleCArIDIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiZcbiAgICAgICAgICAgIGhhc1ZhbGlkQ29vcmRpbmF0ZXModmVydGljYWxDb29yZHMpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxDb29yZHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNWYWxpZENvb3JkaW5hdGVzKGhvcml6b250YWxDb29yZHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbENvb3JkcztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc1ZhbGlkQ29vcmRpbmF0ZXModmVydGljYWxDb29yZHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxDb29yZHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZXMoc2hpcExlbmd0aCk7XG4gICAgICBmdW5jdGlvbiBoYXNWYWxpZENvb3JkaW5hdGVzKGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gY29vcmRzLmV2ZXJ5KChuZXdDb29yZCkgPT4gaXNWYWxpZENvb3JkaW5hdGUobmV3Q29vcmQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gWy4uLmNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpXTtcbiAgICBpZiAoYm9hcmRbcm93XVtjb2xdKSB7XG4gICAgICBib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgYm9hcmQgPSBuZXcyREFycmF5KGJvYXJkU2l6ZSk7XG4gICAgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFdmVyeVNoaXBTdW5rKCkge1xuICAgIGxldCBzaGlwc1N1bmsgPSB0cnVlO1xuICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT5cbiAgICAgIHJvdy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwICE9PSBudWxsICYmICFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgc2hpcHNTdW5rID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcmVzZXQsXG4gICAgaXNFdmVyeVNoaXBTdW5rLFxuICAgIGluZGV4VG9Db29yZGluYXRlLFxuICAgIGNvb3JkaW5hdGVUb0luZGV4LFxuICAgIHBsYWNlU2hpcFJhbmRvbWx5LFxuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9LFxuICAgIGdldCBtaXNzZWRBdHRhY2tzKCkge1xuICAgICAgcmV0dXJuIG1pc3NlZEF0dGFja3M7XG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IFBsYXllciA9IChpc0NvbXB1dGVyID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYXR0YWNrc0xpc3QgPSBuZXcgU2V0KCk7XG4gIGxldCBhdmFpbGFibGVNb3Zlc1NldCA9IG5ldyBTZXQoKTtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlTW92ZXNTZXQoKSB7XG4gICAgY29uc3QgbW92ZXNTZXQgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDY1OyBpIDw9IDc0OyBpICs9IDEpIHtcbiAgICAgIC8vIEEtSiB1bmljb2RlXG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKSB7XG4gICAgICAgIG1vdmVzU2V0LmFkZChTdHJpbmcuZnJvbUNoYXJDb2RlKGkpICsgaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3Zlc1NldDtcbiAgfVxuXG4gIGlmIChpc0NvbXB1dGVyKSBhdmFpbGFibGVNb3Zlc1NldCA9IGdlbmVyYXRlTW92ZXNTZXQoKTtcblxuICBmdW5jdGlvbiByYW5kb21BdHRhY2soKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlTW92ZXNTZXQuc2l6ZSk7XG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IEFycmF5LmZyb20oYXZhaWxhYmxlTW92ZXNTZXQpW3JhbmRvbV07XG4gICAgYXZhaWxhYmxlTW92ZXNTZXQuZGVsZXRlKHJhbmRvbUNvb3JkaW5hdGUpO1xuICAgIGF0dGFja3NMaXN0LmFkZChyYW5kb21Db29yZGluYXRlKTtcbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGlzQ29tcHV0ZXIoKSB7XG4gICAgICByZXR1cm4gaXNDb21wdXRlcjtcbiAgICB9LFxuICAgIGdldCBhdHRhY2tzTGlzdCgpIHtcbiAgICAgIHJldHVybiBhdHRhY2tzTGlzdDtcbiAgICB9LFxuICAgIGdldCBhY3RpdmVQbGF5ZXIoKSB7XG4gICAgICByZXR1cm4gYWN0aXZlUGxheWVyO1xuICAgIH0sXG4gICAgc2V0IGFjdGl2ZVBsYXllcihhY3RpdmVGbGFnKSB7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVGbGFnO1xuICAgIH0sXG4gICAgcmFuZG9tQXR0YWNrLFxuICB9O1xufTtcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgcGxheWVyT25lO1xuICBsZXQgcGxheWVyVHdvO1xuICBsZXQgcGxheWVyT25lQm9hcmQ7XG4gIGxldCBwbGF5ZXJUd29Cb2FyZDtcbiAgbGV0IGdhbWVPdmVyO1xuICBsZXQgd2lubmVyO1xuXG4gIGxldCBwbGF5ZXJPbmVTaGlwT25lO1xuICBsZXQgcGxheWVyT25lU2hpcFR3bztcbiAgbGV0IHBsYXllck9uZVNoaXBUaHJlZTtcbiAgbGV0IHBsYXllck9uZVNoaXBGb3VyO1xuICBsZXQgcGxheWVyT25lU2hpcEZpdmU7XG5cbiAgbGV0IHBsYXllclR3b1NoaXBPbmU7XG4gIGxldCBwbGF5ZXJUd29TaGlwVHdvO1xuICBsZXQgcGxheWVyVHdvU2hpcFRocmVlO1xuICBsZXQgcGxheWVyVHdvU2hpcEZvdXI7XG4gIGxldCBwbGF5ZXJUd29TaGlwRml2ZTtcblxuICBjb25zdCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zID0gW1xuICAgIFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnXSxcbiAgICBbJ0I3JywgJ0M3JywgJ0Q3JywgJ0U3J10sXG4gICAgWydDMycsICdEMycsICdFMyddLFxuICAgIFsnRzgnLCAnRzknLCAnRzEwJ10sXG4gICAgWydKMicsICdKMyddLFxuICBdO1xuXG4gIGNvbnN0IHBsYXllclR3b1NoaXBQb3NpdGlvbnMgPSBbXG4gICAgWydCMScsICdCMicsICdCMycsICdCNCcsICdCNSddLFxuICAgIFsnRTInLCAnRjInLCAnRzInLCAnSDInXSxcbiAgICBbJ0Y4JywgJ0Y5JywgJ0YxMCddLFxuICAgIFsnQTknLCAnQjknLCAnQzknXSxcbiAgICBbJ0k0JywgJ0k1J10sXG4gIF07XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKGF0dGFja0Nvb3JkLCBwbGF5ZXJUd29UdXJuID0gZmFsc2UpID0+IHtcbiAgICBsZXQgcmFuZG9tQXR0YWNrQ29vcmQgPSBudWxsO1xuICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgIGlmICghcGxheWVyVHdvVHVybikge1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmRvbUF0dGFja0Nvb3JkID0gcGxheWVyVHdvLnJhbmRvbUF0dGFjaygpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbUF0dGFja0Nvb3JkKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJPbmVCb2FyZC5pc0V2ZXJ5U2hpcFN1bmsoKSkge1xuICAgICAgICB3aW5uZXIgPSBwbGF5ZXJUd287XG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyVHdvQm9hcmQuaXNFdmVyeVNoaXBTdW5rKCkpIHtcbiAgICAgICAgd2lubmVyID0gcGxheWVyT25lO1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByYW5kb21BdHRhY2tDb29yZDtcbiAgfTtcblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgICBwbGF5ZXJUd28gPSBQbGF5ZXIodHJ1ZSk7XG4gICAgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgd2lubmVyID0gbnVsbDtcbiAgICBwbGF5ZXJPbmVTaGlwT25lID0gU2hpcCg1KTtcbiAgICBwbGF5ZXJPbmVTaGlwVHdvID0gU2hpcCg0KTtcbiAgICBwbGF5ZXJPbmVTaGlwVGhyZWUgPSBTaGlwKDMpO1xuICAgIHBsYXllck9uZVNoaXBGb3VyID0gU2hpcCgzKTtcbiAgICBwbGF5ZXJPbmVTaGlwRml2ZSA9IFNoaXAoMik7XG4gICAgcGxheWVyVHdvU2hpcE9uZSA9IFNoaXAoNSk7XG4gICAgcGxheWVyVHdvU2hpcFR3byA9IFNoaXAoNCk7XG4gICAgcGxheWVyVHdvU2hpcFRocmVlID0gU2hpcCgzKTtcbiAgICBwbGF5ZXJUd29TaGlwRm91ciA9IFNoaXAoMyk7XG4gICAgcGxheWVyVHdvU2hpcEZpdmUgPSBTaGlwKDIpO1xuICAgIC8vIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJPbmVTaGlwT25lLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzBdKTtcbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcFR3bywgcGxheWVyT25lU2hpcFBvc2l0aW9uc1sxXSk7XG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllck9uZVNoaXBUaHJlZSwgcGxheWVyT25lU2hpcFBvc2l0aW9uc1syXSk7XG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllck9uZVNoaXBGb3VyLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzNdKTtcbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcEZpdmUsIHBsYXllck9uZVNoaXBQb3NpdGlvbnNbNF0pO1xuICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChwbGF5ZXJUd29TaGlwT25lLCBwbGF5ZXJUd29TaGlwUG9zaXRpb25zWzBdKTtcbiAgICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcFR3bywgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1sxXSk7XG4gICAgcGxheWVyVHdvQm9hcmQucGxhY2VTaGlwKHBsYXllclR3b1NoaXBUaHJlZSwgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1syXSk7XG4gICAgcGxheWVyVHdvQm9hcmQucGxhY2VTaGlwKHBsYXllclR3b1NoaXBGb3VyLCBwbGF5ZXJUd29TaGlwUG9zaXRpb25zWzNdKTtcbiAgICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcEZpdmUsIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbNF0pO1xuICAgIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllck9uZVNoaXBPbmUpO1xuICB9O1xuXG4gIHJlc2V0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcGxheWVyT25lQm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyT25lQm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgcGxheWVyVHdvQm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyVHdvQm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgZ2FtZU92ZXIoKSB7XG4gICAgICByZXR1cm4gZ2FtZU92ZXI7XG4gICAgfSxcbiAgICBnZXQgd2lubmVyKCkge1xuICAgICAgcmV0dXJuIHdpbm5lcjtcbiAgICB9LFxuICAgIGdldCBwbGF5ZXJPbmUoKSB7XG4gICAgICByZXR1cm4gcGxheWVyT25lO1xuICAgIH0sXG4gICAgZ2V0IHBsYXllclR3bygpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJUd287XG4gICAgfSxcbiAgICBwbGF5Um91bmQsXG4gICAgcmVzZXQsXG4gIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck9uZUJvYXJkJyk7XG4gIGNvbnN0IHBsYXllclR3b0JvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclR3b0JvYXJkJyk7XG4gIGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0c0JvYXJkJyk7XG4gIGxldCB7IHBsYXllck9uZUJvYXJkLCBwbGF5ZXJUd29Cb2FyZCB9ID0gZ2FtZUNvbnRyb2xsZXI7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbic7XG4gIHBsYXlBZ2FpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWFnYWluLWJ0bicpO1xuXG4gIGNvbnN0IHJlZnJlc2hCb2FyZCA9IChwbGF5ZXJCb2FyZCwgaXNDb21wdXRlciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB7IGJvYXJkIH0gPSBwbGF5ZXJCb2FyZDtcbiAgICBsZXQgaW5pdEFscGhhQ2hhckNvZGUgPSA2MztcblxuICAgIGZ1bmN0aW9uIG5leHRDaGFyKGNoYXJDb2RlKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSArIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0xhYmVsRGl2KGNoYXJDb2RlLCBpc051bSA9IGZhbHNlKSB7XG4gICAgICBjb25zdCBsYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbGFiZWxEaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQtbGFiZWwnKTtcbiAgICAgIGlmIChpc051bSkge1xuICAgICAgICBsYWJlbERpdi50ZXh0Q29udGVudCA9IGNoYXJDb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxEaXYudGV4dENvbnRlbnQgPSBuZXh0Q2hhcihjaGFyQ29kZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFiZWxEaXY7XG4gICAgfVxuXG4gICAgYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT5cbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGxheWVyQm9hcmQuaW5kZXhUb0Nvb3JkaW5hdGUocm93SW5kZXgsIGNvbEluZGV4KTtcbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LmNvb3JkID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmF0dGxlZmllbGQtY2VsbCcpO1xuICAgICAgICBpZiAoIWlzQ29tcHV0ZXIpIHtcbiAgICAgICAgICBjZWxsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicpO1xuICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYm94Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNlbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IGNsaWNrSGFuZGxlckNlbGwoZXYpKTtcblxuICAgICAgICBib2FyZERpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItYm9hcmQnKTtcblxuICAgICAgICAvLyBhZGQgYWxwaGFiZXRpYyByb3cgbGFiZWxzIHRvIHRoZSBsZWZ0IHNpZGUgb2YgYm9hcmRcbiAgICAgICAgaWYgKGNvbEluZGV4ICUgMTAgPT09IDApIHtcbiAgICAgICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChuZXdMYWJlbERpdigoaW5pdEFscGhhQ2hhckNvZGUgKz0gMSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGxCdXR0b24pO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIC8vIGFkZCBudW1lcmljIGNvbHVtbiBsYWJlbHMgdW5kZXIgdGhlIGJvYXJkXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQobmV3TGFiZWxEaXYoLTEpKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChuZXdMYWJlbERpdihpLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkRGl2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckNlbGwoZXYpIHtcbiAgICBjb25zdCBzZWxlY3RlZENlbGwgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsQ29vcmRpbmF0ZXMgPSBzZWxlY3RlZENlbGwuZGF0YXNldC5jb29yZDtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gcGxheWVyT25lQm9hcmQuY29vcmRpbmF0ZVRvSW5kZXgoXG4gICAgICBzZWxlY3RlZENlbGxDb29yZGluYXRlcyxcbiAgICApO1xuICAgIGdhbWVDb250cm9sbGVyLnBsYXlSb3VuZChzZWxlY3RlZENlbGxDb29yZGluYXRlcyk7XG4gICAgaWYgKHBsYXllclR3b0JvYXJkLmJvYXJkW3Jvd11bY29sXSkge1xuICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllck9uZUF0dGFja0Nvb29yZCA9IGdhbWVDb250cm9sbGVyLnBsYXlSb3VuZCh1bmRlZmluZWQsIHRydWUpO1xuICAgIGlmIChwbGF5ZXJPbmVBdHRhY2tDb29vcmQpIHtcbiAgICAgIGNvbnN0IHBsYXllck9uZUF0dGFja0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29vcmQ9XCIke3BsYXllck9uZUF0dGFja0Nvb29yZH1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IFtwbGF5ZXJPbmVSb3csIHBsYXllck9uZUNvbF0gPSBwbGF5ZXJPbmVCb2FyZC5jb29yZGluYXRlVG9JbmRleChcbiAgICAgICAgcGxheWVyT25lQXR0YWNrQ29vb3JkLFxuICAgICAgKTtcbiAgICAgIHBsYXllck9uZUF0dGFja0NlbGwuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHBsYXllck9uZUJvYXJkLmJvYXJkW3BsYXllck9uZVJvd11bcGxheWVyT25lQ29sXSkge1xuICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyT25lQXR0YWNrQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBzZWxlY3RlZENlbGwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcGxheWVyT25lQXR0YWNrQ2VsbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGdhbWVDb250cm9sbGVyLmdhbWVPdmVyKSB7XG4gICAgICBkaXNwbGF5V2lubmVyKGdhbWVDb250cm9sbGVyLndpbm5lcik7XG4gICAgICB0b2dnbGVQbGF5QWdhaW5CdXR0b24oKTtcbiAgICAgIEFycmF5LmZyb20oXG4gICAgICAgIHBsYXllclR3b0JvYXJkRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKS5jaGlsZHJlbixcbiAgICAgICkuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNoaWxkTm9kZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5QWdhaW5CdXR0b24oKSB7XG4gICAgaWYgKHBsYXlBZ2FpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICBwbGF5QWdhaW5CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgcGxheUFnYWluQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYWdlKCkge1xuICAgIHBsYXllck9uZUJvYXJkRGl2LnJlbW92ZUNoaWxkKHBsYXllck9uZUJvYXJkRGl2Lmxhc3RDaGlsZCk7XG4gICAgcGxheWVyVHdvQm9hcmREaXYucmVtb3ZlQ2hpbGQocGxheWVyVHdvQm9hcmREaXYubGFzdENoaWxkKTtcbiAgICByZXN1bHRzRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgdG9nZ2xlUGxheUFnYWluQnV0dG9uKCk7XG4gICAgcGxheWVyT25lQm9hcmQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmVCb2FyZDtcbiAgICBwbGF5ZXJUd29Cb2FyZCA9IGdhbWVDb250cm9sbGVyLnBsYXllclR3b0JvYXJkO1xuICAgIHBsYXllck9uZUJvYXJkRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCb2FyZChwbGF5ZXJPbmVCb2FyZCkpO1xuICAgIHBsYXllclR3b0JvYXJkRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCb2FyZChwbGF5ZXJUd29Cb2FyZCwgdHJ1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyUGxheUFnYWluQnV0dG9uKCkge1xuICAgIGdhbWVDb250cm9sbGVyLnJlc2V0KCk7XG4gICAgcmVzZXRQYWdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5V2lubmVyKHdpbm5pbmdQbGF5ZXIpIHtcbiAgICBpZiAod2lubmluZ1BsYXllciA9PT0gZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lKSB7XG4gICAgICByZXN1bHRzRGl2LnRleHRDb250ZW50ID0gJ1lvdSBXaW4hJztcbiAgICAgIHJlc3VsdHNEaXYuY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XG4gICAgICByZXN1bHRzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2xvc2VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHNEaXYudGV4dENvbnRlbnQgPSAnWW91IExvc2UnO1xuICAgICAgcmVzdWx0c0Rpdi5jbGFzc0xpc3QuYWRkKCdsb3NlcicpO1xuICAgICAgcmVzdWx0c0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCd3aW5uZXInKTtcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJPbmVCb2FyZERpdi5hcHBlbmRDaGlsZChyZWZyZXNoQm9hcmQocGxheWVyT25lQm9hcmQpKTtcbiAgcGxheWVyVHdvQm9hcmREaXYuYXBwZW5kQ2hpbGQocmVmcmVzaEJvYXJkKHBsYXllclR3b0JvYXJkLCB0cnVlKSk7XG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgY2xpY2tIYW5kbGVyUGxheUFnYWluQnV0dG9uKCksXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kKHBsYXlBZ2FpbkJ1dHRvbik7XG59KSgpO1xuXG5jb25zdCBmdW5jcyA9IHtcbiAgU2hpcCxcbiAgR2FtZWJvYXJkLFxuICBQbGF5ZXIsXG4gIGdhbWVDb250cm9sbGVyLFxuICBkaXNwbGF5Q29udHJvbGxlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmNzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9