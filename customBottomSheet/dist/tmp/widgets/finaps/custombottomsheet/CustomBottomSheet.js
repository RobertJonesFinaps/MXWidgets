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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CustomBottomSheet.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}module.exports=_assertThisInitialized;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}module.exports=_classCallCheck;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}module.exports=_createClass;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};module.exports["default"]=module.exports,module.exports.__esModule=true;return _extends.apply(this,arguments);}module.exports=_extends;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o){module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};module.exports["default"]=module.exports,module.exports.__esModule=true;return _getPrototypeOf(o);}module.exports=_getPrototypeOf;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf=__webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)setPrototypeOf(subClass,superClass);}module.exports=_inherits;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}module.exports=_interopRequireWildcard;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];var assertThisInitialized=__webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return assertThisInitialized(self);}module.exports=_possibleConstructorReturn;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};module.exports["default"]=module.exports,module.exports.__esModule=true;return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){module.exports=_typeof=function _typeof(obj){return typeof obj;};module.exports["default"]=module.exports,module.exports.__esModule=true;}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};module.exports["default"]=module.exports,module.exports.__esModule=true;}return _typeof(obj);}module.exports=_typeof;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}var test1=new String('abc');test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys((0,_extends2.default)({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var printWarning=function printWarning(){};if(true){var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var loggedTypeFailures={};var has=Function.call.bind(Object.prototype.hasOwnProperty);printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(true){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;try{if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+typeof typeSpecs[typeSpecName]+'`.');err.name='Invariant Violation';throw err;}error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+typeof error+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}if(error instanceof Error&&!(error.message in loggedTypeFailures)){loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}checkPropTypes.resetWarningCache=function(){if(true){loggedTypeFailures={};}};module.exports=checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var assign=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var checkPropTypes=__webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");var has=Function.call.bind(Object.prototype.hasOwnProperty);var printWarning=function printWarning(){};if(true){printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function emptyFunctionThatReturnsNull(){return null;}module.exports=function(isValidElement,throwOnDirectAccess){var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};function is(x,y){if(x===y){return x!==0||1/x===1/y;}else{return x!==x&&y!==y;}}function PropTypeError(message){this.message=message;this.stack='';}PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(true){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if( true&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(true){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){ true?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):undefined;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){if(propType==='symbol'){return true;}if(!propValue){return false;}if(propValue['@@toStringTag']==='Symbol'){return true;}if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if(true){var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var throwOnDirectAccess=true;module.exports=__webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement,throwOnDirectAccess);}else{}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(true){(function(){'use strict';var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
if(false){}else{module.exports=__webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");}

/***/ }),

/***/ "./node_modules/react-native-raw-bottom-sheet/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-native-raw-bottom-sheet/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _src=_interopRequireDefault(__webpack_require__(/*! ./src */ "./node_modules/react-native-raw-bottom-sheet/src/index.js"));var _default=_src.default;exports.default=_default;

/***/ }),

/***/ "./node_modules/react-native-raw-bottom-sheet/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-native-raw-bottom-sheet/src/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _style=_interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/react-native-raw-bottom-sheet/src/style.js"));var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/customBottomSheet/node_modules/react-native-raw-bottom-sheet/src/index.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var SUPPORTED_ORIENTATIONS=["portrait","portrait-upside-down","landscape","landscape-left","landscape-right"];var RBSheet=function(_Component){(0,_inherits2.default)(RBSheet,_Component);var _super=_createSuper(RBSheet);function RBSheet(props){var _this;(0,_classCallCheck2.default)(this,RBSheet);_this=_super.call(this,props);_this.state={modalVisible:false,animatedHeight:new _reactNative.Animated.Value(0),pan:new _reactNative.Animated.ValueXY()};_this.createPanResponder(props);return _this;}(0,_createClass2.default)(RBSheet,[{key:"setModalVisible",value:function setModalVisible(visible,props){var _this2=this;var _this$props=this.props,height=_this$props.height,minClosingHeight=_this$props.minClosingHeight,openDuration=_this$props.openDuration,closeDuration=_this$props.closeDuration,onClose=_this$props.onClose,onOpen=_this$props.onOpen;var _this$state=this.state,animatedHeight=_this$state.animatedHeight,pan=_this$state.pan;if(visible){this.setState({modalVisible:visible});if(typeof onOpen==="function")onOpen(props);_reactNative.Animated.timing(animatedHeight,{useNativeDriver:false,toValue:height,duration:openDuration}).start();}else{_reactNative.Animated.timing(animatedHeight,{useNativeDriver:false,toValue:minClosingHeight,duration:closeDuration}).start(function(){pan.setValue({x:0,y:0});_this2.setState({modalVisible:visible,animatedHeight:new _reactNative.Animated.Value(0)});if(typeof onClose==="function")onClose(props);});}}},{key:"createPanResponder",value:function createPanResponder(props){var _this3=this;var closeOnDragDown=props.closeOnDragDown,height=props.height;var pan=this.state.pan;this.panResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return closeOnDragDown;},onPanResponderMove:function onPanResponderMove(e,gestureState){if(gestureState.dy>0){_reactNative.Animated.event([null,{dy:pan.y}],{useNativeDriver:false})(e,gestureState);}},onPanResponderRelease:function onPanResponderRelease(e,gestureState){if(height/4-gestureState.dy<0){_this3.setModalVisible(false);}else{_reactNative.Animated.spring(pan,{toValue:{x:0,y:0},useNativeDriver:false}).start();}}});}},{key:"open",value:function open(props){this.setModalVisible(true,props);}},{key:"close",value:function close(props){this.setModalVisible(false,props);}},{key:"render",value:function render(){var _this4=this;var _this$props2=this.props,animationType=_this$props2.animationType,closeOnDragDown=_this$props2.closeOnDragDown,dragFromTopOnly=_this$props2.dragFromTopOnly,closeOnPressMask=_this$props2.closeOnPressMask,closeOnPressBack=_this$props2.closeOnPressBack,children=_this$props2.children,customStyles=_this$props2.customStyles,keyboardAvoidingViewEnabled=_this$props2.keyboardAvoidingViewEnabled;var _this$state2=this.state,animatedHeight=_this$state2.animatedHeight,pan=_this$state2.pan,modalVisible=_this$state2.modalVisible;var panStyle={transform:pan.getTranslateTransform()};return _react.default.createElement(_reactNative.Modal,{transparent:true,animationType:animationType,visible:modalVisible,supportedOrientations:SUPPORTED_ORIENTATIONS,onRequestClose:function onRequestClose(){if(closeOnPressBack)_this4.setModalVisible(false);},__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:7}},_react.default.createElement(_reactNative.KeyboardAvoidingView,{enabled:keyboardAvoidingViewEnabled,behavior:"padding",style:[_style.default.wrapper,customStyles.wrapper],__self:this,__source:{fileName:_jsxFileName,lineNumber:116,columnNumber:9}},_react.default.createElement(_reactNative.TouchableOpacity,{style:_style.default.mask,activeOpacity:1,onPress:function onPress(){return closeOnPressMask?_this4.close():null;},__self:this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:11}}),_react.default.createElement(_reactNative.Animated.View,(0,_extends2.default)({},!dragFromTopOnly&&this.panResponder.panHandlers,{style:[panStyle,_style.default.container,{height:animatedHeight},customStyles.container],__self:this,__source:{fileName:_jsxFileName,lineNumber:126,columnNumber:11}}),closeOnDragDown&&_react.default.createElement(_reactNative.View,(0,_extends2.default)({},dragFromTopOnly&&this.panResponder.panHandlers,{style:_style.default.draggableContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:131,columnNumber:15}}),_react.default.createElement(_reactNative.View,{style:[_style.default.draggableIcon,customStyles.draggableIcon],__self:this,__source:{fileName:_jsxFileName,lineNumber:135,columnNumber:17}})),children)));}}]);return RBSheet;}(_react.Component);RBSheet.propTypes={animationType:_propTypes.default.oneOf(["none","slide","fade"]),height:_propTypes.default.number,minClosingHeight:_propTypes.default.number,openDuration:_propTypes.default.number,closeDuration:_propTypes.default.number,closeOnDragDown:_propTypes.default.bool,closeOnPressMask:_propTypes.default.bool,dragFromTopOnly:_propTypes.default.bool,closeOnPressBack:_propTypes.default.bool,keyboardAvoidingViewEnabled:_propTypes.default.bool,customStyles:_propTypes.default.objectOf(_propTypes.default.object),onClose:_propTypes.default.func,onOpen:_propTypes.default.func,children:_propTypes.default.node};RBSheet.defaultProps={animationType:"none",height:260,minClosingHeight:0,openDuration:300,closeDuration:200,closeOnDragDown:false,dragFromTopOnly:false,closeOnPressMask:true,closeOnPressBack:true,keyboardAvoidingViewEnabled:_reactNative.Platform.OS==="ios",customStyles:{},onClose:null,onOpen:null,children:_react.default.createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:177,columnNumber:13}})};var _default=RBSheet;exports.default=_default;

/***/ }),

/***/ "./node_modules/react-native-raw-bottom-sheet/src/style.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-native-raw-bottom-sheet/src/style.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNative=__webpack_require__(/*! react-native */ "react-native");var styles=_reactNative.StyleSheet.create({wrapper:{flex:1,backgroundColor:"#00000077"},mask:{flex:1,backgroundColor:"transparent"},container:{backgroundColor:"#fff",width:"100%",height:0,overflow:"hidden"},draggableContainer:{width:"100%",alignItems:"center",backgroundColor:"transparent"},draggableIcon:{width:35,height:5,borderRadius:5,margin:10,backgroundColor:"#ccc"}});var _default=styles;exports.default=_default;

/***/ }),

/***/ "./src/CustomBottomSheet.jsx":
/*!***********************************!*\
  !*** ./src/CustomBottomSheet.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.CustomBottomSheet=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _reactNativeRawBottomSheet=_interopRequireDefault(__webpack_require__(/*! react-native-raw-bottom-sheet */ "./node_modules/react-native-raw-bottom-sheet/index.js"));var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/customBottomSheet/src/CustomBottomSheet.jsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var CustomBottomSheet=function(_Component){(0,_inherits2.default)(CustomBottomSheet,_Component);var _super=_createSuper(CustomBottomSheet);function CustomBottomSheet(props){var _this;(0,_classCallCheck2.default)(this,CustomBottomSheet);_this=_super.call(this,props);_this.measureBottomSheet=function(_ref){var nativeEvent=_ref.nativeEvent;_this.setState({bottomSheetHeight:nativeEvent.layout.height});};_this.state={bottomSheetHeight:_this.props.height};return _this;}(0,_createClass2.default)(CustomBottomSheet,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.showBottomSheet.value===false&&this.props.showBottomSheet.value&&this.RBSheet!=null){this.RBSheet.open();}if(!this.props.showBottomSheet.value&&this.RBSheet!=null){this.RBSheet.close();}}},{key:"onCloseEvent",value:function onCloseEvent(){if(this.props.showBottomSheet.value){this.toggleFalse();}}},{key:"toggleFalse",value:function toggleFalse(){this.props.showBottomSheet.setValue(false);}},{key:"render",value:function render(){var _this2=this;return this.state.bottomSheetHeight===0?(0,_react.createElement)(_reactNative.View,{style:{position:"absolute",top:0,left:-10*_reactNative.Dimensions.get("window").width},onLayout:this.measureBottomSheet,__self:this,__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:9}},this.props.content):(0,_react.createElement)(_reactNativeRawBottomSheet.default,{ref:function ref(_ref2){_this2.RBSheet=_ref2;},closeOnDragDown:this.props.closeOnDragDown,onClose:function onClose(){return _this2.onCloseEvent();},height:this.state.bottomSheetHeight,openDuration:this.props.openDuration,closeDuration:this.props.closeDuration,animationType:this.props.animation,customStyles:this.props.style[0],__self:this,__source:{fileName:_jsxFileName,lineNumber:61,columnNumber:9}},this.props.content);}}]);return CustomBottomSheet;}(_react.Component);exports.CustomBottomSheet=CustomBottomSheet;

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
//# sourceMappingURL=CustomBottomSheet.js.map