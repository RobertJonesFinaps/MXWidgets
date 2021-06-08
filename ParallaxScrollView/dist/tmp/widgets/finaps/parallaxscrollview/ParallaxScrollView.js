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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ParallaxScrollView.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}module.exports=_assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}module.exports=_classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}module.exports=_createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}module.exports=_extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o){module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}module.exports=_getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf=__webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)setPrototypeOf(subClass,superClass);}module.exports=_inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj["default"]=obj;return newObj;}}module.exports=_interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose=__webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}module.exports=_objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}module.exports=_objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");var assertThisInitialized=__webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return assertThisInitialized(self);}module.exports=_possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){module.exports=_typeof=function _typeof(obj){return _typeof2(obj);};}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};}return _typeof(obj);}module.exports=_typeof;

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
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(true){(function(){'use strict';Object.defineProperty(exports,'__esModule',{value:true});var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE);}var lowPriorityWarning=function lowPriorityWarning(){};{var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.warn(message);}try{throw new Error(message);}catch(x){}};lowPriorityWarning=function lowPriorityWarning(condition,format){if(format===undefined){throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning '+'message argument');}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};}var lowPriorityWarning$1=lowPriorityWarning;function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;lowPriorityWarning$1(false,'The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}exports.typeOf=typeOf;exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isValidElementType=isValidElementType;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;})();}

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

/***/ "./node_modules/react-native-parallax-scroll-view/src/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-native-parallax-scroll-view/src/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _this=this,_jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/node_modules/react-native-parallax-scroll-view/src/index.js";var styles=__webpack_require__(/*! ./styles */ "./node_modules/react-native-parallax-scroll-view/src/styles.js");var bool=_propTypes.default.bool,func=_propTypes.default.func,number=_propTypes.default.number,string=_propTypes.default.string;var window=_reactNative.Dimensions.get('window');var SCROLLVIEW_REF='ScrollView';var pivotPoint=function pivotPoint(a,b){return a-b;};var renderEmpty=function renderEmpty(){return _react.default.createElement(_reactNative.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:21}});};var interpolate=function interpolate(value,opts){var x=value.interpolate(opts);x.toJSON=function(){return x.__getValue();};return x;};var IPropTypes={backgroundColor:string,backgroundScrollSpeed:number,fadeOutForeground:bool,fadeOutBackground:bool,contentBackgroundColor:string,onChangeHeaderVisibility:func,parallaxHeaderHeight:number.isRequired,renderBackground:func,renderFixedHeader:func,renderForeground:func,renderScrollComponent:func,renderStickyHeader:func,stickyHeaderHeight:number,contentContainerStyle:_reactNative.ViewPropTypes.style,scrollingStickyHeader:bool,outputScaleValue:number};var ParallaxScrollView=function(_Component){(0,_inherits2.default)(ParallaxScrollView,_Component);function ParallaxScrollView(props){var _this2;(0,_classCallCheck2.default)(this,ParallaxScrollView);_this2=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ParallaxScrollView).call(this,props));_this2.animatedEvent=_reactNative.Animated.event([{nativeEvent:{contentOffset:{y:_this2.scrollY}}}],{useNativeDriver:true});if(props.renderStickyHeader&&!props.stickyHeaderHeight){console.warn('Property `stickyHeaderHeight` must be set if `renderStickyHeader` is used.');}if(props.renderParallaxHeader!==renderEmpty&&!props.renderForeground){console.warn('Property `renderParallaxHeader` is deprecated. Use `renderForeground` instead.');}_this2.state={scrollY:new _reactNative.Animated.Value(0),viewHeight:window.height,viewWidth:window.width};_this2.scrollY=new _reactNative.Animated.Value(0);_this2._footerComponent={setNativeProps:function setNativeProps(){}};_this2._footerHeight=0;return _this2;}(0,_createClass2.default)(ParallaxScrollView,[{key:"render",value:function render(){var _this3=this;var _this$props=this.props,backgroundColor=_this$props.backgroundColor,backgroundScrollSpeed=_this$props.backgroundScrollSpeed,children=_this$props.children,contentBackgroundColor=_this$props.contentBackgroundColor,fadeOutForeground=_this$props.fadeOutForeground,fadeOutBackground=_this$props.fadeOutBackground,parallaxHeaderHeight=_this$props.parallaxHeaderHeight,renderBackground=_this$props.renderBackground,renderFixedHeader=_this$props.renderFixedHeader,renderForeground=_this$props.renderForeground,renderParallaxHeader=_this$props.renderParallaxHeader,renderScrollComponent=_this$props.renderScrollComponent,renderStickyHeader=_this$props.renderStickyHeader,stickyHeaderHeight=_this$props.stickyHeaderHeight,style=_this$props.style,contentContainerStyle=_this$props.contentContainerStyle,scrollingStickyHeader=_this$props.scrollingStickyHeader,outputScaleValue=_this$props.outputScaleValue,scrollViewProps=(0,_objectWithoutProperties2.default)(_this$props,["backgroundColor","backgroundScrollSpeed","children","contentBackgroundColor","fadeOutForeground","fadeOutBackground","parallaxHeaderHeight","renderBackground","renderFixedHeader","renderForeground","renderParallaxHeader","renderScrollComponent","renderStickyHeader","stickyHeaderHeight","style","contentContainerStyle","scrollingStickyHeader","outputScaleValue"]);var background=this._renderBackground({fadeOutBackground:fadeOutBackground,backgroundScrollSpeed:backgroundScrollSpeed,backgroundColor:backgroundColor,parallaxHeaderHeight:parallaxHeaderHeight,stickyHeaderHeight:stickyHeaderHeight,renderBackground:renderBackground,outputScaleValue:outputScaleValue});var foreground=this._renderForeground({fadeOutForeground:fadeOutForeground,parallaxHeaderHeight:parallaxHeaderHeight,stickyHeaderHeight:stickyHeaderHeight,renderForeground:renderForeground||renderParallaxHeader});var bodyComponent=this._wrapChildren(children,{contentBackgroundColor:contentBackgroundColor,stickyHeaderHeight:stickyHeaderHeight,contentContainerStyle:contentContainerStyle});var footerSpacer=this._renderFooterSpacer({contentBackgroundColor:contentBackgroundColor});var maybeStickyHeader=this._maybeRenderStickyHeader({parallaxHeaderHeight:parallaxHeaderHeight,stickyHeaderHeight:stickyHeaderHeight,backgroundColor:backgroundColor,renderFixedHeader:renderFixedHeader,renderStickyHeader:renderStickyHeader,scrollingStickyHeader:scrollingStickyHeader});var scrollElement=renderScrollComponent(scrollViewProps);return _react.default.createElement(_reactNative.View,{style:[style,styles.container],onLayout:function onLayout(e){return _this3._maybeUpdateViewDimensions(e);},__self:this,__source:{fileName:_jsxFileName,lineNumber:134}},background,_react.default.cloneElement(scrollElement,{ref:SCROLLVIEW_REF,style:[styles.scrollView,scrollElement.props.style],scrollEventThrottle:1,onScroll:_reactNative.Animated.event([{nativeEvent:{contentOffset:{y:this.scrollY}}}],{useNativeDriver:true,listener:this._onScroll.bind(this)})},foreground,bodyComponent,footerSpacer),maybeStickyHeader);}},{key:"getScrollableNode",value:function getScrollableNode(){return this.refs[SCROLLVIEW_REF].scrollResponderGetScrollableNode();}},{key:"getInnerViewNode",value:function getInnerViewNode(){return this.refs[SCROLLVIEW_REF].getInnerViewNode();}},{key:"scrollTo",value:function scrollTo(){var _this$refs$SCROLLVIEW;(_this$refs$SCROLLVIEW=this.refs[SCROLLVIEW_REF]).scrollResponderScrollTo.apply(_this$refs$SCROLLVIEW,arguments);}},{key:"setNativeProps",value:function setNativeProps(props){this.refs[SCROLLVIEW_REF].setNativeProps(props);}},{key:"_onScroll",value:function _onScroll(e){var _this$props2=this.props,parallaxHeaderHeight=_this$props2.parallaxHeaderHeight,stickyHeaderHeight=_this$props2.stickyHeaderHeight,onChangeHeaderVisibility=_this$props2.onChangeHeaderVisibility,_this$props2$onScroll=_this$props2.onScroll,prevOnScroll=_this$props2$onScroll===void 0?function(e){}:_this$props2$onScroll;var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);if(e.nativeEvent.contentOffset.y>=p){onChangeHeaderVisibility(false);}else{onChangeHeaderVisibility(true);}prevOnScroll(e);}},{key:"_maybeUpdateViewDimensions",value:function _maybeUpdateViewDimensions(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;if(width!==this.state.viewWidth||height!==this.state.viewHeight){this.setState({viewWidth:width,viewHeight:height});}}},{key:"_renderBackground",value:function _renderBackground(_ref){var fadeOutBackground=_ref.fadeOutBackground,backgroundScrollSpeed=_ref.backgroundScrollSpeed,backgroundColor=_ref.backgroundColor,parallaxHeaderHeight=_ref.parallaxHeaderHeight,stickyHeaderHeight=_ref.stickyHeaderHeight,renderBackground=_ref.renderBackground,outputScaleValue=_ref.outputScaleValue;var _this$state=this.state,viewWidth=_this$state.viewWidth,viewHeight=_this$state.viewHeight;var scrollY=this.scrollY;var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);return _react.default.createElement(_reactNative.Animated.View,{style:[styles.backgroundImage,{backgroundColor:backgroundColor,height:parallaxHeaderHeight,width:viewWidth,opacity:fadeOutBackground?interpolate(scrollY,{inputRange:[0,p*(1/2),p*(3/4),p],outputRange:[1,0.3,0.1,0],extrapolate:'clamp'}):1,transform:[{translateY:interpolate(scrollY,{inputRange:[0,p],outputRange:[0,-(p/backgroundScrollSpeed)],extrapolateRight:'extend',extrapolateLeft:'clamp'})},{scale:interpolate(scrollY,{inputRange:[-viewHeight,0],outputRange:[outputScaleValue*1.5,1],extrapolate:'clamp'})}]}],__self:this,__source:{fileName:_jsxFileName,lineNumber:239}},_react.default.createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:273}},renderBackground()));}},{key:"_renderForeground",value:function _renderForeground(_ref2){var fadeOutForeground=_ref2.fadeOutForeground,parallaxHeaderHeight=_ref2.parallaxHeaderHeight,stickyHeaderHeight=_ref2.stickyHeaderHeight,renderForeground=_ref2.renderForeground;var scrollY=this.scrollY;var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);return _react.default.createElement(_reactNative.View,{style:styles.parallaxHeaderContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:289}},_react.default.createElement(_reactNative.Animated.View,{style:[styles.parallaxHeader,{height:parallaxHeaderHeight,opacity:fadeOutForeground?interpolate(scrollY,{inputRange:[0,p*(1/2),p*(3/4),p],outputRange:[1,0.3,0.1,0],extrapolate:'clamp'}):1}],__self:this,__source:{fileName:_jsxFileName,lineNumber:290}},_react.default.createElement(_reactNative.View,{style:{height:parallaxHeaderHeight},__self:this,__source:{fileName:_jsxFileName,lineNumber:305}},renderForeground())));}},{key:"_wrapChildren",value:function _wrapChildren(children,_ref3){var _this4=this;var contentBackgroundColor=_ref3.contentBackgroundColor,stickyHeaderHeight=_ref3.stickyHeaderHeight,contentContainerStyle=_ref3.contentContainerStyle;var viewHeight=this.state.viewHeight;var containerStyles=[{backgroundColor:contentBackgroundColor}];if(contentContainerStyle)containerStyles.push(contentContainerStyle);return _react.default.createElement(_reactNative.View,{style:containerStyles,onLayout:function onLayout(e){var height=e.nativeEvent.layout.height;var footerHeight=Math.max(0,viewHeight-height-stickyHeaderHeight);if(_this4._footerHeight!==footerHeight){_this4._footerComponent.setNativeProps({style:{height:footerHeight}});_this4._footerHeight=footerHeight;}},__self:this,__source:{fileName:_jsxFileName,lineNumber:324}},children);}},{key:"_renderFooterSpacer",value:function _renderFooterSpacer(_ref4){var _this5=this;var contentBackgroundColor=_ref4.contentBackgroundColor;return _react.default.createElement(_reactNative.View,{ref:function ref(_ref5){return _this5._footerComponent=_ref5;},style:{backgroundColor:contentBackgroundColor},__self:this,__source:{fileName:_jsxFileName,lineNumber:348}});}},{key:"_maybeRenderStickyHeader",value:function _maybeRenderStickyHeader(_ref6){var parallaxHeaderHeight=_ref6.parallaxHeaderHeight,stickyHeaderHeight=_ref6.stickyHeaderHeight,backgroundColor=_ref6.backgroundColor,renderFixedHeader=_ref6.renderFixedHeader,renderStickyHeader=_ref6.renderStickyHeader,scrollingStickyHeader=_ref6.scrollingStickyHeader;var viewWidth=this.state.viewWidth;var scrollY=this.scrollY;if(renderStickyHeader||renderFixedHeader){var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);return _react.default.createElement(_reactNative.View,{style:[styles.stickyHeader,(0,_extends2.default)({width:viewWidth},stickyHeaderHeight?{height:stickyHeaderHeight}:null)],__self:this,__source:{fileName:_jsxFileName,lineNumber:368}},renderStickyHeader?_react.default.createElement(_reactNative.Animated.View,{style:{backgroundColor:backgroundColor,height:stickyHeaderHeight,opacity:interpolate(scrollY,{inputRange:[0,p],outputRange:[0,1],extrapolate:'clamp'})},__self:this,__source:{fileName:_jsxFileName,lineNumber:378}},scrollingStickyHeader?_react.default.createElement(_reactNative.Animated.View,{style:{transform:[{translateY:interpolate(scrollY,{inputRange:[0,p],outputRange:[stickyHeaderHeight,0],extrapolate:'clamp'})}]},__self:this,__source:{fileName:_jsxFileName,lineNumber:395}},renderStickyHeader()):renderStickyHeader()):null,renderFixedHeader&&renderFixedHeader());}else{return null;}}}]);return ParallaxScrollView;}(_react.Component);ParallaxScrollView.propTypes=IPropTypes;ParallaxScrollView.defaultProps={backgroundScrollSpeed:5,backgroundColor:'#000',contentBackgroundColor:'#fff',fadeOutForeground:true,onChangeHeaderVisibility:function onChangeHeaderVisibility(){},renderScrollComponent:function renderScrollComponent(props){return _react.default.createElement(_reactNative.Animated.ScrollView,(0,_extends2.default)({},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:432}}));},renderBackground:renderEmpty,renderParallaxHeader:renderEmpty,renderForeground:null,stickyHeaderHeight:0,contentContainerStyle:null,scrollingStickyheader:true,outputScaleValue:5};module.exports=ParallaxScrollView;

/***/ }),

/***/ "./node_modules/react-native-parallax-scroll-view/src/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-parallax-scroll-view/src/styles.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var StyleSheet=__webpack_require__(/*! react-native */ "react-native").StyleSheet;var styles=StyleSheet.create({container:{flex:1,backgroundColor:'transparent'},parallaxHeaderContainer:{backgroundColor:'transparent',overflow:'hidden'},parallaxHeader:{backgroundColor:'transparent',overflow:'hidden'},backgroundImage:{position:'absolute',backgroundColor:'transparent',overflow:'hidden',top:0},stickyHeader:{backgroundColor:'transparent',position:'absolute',overflow:'hidden',top:0,left:0},scrollView:{backgroundColor:'transparent'}});module.exports=styles;

/***/ }),

/***/ "./src/ParallaxScrollView.jsx":
/*!************************************!*\
  !*** ./src/ParallaxScrollView.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.ParallaxScrollView=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=__webpack_require__(/*! react */ "react");var _Parallax=__webpack_require__(/*! ./components/Parallax */ "./src/components/Parallax.jsx");var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/src/ParallaxScrollView.jsx";var ParallaxScrollView=function(_Component){(0,_inherits2.default)(ParallaxScrollView,_Component);function ParallaxScrollView(){(0,_classCallCheck2.default)(this,ParallaxScrollView);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ParallaxScrollView).apply(this,arguments));}(0,_createClass2.default)(ParallaxScrollView,[{key:"render",value:function render(){return(0,_react.createElement)(_Parallax.Parallax,(0,_extends2.default)({},this.props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:6}}));}}]);return ParallaxScrollView;}(_react.Component);exports.ParallaxScrollView=ParallaxScrollView;

/***/ }),

/***/ "./src/components/Background.jsx":
/*!***************************************!*\
  !*** ./src/components/Background.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Background=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/src/components/Background.jsx";var Background=function(_Component){(0,_inherits2.default)(Background,_Component);function Background(){(0,_classCallCheck2.default)(this,Background);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Background).apply(this,arguments));}(0,_createClass2.default)(Background,[{key:"render",value:function render(){var stickyPercentage=this.props.stickyPercentage;var zoomFactor=this.props.zoomFactor;var startPosition=stickyPercentage/2;var a=(1-zoomFactor)/(startPosition-(1-stickyPercentage));var b=(startPosition*zoomFactor-(1-stickyPercentage))/(startPosition-(1-stickyPercentage));return(0,_react.createElement)(_reactNative.View,{style:[{width:this.props.width*Math.max(1,a*this.props.percentScrolled+b),height:this.props.usableHeight,left:-this.props.width*Math.max(0,(a*this.props.percentScrolled+b-1)/2),backgroundColor:"transparent"},this.props.style[0].background],__self:this,__source:{fileName:_jsxFileName,lineNumber:46}},this.props.backgroundImage);}}]);return Background;}(_react.Component);exports.Background=Background;

/***/ }),

/***/ "./src/components/FixedHeader.jsx":
/*!****************************************!*\
  !*** ./src/components/FixedHeader.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.FixedHeader=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/src/components/FixedHeader.jsx";var FixedHeader=function(_Component){(0,_inherits2.default)(FixedHeader,_Component);function FixedHeader(){(0,_classCallCheck2.default)(this,FixedHeader);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(FixedHeader).apply(this,arguments));}(0,_createClass2.default)(FixedHeader,[{key:"render",value:function render(){return(0,_react.createElement)(_reactNative.SafeAreaView,{style:[{position:"absolute",top:this.props.statusBarHeight-10,width:this.props.width},this.props.style[0].fixedHeader],__self:this,__source:{fileName:_jsxFileName,lineNumber:10}},this.props.fixedHeader);}}]);return FixedHeader;}(_react.Component);exports.FixedHeader=FixedHeader;

/***/ }),

/***/ "./src/components/Foreground.jsx":
/*!***************************************!*\
  !*** ./src/components/Foreground.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Foreground=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/src/components/Foreground.jsx";var Foreground=function(_Component){(0,_inherits2.default)(Foreground,_Component);function Foreground(){(0,_classCallCheck2.default)(this,Foreground);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Foreground).apply(this,arguments));}(0,_createClass2.default)(Foreground,[{key:"render",value:function render(){return(0,_react.createElement)(_reactNative.View,{style:[{flex:1,alignItems:"center",justifyContent:"center"},this.props.style[0].foreground],__self:this,__source:{fileName:_jsxFileName,lineNumber:7}},this.props.headerLarge);}}]);return Foreground;}(_react.Component);exports.Foreground=Foreground;

/***/ }),

/***/ "./src/components/Parallax.jsx":
/*!*************************************!*\
  !*** ./src/components/Parallax.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Parallax=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _reactNativeParallaxScrollView=_interopRequireDefault(__webpack_require__(/*! react-native-parallax-scroll-view */ "./node_modules/react-native-parallax-scroll-view/src/index.js"));var _reactNativeDeviceInfo=_interopRequireDefault(__webpack_require__(/*! react-native-device-info */ "react-native-device-info"));var _Foreground=__webpack_require__(/*! ./Foreground */ "./src/components/Foreground.jsx");var _Background=__webpack_require__(/*! ./Background */ "./src/components/Background.jsx");var _FixedHeader=__webpack_require__(/*! ./FixedHeader */ "./src/components/FixedHeader.jsx");var _StickyHeader=__webpack_require__(/*! ./StickyHeader */ "./src/components/StickyHeader.jsx");var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/src/components/Parallax.jsx";var executeAction=function executeAction(action){if(action&&action.canExecute&&!action.isExecuting){action.execute();}};var Parallax=function(_Component){(0,_inherits2.default)(Parallax,_Component);function Parallax(props){var _this;(0,_classCallCheck2.default)(this,Parallax);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Parallax).call(this,props));_this.handleScroll=function(e,usableHeight,scrollViewHeight){var scrollPosition=e.nativeEvent.contentOffset.y;_this.setState({percentScrolled:scrollPosition/usableHeight});};_this.state={percentScrolled:0,scrollViewHeight:1000000};return _this;}(0,_createClass2.default)(Parallax,[{key:"render",value:function render(){var _this2=this;var hasNotch=_reactNativeDeviceInfo.default.hasNotch();var statusBarHeight;if(_reactNative.Platform.OS==="ios"&&hasNotch){statusBarHeight=40;}else if(_reactNative.Platform.OS==="ios"&&hasNotch===false){statusBarHeight=20;}else{statusBarHeight=_reactNative.StatusBar.currentHeight+20;}var window=_reactNative.Dimensions.get("window");var width=window.width+2;var usableHeight=window.height+statusBarHeight;var initialHeightPercentage=parseInt(this.props.parallaxHeight,10)/100;var initialHeight=initialHeightPercentage*usableHeight;var stickyPercentage=this.props.stickyHeightUnit==="percentage"?parseInt(this.props.stickyHeight,10)/100+statusBarHeight/usableHeight:parseInt(this.props.stickyHeight,10)/usableHeight+statusBarHeight/usableHeight;var HeightStickyHeader=this.props.stickyHeightUnit==="percentage"?Math.round(usableHeight*stickyPercentage):parseInt(this.props.stickyHeight,10)+statusBarHeight;var zoomFactor=1;return(0,_react.createElement)(_reactNativeParallaxScrollView.default,{backgroundScrollSpeed:Number(this.props.scrollSpeed),backgroundColor:"transparent",parallaxHeaderHeight:initialHeight,scrollEventThrottle:1,scrollingStickyHeader:false,bounces:true,onScroll:function onScroll(e){_this2.handleScroll(e,usableHeight,_this2.state.scrollViewHeight);},stickyHeaderHeight:HeightStickyHeader,renderStickyHeader:function renderStickyHeader(){return(0,_react.createElement)(_StickyHeader.StickyHeader,{style:_this2.props.style,backgroundImage:_this2.props.backgroundImage,HeightStickyHeader:HeightStickyHeader,width:width,usableHeight:usableHeight,zoomFactor:zoomFactor,percentScrolled:_this2.state.percentScrolled,initialHeightPercentage:initialHeightPercentage,stickyPercentage:stickyPercentage,stickyHeader:_this2.props.stickyHeader,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:81}});},renderBackground:function renderBackground(){return(0,_react.createElement)(_Background.Background,{style:_this2.props.style,width:width,percentScrolled:_this2.state.percentScrolled,stickyPercentage:stickyPercentage,usableHeight:usableHeight,zoomFactor:zoomFactor,backgroundImage:_this2.props.backgroundImage,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:95}});},renderForeground:function renderForeground(){return(0,_react.createElement)(_Foreground.Foreground,{style:_this2.props.style,headerLarge:_this2.props.headerLarge,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:105}});},renderFixedHeader:function renderFixedHeader(){return(0,_react.createElement)(_FixedHeader.FixedHeader,{style:_this2.props.style,fixedHeader:_this2.props.fixedHeader,statusBarHeight:statusBarHeight,width:width,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:107}});},__self:this,__source:{fileName:_jsxFileName,lineNumber:69}},(0,_react.createElement)(_reactNative.View,{style:[{minHeight:window.height-HeightStickyHeader+30},this.props.style[0].content],__self:this,__source:{fileName:_jsxFileName,lineNumber:115}},this.props.content));}}]);return Parallax;}(_react.Component);exports.Parallax=Parallax;

/***/ }),

/***/ "./src/components/StickyHeader.jsx":
/*!*****************************************!*\
  !*** ./src/components/StickyHeader.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.StickyHeader=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _jsxFileName="/Users/robertjones/Documents/Finaps/TestMarketplace-main/widgets.sources/ParallaxScrollView/src/components/StickyHeader.jsx";var StickyHeader=function(_Component){(0,_inherits2.default)(StickyHeader,_Component);function StickyHeader(){(0,_classCallCheck2.default)(this,StickyHeader);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(StickyHeader).apply(this,arguments));}(0,_createClass2.default)(StickyHeader,[{key:"render",value:function render(){HeightStickyHeader=this.props.HeightStickyHeader;width=this.props.width;usableHeight=this.props.usableHeight;zoomFactor=this.props.zoomFactor;percentScrolled=this.props.percentScrolled;initialHeightPercentage=this.props.initialHeightPercentage;stickyPercentage=this.props.stickyPercentage;showHeader=this.props.percentScrolled<=initialHeightPercentage-stickyPercentage?0:1;style={stickyHeader:{height:HeightStickyHeader,justifyContent:"center",overflow:"hidden"}};return(0,_react.createElement)(_reactNative.SafeAreaView,{key:"sticky-header",style:[style.stickyHeader,this.props.style[0].stickyHeader],__self:this,__source:{fileName:_jsxFileName,lineNumber:24}},(0,_react.createElement)(_reactNative.View,{style:{position:"absolute",top:-(usableHeight-HeightStickyHeader)/2,left:(1-zoomFactor)*width/2,bottom:HeightStickyHeader,width:width*zoomFactor,height:usableHeight,opacity:showHeader},__self:this,__source:{fileName:_jsxFileName,lineNumber:25}},this.props.backgroundImage),(0,_react.createElement)(_reactNative.View,{style:{opacity:Math.max(0,Math.min(2*percentScrolled/(initialHeightPercentage-stickyPercentage)-1,1))},__self:this,__source:{fileName:_jsxFileName,lineNumber:41}},this.props.stickyHeader));}}]);return StickyHeader;}(_react.Component);exports.StickyHeader=StickyHeader;

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

/***/ }),

/***/ "react-native-device-info":
/*!*******************************************!*\
  !*** external "react-native-device-info" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-device-info");

/***/ })

/******/ });
//# sourceMappingURL=ParallaxScrollView.js.map