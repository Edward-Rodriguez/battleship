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
  let playerOne;
  let playerTwo;
  let playerOneBoard;
  let playerTwoBoard;
  let gameOver;
  let winner;

  let playerOneShipOne;
  let playerOneShipTwo;
  let playerOneShipThree;

  let playerTwoShipOne;
  let playerTwoShipTwo;
  let playerTwoShipThree;

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
    playerOneShipTwo = Ship(3);
    playerOneShipThree = Ship(2);
    playerTwoShipOne = Ship(4);
    playerTwoShipTwo = Ship(1);
    playerTwoShipThree = Ship(2);
    playerOneBoard.placeShip(playerOneShipOne, playerOneShipPositions[0]);
    playerOneBoard.placeShip(playerOneShipTwo, playerOneShipPositions[1]);
    playerOneBoard.placeShip(playerOneShipThree, playerOneShipPositions[2]);
    playerTwoBoard.placeShip(playerTwoShipOne, playerTwoShipPositions[0]);
    playerTwoBoard.placeShip(playerTwoShipTwo, playerTwoShipPositions[1]);
    playerTwoBoard.placeShip(playerTwoShipThree, playerTwoShipPositions[2]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlDQUFpQztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbEAwOzEmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuI3BhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnaGVhZGVyIGhlYWRlcidcbiAgICAnY29udGVudCBjb250ZW50J1xuICAgICdmb290ZXIgZm9vdGVyJztcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdwbGF5ZXJCb2FyZCBwbGF5ZXJCb2FyZCdcbiAgICAncmVzdWx0c0JvYXJkIHJlc3VsdHNCb2FyZCdcbiAgICAncGxheUFnYWluQnV0dG9uIHBsYXlBZ2FpbkJ1dHRvbic7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuI2hlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBzeXN0ZW0tdWk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcGxheWVyT25lVGl0bGUsXG4jcGxheWVyVHdvVGl0bGUge1xuICBncmlkLWFyZWE6IHBsYXllck9uZVRpdGxlO1xuICAvKiBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBzeXN0ZW0tdWk7ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwYWRkaW5nOiAyNHB4IDBweCAxMnB4IDBweDtcbn1cblxuI3BsYXllck9uZVRpdGxlIHtcbiAgY29sb3I6IHJnYmEoNjQsIDk1LCAxMjcsIDAuNzY1KTtcbn1cblxuI3BsYXllclR3b1RpdGxlIHtcbiAgY29sb3I6IHJnYigyMTIsIDEwNiwgMTA2KTtcbn1cblxuI2JvYXJkcyB7XG4gIGdyaWQtYXJlYTogcGxheWVyQm9hcmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMzJweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAzMnB4KTtcbn1cblxuLmJvYXJkLWxhYmVsIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYigxMjUsIDEyNSwgMTI1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iYXR0bGVmaWVsZC1jZWxsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBvdXRsaW5lOiBpbmhlcml0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkYmRiO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuI3BsYXllck9uZUJvYXJkLFxuI3BsYXllclR3b0JvYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcGxheWVyVHdvQm9hcmQgLmJhdHRsZWZpZWxkLWNlbGw6aG92ZXI6bm90KC5oaXQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4uc2hpcC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA5NSwgMTI3LCAwLjY2OSk7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMTA2LCAxMDYsIDAuNjY5KTtcbn1cblxuLmhpdDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICdcXFxcMjc0Yyc7IC8qIFRoaXMgd2lsbCByZW5kZXIgdGhlICdYJyAqL1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWlzczo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICfil48nOyAvKiBUaGlzIHdpbGwgcmVuZGVyIHRoZSAnWCcgKi9cbn1cblxuI3Jlc3VsdHNCb2FyZCB7XG4gIGdyaWQtYXJlYTogcmVzdWx0c0JvYXJkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4ubG9zZXIge1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLndpbm5lciB7XG4gIGNvbG9yOiAjNDA3ZjdmO1xufVxuXG4ucGxheS1hZ2Fpbi1idG4ge1xuICBncmlkLWFyZWE6IHBsYXlBZ2FpbkJ1dHRvbjtcbiAgbWFyZ2luOiAycmVtO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3ZjdmO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wbGF5LWFnYWluLWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLFxuICAgIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuI2Zvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MzkpO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5jb3B5cmlnaHQgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0IGltZyB7XG4gIGhlaWdodDogMTZweDtcbn1cblxuI2Zvb3RlciBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDOzs7bUJBR2lCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOzs7cUNBR21DO0VBQ25DLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBRSw2QkFBNkI7QUFDakQ7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWSxFQUFFLDZCQUE2QjtBQUM3Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbEAwOzEmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnY29udGVudCBjb250ZW50J1xcbiAgICAnZm9vdGVyIGZvb3Rlcic7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAncGxheWVyQm9hcmQgcGxheWVyQm9hcmQnXFxuICAgICdyZXN1bHRzQm9hcmQgcmVzdWx0c0JvYXJkJ1xcbiAgICAncGxheUFnYWluQnV0dG9uIHBsYXlBZ2FpbkJ1dHRvbic7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmctdG9wOiA0OHB4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIHN5c3RlbS11aTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyT25lVGl0bGUsXFxuI3BsYXllclR3b1RpdGxlIHtcXG4gIGdyaWQtYXJlYTogcGxheWVyT25lVGl0bGU7XFxuICAvKiBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBzeXN0ZW0tdWk7ICovXFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgcGFkZGluZzogMjRweCAwcHggMTJweCAwcHg7XFxufVxcblxcbiNwbGF5ZXJPbmVUaXRsZSB7XFxuICBjb2xvcjogcmdiYSg2NCwgOTUsIDEyNywgMC43NjUpO1xcbn1cXG5cXG4jcGxheWVyVHdvVGl0bGUge1xcbiAgY29sb3I6IHJnYigyMTIsIDEwNiwgMTA2KTtcXG59XFxuXFxuI2JvYXJkcyB7XFxuICBncmlkLWFyZWE6IHBsYXllckJvYXJkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNDhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMzJweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMzJweCk7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogcmdiKDEyNSwgMTI1LCAxMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhdHRsZWZpZWxkLWNlbGwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGJkYjtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNwbGF5ZXJPbmVCb2FyZCxcXG4jcGxheWVyVHdvQm9hcmQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyVHdvQm9hcmQgLmJhdHRsZWZpZWxkLWNlbGw6aG92ZXI6bm90KC5oaXQpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XFxufVxcblxcbi5zaGlwLWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA5NSwgMTI3LCAwLjY2OSk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDEwNiwgMTA2LCAwLjY2OSk7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbnRlbnQ6ICdcXFxcMjc0Yyc7IC8qIFRoaXMgd2lsbCByZW5kZXIgdGhlICdYJyAqL1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1pc3M6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbnRlbnQ6ICfil48nOyAvKiBUaGlzIHdpbGwgcmVuZGVyIHRoZSAnWCcgKi9cXG59XFxuXFxuI3Jlc3VsdHNCb2FyZCB7XFxuICBncmlkLWFyZWE6IHJlc3VsdHNCb2FyZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDQ4cHg7XFxufVxcblxcbi5sb3NlciB7XFxuICBjb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLndpbm5lciB7XFxuICBjb2xvcjogIzQwN2Y3ZjtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnRuIHtcXG4gIGdyaWQtYXJlYTogcGxheUFnYWluQnV0dG9uO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3ZjdmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSxcXG4gICAgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgbWF4LWhlaWdodDogNDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjM5KTtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG4uY29weXJpZ2h0IGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvcHlyaWdodCBpbWcge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4jZm9vdGVyIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuZnVuY3Rpb24gU2hpcChzaXplID0gbnVsbCkge1xuICBsZXQgbGVuZ3RoID0gc2l6ZTtcbiAgbGV0IGhpdENvdW50ZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gbGVuZ3RoID8gbGVuZ3RoID09PSBoaXRDb3VudGVyIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0Q291bnRlciArPSAxO1xuICAgIHJldHVybiBoaXRDb3VudGVyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIHNldCBsZW5ndGgobmV3TGVuZ3RoKSB7XG4gICAgICBsZW5ndGggPSBuZXdMZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgaGl0Q291bnRlcigpIHtcbiAgICAgIHJldHVybiBoaXRDb3VudGVyO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBmdW5jdGlvbiBuZXcyREFycmF5KHNpemUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKSwgKCkgPT4gbmV3IEFycmF5KHNpemUpLmZpbGwobnVsbCkpO1xuICB9XG5cbiAgY29uc3QgYm9hcmRTaXplID0gMTA7XG4gIGxldCBib2FyZCA9IG5ldzJEQXJyYXkoYm9hcmRTaXplKTtcbiAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICBmdW5jdGlvbiBjb29yZGluYXRlVG9JbmRleChjb29yZGluYXRlKSB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGNvbCA9IGNvb3JkaW5hdGUuc3Vic3RyaW5nKDEpO1xuICAgIGNvbnN0IHJvd0NoYXJDb2RlID0gcm93LmNoYXJDb2RlQXQoKTtcbiAgICBjb25zdCByb3dJbmRleFZhbHVlID0gcm93Q2hhckNvZGUgLSA2NTtcbiAgICBjb25zdCBjb2xJbmRleFZhbHVlID0gTnVtYmVyKGNvbCkgLSAxO1xuICAgIHJldHVybiBbcm93SW5kZXhWYWx1ZSwgY29sSW5kZXhWYWx1ZV07XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleFRvQ29vcmRpbmF0ZShyb3csIGNvbCkge1xuICAgIGNvbnN0IHJvd0NoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3cgKyA2NSk7XG4gICAgcmV0dXJuIHJvd0NoYXJDb2RlICsgKGNvbCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZENvb3JkaW5hdGUoY29vcmRpbmF0ZSkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCBbcm93SW5kZXgsIGNvbEluZGV4XSA9IFsuLi5jb29yZGluYXRlVG9JbmRleChjb29yZGluYXRlKV07XG4gICAgW3Jvd0luZGV4LCBjb2xJbmRleF0uZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IGJvYXJkU2l6ZSAtIDEpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPY2N1cGllZChjb29yZGluYXRlKSB7XG4gICAgY29uc3QgW3JvdywgY29sXSA9IFsuLi5jb29yZGluYXRlVG9JbmRleChjb29yZGluYXRlKV07XG4gICAgcmV0dXJuICEhYm9hcmRbcm93XVtjb2xdO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKFxuICAgICAgc2hpcC5sZW5ndGggIT09IGNvb3JkaW5hdGVzLmxlbmd0aCB8fFxuICAgICAgY29vcmRpbmF0ZXMuc29tZSgoY29vcmQpID0+ICFpc1ZhbGlkQ29vcmRpbmF0ZShjb29yZCkpIHx8XG4gICAgICBjb29yZGluYXRlcy5zb21lKChjb29yZCkgPT4gaXNPY2N1cGllZChjb29yZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRpbmF0ZVRvSW5kZXgoY29vcmQpO1xuICAgICAgYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBbLi4uY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgIGlmIChib2FyZFtyb3ddW2NvbF0pIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBib2FyZCA9IG5ldzJEQXJyYXkoYm9hcmRTaXplKTtcbiAgICBtaXNzZWRBdHRhY2tzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZXJ5U2hpcFN1bmsoKSB7XG4gICAgbGV0IHNoaXBzU3VuayA9IHRydWU7XG4gICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PlxuICAgICAgcm93LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAgIT09IG51bGwgJiYgIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBzaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgICByZXR1cm4gc2hpcHNTdW5rO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICByZXNldCxcbiAgICBpc0V2ZXJ5U2hpcFN1bmssXG4gICAgaW5kZXhUb0Nvb3JkaW5hdGUsXG4gICAgY29vcmRpbmF0ZVRvSW5kZXgsXG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgZ2V0IG1pc3NlZEF0dGFja3MoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkQXR0YWNrcztcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgUGxheWVyID0gKGlzQ29tcHV0ZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBhdHRhY2tzTGlzdCA9IG5ldyBTZXQoKTtcbiAgbGV0IGF2YWlsYWJsZU1vdmVzU2V0ID0gbmV3IFNldCgpO1xuICBsZXQgYWN0aXZlUGxheWVyID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVNb3Zlc1NldCgpIHtcbiAgICBjb25zdCBtb3Zlc1NldCA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gNjU7IGkgPD0gNzQ7IGkgKz0gMSkge1xuICAgICAgLy8gQS1KIHVuaWNvZGVcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpIHtcbiAgICAgICAgbW92ZXNTZXQuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vdmVzU2V0O1xuICB9XG5cbiAgaWYgKGlzQ29tcHV0ZXIpIGF2YWlsYWJsZU1vdmVzU2V0ID0gZ2VuZXJhdGVNb3Zlc1NldCgpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc1NldC5zaXplKTtcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gQXJyYXkuZnJvbShhdmFpbGFibGVNb3Zlc1NldClbcmFuZG9tXTtcbiAgICBhdmFpbGFibGVNb3Zlc1NldC5kZWxldGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgYXR0YWNrc0xpc3QuYWRkKHJhbmRvbUNvb3JkaW5hdGUpO1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyO1xuICAgIH0sXG4gICAgZ2V0IGF0dGFja3NMaXN0KCkge1xuICAgICAgcmV0dXJuIGF0dGFja3NMaXN0O1xuICAgIH0sXG4gICAgZ2V0IGFjdGl2ZVBsYXllcigpIHtcbiAgICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gICAgfSxcbiAgICBzZXQgYWN0aXZlUGxheWVyKGFjdGl2ZUZsYWcpIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZUZsYWc7XG4gICAgfSxcbiAgICByYW5kb21BdHRhY2ssXG4gIH07XG59O1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXJPbmU7XG4gIGxldCBwbGF5ZXJUd287XG4gIGxldCBwbGF5ZXJPbmVCb2FyZDtcbiAgbGV0IHBsYXllclR3b0JvYXJkO1xuICBsZXQgZ2FtZU92ZXI7XG4gIGxldCB3aW5uZXI7XG5cbiAgbGV0IHBsYXllck9uZVNoaXBPbmU7XG4gIGxldCBwbGF5ZXJPbmVTaGlwVHdvO1xuICBsZXQgcGxheWVyT25lU2hpcFRocmVlO1xuXG4gIGxldCBwbGF5ZXJUd29TaGlwT25lO1xuICBsZXQgcGxheWVyVHdvU2hpcFR3bztcbiAgbGV0IHBsYXllclR3b1NoaXBUaHJlZTtcblxuICBjb25zdCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zID0gW1xuICAgIFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnXSxcbiAgICBbJ0MzJywgJ0QzJywgJ0UzJ10sXG4gICAgWydKMicsICdKMyddLFxuICBdO1xuXG4gIGNvbnN0IHBsYXllclR3b1NoaXBQb3NpdGlvbnMgPSBbXG4gICAgWydCMScsICdCMicsICdCMycsICdCNCddLFxuICAgIFsnRDUnXSxcbiAgICBbJ0k0JywgJ0k1J10sXG4gIF07XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKGF0dGFja0Nvb3JkLCBwbGF5ZXJUd29UdXJuID0gZmFsc2UpID0+IHtcbiAgICBsZXQgcmFuZG9tQXR0YWNrQ29vcmQgPSBudWxsO1xuICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgIGlmICghcGxheWVyVHdvVHVybikge1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmRvbUF0dGFja0Nvb3JkID0gcGxheWVyVHdvLnJhbmRvbUF0dGFjaygpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbUF0dGFja0Nvb3JkKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJPbmVCb2FyZC5pc0V2ZXJ5U2hpcFN1bmsoKSkge1xuICAgICAgICB3aW5uZXIgPSBwbGF5ZXJUd287XG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyVHdvQm9hcmQuaXNFdmVyeVNoaXBTdW5rKCkpIHtcbiAgICAgICAgd2lubmVyID0gcGxheWVyT25lO1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByYW5kb21BdHRhY2tDb29yZDtcbiAgfTtcblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgICBwbGF5ZXJUd28gPSBQbGF5ZXIodHJ1ZSk7XG4gICAgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgd2lubmVyID0gbnVsbDtcbiAgICBwbGF5ZXJPbmVTaGlwT25lID0gU2hpcCg1KTtcbiAgICBwbGF5ZXJPbmVTaGlwVHdvID0gU2hpcCgzKTtcbiAgICBwbGF5ZXJPbmVTaGlwVGhyZWUgPSBTaGlwKDIpO1xuICAgIHBsYXllclR3b1NoaXBPbmUgPSBTaGlwKDQpO1xuICAgIHBsYXllclR3b1NoaXBUd28gPSBTaGlwKDEpO1xuICAgIHBsYXllclR3b1NoaXBUaHJlZSA9IFNoaXAoMik7XG4gICAgcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllck9uZVNoaXBPbmUsIHBsYXllck9uZVNoaXBQb3NpdGlvbnNbMF0pO1xuICAgIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJPbmVTaGlwVHdvLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzFdKTtcbiAgICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcFRocmVlLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzJdKTtcbiAgICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcE9uZSwgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1swXSk7XG4gICAgcGxheWVyVHdvQm9hcmQucGxhY2VTaGlwKHBsYXllclR3b1NoaXBUd28sIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbMV0pO1xuICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChwbGF5ZXJUd29TaGlwVGhyZWUsIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbMl0pO1xuICB9O1xuXG4gIHJlc2V0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcGxheWVyT25lQm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyT25lQm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgcGxheWVyVHdvQm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyVHdvQm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgZ2FtZU92ZXIoKSB7XG4gICAgICByZXR1cm4gZ2FtZU92ZXI7XG4gICAgfSxcbiAgICBnZXQgd2lubmVyKCkge1xuICAgICAgcmV0dXJuIHdpbm5lcjtcbiAgICB9LFxuICAgIGdldCBwbGF5ZXJPbmUoKSB7XG4gICAgICByZXR1cm4gcGxheWVyT25lO1xuICAgIH0sXG4gICAgZ2V0IHBsYXllclR3bygpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJUd287XG4gICAgfSxcbiAgICBwbGF5Um91bmQsXG4gICAgcmVzZXQsXG4gIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck9uZUJvYXJkJyk7XG4gIGNvbnN0IHBsYXllclR3b0JvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclR3b0JvYXJkJyk7XG4gIGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0c0JvYXJkJyk7XG4gIGxldCB7IHBsYXllck9uZUJvYXJkLCBwbGF5ZXJUd29Cb2FyZCB9ID0gZ2FtZUNvbnRyb2xsZXI7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbic7XG4gIHBsYXlBZ2FpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWFnYWluLWJ0bicpO1xuXG4gIGNvbnN0IHJlZnJlc2hCb2FyZCA9IChwbGF5ZXJCb2FyZCwgaXNDb21wdXRlciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB7IGJvYXJkIH0gPSBwbGF5ZXJCb2FyZDtcbiAgICBsZXQgaW5pdEFscGhhQ2hhckNvZGUgPSA2MztcblxuICAgIGZ1bmN0aW9uIG5leHRDaGFyKGNoYXJDb2RlKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSArIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0xhYmVsRGl2KGNoYXJDb2RlLCBpc051bSA9IGZhbHNlKSB7XG4gICAgICBjb25zdCBsYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbGFiZWxEaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQtbGFiZWwnKTtcbiAgICAgIGlmIChpc051bSkge1xuICAgICAgICBsYWJlbERpdi50ZXh0Q29udGVudCA9IGNoYXJDb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxEaXYudGV4dENvbnRlbnQgPSBuZXh0Q2hhcihjaGFyQ29kZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFiZWxEaXY7XG4gICAgfVxuXG4gICAgYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT5cbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGxheWVyQm9hcmQuaW5kZXhUb0Nvb3JkaW5hdGUocm93SW5kZXgsIGNvbEluZGV4KTtcbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LmNvb3JkID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmF0dGxlZmllbGQtY2VsbCcpO1xuICAgICAgICBpZiAoIWlzQ29tcHV0ZXIpIHtcbiAgICAgICAgICBjZWxsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicpO1xuICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYm94Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNlbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IGNsaWNrSGFuZGxlckNlbGwoZXYpKTtcblxuICAgICAgICBib2FyZERpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItYm9hcmQnKTtcblxuICAgICAgICAvLyBhZGQgYWxwaGFiZXRpYyByb3cgbGFiZWxzIHRvIHRoZSBsZWZ0IHNpZGUgb2YgYm9hcmRcbiAgICAgICAgaWYgKGNvbEluZGV4ICUgMTAgPT09IDApIHtcbiAgICAgICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChuZXdMYWJlbERpdigoaW5pdEFscGhhQ2hhckNvZGUgKz0gMSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGxCdXR0b24pO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIC8vIGFkZCBudW1lcmljIGNvbHVtbiBsYWJlbHMgdW5kZXIgdGhlIGJvYXJkXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQobmV3TGFiZWxEaXYoLTEpKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChuZXdMYWJlbERpdihpLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkRGl2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckNlbGwoZXYpIHtcbiAgICBjb25zdCBzZWxlY3RlZENlbGwgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsQ29vcmRpbmF0ZXMgPSBzZWxlY3RlZENlbGwuZGF0YXNldC5jb29yZDtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gcGxheWVyT25lQm9hcmQuY29vcmRpbmF0ZVRvSW5kZXgoXG4gICAgICBzZWxlY3RlZENlbGxDb29yZGluYXRlcyxcbiAgICApO1xuICAgIGdhbWVDb250cm9sbGVyLnBsYXlSb3VuZChzZWxlY3RlZENlbGxDb29yZGluYXRlcyk7XG4gICAgaWYgKHBsYXllclR3b0JvYXJkLmJvYXJkW3Jvd11bY29sXSkge1xuICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllck9uZUF0dGFja0Nvb29yZCA9IGdhbWVDb250cm9sbGVyLnBsYXlSb3VuZCh1bmRlZmluZWQsIHRydWUpO1xuICAgIGlmIChwbGF5ZXJPbmVBdHRhY2tDb29vcmQpIHtcbiAgICAgIGNvbnN0IHBsYXllck9uZUF0dGFja0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29vcmQ9XCIke3BsYXllck9uZUF0dGFja0Nvb29yZH1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IFtwbGF5ZXJPbmVSb3csIHBsYXllck9uZUNvbF0gPSBwbGF5ZXJPbmVCb2FyZC5jb29yZGluYXRlVG9JbmRleChcbiAgICAgICAgcGxheWVyT25lQXR0YWNrQ29vb3JkLFxuICAgICAgKTtcbiAgICAgIHBsYXllck9uZUF0dGFja0NlbGwuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHBsYXllck9uZUJvYXJkLmJvYXJkW3BsYXllck9uZVJvd11bcGxheWVyT25lQ29sXSkge1xuICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyT25lQXR0YWNrQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBzZWxlY3RlZENlbGwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcGxheWVyT25lQXR0YWNrQ2VsbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGdhbWVDb250cm9sbGVyLmdhbWVPdmVyKSB7XG4gICAgICBkaXNwbGF5V2lubmVyKGdhbWVDb250cm9sbGVyLndpbm5lcik7XG4gICAgICB0b2dnbGVQbGF5QWdhaW5CdXR0b24oKTtcbiAgICAgIEFycmF5LmZyb20oXG4gICAgICAgIHBsYXllclR3b0JvYXJkRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKS5jaGlsZHJlbixcbiAgICAgICkuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNoaWxkTm9kZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5QWdhaW5CdXR0b24oKSB7XG4gICAgaWYgKHBsYXlBZ2FpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICBwbGF5QWdhaW5CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgcGxheUFnYWluQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYWdlKCkge1xuICAgIHBsYXllck9uZUJvYXJkRGl2LnJlbW92ZUNoaWxkKHBsYXllck9uZUJvYXJkRGl2Lmxhc3RDaGlsZCk7XG4gICAgcGxheWVyVHdvQm9hcmREaXYucmVtb3ZlQ2hpbGQocGxheWVyVHdvQm9hcmREaXYubGFzdENoaWxkKTtcbiAgICByZXN1bHRzRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgdG9nZ2xlUGxheUFnYWluQnV0dG9uKCk7XG4gICAgcGxheWVyT25lQm9hcmQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmVCb2FyZDtcbiAgICBwbGF5ZXJUd29Cb2FyZCA9IGdhbWVDb250cm9sbGVyLnBsYXllclR3b0JvYXJkO1xuICAgIHBsYXllck9uZUJvYXJkRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCb2FyZChwbGF5ZXJPbmVCb2FyZCkpO1xuICAgIHBsYXllclR3b0JvYXJkRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCb2FyZChwbGF5ZXJUd29Cb2FyZCwgdHJ1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyUGxheUFnYWluQnV0dG9uKCkge1xuICAgIGdhbWVDb250cm9sbGVyLnJlc2V0KCk7XG4gICAgcmVzZXRQYWdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5V2lubmVyKHdpbm5pbmdQbGF5ZXIpIHtcbiAgICBpZiAod2lubmluZ1BsYXllciA9PT0gZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lKSB7XG4gICAgICByZXN1bHRzRGl2LnRleHRDb250ZW50ID0gJ1lvdSBXaW4hJztcbiAgICAgIHJlc3VsdHNEaXYuY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XG4gICAgICByZXN1bHRzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2xvc2VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHNEaXYudGV4dENvbnRlbnQgPSAnWW91IExvc2UnO1xuICAgICAgcmVzdWx0c0Rpdi5jbGFzc0xpc3QuYWRkKCdsb3NlcicpO1xuICAgICAgcmVzdWx0c0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCd3aW5uZXInKTtcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJPbmVCb2FyZERpdi5hcHBlbmRDaGlsZChyZWZyZXNoQm9hcmQocGxheWVyT25lQm9hcmQpKTtcbiAgcGxheWVyVHdvQm9hcmREaXYuYXBwZW5kQ2hpbGQocmVmcmVzaEJvYXJkKHBsYXllclR3b0JvYXJkLCB0cnVlKSk7XG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgY2xpY2tIYW5kbGVyUGxheUFnYWluQnV0dG9uKCksXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kKHBsYXlBZ2FpbkJ1dHRvbik7XG59KSgpO1xuXG5jb25zdCBmdW5jcyA9IHtcbiAgU2hpcCxcbiAgR2FtZWJvYXJkLFxuICBQbGF5ZXIsXG4gIGdhbWVDb250cm9sbGVyLFxuICBkaXNwbGF5Q29udHJvbGxlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmNzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9