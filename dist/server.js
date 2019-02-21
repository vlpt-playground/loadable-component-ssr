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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4);

// CONCATENATED MODULE: ./src/api.js



var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

var api = {
  getRabbit: function () {
    var _getRabbit = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return sleep(1000);

            case 2:
              return _context.abrupt("return", 'https://i.imgur.com/WaqcGk8.jpg');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getRabbit() {
      return _getRabbit.apply(this, arguments);
    }

    return getRabbit;
  }(),
  getTurtle: function () {
    var _getTurtle = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return sleep(1000);

            case 2:
              return _context2.abrupt("return", 'https://i.imgur.com/cetSlCs.jpg');

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getTurtle() {
      return _getTurtle.apply(this, arguments);
    }

    return getTurtle;
  }()
};
/* harmony default export */ var src_api = (api);
// CONCATENATED MODULE: ./src/modules/animals.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animals_getTurtle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animals_getRabbit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animals; });




var GET_TURTLE = 'animals/GET_TURTLE';
var GET_TURTLE_SUCCESS = 'animals/GET_TURTLE_SUCCESS';
var GET_RABBIT = 'animals/GET_RABBIT';
var GET_RABBIT_SUCCESS = 'animals/GET_RABBIT_SUCCESS';
var animals_getTurtle = function getTurtle() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: GET_TURTLE
                });
                _context.next = 3;
                return src_api.getTurtle();

              case 3:
                data = _context.sent;
                dispatch({
                  type: GET_TURTLE_SUCCESS,
                  payload: data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var animals_getRabbit = function getRabbit() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: GET_RABBIT
                });
                _context2.next = 3;
                return src_api.getRabbit();

              case 3:
                data = _context2.sent;
                dispatch({
                  type: GET_RABBIT_SUCCESS,
                  payload: data
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var initialState = {
  loadingRabbit: false,
  loadingTurtle: false,
  rabbit: null,
  turtle: null,
  shouldIgnore: false
};
function animals() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_RABBIT:
      return _objectSpread({}, state, {
        loadingRabbit: true
      });

    case GET_RABBIT_SUCCESS:
      return _objectSpread({}, state, {
        loadingRabbit: false,
        rabbit: action.payload
      });

    case GET_TURTLE:
      return _objectSpread({}, state, {
        loadingTurtle: true
      });

    case GET_TURTLE_SUCCESS:
      return _objectSpread({}, state, {
        loadingTurtle: false,
        turtle: action.payload
      });

    default:
      return state;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resolveIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ignore; });
var APPLY_IGNORE = 'ignore/APPLY_IGNORE';
var RESOLVE_IGNORE = 'ignore/RESOLVE_IGNORE';
var applyIgnore = function applyIgnore() {
  return {
    type: APPLY_IGNORE
  };
};
var resolveIgnore = function resolveIgnore() {
  return {
    type: RESOLVE_IGNORE
  };
};
var initialState = true;
function ignore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case APPLY_IGNORE:
      return true;

    case RESOLVE_IGNORE:
      return false;

    default:
      return state;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Rabbit.css
var components_Rabbit = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/Rabbit.js



var Rabbit_Rabbit = function Rabbit() {
  return external_react_default.a.createElement("div", {
    className: "Rabbit"
  }, "\uD1A0\uB07C");
};

/* harmony default export */ var src_components_Rabbit = (Rabbit_Rabbit);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/modules/animals.js + 3 modules
var animals = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/ImageViewer.js
var ImageViewer = __webpack_require__(11);

// CONCATENATED MODULE: ./src/containers/RabbitContainer.js






var RabbitContainer_RabbitContainer = function RabbitContainer(_ref) {
  var rabbit = _ref.rabbit,
      loading = _ref.loading,
      getRabbit = _ref.getRabbit,
      ignore = _ref.ignore;
  Object(external_react_["useEffect"])(function () {
    if (ignore) return;
    getRabbit();
  }, []);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(src_components_Rabbit, null), external_react_default.a.createElement(ImageViewer["a" /* default */], {
    src: rabbit,
    alt: "rabbit",
    loading: loading
  }));
};

/* harmony default export */ var containers_RabbitContainer = (Object(external_react_redux_["connect"])(function (state) {
  return {
    rabbit: state.animals.rabbit,
    loading: state.animals.loadingRabbit,
    ignore: state.ignore
  };
}, {
  getRabbit: animals["b" /* getRabbit */]
})(RabbitContainer_RabbitContainer));
// CONCATENATED MODULE: ./src/pages/RabbitPage.js




var RabbitPage_RabbitPage = function RabbitPage() {
  return external_react_default.a.createElement(containers_RabbitContainer, null);
};

RabbitPage_RabbitPage.preload = function (_ref) {
  var store = _ref.store;
  return store.dispatch(Object(animals["b" /* getRabbit */])());
};

/* harmony default export */ var pages_RabbitPage = __webpack_exports__["default"] = (RabbitPage_RabbitPage);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Turtle.css
var components_Turtle = __webpack_require__(27);

// CONCATENATED MODULE: ./src/components/Turtle.js



var Turtle_Turtle = function Turtle() {
  return external_react_default.a.createElement("div", {
    className: "Turtle"
  }, "\uAC70\uBD81\uC774");
};

/* harmony default export */ var src_components_Turtle = (Turtle_Turtle);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/modules/animals.js + 3 modules
var animals = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/ImageViewer.js
var ImageViewer = __webpack_require__(11);

// CONCATENATED MODULE: ./src/containers/TurtleContainer.js






var TurtleContainer_TurtleContainer = function TurtleContainer(_ref) {
  var turtle = _ref.turtle,
      loading = _ref.loading,
      getTurtle = _ref.getTurtle,
      ignore = _ref.ignore;
  Object(external_react_["useEffect"])(function () {
    if (ignore) return;
    getTurtle();
  }, []);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(src_components_Turtle, null), external_react_default.a.createElement(ImageViewer["a" /* default */], {
    src: turtle,
    alt: "turtle",
    loading: loading
  }));
};

/* harmony default export */ var containers_TurtleContainer = (Object(external_react_redux_["connect"])(function (state) {
  return {
    turtle: state.animals.turtle,
    loading: state.animals.loadingTurtle,
    ignore: state.ignore
  };
}, {
  getTurtle: animals["c" /* getTurtle */]
})(TurtleContainer_TurtleContainer));
// CONCATENATED MODULE: ./src/pages/TurtlePage.js




var TurtlePage_TurtlePage = function TurtlePage() {
  return external_react_default.a.createElement(containers_TurtleContainer, null);
};

TurtlePage_TurtlePage.preload = function (_ref) {
  var store = _ref.store;
  return store.dispatch(Object(animals["c" /* getTurtle */])());
};

/* harmony default export */ var pages_TurtlePage = __webpack_exports__["default"] = (TurtlePage_TurtlePage);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageViewer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _ImageViewer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageViewer_css__WEBPACK_IMPORTED_MODULE_1__);



var ImageViewer = function ImageViewer(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageViewer"
  }, src && !loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: alt
  }) : '이미지 로딩중...');
};

/* harmony default export */ __webpack_exports__["a"] = (ImageViewer);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SelectAnimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_RouteListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);





var RabbitPage = _loadable_component__WEBPACK_IMPORTED_MODULE_3___default()({
  chunkName: function chunkName() {
    return "pages-RabbitPage";
  },
  isReady: function isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },
  requireAsync: function requireAsync() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 9));
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(9);
    }

    return __webpack_require__(7).resolve(__dirname, "./pages/RabbitPage");
  }
});
var TurtlePage = _loadable_component__WEBPACK_IMPORTED_MODULE_3___default()({
  chunkName: function chunkName() {
    return "pages-TurtlePage";
  },
  isReady: function isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },
  requireAsync: function requireAsync() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 10));
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(10);
    }

    return __webpack_require__(7).resolve(__dirname, "./pages/TurtlePage");
  }
});

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SelectAnimals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/rabbit",
    component: RabbitPage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/turtle",
    component: TurtlePage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_RouteListener__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectAnimals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _SelectAnimals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SelectAnimals_css__WEBPACK_IMPORTED_MODULE_2__);




var SelectAnimals = function SelectAnimals() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SelectAnimals"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/rabbit"
  }, "\uD1A0\uB07C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/turtle"
  }, "\uAC70\uBD81\uC774"));
};

/* harmony default export */ __webpack_exports__["a"] = (SelectAnimals);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_ignore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);





var RouteListener = function RouteListener(_ref) {
  var history = _ref.history,
      resolveIgnore = _ref.resolveIgnore,
      ignore = _ref.ignore;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unlisten = history.listen(function (location) {
      resolveIgnore();
      unlisten();
    });
    return unlisten;
  }, []);
  return null;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    ignore: state.ignore
  };
}, {
  resolveIgnore: _modules_ignore__WEBPACK_IMPORTED_MODULE_2__[/* resolveIgnore */ "c"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(RouteListener)));

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TurtlePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _RabbitPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


var config = [{
  path: '/turtle',
  component: _TurtlePage__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/rabbit',
  component: _RabbitPage__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ignore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  animals: _animals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  ignore: _ignore__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]
});
/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21);
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22);
/* harmony import */ var _modules_ignore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);















var statsFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('./build/loadable-stats.json');
var app = express__WEBPACK_IMPORTED_MODULE_5___default()();

function createPage(rootHtml, _ref) {
  var script = _ref.script,
      style = _ref.style,
      link = _ref.link,
      reduxState = _ref.reduxState;
  return "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"utf-8\" />\n      <link rel=\"shortcut icon\" href=\"/favicon.ico\" />\n      <meta\n        name=\"viewport\"\n        content=\"width=device-width,initial-scale=1,shrink-to-fit=no\"\n      />\n      <meta name=\"theme-color\" content=\"#000000\" />\n      <link rel=\"manifest\" href=\"/manifest.json\" />\n      <title>React App</title>\n      ".concat(style, "\n      ").concat(link, "\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id=\"root\">").concat(rootHtml, "</div>\n      <script>\n        window.__PRELOADED_STATE__ = ").concat(reduxState ? JSON.stringify(reduxState).replace(/</g, "\\u003c") : 'undefined', "\n      </script>\n      ").concat(script, "\n    </body>\n  </html>\n  ");
}

function serverRender(_x, _x2) {
  return _serverRender.apply(this, arguments);
}

function _serverRender() {
  _serverRender = Object(_Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var context, extractor, store, promises, jsx, rendered, meta, page;
    return _Users_velopert_workspace_fc7_loadable_component_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context = {};
            extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_8__["ChunkExtractor"]({
              statsFile: statsFile
            });
            store = Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(_modules_index__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], Object(redux__WEBPACK_IMPORTED_MODULE_10__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_11___default.a)); // 일치하는 라우트에서 preload 있으면 호출하여 promises 배열에 추가

            promises = [];
            _pages_config__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].forEach(function (route) {
              var match = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["matchPath"])(req.path, route);

              if (match) {
                if (route.component.preload) {
                  promises.push(route.component.preload({
                    store: store,
                    req: req
                  }));
                }
              }
            });
            _context.next = 7;
            return Promise.all(promises);

          case 7:
            store.dispatch(Object(_modules_ignore__WEBPACK_IMPORTED_MODULE_14__[/* applyIgnore */ "a"])());
            jsx = extractor.collectChunks(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
              store: store
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["StaticRouter"], {
              location: req.url,
              context: context
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null))));
            rendered = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(jsx);
            meta = {
              script: extractor.getScriptTags(),
              link: extractor.getLinkTags(),
              style: extractor.getStyleTags(),
              reduxState: store.getState()
            };
            page = createPage(rendered, meta);
            res.send(page);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _serverRender.apply(this, arguments);
}

app.get('/', serverRender);
app.use(express__WEBPACK_IMPORTED_MODULE_5___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, '../build')));
app.use(function (req, res, next) {
  if (!req.route) {
    return serverRender(req, res);
  }

  return next();
});
app.listen(5000, function () {
  console.log('Running on http://localhost:5000');
});
console.log('hello!');
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map