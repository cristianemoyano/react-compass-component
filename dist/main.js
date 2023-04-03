/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/el.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/el.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar el;\nmodule.exports = function () {\n  if (!el && !!__webpack_require__.g.document) {\n    el = __webpack_require__.g.document.createElement('div');\n  }\n  if (!el) {\n    el = {\n      style: {}\n    };\n  }\n  return el;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/el.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/forcePrefixed.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/forcePrefixed.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar toUpperFirst = __webpack_require__(/*! ./toUpperFirst */ \"./node_modules/react-style-normalizer/src/toUpperFirst.js\");\nvar getPrefix = __webpack_require__(/*! ./getPrefix */ \"./node_modules/react-style-normalizer/src/getPrefix.js\");\nvar properties = __webpack_require__(/*! ./prefixProps */ \"./node_modules/react-style-normalizer/src/prefixProps.js\");\n\n/**\n * Returns the given key prefixed, if the property is found in the prefixProps map.\n *\n * Does not test if the property supports the given value unprefixed.\n * If you need this, use './getPrefixed' instead\n */\nmodule.exports = function (key, value) {\n  if (!properties[key]) {\n    return key;\n  }\n  var prefix = getPrefix(key);\n  return prefix ? prefix + toUpperFirst(key) : key;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/forcePrefixed.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/getCssPrefixedValue.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/getCssPrefixedValue.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar getPrefix = __webpack_require__(/*! ./getPrefix */ \"./node_modules/react-style-normalizer/src/getPrefix.js\");\nvar forcePrefixed = __webpack_require__(/*! ./forcePrefixed */ \"./node_modules/react-style-normalizer/src/forcePrefixed.js\");\nvar el = __webpack_require__(/*! ./el */ \"./node_modules/react-style-normalizer/src/el.js\");\nvar MEMORY = {};\nvar STYLE;\nvar ELEMENT;\nmodule.exports = function (key, value, force) {\n  ELEMENT = ELEMENT || el();\n  STYLE = STYLE || ELEMENT.style;\n  var k = key + ': ' + value;\n  if (MEMORY[k]) {\n    return MEMORY[k];\n  }\n  var prefix;\n  var prefixed;\n  var prefixedValue;\n  if (force || !(key in STYLE)) {\n    prefix = getPrefix('appearance');\n    if (prefix) {\n      prefixed = forcePrefixed(key, value);\n      prefixedValue = '-' + prefix.toLowerCase() + '-' + value;\n      if (prefixed in STYLE) {\n        ELEMENT.style[prefixed] = '';\n        ELEMENT.style[prefixed] = prefixedValue;\n        if (ELEMENT.style[prefixed] !== '') {\n          value = prefixedValue;\n        }\n      }\n    }\n  }\n  MEMORY[k] = value;\n  return value;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/getCssPrefixedValue.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/getPrefix.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/getPrefix.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar toUpperFirst = __webpack_require__(/*! ./toUpperFirst */ \"./node_modules/react-style-normalizer/src/toUpperFirst.js\");\nvar prefixes = [\"ms\", \"Moz\", \"Webkit\", \"O\"];\nvar el = __webpack_require__(/*! ./el */ \"./node_modules/react-style-normalizer/src/el.js\");\nvar ELEMENT;\nvar PREFIX;\nmodule.exports = function (key) {\n  if (PREFIX !== undefined) {\n    return PREFIX;\n  }\n  ELEMENT = ELEMENT || el();\n  var i = 0;\n  var len = prefixes.length;\n  var tmp;\n  var prefix;\n  for (; i < len; i++) {\n    prefix = prefixes[i];\n    tmp = prefix + toUpperFirst(key);\n    if (typeof ELEMENT.style[tmp] != 'undefined') {\n      return PREFIX = prefix;\n    }\n  }\n  return PREFIX;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/getPrefix.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/getPrefixed.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/getPrefixed.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar getStylePrefixed = __webpack_require__(/*! ./getStylePrefixed */ \"./node_modules/react-style-normalizer/src/getStylePrefixed.js\");\nvar properties = __webpack_require__(/*! ./prefixProps */ \"./node_modules/react-style-normalizer/src/prefixProps.js\");\nmodule.exports = function (key, value) {\n  if (!properties[key]) {\n    return key;\n  }\n  return getStylePrefixed(key, value);\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/getPrefixed.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/getStylePrefixed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/getStylePrefixed.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar toUpperFirst = __webpack_require__(/*! ./toUpperFirst */ \"./node_modules/react-style-normalizer/src/toUpperFirst.js\");\nvar getPrefix = __webpack_require__(/*! ./getPrefix */ \"./node_modules/react-style-normalizer/src/getPrefix.js\");\nvar el = __webpack_require__(/*! ./el */ \"./node_modules/react-style-normalizer/src/el.js\");\nvar MEMORY = {};\nvar STYLE;\nvar ELEMENT;\nvar PREFIX;\nmodule.exports = function (key, value) {\n  ELEMENT = ELEMENT || el();\n  STYLE = STYLE || ELEMENT.style;\n  var k = key; // + ': ' + value\n\n  if (MEMORY[k]) {\n    return MEMORY[k];\n  }\n  var prefix;\n  var prefixed;\n  if (!(key in STYLE)) {\n    //we have to prefix\n\n    // if (PREFIX){\n    //     prefix = PREFIX\n    // } else {\n    prefix = getPrefix('appearance');\n\n    //     if (prefix){\n    //         prefix = PREFIX = prefix.toLowerCase()\n    //     }\n    // }\n\n    if (prefix) {\n      prefixed = prefix + toUpperFirst(key);\n      if (prefixed in STYLE) {\n        key = prefixed;\n      }\n    }\n  }\n  MEMORY[k] = key;\n  return key;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/getStylePrefixed.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/hasOwn.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/hasOwn.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/hasOwn.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/react-style-normalizer/src/hasOwn.js\");\nvar getPrefixed = __webpack_require__(/*! ./getPrefixed */ \"./node_modules/react-style-normalizer/src/getPrefixed.js\");\nvar map = __webpack_require__(/*! ./map */ \"./node_modules/react-style-normalizer/src/map.js\");\nvar plugable = __webpack_require__(/*! ./plugable */ \"./node_modules/react-style-normalizer/src/plugable.js\");\nfunction plugins(key, value) {\n  var result = {\n    key: key,\n    value: value\n  };\n  (RESULT.plugins || []).forEach(function (fn) {\n    var tmp = map(function (res) {\n      return fn(key, value, res);\n    }, result);\n    if (tmp) {\n      result = tmp;\n    }\n  });\n  return result;\n}\nfunction normalize(key, value) {\n  var result = plugins(key, value);\n  return map(function (result) {\n    return {\n      key: getPrefixed(result.key, result.value),\n      value: result.value\n    };\n  }, result);\n  return result;\n}\nvar RESULT = function (style) {\n  var k;\n  var item;\n  var result = {};\n  for (k in style) if (hasOwn(style, k)) {\n    item = normalize(k, style[k]);\n    if (!item) {\n      continue;\n    }\n    map(function (item) {\n      result[item.key] = item.value;\n    }, item);\n  }\n  return result;\n};\nmodule.exports = plugable(RESULT);\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/index.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/map.js":
/*!********************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/map.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (fn, item) {\n  if (!item) {\n    return;\n  }\n  if (Array.isArray(item)) {\n    return item.map(fn).filter(function (x) {\n      return !!x;\n    });\n  } else {\n    return fn(item);\n  }\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/map.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/plugable.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/plugable.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar getCssPrefixedValue = __webpack_require__(/*! ./getCssPrefixedValue */ \"./node_modules/react-style-normalizer/src/getCssPrefixedValue.js\");\nmodule.exports = function (target) {\n  target.plugins = target.plugins || [function () {\n    var values = {\n      'flex': 1,\n      'inline-flex': 1\n    };\n    return function (key, value) {\n      if (key === 'display' && value in values) {\n        return {\n          key: key,\n          value: getCssPrefixedValue(key, value, true)\n        };\n      }\n    };\n  }()];\n  target.plugin = function (fn) {\n    target.plugins = target.plugins || [];\n    target.plugins.push(fn);\n  };\n  return target;\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/plugable.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/prefixProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/prefixProps.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  'alignItems': 1,\n  'justifyContent': 1,\n  'flex': 1,\n  'flexFlow': 1,\n  'flexGrow': 1,\n  'flexShrink': 1,\n  'flexBasis': 1,\n  'flexDirection': 1,\n  'flexWrap': 1,\n  'alignContent': 1,\n  'alignSelf': 1,\n  'userSelect': 1,\n  'transform': 1,\n  'transition': 1,\n  'transformOrigin': 1,\n  'transformStyle': 1,\n  'transitionProperty': 1,\n  'transitionDuration': 1,\n  'transitionTimingFunction': 1,\n  'transitionDelay': 1,\n  'borderImage': 1,\n  'borderImageSlice': 1,\n  'boxShadow': 1,\n  'backgroundClip': 1,\n  'backfaceVisibility': 1,\n  'perspective': 1,\n  'perspectiveOrigin': 1,\n  'animation': 1,\n  'animationDuration': 1,\n  'animationName': 1,\n  'animationDelay': 1,\n  'animationDirection': 1,\n  'animationIterationCount': 1,\n  'animationTimingFunction': 1,\n  'animationPlayState': 1,\n  'animationFillMode': 1,\n  'appearance': 1\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/prefixProps.js?");

/***/ }),

/***/ "./node_modules/react-style-normalizer/src/toUpperFirst.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-normalizer/src/toUpperFirst.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (str) {\n  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/react-style-normalizer/src/toUpperFirst.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var react_style_normalizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-style-normalizer */ \"./node_modules/react-style-normalizer/src/index.js\");\n/* harmony import */ var react_style_normalizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_style_normalizer__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var _ref$direction = _ref.direction,\n    direction = _ref$direction === void 0 ? 0 : _ref$direction,\n    _ref$directionNames = _ref.directionNames,\n    directionNames = _ref$directionNames === void 0 ? ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] : _ref$directionNames;\n  var directionName = function directionName(dir) {\n    var sections = directionNames.length,\n      sect = 360 / sections,\n      x = Math.floor((dir + sect / 2) / sect);\n    x = x >= sections ? 0 : x;\n    return directionNames[x];\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"center compass\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"compass__windrose\",\n    style: react_style_normalizer__WEBPACK_IMPORTED_MODULE_3___default()({\n      transform: \"rotate(-\".concat(direction, \"deg)\")\n    })\n  }, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(10)).map(function (k, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"compass__mark\",\n      key: i + 1\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"compass__mark--direction-h\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"compass__mark--direction-v\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"compass__arrow-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"compass__arrow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"compass__labels\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"degrees\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, direction, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"sup\", null, \"o\")), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, directionName(direction))));\n});\n\n//# sourceURL=webpack://react-compass-component/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".compass {\\n\\twidth: 320px;\\n\\theight: 320px;\\n\\tposition: relative;\\n}\\n\\n.compass__windrose {\\n\\tbox-sizing: border-box;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tborder-radius: 50%;\\n\\tbackground-color: #2A3539;\\n\\tborder: 7px solid #0DEFD5;\\n\\tposition: relative;\\n\\tbox-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.05);\\n\\ttransition: transform 0.3s ease;\\n}\\n\\n.compass__windrose:before, .compass__windrose:after {\\n\\tcontent: '';\\n\\tposition: absolute;\\n\\tbackground-color: #0DEFD5;\\n}\\n\\n.compass__windrose:before {\\n\\ttop: -16px;\\n\\tleft: calc(50% - 18px);\\n\\twidth: 36px;\\n\\theight: 36px;\\n\\tborder-radius: 1000% 50% 0 50%;\\n\\ttransform: rotate(45deg);\\n\\tbox-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);\\n\\tz-index: 1;\\n}\\n\\n.compass__windrose:after {\\n\\ttop: -10px;\\n\\tleft: calc(50% - 30px);\\n\\twidth: 60px;\\n\\theight: 12px;\\n\\tz-index: 10;\\n\\tborder-radius: 15px 15px 0 0;\\n}\\n\\n.compass__mark, .compass__mark--direction-h, .compass__mark--direction-v {\\n\\twidth: 4px;\\n\\theight: 100%;\\n\\tleft: calc(50% - 2px);\\n\\tposition: absolute;\\n}\\n\\n.compass__mark:before, .compass__mark:after, .compass__mark--direction-h:before, .compass__mark--direction-h:after, .compass__mark--direction-v:before, .compass__mark--direction-v:after {\\n\\tcontent: '';\\n\\tposition: absolute;\\n\\tleft: 0;\\n\\twidth: 4px;\\n\\theight: 4px;\\n\\tborder-radius: 50px;\\n\\tbackground-color: #fff;\\n}\\n\\n.compass__mark:before, .compass__mark--direction-h:before, .compass__mark--direction-v:before {\\n\\ttop: 12%;\\n}\\n\\n.compass__mark:after, .compass__mark--direction-h:after, .compass__mark--direction-v:after {\\n\\tbottom: 12%;\\n}\\n\\n.compass__mark--direction-h:before, .compass__mark--direction-h:after, .compass__mark--direction-v:before, .compass__mark--direction-v:after {\\n\\twidth: auto;\\n\\theight: auto;\\n\\tfont-size: 24px;\\n\\tline-height: 24px;\\n\\tborder-radius: 0;\\n\\tbackground: transparent;\\n\\tcolor: #fff;\\n\\tfont-weight: 100;\\n\\tfont-family: 'Roboto Slab', serif;\\n\\ttext-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35);\\n}\\n\\n.compass__mark--direction-h:before, .compass__mark--direction-v:before {\\n\\ttop: 8.5%;\\n}\\n\\n.compass__mark--direction-h:after, .compass__mark--direction-v:after {\\n\\tbottom: 8.5%;\\n\\ttransform: rotate(180deg);\\n}\\n\\n\\n/* DIRECTION NAMES START */\\n\\n.compass__mark--direction-h:before {\\n\\tcontent: 'N';\\n\\tleft: -13px;\\n\\tfont-weight: 400;\\n}\\n\\n.compass__mark--direction-h:after {\\n\\tcontent: 'S';\\n\\tleft: -9px;\\n}\\n\\n.compass__mark--direction-v {\\n\\ttransform: rotate(90deg);\\n}\\n\\n.compass__mark--direction-v:before {\\n\\tcontent: 'E';\\n\\tleft: -11px;\\n}\\n\\n.compass__mark--direction-v:after {\\n\\tcontent: 'W';\\n\\tleft: -18px;\\n}\\n\\n/* DIRECTION NAMES END */\\n\\n.compass__mark:nth-child(1) {\\n\\ttransform: rotate(15deg);\\n}\\n\\n.compass__mark:nth-child(2) {\\n\\ttransform: rotate(30deg);\\n}\\n\\n.compass__mark:nth-child(3) {\\n\\ttransform: rotate(45deg);\\n}\\n\\n.compass__mark:nth-child(4) {\\n\\ttransform: rotate(60deg);\\n}\\n\\n.compass__mark:nth-child(5) {\\n\\ttransform: rotate(75deg);\\n}\\n\\n.compass__mark:nth-child(6) {\\n\\ttransform: rotate(105deg);\\n}\\n\\n.compass__mark:nth-child(7) {\\n\\ttransform: rotate(120deg);\\n}\\n\\n.compass__mark:nth-child(8) {\\n\\ttransform: rotate(135deg);\\n}\\n\\n.compass__mark:nth-child(9) {\\n\\ttransform: rotate(150deg);\\n}\\n\\n.compass__mark:nth-child(10) {\\n\\ttransform: rotate(165deg);\\n}\\n\\n.compass__mark:nth-child(11) {\\n\\ttransform: rotate(180deg);\\n}\\n\\n.compass__arrow-container {\\n\\twidth: 48.076923%;\\n\\theight: 48.076923%;\\n\\tborder-radius: 50%;\\n\\tbackground-color: #20292E;\\n\\tbox-sizing: border-box;\\n\\ttop: 50%;\\n\\tleft: 50%;\\n\\tposition: absolute;\\n\\tz-index: 2;\\n\\ttransform: translate(-50%, -50%);\\n\\ttransition: transform 0.3s ease;\\n}\\n\\n.compass__arrow {\\n\\twidth: 71%;\\n\\theight: 71%;\\n\\tmargin-left: 14.5%;\\n\\tmargin-top: 14.5%;\\n\\tbackground-color: #0DEFD5;\\n\\tborder-radius: 0 50% 50% 50%;\\n\\tbox-sizing: border-box;\\n\\ttransform: rotate(45deg);\\n}\\n\\n.compass__labels {\\n\\tposition: absolute;\\n\\tz-index: 1;\\n\\tbackground-color: #20292E;\\n\\twidth: 57.6%;\\n\\theight: 57.6%;\\n\\ttop: 50%;\\n\\tleft: 50%;\\n\\ttransform: translate(-50%, -50%);\\n\\tborder-radius: 50%;\\n\\tbox-sizing: border-box;\\n\\tbox-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.05);\\n\\tpadding-top: 34px;\\n}\\n\\n.compass__labels > span {\\n\\tdisplay: inline-block;\\n\\twidth: 100%;\\n\\ttext-align: center;\\n\\tcolor: #fff6de;\\n\\tfont-family: 'Roboto Slab', serif;\\n}\\n\\n.compass__labels > span:first-child {\\n\\tfont-size: 56px;\\n\\tline-height: 42px;\\n\\tfont-weight: 400;\\n\\ttext-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35);\\n}\\n\\n.compass__labels > span:last-child {\\n\\tfont-size: 56px;\\n\\tline-height: 42px;\\n\\tfont-weight: 400;\\n\\t/* padding-left: 6px; */\\n\\t/* opacity: 0.9; */\\n\\ttext-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);\\n}\\n\\n.compass__labels sup {\\n\\tline-height: 18px;\\n\\tfont-size: 24px;\\n}\\n\\n.degrees {\\n\\ttext-align: center;\\n\\tpadding: 15px;\\n\\tfont-family: 'Roboto Slab', serif;\\n\\tfont-size: 1.4rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-compass-component/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://react-compass-component/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://react-compass-component/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://react-compass-component/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://react-compass-component/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://react-compass-component/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://react-compass-component/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://react-compass-component/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = undefined;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack://react-compass-component/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://react-compass-component/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://react-compass-component/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://react-compass-component/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://react-compass-component/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://react-compass-component/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;