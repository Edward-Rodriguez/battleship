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

  function placeShipRandomly(ship) {
    const newShipCoordinates = new Array(ship.length).fill(null);

    function randomCloseCoord(coord) {
      const changeValue = [-1, 0, 1];
      const randomXIndex = Math.floor(Math.random() * changeValue.length);
      const randomYIndex = Math.floor(Math.random() * changeValue.length);
      const randomX = changeValue[randomXIndex];
      const randomY = changeValue[randomYIndex];

      let xCoord = (Number(coord.substring(1)) + randomY) % 10;
      let yCoordCharCode = coord.charCodeAt(0) + randomX;

      if (xCoord > 74) xCoord = 65;
      else if (xCoord < 65) xCoord = 74;
      if (yCoordCharCode > 74) yCoordCharCode = 65;
      else if (yCoordCharCode < 65) yCoordCharCode = 74;
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

  const randomShipPosition = (shipArray) => {
    const newShipArray = [...shipArray];
    newShipArray.forEach((shipCoord, index) => {});
  };

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
    playerOneBoard.placeShip(playerOneShipOne, playerOneShipPositions[0]);
    playerOneBoard.placeShip(playerOneShipTwo, playerOneShipPositions[1]);
    playerOneBoard.placeShip(playerOneShipThree, playerOneShipPositions[2]);
    playerOneBoard.placeShip(playerOneShipFour, playerOneShipPositions[3]);
    playerOneBoard.placeShip(playerOneShipFive, playerOneShipPositions[4]);
    playerTwoBoard.placeShip(playerTwoShipOne, playerTwoShipPositions[0]);
    playerTwoBoard.placeShip(playerTwoShipTwo, playerTwoShipPositions[1]);
    playerTwoBoard.placeShip(playerTwoShipThree, playerTwoShipPositions[2]);
    playerTwoBoard.placeShip(playerTwoShipFour, playerTwoShipPositions[3]);
    playerTwoBoard.placeShip(playerTwoShipFive, playerTwoShipPositions[4]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpQ0FBaUM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWxAMDsxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbiNwYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2hlYWRlciBoZWFkZXInXG4gICAgJ2NvbnRlbnQgY29udGVudCdcbiAgICAnZm9vdGVyIGZvb3Rlcic7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAncGxheWVyQm9hcmQgcGxheWVyQm9hcmQnXG4gICAgJ3Jlc3VsdHNCb2FyZCByZXN1bHRzQm9hcmQnXG4gICAgJ3BsYXlBZ2FpbkJ1dHRvbiBwbGF5QWdhaW5CdXR0b24nO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNoZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgc3lzdGVtLXVpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3BsYXllck9uZVRpdGxlLFxuI3BsYXllclR3b1RpdGxlIHtcbiAgZ3JpZC1hcmVhOiBwbGF5ZXJPbmVUaXRsZTtcbiAgLyogZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgc3lzdGVtLXVpOyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcGFkZGluZzogMjRweCAwcHggMTJweCAwcHg7XG59XG5cbiNwbGF5ZXJPbmVUaXRsZSB7XG4gIGNvbG9yOiByZ2JhKDY0LCA5NSwgMTI3LCAwLjc2NSk7XG59XG5cbiNwbGF5ZXJUd29UaXRsZSB7XG4gIGNvbG9yOiByZ2IoMjEyLCAxMDYsIDEwNik7XG59XG5cbiNib2FyZHMge1xuICBncmlkLWFyZWE6IHBsYXllckJvYXJkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDMycHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMzJweCk7XG59XG5cbi5ib2FyZC1sYWJlbCB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2IoMTI1LCAxMjUsIDEyNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmF0dGxlZmllbGQtY2VsbCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgb3V0bGluZTogaW5oZXJpdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGJkYjtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbiNwbGF5ZXJPbmVCb2FyZCxcbiNwbGF5ZXJUd29Cb2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3BsYXllclR3b0JvYXJkIC5iYXR0bGVmaWVsZC1jZWxsOmhvdmVyOm5vdCguaGl0KSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cblxuLnNoaXAtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgOTUsIDEyNywgMC42NjkpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDEwNiwgMTA2LCAwLjY2OSk7XG59XG5cbi5oaXQ6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiAnXFxcXDI3NGMnOyAvKiBUaGlzIHdpbGwgcmVuZGVyIHRoZSAnWCcgKi9cbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1pc3M6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiAn4pePJzsgLyogVGhpcyB3aWxsIHJlbmRlciB0aGUgJ1gnICovXG59XG5cbiNyZXN1bHRzQm9hcmQge1xuICBncmlkLWFyZWE6IHJlc3VsdHNCb2FyZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuLmxvc2VyIHtcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi53aW5uZXIge1xuICBjb2xvcjogIzQwN2Y3Zjtcbn1cblxuLnBsYXktYWdhaW4tYnRuIHtcbiAgZ3JpZC1hcmVhOiBwbGF5QWdhaW5CdXR0b247XG4gIG1hcmdpbjogMnJlbTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwN2Y3ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSxcbiAgICAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbiNmb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgbWF4LWhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjM5KTtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4uY29weXJpZ2h0IGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvcHlyaWdodCBpbWcge1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbiNmb290ZXIgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQzs7O21CQUdpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7O3FDQUdtQztFQUNuQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUUsNkJBQTZCO0FBQ2pEOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBRSw2QkFBNkI7QUFDN0M7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZjtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWxAMDsxJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ2NvbnRlbnQgY29udGVudCdcXG4gICAgJ2Zvb3RlciBmb290ZXInO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3BsYXllckJvYXJkIHBsYXllckJvYXJkJ1xcbiAgICAncmVzdWx0c0JvYXJkIHJlc3VsdHNCb2FyZCdcXG4gICAgJ3BsYXlBZ2FpbkJ1dHRvbiBwbGF5QWdhaW5CdXR0b24nO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogNDhweDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBzeXN0ZW0tdWk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllck9uZVRpdGxlLFxcbiNwbGF5ZXJUd29UaXRsZSB7XFxuICBncmlkLWFyZWE6IHBsYXllck9uZVRpdGxlO1xcbiAgLyogZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgc3lzdGVtLXVpOyAqL1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDI0cHggMHB4IDEycHggMHB4O1xcbn1cXG5cXG4jcGxheWVyT25lVGl0bGUge1xcbiAgY29sb3I6IHJnYmEoNjQsIDk1LCAxMjcsIDAuNzY1KTtcXG59XFxuXFxuI3BsYXllclR3b1RpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMjEyLCAxMDYsIDEwNik7XFxufVxcblxcbiNib2FyZHMge1xcbiAgZ3JpZC1hcmVhOiBwbGF5ZXJCb2FyZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDQ4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDMycHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDMycHgpO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHJnYigxMjUsIDEyNSwgMTI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5iYXR0bGVmaWVsZC1jZWxsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RiZGI7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jcGxheWVyT25lQm9hcmQsXFxuI3BsYXllclR3b0JvYXJkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllclR3b0JvYXJkIC5iYXR0bGVmaWVsZC1jZWxsOmhvdmVyOm5vdCguaGl0KSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbn1cXG5cXG4uc2hpcC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgOTUsIDEyNywgMC42NjkpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAxMDYsIDEwNiwgMC42NjkpO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb250ZW50OiAnXFxcXDI3NGMnOyAvKiBUaGlzIHdpbGwgcmVuZGVyIHRoZSAnWCcgKi9cXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5taXNzOjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb250ZW50OiAn4pePJzsgLyogVGhpcyB3aWxsIHJlbmRlciB0aGUgJ1gnICovXFxufVxcblxcbiNyZXN1bHRzQm9hcmQge1xcbiAgZ3JpZC1hcmVhOiByZXN1bHRzQm9hcmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA0OHB4O1xcbn1cXG5cXG4ubG9zZXIge1xcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi53aW5uZXIge1xcbiAgY29sb3I6ICM0MDdmN2Y7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ0biB7XFxuICBncmlkLWFyZWE6IHBsYXlBZ2FpbkJ1dHRvbjtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwN2Y3ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksXFxuICAgIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIG1heC1oZWlnaHQ6IDQ4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzOSk7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuLmNvcHlyaWdodCBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb3B5cmlnaHQgaW1nIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXFxuI2Zvb3RlciBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmZ1bmN0aW9uIFNoaXAoc2l6ZSA9IG51bGwpIHtcbiAgbGV0IGxlbmd0aCA9IHNpemU7XG4gIGxldCBoaXRDb3VudGVyID0gbnVsbDtcblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIGxlbmd0aCA/IGxlbmd0aCA9PT0gaGl0Q291bnRlciA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIGhpdENvdW50ZXIgKz0gMTtcbiAgICByZXR1cm4gaGl0Q291bnRlcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBzZXQgbGVuZ3RoKG5ld0xlbmd0aCkge1xuICAgICAgbGVuZ3RoID0gbmV3TGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IGhpdENvdW50ZXIoKSB7XG4gICAgICByZXR1cm4gaGl0Q291bnRlcjtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgZnVuY3Rpb24gbmV3MkRBcnJheShzaXplKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoc2l6ZSksICgpID0+IG5ldyBBcnJheShzaXplKS5maWxsKG51bGwpKTtcbiAgfVxuXG4gIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuICBsZXQgYm9hcmQgPSBuZXcyREFycmF5KGJvYXJkU2l6ZSk7XG4gIGxldCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgZnVuY3Rpb24gY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF0udG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBjb2wgPSBjb29yZGluYXRlLnN1YnN0cmluZygxKTtcbiAgICBjb25zdCByb3dDaGFyQ29kZSA9IHJvdy5jaGFyQ29kZUF0KCk7XG4gICAgY29uc3Qgcm93SW5kZXhWYWx1ZSA9IHJvd0NoYXJDb2RlIC0gNjU7XG4gICAgY29uc3QgY29sSW5kZXhWYWx1ZSA9IE51bWJlcihjb2wpIC0gMTtcbiAgICByZXR1cm4gW3Jvd0luZGV4VmFsdWUsIGNvbEluZGV4VmFsdWVdO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhUb0Nvb3JkaW5hdGUocm93LCBjb2wpIHtcbiAgICBjb25zdCByb3dDaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUocm93ICsgNjUpO1xuICAgIHJldHVybiByb3dDaGFyQ29kZSArIChjb2wgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRDb29yZGluYXRlKGNvb3JkaW5hdGUpIHtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgY29uc3QgW3Jvd0luZGV4LCBjb2xJbmRleF0gPSBbLi4uY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgIFtyb3dJbmRleCwgY29sSW5kZXhdLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBib2FyZFNpemUgLSAxKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2NjdXBpZWQoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBbLi4uY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgIHJldHVybiAhIWJvYXJkW3Jvd11bY29sXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgIGlmIChcbiAgICAgIHNoaXAubGVuZ3RoICE9PSBjb29yZGluYXRlcy5sZW5ndGggfHxcbiAgICAgIGNvb3JkaW5hdGVzLnNvbWUoKGNvb3JkKSA9PiAhaXNWYWxpZENvb3JkaW5hdGUoY29vcmQpKSB8fFxuICAgICAgY29vcmRpbmF0ZXMuc29tZSgoY29vcmQpID0+IGlzT2NjdXBpZWQoY29vcmQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkaW5hdGVUb0luZGV4KGNvb3JkKTtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seShzaGlwKSB7XG4gICAgY29uc3QgbmV3U2hpcENvb3JkaW5hdGVzID0gbmV3IEFycmF5KHNoaXAubGVuZ3RoKS5maWxsKG51bGwpO1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tQ2xvc2VDb29yZChjb29yZCkge1xuICAgICAgY29uc3QgY2hhbmdlVmFsdWUgPSBbLTEsIDAsIDFdO1xuICAgICAgY29uc3QgcmFuZG9tWEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbmdlVmFsdWUubGVuZ3RoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYW5nZVZhbHVlLmxlbmd0aCk7XG4gICAgICBjb25zdCByYW5kb21YID0gY2hhbmdlVmFsdWVbcmFuZG9tWEluZGV4XTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSBjaGFuZ2VWYWx1ZVtyYW5kb21ZSW5kZXhdO1xuXG4gICAgICBsZXQgeENvb3JkID0gKE51bWJlcihjb29yZC5zdWJzdHJpbmcoMSkpICsgcmFuZG9tWSkgJSAxMDtcbiAgICAgIGxldCB5Q29vcmRDaGFyQ29kZSA9IGNvb3JkLmNoYXJDb2RlQXQoMCkgKyByYW5kb21YO1xuXG4gICAgICBpZiAoeENvb3JkID4gNzQpIHhDb29yZCA9IDY1O1xuICAgICAgZWxzZSBpZiAoeENvb3JkIDwgNjUpIHhDb29yZCA9IDc0O1xuICAgICAgaWYgKHlDb29yZENoYXJDb2RlID4gNzQpIHlDb29yZENoYXJDb2RlID0gNjU7XG4gICAgICBlbHNlIGlmICh5Q29vcmRDaGFyQ29kZSA8IDY1KSB5Q29vcmRDaGFyQ29kZSA9IDc0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBbLi4uY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgIGlmIChib2FyZFtyb3ddW2NvbF0pIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBib2FyZCA9IG5ldzJEQXJyYXkoYm9hcmRTaXplKTtcbiAgICBtaXNzZWRBdHRhY2tzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZXJ5U2hpcFN1bmsoKSB7XG4gICAgbGV0IHNoaXBzU3VuayA9IHRydWU7XG4gICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PlxuICAgICAgcm93LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAgIT09IG51bGwgJiYgIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBzaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgICByZXR1cm4gc2hpcHNTdW5rO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICByZXNldCxcbiAgICBpc0V2ZXJ5U2hpcFN1bmssXG4gICAgaW5kZXhUb0Nvb3JkaW5hdGUsXG4gICAgY29vcmRpbmF0ZVRvSW5kZXgsXG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgZ2V0IG1pc3NlZEF0dGFja3MoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkQXR0YWNrcztcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgUGxheWVyID0gKGlzQ29tcHV0ZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBhdHRhY2tzTGlzdCA9IG5ldyBTZXQoKTtcbiAgbGV0IGF2YWlsYWJsZU1vdmVzU2V0ID0gbmV3IFNldCgpO1xuICBsZXQgYWN0aXZlUGxheWVyID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVNb3Zlc1NldCgpIHtcbiAgICBjb25zdCBtb3Zlc1NldCA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gNjU7IGkgPD0gNzQ7IGkgKz0gMSkge1xuICAgICAgLy8gQS1KIHVuaWNvZGVcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpIHtcbiAgICAgICAgbW92ZXNTZXQuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vdmVzU2V0O1xuICB9XG5cbiAgaWYgKGlzQ29tcHV0ZXIpIGF2YWlsYWJsZU1vdmVzU2V0ID0gZ2VuZXJhdGVNb3Zlc1NldCgpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc1NldC5zaXplKTtcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gQXJyYXkuZnJvbShhdmFpbGFibGVNb3Zlc1NldClbcmFuZG9tXTtcbiAgICBhdmFpbGFibGVNb3Zlc1NldC5kZWxldGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgYXR0YWNrc0xpc3QuYWRkKHJhbmRvbUNvb3JkaW5hdGUpO1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyO1xuICAgIH0sXG4gICAgZ2V0IGF0dGFja3NMaXN0KCkge1xuICAgICAgcmV0dXJuIGF0dGFja3NMaXN0O1xuICAgIH0sXG4gICAgZ2V0IGFjdGl2ZVBsYXllcigpIHtcbiAgICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gICAgfSxcbiAgICBzZXQgYWN0aXZlUGxheWVyKGFjdGl2ZUZsYWcpIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZUZsYWc7XG4gICAgfSxcbiAgICByYW5kb21BdHRhY2ssXG4gIH07XG59O1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXJPbmU7XG4gIGxldCBwbGF5ZXJUd287XG4gIGxldCBwbGF5ZXJPbmVCb2FyZDtcbiAgbGV0IHBsYXllclR3b0JvYXJkO1xuICBsZXQgZ2FtZU92ZXI7XG4gIGxldCB3aW5uZXI7XG5cbiAgbGV0IHBsYXllck9uZVNoaXBPbmU7XG4gIGxldCBwbGF5ZXJPbmVTaGlwVHdvO1xuICBsZXQgcGxheWVyT25lU2hpcFRocmVlO1xuICBsZXQgcGxheWVyT25lU2hpcEZvdXI7XG4gIGxldCBwbGF5ZXJPbmVTaGlwRml2ZTtcblxuICBsZXQgcGxheWVyVHdvU2hpcE9uZTtcbiAgbGV0IHBsYXllclR3b1NoaXBUd287XG4gIGxldCBwbGF5ZXJUd29TaGlwVGhyZWU7XG4gIGxldCBwbGF5ZXJUd29TaGlwRm91cjtcbiAgbGV0IHBsYXllclR3b1NoaXBGaXZlO1xuXG4gIGNvbnN0IHBsYXllck9uZVNoaXBQb3NpdGlvbnMgPSBbXG4gICAgWydBMScsICdBMicsICdBMycsICdBNCcsICdBNSddLFxuICAgIFsnQjcnLCAnQzcnLCAnRDcnLCAnRTcnXSxcbiAgICBbJ0MzJywgJ0QzJywgJ0UzJ10sXG4gICAgWydHOCcsICdHOScsICdHMTAnXSxcbiAgICBbJ0oyJywgJ0ozJ10sXG4gIF07XG5cbiAgY29uc3QgcGxheWVyVHdvU2hpcFBvc2l0aW9ucyA9IFtcbiAgICBbJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1J10sXG4gICAgWydFMicsICdGMicsICdHMicsICdIMiddLFxuICAgIFsnRjgnLCAnRjknLCAnRjEwJ10sXG4gICAgWydBOScsICdCOScsICdDOSddLFxuICAgIFsnSTQnLCAnSTUnXSxcbiAgXTtcblxuICBjb25zdCByYW5kb21TaGlwUG9zaXRpb24gPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcEFycmF5ID0gWy4uLnNoaXBBcnJheV07XG4gICAgbmV3U2hpcEFycmF5LmZvckVhY2goKHNoaXBDb29yZCwgaW5kZXgpID0+IHt9KTtcbiAgfTtcblxuICBjb25zdCBwbGF5Um91bmQgPSAoYXR0YWNrQ29vcmQsIHBsYXllclR3b1R1cm4gPSBmYWxzZSkgPT4ge1xuICAgIGxldCByYW5kb21BdHRhY2tDb29yZCA9IG51bGw7XG4gICAgaWYgKCFnYW1lT3Zlcikge1xuICAgICAgaWYgKCFwbGF5ZXJUd29UdXJuKSB7XG4gICAgICAgIHBsYXllclR3b0JvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrQ29vcmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZG9tQXR0YWNrQ29vcmQgPSBwbGF5ZXJUd28ucmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tQXR0YWNrQ29vcmQpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllck9uZUJvYXJkLmlzRXZlcnlTaGlwU3VuaygpKSB7XG4gICAgICAgIHdpbm5lciA9IHBsYXllclR3bztcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJUd29Cb2FyZC5pc0V2ZXJ5U2hpcFN1bmsoKSkge1xuICAgICAgICB3aW5uZXIgPSBwbGF5ZXJPbmU7XG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJhbmRvbUF0dGFja0Nvb3JkO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHBsYXllck9uZSA9IFBsYXllcigpO1xuICAgIHBsYXllclR3byA9IFBsYXllcih0cnVlKTtcbiAgICBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIHBsYXllclR3b0JvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB3aW5uZXIgPSBudWxsO1xuICAgIHBsYXllck9uZVNoaXBPbmUgPSBTaGlwKDUpO1xuICAgIHBsYXllck9uZVNoaXBUd28gPSBTaGlwKDQpO1xuICAgIHBsYXllck9uZVNoaXBUaHJlZSA9IFNoaXAoMyk7XG4gICAgcGxheWVyT25lU2hpcEZvdXIgPSBTaGlwKDMpO1xuICAgIHBsYXllck9uZVNoaXBGaXZlID0gU2hpcCgyKTtcbiAgICBwbGF5ZXJUd29TaGlwT25lID0gU2hpcCg1KTtcbiAgICBwbGF5ZXJUd29TaGlwVHdvID0gU2hpcCg0KTtcbiAgICBwbGF5ZXJUd29TaGlwVGhyZWUgPSBTaGlwKDMpO1xuICAgIHBsYXllclR3b1NoaXBGb3VyID0gU2hpcCgzKTtcbiAgICBwbGF5ZXJUd29TaGlwRml2ZSA9IFNoaXAoMik7XG4gICAgcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllck9uZVNoaXBPbmUsIHBsYXllck9uZVNoaXBQb3NpdGlvbnNbMF0pO1xuICAgIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJPbmVTaGlwVHdvLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzFdKTtcbiAgICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcFRocmVlLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzJdKTtcbiAgICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcEZvdXIsIHBsYXllck9uZVNoaXBQb3NpdGlvbnNbM10pO1xuICAgIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJPbmVTaGlwRml2ZSwgcGxheWVyT25lU2hpcFBvc2l0aW9uc1s0XSk7XG4gICAgcGxheWVyVHdvQm9hcmQucGxhY2VTaGlwKHBsYXllclR3b1NoaXBPbmUsIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbMF0pO1xuICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChwbGF5ZXJUd29TaGlwVHdvLCBwbGF5ZXJUd29TaGlwUG9zaXRpb25zWzFdKTtcbiAgICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcFRocmVlLCBwbGF5ZXJUd29TaGlwUG9zaXRpb25zWzJdKTtcbiAgICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcEZvdXIsIHBsYXllclR3b1NoaXBQb3NpdGlvbnNbM10pO1xuICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChwbGF5ZXJUd29TaGlwRml2ZSwgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1s0XSk7XG4gIH07XG5cbiAgcmVzZXQoKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBwbGF5ZXJPbmVCb2FyZCgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJPbmVCb2FyZDtcbiAgICB9LFxuICAgIGdldCBwbGF5ZXJUd29Cb2FyZCgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJUd29Cb2FyZDtcbiAgICB9LFxuICAgIGdldCBnYW1lT3ZlcigpIHtcbiAgICAgIHJldHVybiBnYW1lT3ZlcjtcbiAgICB9LFxuICAgIGdldCB3aW5uZXIoKSB7XG4gICAgICByZXR1cm4gd2lubmVyO1xuICAgIH0sXG4gICAgZ2V0IHBsYXllck9uZSgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJPbmU7XG4gICAgfSxcbiAgICBnZXQgcGxheWVyVHdvKCkge1xuICAgICAgcmV0dXJuIHBsYXllclR3bztcbiAgICB9LFxuICAgIHBsYXlSb3VuZCxcbiAgICByZXNldCxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyT25lQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyT25lQm9hcmQnKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyVHdvQm9hcmQnKTtcbiAgY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzQm9hcmQnKTtcbiAgbGV0IHsgcGxheWVyT25lQm9hcmQsIHBsYXllclR3b0JvYXJkIH0gPSBnYW1lQ29udHJvbGxlcjtcbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluJztcbiAgcGxheUFnYWluQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXktYWdhaW4tYnRuJyk7XG5cbiAgY29uc3QgcmVmcmVzaEJvYXJkID0gKHBsYXllckJvYXJkLCBpc0NvbXB1dGVyID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHsgYm9hcmQgfSA9IHBsYXllckJvYXJkO1xuICAgIGxldCBpbml0QWxwaGFDaGFyQ29kZSA9IDYzO1xuXG4gICAgZnVuY3Rpb24gbmV4dENoYXIoY2hhckNvZGUpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlICsgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3TGFiZWxEaXYoY2hhckNvZGUsIGlzTnVtID0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGxhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsYWJlbERpdi5jbGFzc0xpc3QuYWRkKCdib2FyZC1sYWJlbCcpO1xuICAgICAgaWYgKGlzTnVtKSB7XG4gICAgICAgIGxhYmVsRGl2LnRleHRDb250ZW50ID0gY2hhckNvZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbERpdi50ZXh0Q29udGVudCA9IG5leHRDaGFyKGNoYXJDb2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYWJlbERpdjtcbiAgICB9XG5cbiAgICBib2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PlxuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXJCb2FyZC5pbmRleFRvQ29vcmRpbmF0ZShyb3dJbmRleCwgY29sSW5kZXgpO1xuICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29vcmQgPSBjb29yZGluYXRlcztcbiAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdiYXR0bGVmaWVsZC1jZWxsJyk7XG4gICAgICAgIGlmICghaXNDb21wdXRlcikge1xuICAgICAgICAgIGNlbGxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgncGxheWVyJyk7XG4gICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2VsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4gY2xpY2tIYW5kbGVyQ2VsbChldikpO1xuXG4gICAgICAgIGJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZCcpO1xuXG4gICAgICAgIC8vIGFkZCBhbHBoYWJldGljIHJvdyBsYWJlbHMgdG8gdGhlIGxlZnQgc2lkZSBvZiBib2FyZFxuICAgICAgICBpZiAoY29sSW5kZXggJSAxMCA9PT0gMCkge1xuICAgICAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKG5ld0xhYmVsRGl2KChpbml0QWxwaGFDaGFyQ29kZSArPSAxKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgLy8gYWRkIG51bWVyaWMgY29sdW1uIGxhYmVscyB1bmRlciB0aGUgYm9hcmRcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChuZXdMYWJlbERpdigtMSkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpICs9IDEpIHtcbiAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKG5ld0xhYmVsRGl2KGksIHRydWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmREaXY7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQ2VsbChldikge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2VsbCA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBzZWxlY3RlZENlbGxDb29yZGluYXRlcyA9IHNlbGVjdGVkQ2VsbC5kYXRhc2V0LmNvb3JkO1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBwbGF5ZXJPbmVCb2FyZC5jb29yZGluYXRlVG9JbmRleChcbiAgICAgIHNlbGVjdGVkQ2VsbENvb3JkaW5hdGVzLFxuICAgICk7XG4gICAgZ2FtZUNvbnRyb2xsZXIucGxheVJvdW5kKHNlbGVjdGVkQ2VsbENvb3JkaW5hdGVzKTtcbiAgICBpZiAocGxheWVyVHdvQm9hcmQuYm9hcmRbcm93XVtjb2xdKSB7XG4gICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyT25lQXR0YWNrQ29vb3JkID0gZ2FtZUNvbnRyb2xsZXIucGxheVJvdW5kKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgaWYgKHBsYXllck9uZUF0dGFja0Nvb29yZCkge1xuICAgICAgY29uc3QgcGxheWVyT25lQXR0YWNrQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb29yZD1cIiR7cGxheWVyT25lQXR0YWNrQ29vb3JkfVwiXWAsXG4gICAgICApO1xuICAgICAgY29uc3QgW3BsYXllck9uZVJvdywgcGxheWVyT25lQ29sXSA9IHBsYXllck9uZUJvYXJkLmNvb3JkaW5hdGVUb0luZGV4KFxuICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDb29vcmQsXG4gICAgICApO1xuICAgICAgcGxheWVyT25lQXR0YWNrQ2VsbC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAocGxheWVyT25lQm9hcmQuYm9hcmRbcGxheWVyT25lUm93XVtwbGF5ZXJPbmVDb2xdKSB7XG4gICAgICAgIHBsYXllck9uZUF0dGFja0NlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJPbmVBdHRhY2tDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkQ2VsbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBwbGF5ZXJPbmVBdHRhY2tDZWxsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZUNvbnRyb2xsZXIuZ2FtZU92ZXIpIHtcbiAgICAgIGRpc3BsYXlXaW5uZXIoZ2FtZUNvbnRyb2xsZXIud2lubmVyKTtcbiAgICAgIHRvZ2dsZVBsYXlBZ2FpbkJ1dHRvbigpO1xuICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgcGxheWVyVHdvQm9hcmREaXYucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpLmNoaWxkcmVuLFxuICAgICAgKS5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY2hpbGROb2RlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXlBZ2FpbkJ1dHRvbigpIHtcbiAgICBpZiAocGxheUFnYWluQnV0dG9uLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgIHBsYXlBZ2FpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBwbGF5QWdhaW5CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFBhZ2UoKSB7XG4gICAgcGxheWVyT25lQm9hcmREaXYucmVtb3ZlQ2hpbGQocGxheWVyT25lQm9hcmREaXYubGFzdENoaWxkKTtcbiAgICBwbGF5ZXJUd29Cb2FyZERpdi5yZW1vdmVDaGlsZChwbGF5ZXJUd29Cb2FyZERpdi5sYXN0Q2hpbGQpO1xuICAgIHJlc3VsdHNEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICB0b2dnbGVQbGF5QWdhaW5CdXR0b24oKTtcbiAgICBwbGF5ZXJPbmVCb2FyZCA9IGdhbWVDb250cm9sbGVyLnBsYXllck9uZUJvYXJkO1xuICAgIHBsYXllclR3b0JvYXJkID0gZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvQm9hcmQ7XG4gICAgcGxheWVyT25lQm9hcmREaXYuYXBwZW5kQ2hpbGQocmVmcmVzaEJvYXJkKHBsYXllck9uZUJvYXJkKSk7XG4gICAgcGxheWVyVHdvQm9hcmREaXYuYXBwZW5kQ2hpbGQocmVmcmVzaEJvYXJkKHBsYXllclR3b0JvYXJkLCB0cnVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0hhbmRsZXJQbGF5QWdhaW5CdXR0b24oKSB7XG4gICAgZ2FtZUNvbnRyb2xsZXIucmVzZXQoKTtcbiAgICByZXNldFBhZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIod2lubmluZ1BsYXllcikge1xuICAgIGlmICh3aW5uaW5nUGxheWVyID09PSBnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmUpIHtcbiAgICAgIHJlc3VsdHNEaXYudGV4dENvbnRlbnQgPSAnWW91IFdpbiEnO1xuICAgICAgcmVzdWx0c0Rpdi5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgICAgIHJlc3VsdHNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbG9zZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0c0Rpdi50ZXh0Q29udGVudCA9ICdZb3UgTG9zZSc7XG4gICAgICByZXN1bHRzRGl2LmNsYXNzTGlzdC5hZGQoJ2xvc2VyJyk7XG4gICAgICByZXN1bHRzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3dpbm5lcicpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXllck9uZUJvYXJkRGl2LmFwcGVuZENoaWxkKHJlZnJlc2hCb2FyZChwbGF5ZXJPbmVCb2FyZCkpO1xuICBwbGF5ZXJUd29Cb2FyZERpdi5hcHBlbmRDaGlsZChyZWZyZXNoQm9hcmQocGxheWVyVHdvQm9hcmQsIHRydWUpKTtcbiAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICBjbGlja0hhbmRsZXJQbGF5QWdhaW5CdXR0b24oKSxcbiAgKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmQocGxheUFnYWluQnV0dG9uKTtcbn0pKCk7XG5cbmNvbnN0IGZ1bmNzID0ge1xuICBTaGlwLFxuICBHYW1lYm9hcmQsXG4gIFBsYXllcixcbiAgZ2FtZUNvbnRyb2xsZXIsXG4gIGRpc3BsYXlDb250cm9sbGVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3M7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=