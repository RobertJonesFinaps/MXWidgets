module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../src/ScrollToContent.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../src/ScrollToContent.jsx":
/*!************************************************************************************************************************!*\
  !*** /Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/scrollToContent/src/ScrollToContent.jsx ***!
  \************************************************************************************************************************/
/*! exports provided: ScrollToContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToContent", function() { return ScrollToContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * Component that allows for automatic scrolling
 *
 * Features
 * - Trigger attribute causes scroll to matching section label. Trigger is then reset.
 * - Manual scrolling is optional
 * - Padding each section can be handled in widget
 * - Variable number of sections possible
 *
 */

var ScrollToContent = /*#__PURE__*/function (_Component) {
  _inherits(ScrollToContent, _Component);

  var _super = _createSuper(ScrollToContent);

  function ScrollToContent(props) {
    var _this;

    _classCallCheck(this, ScrollToContent);

    _this = _super.call(this, props);

    _this.scrollToContent = function (scrollDistance) {
      _this.scroller.scrollTo({
        x: 0,
        y: scrollDistance
      });
    };

    _this.onScrollHandler = function (event) {
      // called each time the user scrolls and there's an available attribute to set
      var currentPosition = event.nativeEvent.contentOffset.y;
      var distanceArray = _this.state.scrollDistanceArray;
      var currentIndex = distanceArray.findIndex(function (distance) {
        return distance >= currentPosition + 1;
      }) - 1;

      if (currentIndex != -1 && currentIndex < _this.props.listContent.length) {
        // now check whether it's actually necessary to set the attribute
        var currentSectionLabel = _this.props.listContent[currentIndex].sectionLabel.value;

        if (currentSectionLabel != _this.props.activeItem.value) {
          _this.props.activeItem.setValue(currentSectionLabel);
        }
      }
    };

    _this.getScrollDistance = function (index) {
      // measure the height of all preceding entries
      var scrollDistance = 0;

      for (var i = 0; i < index; i++) {
        scrollDistance += Math.max(_this.state.contentHeightDict[i], _this.props.listContent[i].padItem ? _this.state.viewHeight : 0);
      }

      return scrollDistance;
    };

    _this.onLayoutContentHandler = function (event, index) {
      // Sets up dict of heights for each item
      var joined = _this.state.contentHeightDict;
      joined[index] = event.nativeEvent.layout.height;

      _this.setState({
        contentHeightDict: joined
      });
    };

    _this.onLayoutViewHandler = function (event) {
      // Gets the size of the viewport of the scrollview
      // creates the distance array
      _this.setState({
        viewHeight: event.nativeEvent.layout.height
      });

      var joined = _this.state.contentHeightDict;

      if (Object.keys(joined).length === _this.props.listContent.length) {
        // Check if the dict tracking heights is full and there's an available attribute for the current position
        // if so create the distance array
        var distanceArray = [0];

        for (var i = 0; i < _this.props.listContent.length; i++) {
          distanceArray.push(distanceArray[i] + (_this.props.listContent[i].padItem ? Math.max(joined[i], Math.max(event.nativeEvent.layout.height)) : joined[i]));
        }

        _this.setState({
          scrollDistanceArray: distanceArray
        });
      }
    };

    _this.state = {
      viewHeight: 0,
      contentHeightDict: {},
      scrollDistanceArray: []
    };
    return _this;
  }

  _createClass(ScrollToContent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.activeItemTrigger.value != "") {
        // if trigger contains something search for value scroll to it and then reset the trigger
        var indexToScrollTo = this.props.listContent.findIndex(function (item) {
          return item.sectionLabel.value == _this2.props.activeItemTrigger.value;
        });

        if (indexToScrollTo !== -1) {
          // something has been found
          this.scrollToContent(this.getScrollDistance(indexToScrollTo));
          this.props.activeItemTrigger.setValue(""); // reset the trigger attribute
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var renderContent = this.props.listContent.map(function (item, index) {
        // render each item in the list
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
          key: 3 * index
        }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
          key: 3 * index + 1,
          onLayout: function onLayout(event) {
            _this3.onLayoutContentHandler(event, index);
          }
        }, item.content), item.padItem && index in _this3.state.contentHeightDict ? /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
          key: 3 * index + 2,
          style: {
            height: Math.max(_this3.state.viewHeight - _this3.state.contentHeightDict[index], 0)
          }
        }) : null);
      });
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["ScrollView"], {
        style: [styles.container, this.props.style[0].container],
        ref: function ref(scroller) {
          _this3.scroller = scroller;
        },
        onScroll: this.props.activeItem ? function (scrollEvent) {
          _this3.onScrollHandler(scrollEvent);
        } : null,
        scrollEventThrottle: 16,
        onLayout: function onLayout(event) {
          _this3.onLayoutViewHandler(event);
        },
        scrollEnabled: this.props.allowScroll,
        showsVerticalScrollIndicator: this.props.showScrollBar
      }, renderContent);
    }
  }]);

  return ScrollToContent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  container: {
    flex: 1
  }
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=ScrollToContent.js.map