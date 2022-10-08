/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitConverter": () => (/* binding */ UnitConverter)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _converterInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var measureList = ["Length", "Light"];
var mainForm = document.querySelector('.select-property');
mainForm.length = measureList.length;

for (var i = 0; i < measureList.length; i++) {
  mainForm.options[i].text = measureList[i];
}

mainForm.addEventListener('change', function () {
  var i = mainForm.selectedIndex;
  document.querySelectorAll('converter-input').forEach(function (item) {
    item.setAttribute('unit', i);
  });
});
var leftUnit = 0;
var leftInput = 0;
var resultLeft = 0;
var rightUnit = 0;
var rightInput = 0;
var resultRight = 0;
window.addEventListener('left-reCalculate', reCalculateLeft, false);
window.addEventListener('right-reCalculate', reCalculateRight, false);

function reCalculateLeft(event) {
  leftUnit = event.detail.unit;
  leftInput = Number(event.detail.val);
  resultLeft = leftInput * leftUnit;
  document.getElementById('left').setAttribute('resultLeft', resultLeft); // calculate(leftUnit , leftInput , rightUnit);
}

function reCalculateRight(event) {
  rightUnit = event.detail.unit;
  rightInput = Number(event.detail.val);
  resultRight = rightUnit * rightInput;
  document.getElementById('right').setAttribute('resultRight', resultRight); // calculate(rightUnit , rightInput , leftUnit);
} // function calculate(sourceUnit , sourceInput , targetUnit){
//     let result = sourceUnit * sourceInput;
//     let mainResult = result / targetUnit
//     console.log(mainResult)
// }
//--------------------------------------------------------------------------------------------------


var UnitConverter = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UnitConverter, _HTMLElement);

  var _super = _createSuper(UnitConverter);

  function UnitConverter() {
    var _this;

    _classCallCheck(this, UnitConverter);

    _this = _super.call(this);
    _this.componentPrefix = '';
    _this.listenTo = '';
    _this.unitObj = [{
      unit: ["Meter (m)", "Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Kilometer (km)", "Ell", "Em", "Fathom", "Furlong", "Fermi (fm)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)"],
      factor: [1, 1E-10, 1.49598E11, .000254, .01, 1000, 1.143, 4.2323E-03, 1.8288, 201.168, 1E-15, .3048, .0254, 5556, 5556, 9.46055E+15, .000001, .0000254, .001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144]
    }, {
      unit: ["Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot"],
      factor: [1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000]
    }];
    _this.componentPrefix = _this.attributes.name.value;
    _this.listenTo = _this.attributes.listenTo.value;
    var template = document.createElement('template');
    template.innerHTML = "\n            <link rel=\"stylesheet\" href=\"./dist/styles.css\">\n\n            <form class=\"unitForm\" id=\"".concat(_this.componentPrefix, "-form\" onSubmit=\"return false\">\n                <input type=\"number\" id=\"").concat(_this.componentPrefix, "-input\" class=\"inputUnic numbersonly form-control\" name=\"unit_input\" maxlength=\"20\" value=\"0\">\n\n                <span style=\"width:100%\">\n                    <select id=\"").concat(_this.componentPrefix, "-select\" name=\"unit_menu\" class=\"select-unit form-control\">\n                    </select>\n                </span>\n            </form>\n        ");

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    _this.shadowRoot.getElementById(_this.componentPrefix + '-input').addEventListener('keyup', function () {
      var measureIndex = _this.attributes.unit.value;

      var SelectedIndex = _this.shadowRoot.getElementById(_this.componentPrefix + '-select').selectedIndex;

      var event = new CustomEvent(_this.componentPrefix + "-reCalculate", {
        detail: {
          unit: _this.unitObj[measureIndex].factor[SelectedIndex],
          val: _this.shadowRoot.getElementById(_this.componentPrefix + '-input').value
        },
        bubbles: true
      });

      _this.dispatchEvent(event);
    }); // this.addEventListener(this.listenTo + "-reCalculate", (e) => {
    //     console.log('From ' + this.listenTo + e.detail.unit);
    // });


    return _this;
  } // end constructor


  _createClass(UnitConverter, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'unit') {
        var unitArr = this.unitObj[this.attributes.unit.value].unit;
        var selectUnit = this.shadowRoot.querySelector('.select-unit');

        for (var _i = 0; _i < unitArr.length; _i++) {
          selectUnit.length = unitArr.length;
          selectUnit.options[_i].text = unitArr[_i];
        }
      }

      if (name === 'resultRight') {
        console.log(this.attributes.resultRight);
      }

      if (name === 'resultLeft') {
        console.log(this.attributes.resultLeft);
      }
    } //end attributeChangedCallback

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {}
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['unit', 'resultLeft', 'resultRight'];
    }
  }]);

  return UnitConverter;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define('converter-input', UnitConverter);
})();

/******/ })()
;