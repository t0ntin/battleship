/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}


.title {
  color: red;
}

body {
  background-color: rgb(36, 36, 36);
  color: white;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  gap: 15px;
}

.player1-board, .computer-board{
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  width: 290px;  
  height: 290px;
  /* border: 1px, solid rgb(179, 177, 177); */

}

.box {
  border: 1px, solid rgb(179, 177, 177);
  /* outline:1px solid rgb(179, 177, 177); */
  /* width: 100%;
  height: 15px; */
  width: 92%;
  height: 92%;
  background-color: #1E3F66;
}

.middle-container {
  width: auto;
  height: 57px; 
  /* height: 100px; */
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: none;  */
  position: relative; 
  line-height: 19px; /* Half container height */
}

/* .middle-container {
  width: auto;
  height: 38px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  overflow-y: auto;
  line-height: 1.2;
  height: 38px; 
  transition: opacity 0.5s ease-in-out;
  opacity: 1; 

  
} */


.ship {
  /* border: 1px solid white; */
  /* box-shadow: 0 0 0 2px rgb(253, 253, 253); */
  background-color: blueviolet;


  /* width: 20px;
  height: 20px; */
}

.carrier {
  background-color: deepskyblue;
}

.battleship {
 background-color: orange;
}

.cruiser {
  background-color: blueviolet;
}

.submarine {
  background-color: cornflowerblue;
}

.destroyer {
  background-color: fuchsia;
}

#carrier {
  width: 100px;
  height: 14px;
}

#battleship {
  width: 80px;
  height: 14px;
}

#cruiser {
  width: 60px;
  height: 14px;
}

#submarine {
  width: 60px;
  height: 14px;
}

#destroyer {
  width: 40px;
  height: 14px;
}

.hit {
  background-color: rgb(255, 255, 255);
}

.miss {
  background-color: gray;
}

.hover-preview {
  background-color: hsla(288, 100%, 50%, 0.786); /* translucent violet overlay */
}

.valid-hover {
  background-color: green;
}

.invalid-hover {
  background-color: rgb(255, 0, 0);
}

.random-placement-button {
  width: 170px;
  height: 30px;
  padding: 3px 3px;
  background-color: black; /* Blue */
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

}

.random-placement-button:hover {
  background-color: rgb(53, 52, 52);
}

/* .text-updates {
  transition: opacity 0.5s;
  opacity: 0;


} */

/* Message element base styles */
.text-updates {
  position: absolute;
  width: 100%;
  text-align: center;
  opacity: 0;
  /* transform: translateY(0); */
  transition: 
  opacity 0.5s ease-in-out,
  transform 0.5s ease-in-out;
  pointer-events: none; 
}

/* Only animate the bottom message */
.text-updates:nth-last-child(1) { 
  bottom: 0;
  /* STARTS SLIGHTLY FROM THE BOTTOM */
  transform: translateY(7px);
  transition: 
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  color: red;
}

.text-updates:nth-last-child(2) { 

  top: 19px; 
  transform: translateY(0); 
}

.text-updates:nth-last-child(3) { 
  top: 0;  
}

.text-updates.visible {
  opacity: 1;
  transform: translateY(0);
  /* color: red; */
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gBAAgB;AAClB;;;AAGA;EACE,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,2CAA2C;;AAE7C;;AAEA;EACE,qCAAqC;EACrC,0CAA0C;EAC1C;iBACe;EACf,UAAU;EACV,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB,EAAE,0BAA0B;AAC/C;;AAEA;;;;;;;;;;;;;;;;GAgBG;;;AAGH;EACE,6BAA6B;EAC7B,8CAA8C;EAC9C,4BAA4B;;;EAG5B;iBACe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;CACC,wBAAwB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,6CAA6C,EAAE,+BAA+B;AAChF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,uBAAuB,EAAE,SAAS;EAClC,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;;AAExC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;;;;;GAKG;;AAEH,gCAAgC;AAChC;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,8BAA8B;EAC9B;;4BAE0B;EAC1B,oBAAoB;AACtB;;AAEA,oCAAoC;AACpC;EACE,SAAS;EACT,oCAAoC;EACpC,0BAA0B;EAC1B;;8BAE4B;EAC5B,UAAU;AACZ;;AAEA;;EAEE,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,MAAM;AACR;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\n\n.title {\n  color: red;\n}\n\nbody {\n  background-color: rgb(36, 36, 36);\n  color: white;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: left;\n  gap: 15px;\n}\n\n.player1-board, .computer-board{\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  width: 290px;  \n  height: 290px;\n  /* border: 1px, solid rgb(179, 177, 177); */\n\n}\n\n.box {\n  border: 1px, solid rgb(179, 177, 177);\n  /* outline:1px solid rgb(179, 177, 177); */\n  /* width: 100%;\n  height: 15px; */\n  width: 92%;\n  height: 92%;\n  background-color: #1E3F66;\n}\n\n.middle-container {\n  width: auto;\n  height: 57px; \n  /* height: 100px; */\n  border: 1px solid white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* overflow: none;  */\n  position: relative; \n  line-height: 19px; /* Half container height */\n}\n\n/* .middle-container {\n  width: auto;\n  height: 38px;\n  border: 1px solid white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: center;\n  overflow-y: auto;\n  line-height: 1.2;\n  height: 38px; \n  transition: opacity 0.5s ease-in-out;\n  opacity: 1; \n\n  \n} */\n\n\n.ship {\n  /* border: 1px solid white; */\n  /* box-shadow: 0 0 0 2px rgb(253, 253, 253); */\n  background-color: blueviolet;\n\n\n  /* width: 20px;\n  height: 20px; */\n}\n\n.carrier {\n  background-color: deepskyblue;\n}\n\n.battleship {\n background-color: orange;\n}\n\n.cruiser {\n  background-color: blueviolet;\n}\n\n.submarine {\n  background-color: cornflowerblue;\n}\n\n.destroyer {\n  background-color: fuchsia;\n}\n\n#carrier {\n  width: 100px;\n  height: 14px;\n}\n\n#battleship {\n  width: 80px;\n  height: 14px;\n}\n\n#cruiser {\n  width: 60px;\n  height: 14px;\n}\n\n#submarine {\n  width: 60px;\n  height: 14px;\n}\n\n#destroyer {\n  width: 40px;\n  height: 14px;\n}\n\n.hit {\n  background-color: rgb(255, 255, 255);\n}\n\n.miss {\n  background-color: gray;\n}\n\n.hover-preview {\n  background-color: hsla(288, 100%, 50%, 0.786); /* translucent violet overlay */\n}\n\n.valid-hover {\n  background-color: green;\n}\n\n.invalid-hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.random-placement-button {\n  width: 170px;\n  height: 30px;\n  padding: 3px 3px;\n  background-color: black; /* Blue */\n  color: white;\n  border: 1px solid white;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n}\n\n.random-placement-button:hover {\n  background-color: rgb(53, 52, 52);\n}\n\n/* .text-updates {\n  transition: opacity 0.5s;\n  opacity: 0;\n\n\n} */\n\n/* Message element base styles */\n.text-updates {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  /* transform: translateY(0); */\n  transition: \n  opacity 0.5s ease-in-out,\n  transform 0.5s ease-in-out;\n  pointer-events: none; \n}\n\n/* Only animate the bottom message */\n.text-updates:nth-last-child(1) { \n  bottom: 0;\n  /* STARTS SLIGHTLY FROM THE BOTTOM */\n  transform: translateY(7px);\n  transition: \n    opacity 0.5s ease-in-out,\n    transform 0.5s ease-in-out;\n  color: red;\n}\n\n.text-updates:nth-last-child(2) { \n\n  top: 19px; \n  transform: translateY(0); \n}\n\n.text-updates:nth-last-child(3) { \n  top: 0;  \n}\n\n.text-updates.visible {\n  opacity: 1;\n  transform: translateY(0);\n  /* color: red; */\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



class Player  {
  constructor () {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
  }
  placeShip(shipType, rowIndex, colIndex, direction, length) {
    this.gameboard.placeShip(shipType, rowIndex, colIndex, direction, length);
  }

  setUpFleet() {
    const ships = [
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(1, 'carrier'),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(1, 'battleship'),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(1, 'cruiser'),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(1, 'submarine'),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(1, 'destroyer'),
    ];

    ships.forEach(shipType => {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;
      // console.log(`Placing ${shipType.name}...`);
      while (!placed && attempts < maxAttempts) {
          const randomRow = Math.floor(Math.random() * 10);
          const randomCol = Math.floor(Math.random() * 10);
          const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          placed = this.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
          attempts++;
      }
      if (!placed) {
          console.error(`Failed to place ${shipType.name} after ${attempts} attempts.`);
      }
    });
  }
  
  computerAttack(player) {
    while (true) {
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);

        const cellValue = player.gameboard.board[randomRow][randomCol];

        if (cellValue !== 'hit' && cellValue !== 'miss') {
            const result = player.gameboard.receiveAttack(randomRow, randomCol);
            return result; // returns 'hit' or 'miss'
        }
    }
  }

}



/***/ }),

/***/ "./src/cache-dom.js":
/*!**************************!*\
  !*** ./src/cache-dom.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawComputerBoardInDOM: () => (/* binding */ drawComputerBoardInDOM),
/* harmony export */   drawPlayer1BoardInDOM: () => (/* binding */ drawPlayer1BoardInDOM),
/* harmony export */   makeElement: () => (/* binding */ makeElement)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



// export const myPage = () => {
//   const playerBoard = document.querySelector('.player1-board')
//   const computerBoard = document.querySelector('.computer-board')
//   const computerBoardEls = document.querySelectorAll('.computer-board .box');
//   const player1BoardEls = document.querySelectorAll('.player1-board .box');
//   const shipContainer = document.querySelector('.ship-container')
//   const randomizeEl = document.querySelector('.randomize-button')
//   const carrierEl = document.querySelector('.carrier');
//   const battleshipEl = document.querySelector('.battleship');
//   const cruiserEl = document.querySelector('.cruiser');
//   const submarineEl = document.querySelector('.submarine');
//   const destroyerEl = document.querySelector('.destroyer');

//   return {playerBoard, computerBoard,computerBoardEls, player1BoardEls, shipContainer, randomizeEl, carrierEl, battleshipEl, cruiserEl, submarineEl, destroyerEl}
// }


// export const page = myPage();


function makeElement(elementTag, className, appendToEl, textInside) {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) {
    appendToEl.append(element);
  }
  if (textInside) {
    element.innerText = textInside;
  }
  return element;
}

const drawPlayer1BoardInDOM = (player1, player1Board) => {
  player1Board.innerHTML = ''; // clear before redrawing
  // row => Go to the (first) array.
  // rowindex => get the index "of the array" (the first row, the second row, etc)
  // cell => go to the (first) row.
  // colindex => get the (first) item in that position. 
  player1.gameboard.board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const element = makeElement('div', 'box');
      element.dataset.coordinates = `${rowIndex},${colIndex}`;
      element.dataset.row = rowIndex;
      element.dataset.col = colIndex;
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'carrier') {
        element.classList.add('carrier'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'battleship') {
        element.classList.add('battleship'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'cruiser') {
        element.classList.add('cruiser'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'submarine') {
        element.classList.add('submarine'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'destroyer') {
        element.classList.add('destroyer'); // 🩶 show ships visually
      }
      if (cell === 'hit') {
        element.classList.add('hit');
      }
      if (cell === 'miss') {
        element.classList.add('miss');
      }
      player1Board.append(element);
    });
  });
};


const drawComputerBoardInDOM = (computer, computerBoard) => {
  computerBoard.innerHTML = ''; // clear before redrawing
  computer.gameboard.board.forEach((row, rowIndex) => {   // ✅ fixed here
    row.forEach((cell, colIndex) => {                     // ✅ fixed here
      const element = makeElement('div', 'box');
      element.dataset.row = rowIndex;
      element.dataset.col = colIndex;
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'carrier') {
        element.classList.add('carrier'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'battleship') {
        element.classList.add('battleship'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'cruiser') {
        element.classList.add('cruiser'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'submarine') {
        element.classList.add('submarine'); // 🩶 show ships visually
      }
      if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && cell.name === 'destroyer') {
        element.classList.add('destroyer'); // 🩶 show ships visually
      }
      computerBoard.append(element);
    });
  });
};


// const box1 = makeElement('div', 'box', page.grid1)

// export const box = makeElement('div', 'box', document.body, 'x');



/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _cache_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache-dom */ "./src/cache-dom.js");




const availableShips = () => {
  const carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5, 'carrier');
  const battleShip = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4, 'battleship');
  const cruiser = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, 'cruiser');
  const submarine = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, 'submarine');
  const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2, 'destroyer');
  return [carrier, battleShip, cruiser, submarine, destroyer];
}

const createPlayers = () => {
  const player1 = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player();
  const computer = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player();
  return {player1, computer}
}

const initialize = () => {

  const main = (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'main', document.body, 'test');
  const player1Board = (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'player1-board', main, 'player-1board');
  const randomPlacementEl = (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.makeElement)('button', 'random-placement-button', main, 'randomize placement' )
  const middleContainer = (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'middle-container', main)
  const computerBoard = (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'computer-board', main, 'computer-board');
  const players = createPlayers();

  const handleRandomization = createRandomizationHandler(player1Board, players);
  main.addEventListener('click', handleRandomization);

  players.player1.gameboard.drawBoard();
  players.computer.gameboard.drawBoard();
  
  // SHIPTYPES IS AN ARRAY OF SHPS
  const shipTypes = availableShips();

    // Place computer ships randomly
  players.player1.setUpFleet();
  players.computer.setUpFleet();

  // Draw boards visually
  // console.log(players.player1);
  // console.log(player1Board);
  (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.drawPlayer1BoardInDOM)(players.player1, player1Board);
  (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.drawComputerBoardInDOM)(players.computer, computerBoard);

  const gameState = {
    isPlayerTurn: true,
    gameOver: false,
  };

  // Using event delegation so I don't have to use removeeventlistener.
  computerBoard.addEventListener('click', (e) => {
    if (gameState.gameOver) return; // prevent any clicks after game ends

    const cell = e.target.closest('.box');
    if (!cell) return;
    if (!gameState.isPlayerTurn) return;

    const playerMissed = handlePlayerClick(e, players.player1, players.computer, player1Board, computerBoard, gameState, middleContainer);

    if (playerMissed) {
        isPlayerTurn = false;
        setTimeout(() => {
          console.log("middleContainer:", middleContainer);
            computerTurn(players.player1, players.computer, player1Board, computerBoard, gameState, middleContainer);
            gameState.isPlayerTurn = true;
        }, 500);
    }
});


  return {player1: players.player1, computer: players.computer};
}

function handlePlayerClick(e, player1, computer, player1Board, computerBoard, gameState, middleContainer) {
  const box = e.target;
  const row = Number(box.dataset.row);
  const col = Number(box.dataset.col);

  // Prevent attacking same spot twice
  // console.log(computer.gameboard);
  if (
    computer.gameboard.board[row][col] === 'hit' ||
    computer.gameboard.board[row][col] === 'miss'
  ) {
    fadeText(middleContainer, 'Already attacked there. Try again.')
    return;
  }
  
  const result = computer.gameboard.receiveAttack(row, col);
  if (result === 'already-attacked') {
    fadeText(middleContainer, 'Already attacked there. Try again.')
    return; // do nothing, don't switch turns
  }
  if (result === 'hit') {
    checkIfShipSunk(computer, row, col, middleContainer);
    box.classList.add('hit');
    console.log('You hit! Go again.');
    // middleContainer.innerText = 'It\'s a hit! Your turn again.';
    fadeText(middleContainer, 'It\'s a hit! Your turn again.')
  } else {
    box.classList.add('miss');
    console.log("You missed! Computer's turn.");
    fadeText(middleContainer, 'You missed. It\'s the computer\'s turn.')

    // Check win condition after player turn
    if (!computer.gameboard.countSunkShips()) {
      console.log('You win!');
    fadeText(middleContainer, '🏆 YOU WIN!! 🏆.')
      return;
    }

    // Computer's turn
    setTimeout(() => {
      computerTurn(player1, computer, player1Board, computerBoard,  gameState,  middleContainer);
    }, 1000);
  }

  // Check win condition after player hit
  if (!computer.gameboard.countSunkShips()) {
    fadeText(middleContainer, '🏆 YOU WIN!! 🏆.')
    gameState.gameOver = true;
    return false;
  }
}

function computerTurn(player1, computer, player1Board, computerBoard, gameState, middleContainer) {
  function attackLoop() {
    if (gameState.gameOver) return;

    const result = computer.computerAttack(player1);
    (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.drawPlayer1BoardInDOM)(player1, player1Board);

    if (!player1.gameboard.countSunkShips()) {
      console.log('Computer wins!');
      fadeText(middleContainer, 'Computer wins!');
      gameState.gameOver = true;
      return;
    }

    if (result === 'hit') {
      console.log('Computer hit! Computer goes again.');
      fadeText(middleContainer, "Computer hit! It's the computer's turn.");

      // Wait before attacking again so the message is visible
      setTimeout(attackLoop, 500);
    } else {
      console.log('Computer missed! Your turn.');
      fadeText(middleContainer, "Computer missed! It's your turn.");
      // Return control to the player
    }
  }
  attackLoop();
}

const createRandomizationHandler = (player1Board, players) => {
  return (e) => {
    if (e.target.matches('.random-placement-button')) {
      players.player1.gameboard.drawBoard();
      players.player1.setUpFleet();
      (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.drawPlayer1BoardInDOM)(players.player1, player1Board);
    }
  };
};


const fadeText = (element, newText) => {
  // Remove oldest message if we have 2 already
  const messages = element.querySelectorAll('.text-updates');
  if (messages.length >= 3) {
    messages[0].remove();
  }

  // Create new message
  const textEl = (0,_cache_dom__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'text-updates', element);
  textEl.textContent = newText;

  // Trigger animation
  void textEl.offsetWidth;
  textEl.classList.toggle('visible');
};

const checkIfShipSunk = (player, row, col, middleContainer) => {
	const shipHit = player.gameboard.board[row][col];
	if (shipHit.isSunk === true) {
    fadeText(middleContainer, 'Yey, you sank one!!')
	}
}

// *****************
// MAKE SURE ALL MESSAGES ARE DISPLAYED (WINNING, LOSING MSGS, ETC)
// DISABLE THE BUTTON AFTER THE GAME STARTS.
// ****************
// const fadeText = (element, newText) => {
//   const textEl = makeElement('div', 'text-updates', element);

//   textEl.append(newText, document.createElement('br'));

//   // Trigger fade in on the next frame
// // Force reflow
// void textEl.offsetWidth;
// textEl.style.opacity = '1';

// };

// const fadeText = (element, newText) => {
//   // Fade out
//   const textEl = makeElement('span', '.text-updates', element);
//   textEl.style.opacity = '0';
//   // Wait for fade out to complete (500ms matches our CSS transition)
//   setTimeout(() => {
//     // Change text when invisible
//     // element.innerText = newText;
//     // element.append(textEl);
//     textEl.append(newText, document.createElement('br'));
    
//     // Fade back in
//     textEl.style.opacity = '1';
//   }, 500);
// };
// function addComputerBoardListeners(player1, computer, player1Board, computerBoard) {
//   const computerBoardEls = document.querySelectorAll('.computer-board .box');
//   computerBoardEls.forEach((cell) => {
//     // Create a named wrapper and store it on the cell
//     cell._handlePlayerClick = (e) => handlePlayerClick(e, player1, computer, player1Board, computerBoard);
//     cell.addEventListener('click', cell._handlePlayerClick);
//   });
// }

// function removeComputerBoardListeners() {
//   const computerBoardEls = document.querySelectorAll('.computer-board .box');
//   computerBoardEls.forEach((cell) => {
//     if (cell._handlePlayerClick) {
//       cell.removeEventListener('click', cell._handlePlayerClick);
//       delete cell._handlePlayerClick; // optional cleanup
//     }
//   });
// }



//   const initApp = () => {
//     // IMPORTANT: Get your cached DOM elements here, as they should be ready now
//     const page = getPageElements();

//     // Ensure elements are available before proceeding
//     if (!page) {
//         console.error("Application initialization failed: DOM elements not ready.");
//         return;
//     }

//     console.log("App initialized! Page elements ready for use.");
//     console.log("Example access:", page.computerBoardEls);

//     // 3. Set up your main event listeners and initial game state
//     // You'll move the DOM-related code from your index.js and controller.js DOMContentLoaded blocks here.

//     // Example: Attaching the computer board click listener
//     if (page.computerBoardEls) {
//         page.computerBoardEls.forEach((cell) => {
//             // Make sure handlePlayerClick is defined or imported in this scope
//             cell.addEventListener('click', handlePlayerClick);
//         });
//     }

//     // Example: Attaching the randomize button listener
//     if (page.randomizeEl) {
//         page.randomizeEl.addEventListener('click', randomizePlayer1Board);
//     }

//     // 4. Call your main game control logic to start the game flow
//     controlTurns(); // Assuming this function starts the turn-based gameplay

//     // You might also have initial setup functions here, e.g.:
//     // setupPlayerBoards(page); // Pass page elements if needed
// };

// // 5. Export this single initialization function
// export { initApp };
    // ===========================
    // THIS CODE WORKS UP TO THE POINT OF PLACING THE SHIPS;
    // ========================

//   const availableShips = () => {
//   const carrier = new Ship(5, 'carrier');
//   const battleShip = new Ship(4, 'battleship');
//   const cruiser = new Ship(3, 'cruiser');
//   const submarine = new Ship(3, 'submarine');
//   const destroyer = new Ship(2, 'destroyer');
//   return [carrier, battleShip, cruiser, submarine, destroyer];
// }

// // SHIPTYPES IS AN ARRAY OF SHPS
// const shipTypes = availableShips();


// let currentOrientation = 'vertical';
// let shipSelectedByUser = 'battleship';
// export const controlTurns = () => {
//   const player1 = new Player();
//   const computer = new Player();



//   // Draw logical boards
//   player1.gameboard.drawBoard();
//   computer.gameboard.drawBoard();

//   // RANDOM PLACEMENT OF SHIPS FOR PLAYER1
//   shipTypes.forEach((shipType) => {
//     let placed = false;
//     while (!placed) {
//       const randomRow = Math.floor(Math.random() * 10);
//       const randomCol = Math.floor(Math.random() * 10);
//       const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
//       placed = player1.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
//     }
//   });

//   // Place computer ships randomly
//   computer.setUpFleet();

//   // Draw boards visually
//   drawPlayer1BoardInDOM(player1);
//   drawComputerBoardInDOM(computer);

//   // Had to add this here because they evaluate as undefined.
//   page.computerBoardEls = document.querySelectorAll('.computer-board .box');
//   page.player1BoardEls = document.querySelectorAll('.player1-board .box');

//           // REMOVED THESE LINES:
//   // addComputerBoardListeners();

//   // const foundShipName = shipTypes.find(ship => ship.name === shipSelectedByUser);
//   // addHoverPlacementListeners(foundShipName, currentOrientation);
//         // REPLACED THEM WITH THIS NEXT LINE:
//   placePlayer1ShipsManually();

//   // ---- Local Functions ---- //

//   function handlePlayerClick(e) {
//     const box = e.target;
//     const row = Number(box.dataset.row);
//     const col = Number(box.dataset.col);

//     // Prevent attacking same spot twice
//     if (
//       computer.gameboard.board[row][col] === 'hit' ||
//       computer.gameboard.board[row][col] === 'miss'
//     ) {
//       console.log('Already attacked here.');
//       return;
//     }

//     const result = computer.gameboard.receiveAttack(row, col);
//     if (result === 'hit') {
//       box.classList.add('hit');
//       console.log('You hit! Go again.');
//     } else {
//       box.classList.add('miss');
//       console.log("You missed! Computer's turn.");

//       // Check win condition after player turn
//       if (!computer.gameboard.countSunkShips()) {
//         console.log('You win!');
//         removeComputerBoardListeners();
//         return;
//       }

//       // Computer's turn
//       setTimeout(() => {
//         computerTurn();
//       }, 500);
//     }

//     // Check win condition after player hit
//     if (!computer.gameboard.countSunkShips()) {
//       console.log('You win!');
//       removeComputerBoardListeners();
//       return;
//     }
//   }

//   function computerTurn() {
//     let result;
//     do {
//       result = computer.computerAttack(player1);
//       drawPlayer1BoardInDOM(player1);

//       if (!player1.gameboard.countSunkShips()) {
//         console.log('Computer wins!');
//         removeComputerBoardListeners();
//         return;
//       }

//       if (result === 'hit') {
//         console.log('Computer hit! Computer goes again.');
//       } else {
//         console.log('Computer missed! Your turn.');
//       }
//     } while (result === 'hit');
//   }

//   function addComputerBoardListeners() {
//     page.computerBoardEls.forEach((cell) => {
//       cell.addEventListener('click', handlePlayerClick);
//     });
//   }

//   function removeComputerBoardListeners() {
//     page.computerBoardEls.forEach((cell) => {
//       cell.removeEventListener('click', handlePlayerClick);
//     });
//   }

//   function addHoverPlacementListeners(ship, orientation, onPlacedCallback) {
//     function handleMouseEnter(e) {
//       const row = Number(e.target.dataset.row);
//       const col = Number(e.target.dataset.col);
//       const hoverCoords = player1.gameboard.getPotentialShipCoordinates(
//         ship.length,
//         row,
//         col,
//         orientation
//       );
//       if (!hoverCoords) return; // out of bounds
  
//       const isValid = hoverCoords.every(([r, c]) => player1.gameboard.board[r][c] === null);
  
//       hoverCoords.forEach(([r, c]) => {
//         const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
//         if (cell) {
//           cell.classList.add(isValid ? 'valid-hover' : 'invalid-hover');
//         }
//       });
//     }
  
//     function handleMouseLeave() {
//       document.querySelectorAll('.valid-hover, .invalid-hover').forEach(cell => {
//         cell.classList.remove('valid-hover', 'invalid-hover');
//       });
//     }
  
//     function handlePlacementClick(e) {
//       const row = Number(e.target.dataset.row);
//       const col = Number(e.target.dataset.col);
//       const hoverCoords = player1.gameboard.getPotentialShipCoordinates(
//         ship.length,
//         row,
//         col,
//         orientation
//       );
//       if (!hoverCoords) return;
  
//       const isValid = hoverCoords.every(([r, c]) => player1.gameboard.board[r][c] === null);
//       if (!isValid) {
//         console.log('Invalid placement.');
//         return;
//       }
  
//       // Place ship in logical board
//       player1.gameboard.placeShip(ship, row, col, orientation, ship.length);
  
//       // Update DOM
//       drawPlayer1BoardInDOM(player1);
  
//       // Remove hover and click listeners to prevent duplicate placement
//       page.player1BoardEls.forEach(cell => {
//         cell.removeEventListener('mouseenter', handleMouseEnter);
//         cell.removeEventListener('mouseleave', handleMouseLeave);
//         cell.removeEventListener('click', handlePlacementClick);
//       });

//       if (onPlacedCallback) {
//         onPlacedCallback();
//       }
      
//       console.log(`${ship.name} placed. Game starts now.`);
//       addComputerBoardListeners(); // Start gameplay
//     }
  
//     page.player1BoardEls.forEach(cell => {
//       cell.addEventListener('mouseenter', handleMouseEnter);
//       cell.addEventListener('mouseleave', handleMouseLeave);
//       cell.addEventListener('click', handlePlacementClick);
//     });
//   }
  
//   function placePlayer1ShipsManually() {
//     let currentShipIndex = 0;
//     const orientations = ['horizontal', 'vertical']; // or your toggle logic
//     let currentOrientation = orientations[0];        // adjust if needed
  
//     function placeNextShip() {
//       if (currentShipIndex >= shipTypes.length) {
//         console.log('✅ All ships placed! Starting the game.');
//         addComputerBoardListeners();
//         return;
//       }
  
//       const currentShip = shipTypes[currentShipIndex];
//       console.log(`Place your ${currentShip.name}`);
  
//       addHoverPlacementListeners(currentShip, currentOrientation, () => {
//         currentShipIndex++;
//         placeNextShip();
//       });
//     }
  
//     placeNextShip();
//   }
  



// };

// // BUTTON TO RANDOMIZE THE BOARD
// const randomizePlayer1Board = () =>{
//   controlTurns();
// }
// page.randomizeEl.addEventListener('click', randomizePlayer1Board)

      // ==========================
      // END OF WORKING CODE THAT I DISABLED IN ORDER TO REFACTOR
      // ==========================




//  **********************
//  CODE GEMINI GAVE ME TO HAVE ONLY ONE FUNCTION CALL IN THE APP:
//  ***********************
// src/app.js (or src/game.js, src/main.js - choose a descriptive name)

// // 1. Import all the modules you need for your application
// import { getPageElements } from './cache-dom.js'; // To get your DOM elements
// import { controlTurns } from './controller.js';   // Your main game controller logic
// // import { setupPlayerBoards } from './boardSetup.js'; // Example: if you have a function for initial board setup
// // import { handlePlayerClick } from './controller.js'; // If you want to attach specific handlers here
// // import { randomizePlayer1Board } from './controller.js'; // If you want to attach specific handlers here

// // 2. Define the single function that will initialize your entire application
// const initApp = () => {
//     // IMPORTANT: Get your cached DOM elements here, as they should be ready now
//     const page = getPageElements();

//     // Ensure elements are available before proceeding
//     if (!page) {
//         console.error("Application initialization failed: DOM elements not ready.");
//         return;
//     }

//     console.log("App initialized! Page elements ready for use.");
//     console.log("Example access:", page.computerBoardEls);

//     // 3. Set up your main event listeners and initial game state
//     // You'll move the DOM-related code from your index.js and controller.js DOMContentLoaded blocks here.

//     // Example: Attaching the computer board click listener
//     if (page.computerBoardEls) {
//         page.computerBoardEls.forEach((cell) => {
//             // Make sure handlePlayerClick is defined or imported in this scope
//             cell.addEventListener('click', handlePlayerClick);
//         });
//     }

//     // Example: Attaching the randomize button listener
//     if (page.randomizeEl) {
//         page.randomizeEl.addEventListener('click', randomizePlayer1Board);
//     }

//     // 4. Call your main game control logic to start the game flow
//     controlTurns(); // Assuming this function starts the turn-based gameplay

//     // You might also have initial setup functions here, e.g.:
//     // setupPlayerBoards(page); // Pass page elements if needed
// };

// // 5. Export this single initialization function
// export { initApp };
//           ================
//             END OF GEMINI CODE
//           ===============



// const getShipInfo = () => {
//   const ships = {};
//   shipTypes.forEach(shipType => {
//     ships[shipType.name] = {
//       name: shipType.name,
//       length: shipType.length,
//       orientation: currentOrientation
//     }
  
//   })
// return ships;
// }
// const shipDataToHover = getShipInfo();
// console.log(shipDataToHover);



// export const controlTurns = () => {
//   const player1 = new Player();
//   const computer = new Player();

//   player1.gameboard.drawBoard();
//   computer.gameboard.drawBoard();

//   // Place ships for player1
//   // const carrier = new Ship(5, 'carrier');
//   // const battleShip = new Ship(4, 'battleship');
//   // const cruiser = new Ship(3, 'cruiser');
//   // const submarine = new Ship(3, 'submarine');
//   // const destroyer = new Ship(2, 'destroyer');

//   // const shipTypes = {
//   //   carrier: carrier,
//   //   battleship: battleShip,
//   //   cruiser: cruiser,
//   //   submarine: submarine,
//   //   destroyer: destroyer,
//   // };

//   // player1.placeShip(new Ship(5), 0, 0, 'vertical', 5);
//   // player1.placeShip(new Ship(4), 0, 1, 'vertical', 4);
//   // player1.placeShip(new Ship(3), 0, 2, 'vertical', 3);
//   // player1.placeShip(new Ship(3), 0, 3, 'vertical', 3);
//   // player1.placeShip(new Ship(2), 0, 4, 'vertical', 2);
//   // const shipTypes = [
//   //   carrier,
//   //   battleShip,
//   //   cruiser,
//   //   submarine,
//   //   destroyer,
//   // ];
//   shipTypes.forEach((shipType) => {
//     let placed = false;

//     while (!placed) {
//       const randomRow = Math.floor(Math.random() * 10);
//       const randomCol = Math.floor(Math.random() * 10);
//       const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';

//       // Attempt to place the ship
//       placed = player1.gameboard.placeShip(
//         shipType,
//         randomRow,
//         randomCol,
//         randomDir
//       );
//       // console.log(`Attempting to place: ${shipType.length}`);
//     }
//   });
//   // Place ships for computer
//   computer.setUpFleet();

//   drawPlayer1BoardInDOM(player1);
//   drawComputerBoardInDOM(computer);
//   page.computerBoardEls = document.querySelectorAll('.computer-board .box');
//   console.log(page.computerBoardEls);
//   const handlePlayerClick = (e) => {
//     const box = e.target;
//     const row = Number(box.dataset.row);
//     const col = Number(box.dataset.col);

//     if (computer.gameboard.board[row][col] === 'hit')
//       if (
//         computer.gameboard.board[row][col] === 'hit' ||
//         computer.gameboard.board[row][col] === 'miss'
//       ) {
//         console.log('Already attacked here.');
//         return;
//       }

//     const result = computer.gameboard.receiveAttack(row, col);
//     if (result === 'hit') {
//       box.classList.add('hit');
//       console.log('You hit! Go again.');
//     } else {
//       box.classList.add('miss');
//       console.log("You missed! Computer's turn.");

//       // Check win condition after player turn
//       if (!computer.gameboard.countSunkShips()) {
//         console.log('You win!');
//         removeListeners();
//         return;
//       }

//       // Computer's turn
//       setTimeout(() => {
//         computerTurn();
//       }, 500);
//     }

//     // Check win condition after player hit
//     if (!computer.gameboard.countSunkShips()) {
//       console.log('You win!');
//       removeListeners();
//       return;
//     }
//   };

//   const computerTurn = () => {
//     let result;
//     do {
//       result = computer.computerAttack(player1);
//       drawPlayer1BoardInDOM(player1);

//       if (!player1.gameboard.countSunkShips()) {
//         console.log('Computer wins!');
//         removeListeners();
//         return;
//       }

//       if (result === 'hit') {
//         console.log('Computer hit! Computer goes again.');
//       } else {
//         console.log('Computer missed! Your turn.');
//       }
//     } while (result === 'hit');
//   };

//   const removeListeners = () => {
//     computerCells.forEach((box) => {
//       box.removeEventListener('click', handlePlayerClick);
//     });
//   };


//   // const ships = document.querySelectorAll('.ship-section .ship');
//   // const handleDragstart = (e) => {
//   //   e.dataTransfer.setData('text/plain', e.target.id);
//   // }
//   // ships.forEach((ship) => {
//   //   ship.addEventListener('dragstart', handleDragstart);
//   // });

//   // // DRAG AND ROP FOR PLAYER1 SHIPS
  
//   // const player1Cells = document.querySelectorAll('.player1-board .box');
//   // player1Cells.forEach((cell) => {
//   //   cell.addEventListener('dragover', (e) => {
//   //     e.preventDefault();
//   //   });

//   //   cell.addEventListener('drop', (e) => {
//   //     e.preventDefault();
//   //     const player1ShipID = e.dataTransfer.getData('text/plain');
//   //     console.log(player1ShipID);
//   //     console.log('dropped',player1ShipID,'on cell:',cell.dataset.coordinates );
//   //     const shipEl = document.getElementById(player1ShipID);
//   //     const ship = shipTypes[player1ShipID];
//   //     console.log(ship);
//   //     const length = ship.length;
//   //     let direction = 'vertical';
//   //     console.log('direction', direction);
//   //     const rowIndex = Number(cell.dataset.coordinates[0]);
//   //     const colIndex = Number(cell.dataset.coordinates[2]);
//   //     if (
//   //       player1.gameboard.placeShip(
//   //         ship,
//   //         rowIndex,
//   //         colIndex,
//   //         direction,
//   //         ship.length
//   //       )
//   //     ) {
//   //           // cell.append(shipEl); // instead of appending, I changed the class name so it would look better in the DOM.
//   //       cell.classList.add('ship');
//   //       shipEl.parentElement.removeChild(shipEl);

//   //       shipEl.removeAttribute('draggable'); // removes dragged ships from the ship container.
//   //       shipEl.removeEventListener('dragstart', handleDragstart);
//   //     }
//   //     const shipCoordinates = player1.gameboard.getShipCoordinates(ship);
//   //     console.log(shipCoordinates);

//   //     shipCoordinates.forEach((item) => {
//   //       let row = item[0];
//   //       let col = item[1];
//   //       let shipElements = document.querySelector(
//   //         `[data-row="${row}"][data-col="${col}"]`
//   //       );
//   //       shipElements.classList.add('ship');
//   //     });

//   //     console.log(JSON.stringify(shipCoordinates));

//   //     console.log(player1.gameboard.board);
//   //   });
//   // });
//   // //END OF DRAG AND ROP FOR PLAYER1 SHIPS


//   const computerCells = document.querySelectorAll('.computer-board .box');
//   computerCells.forEach((cell) => {
//     cell.addEventListener('click', handlePlayerClick);
//   });




// };



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



class Gameboard {
  constructor() {
    this.board = []; // this is your container for 10 rows
    this.numberofShips = 0;
    this.placedShips = [];
  }

  drawBoard() {
    this.board = [];
    for (let i = 0; i < 10; i++) {
        this.board.push(Array(10).fill(null));
    }
}

  checkForShips(shipType, rowIndex, colIndex, direction) {
    for (let i = 0; i < shipType.length; i++) {
        if (direction === 'horizontal') {
            if (colIndex + i >= 10) return true; // out of bounds
            if (this.board[rowIndex][colIndex + i] !== null) return true; // overlap
        } else if (direction === 'vertical') {
            if (rowIndex + i >= 10) return true; // out of bounds
            if (this.board[rowIndex + i][colIndex] !== null) return true; // overlap
        }
    }
    return false;
}

  placeShip(shipType, rowIndex, colIndex, direction) {
    // Ensure ship fits within board
    if (direction === 'horizontal' && colIndex + shipType.length > 10) return false;
    if (direction === 'vertical' && rowIndex + shipType.length > 10) return false;

    // Ensure no overlap
    if (this.checkForShips(shipType, rowIndex, colIndex, direction)) return false;

    // Place the ship
    for (let i = 0; i < shipType.length; i++) {
        if (direction === 'horizontal') {
            this.board[rowIndex][colIndex + i] = shipType;
        } else if (direction === 'vertical') {
            this.board[rowIndex + i][colIndex] = shipType;
        }
    }
    this.placedShips.push(shipType);
    return true;
}

receiveAttack(rowIndex, colIndex) {
  let currentCell = this.board[rowIndex][colIndex];

  // Check if the cell has already been attacked
  if (
    currentCell === 'miss' ||
    (currentCell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && currentCell.hits.some(([r, c]) => r === rowIndex && c === colIndex))
  ) {
    console.log('Cell has already been attacked.');
    return 'already-attacked';
  }

  // If it's a Ship
  if (currentCell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship) {
    currentCell.increaseNumberOfHits(rowIndex, colIndex);
    currentCell.determineIfSunk();
    return 'hit';
  } else {
    this.board[rowIndex][colIndex] = 'miss'; // Mark as miss
    console.log('returning miss');
    return 'miss';
  }
}

  // receiveAttack(rowIndex, colIndex) {
  //   let currentCell = this.board[rowIndex][colIndex];

  //   // Check if the cell has already been hit
  //   if (currentCell === 'hit' || currentCell === 'miss') {
  //       console.log('Cell has already been attacked.');
  //       return 'already-attacked';  // or handle appropriately
  //   }
    
  //   // Check if it is a Ship
  //   if (currentCell instanceof Ship) {
  //       currentCell.increaseNumberOfHits();
  //       currentCell.determineIfSunk();
  //       this.board[rowIndex][colIndex] = 'hit'; // Mark as hit
  //       return 'hit';
  //   } else {
  //       this.board[rowIndex][colIndex] = 'miss'; // Mark as miss
  //       return 'miss';
  //   }
  // }

  countSunkShips() {
    let count = 0;
    this.placedShips.forEach((ship) => {
      if (ship.isSunk === true) {
        count++
        // console.log(count);
      }
    })
    if (count === 5) {
      return false;
    } else return true;
  }

  checkNumberOfShipsPlaced() {
    if (this.placedShips.length >= 5) {
      return false;
    } else 
    return true;
  }

  getShipCoordinates(ship) {
    const coordinates = []
    this.board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === ship) {
          coordinates.push([rowIndex, colIndex])
        }
      })
    })
    return coordinates;
  }

  getPotentialShipCoordinates(length, startRow, startCol, orientation) {
    const coordinates = [];
    for (let i = 0; i < length; i++) {
      let row = startRow;
      let col = startCol;
      if (orientation === 'horizontal') col += i;
      else row += i;
  
      // Check boundaries
      if (row >= 10 || col >= 10) return null; 
  
      coordinates.push([row, col]);
    }
    return coordinates;
  }
  
  // removeShip(ship) {
  //   this.board.forEach((row, rowindex) => {
  //     row.forEach((col, colIndex) => {
  //       if (col === ship) {
  //         col = null;
  //       }
  //     })
  //   })
  // }

  printBoard() {
    let visual = '';
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = this.board[row][col];
        if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship) {
          visual += 'S ';
        } else if (cell === 'hit') {
          visual += 'H ';
        } else if (cell === 'miss') {
          visual += 'M ';
        } else {
          visual += '. ';
        }
      }
      visual += '\n';
    }
    // console.log(visual);
  }
  
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, name) {
    this.length = length;
    this.numberOfHits = 0;
    this.isSunk = false;
    this.name = name;
    this.hits = [];
  }
  increaseNumberOfHits(row, col) {
    this.numberOfHits++
    this.hits.push([row, col]);
  }

  determineIfSunk() {
    if (this.numberOfHits === this.length) {
      this.isSunk = true;
      console.log('ship sunk');
      console.log(this.hits);
    }
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


      var API = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      var domAPI = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
      var insertFn = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
      var setAttributes = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
      var insertStyleElement = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
      var styleTagTransformFn = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
      var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css");
      
      content = content.__esModule ? content.default : content;

var options = {};

options.styleTagTransform = styleTagTransformFn;
options.setAttributes = setAttributes;
options.insert = insertFn.bind(null, "head");
options.domAPI = domAPI;
options.insertStyleElement = insertStyleElement;

var update = API(content, options);



module.exports = content && content.locals || {};


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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



console.log("testt");


(0,_controller__WEBPACK_IMPORTED_MODULE_1__.initialize)();


// const gameboard1 = new Gameboard();
// gameboard1.drawBoard();
// const aircraftCarrier = new Ship(5);
// const battleShip = new Ship(4);
// const cruiser = new Ship(3);
// const submarine = new Ship(3);
// const destroyer = new Ship(2);

// gameboard1.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
// gameboard1.placeShip(battleShip, 0, 1, 'vertical', battleShip.length);
// gameboard1.placeShip(cruiser, 0, 1, 'vertical', cruiser.length);
// gameboard1.placeShip(submarine, 0, 1, 'vertical', submarine.length);
// gameboard1.placeShip(destroyer, 0, 1, 'vertical', destroyer.length);
// gameboard1.receiveAttack(0,0);


// const player1 = new Player();
// const computer = new Player();

// player1.gameboard.drawBoard();
// player1.setUpFleet();
// console.log(player1.gameboard);
// player1.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
// console.log(JSON.stringify(player1.gameboard.board));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map