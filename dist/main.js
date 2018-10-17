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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _ennemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ennemy */ "./src/ennemy.js");
/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayer */ "./src/displayer.js");
/* harmony import */ var _fight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fight */ "./src/fight.js");




var heros = new _hero__WEBPACK_IMPORTED_MODULE_0__["default"]("Héros", 200, 15, 0);
var minion = new _ennemy__WEBPACK_IMPORTED_MODULE_1__["default"]("Minion", 10, 10);
var lieutenantMinion = new _ennemy__WEBPACK_IMPORTED_MODULE_1__["default"]("Lieutenant minion", 30, 30);
var chefMinion = new _ennemy__WEBPACK_IMPORTED_MODULE_1__["default"]("Chef minion", 100, 15);
var displayer = new _displayer__WEBPACK_IMPORTED_MODULE_2__["default"]();
var combat = new _fight__WEBPACK_IMPORTED_MODULE_3__["default"]();
var turn;
$("button").click(function () {
  displayer.displayPersonnage(heros, $('#hero'));
  displayer.displayPersonnage(chefMinion, $('#ennemy-char'));
  combat.startFight(heros, chefMinion);
});

/***/ }),

/***/ "./src/displayer.js":
/*!**************************!*\
  !*** ./src/displayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Displayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Displayer =
/*#__PURE__*/
function () {
  function Displayer() {
    _classCallCheck(this, Displayer);
  }

  _createClass(Displayer, [{
    key: "displayPersonnage",
    value: function displayPersonnage(personnage, displayArea) {
      /* if (personnage.armor) {
           $(".fight").append("<p> Nom : " + personnage.name + "</p><p>Vie : " + personnage.life + "</p><p> Armor : " + personnage.armor + "</p>")
       } else {
           $(".fight").append("<p> Nom : " + personnage.name + " </p><p>Vie : " + personnage.life + "</p>");
       }*/
      $('.life', displayArea).html(personnage.life);
      $('.armor', displayArea).html(personnage.armor);
      $('.damage', displayArea).html(personnage.damages);
    }
  }, {
    key: "displayDead",
    value: function displayDead(personnage) {
      $(".fight").append("<p>" + personnage.name + " est mort ! Fin de la partie</p>");
    }
  }, {
    key: "displayAttack",
    value: function displayAttack(personnage, target) {
      if (personnage.criticalHit()) {
        $(".fight").append("<p>" + personnage.name + " attaque " + target.name + ". coup critique </p>");
      } else {
        $(".fight").append("<p>" + personnage.name + " attaque " + target.name + "</p>");
      }
    }
  }, {
    key: "displayBonus",
    value: function displayBonus(personnage) {
      if (personnage.lifeBonus()) {
        $(".fight").append("<p>" + personnage.name + " a obtenu un bonus vie </p>");
      } else if (personnage.armorBonus()) {
        $(".fight").append("<p>" + personnage.name + " a obtenu un bonus armure </p>");
      }
    }
  }]);

  return Displayer;
}();



/***/ }),

/***/ "./src/ennemy.js":
/*!***********************!*\
  !*** ./src/ennemy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ennemies; });
/* harmony import */ var _personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personnage */ "./src/personnage.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Ennemies =
/*#__PURE__*/
function (_Personnage) {
  _inherits(Ennemies, _Personnage);

  function Ennemies(name, life, damages) {
    _classCallCheck(this, Ennemies);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ennemies).call(this, name, life, damages));
  }

  return Ennemies;
}(_personnage__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/fight.js":
/*!**********************!*\
  !*** ./src/fight.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fight; });
/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayer */ "./src/displayer.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var displayer = new _displayer__WEBPACK_IMPORTED_MODULE_0__["default"]();

var Fight =
/*#__PURE__*/
function () {
  function Fight() {
    _classCallCheck(this, Fight);
  }

  _createClass(Fight, [{
    key: "strike",
    value: function strike(fighter, target) {
      if (fighter.life > 0 && target.life > 0) {
        fighter.attack(target);
        displayer.displayAttack(fighter, target); // $(".fight").append(displayer.displayAttack(fighter, target));

        target.attack(fighter);
        displayer.displayPersonnage(fighter, $('#hero'));
        displayer.displayPersonnage(target, $('#ennemy-char')); // $(".fight").append(displayer.displayAttack(target, fighter));

        if (this.isGetLifeBonus()) {
          fighter.addLifeBonus(50);
        }

        if (this.isGetArmorBonus()) {
          fighter.addArmorBonus(50);
        } // $(".hero").append(displayer.displayPersonnage(fighter));
        // $(".ennemy").append(displayer.displayPersonnage(target))

      } else if (fighter.life <= 0) {
        clearInterval(this.fightInterval);
        $(".fight").append(displayer.displayDead(fighter));
      } else if (target.life <= 0) {
        clearInterval(this.fightInterval);
        $(".fight").append(displayer.displayDead(target));
      }
    }
  }, {
    key: "startFight",
    value: function startFight(fighter, target) {
      var _this = this;

      this.fightInterval = setInterval(function () {
        return _this.strike(fighter, target);
      }, 1000);
    }
  }, {
    key: "isGetLifeBonus",
    value: function isGetLifeBonus() {
      if (Math.floor(Math.random() * 5 + 1) == 4) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isGetArmorBonus",
    value: function isGetArmorBonus() {
      return Math.floor(Math.random() * 3 + 1) == 2;
    }
  }]);

  return Fight;
}();



/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var _personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personnage */ "./src/personnage.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Hero =
/*#__PURE__*/
function (_Personnage) {
  _inherits(Hero, _Personnage);

  function Hero(name, life, damages, armor) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hero).call(this, name, life, damages));
    _this.armor = armor;
    _this.maxLifeBonus = 70;
    return _this;
  }

  _createClass(Hero, [{
    key: "addArmorBonus",
    value: function addArmorBonus(bonus) {
      this.armor += bonus;
    }
  }, {
    key: "addLifeBonus",
    value: function addLifeBonus(bonus) {
      if (bonus > this.maxLifeBonus) {
        bonus = this.maxLifeBonus;
      }

      this.life += bonus;
    }
  }, {
    key: "getDamages",
    value: function getDamages(damages) {
      if (damages <= this.armor) {
        this.armor = this.armor - damages;
      } else if (damages > this.armor) {
        this.life = this.life + this.armor - damages;
        this.armor = 0;
      }
    }
  }]);

  return Hero;
}(_personnage__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/personnage.js":
/*!***************************!*\
  !*** ./src/personnage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Personnage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Personnage =
/*#__PURE__*/
function () {
  function Personnage(name, life, damages) {
    _classCallCheck(this, Personnage);

    this.name = name;
    this.life = life;
    this.damages = damages;
  }

  _createClass(Personnage, [{
    key: "attack",
    value: function attack(target) {
      if (this.criticalHit()) {
        console.log(target.name + " life :", target.life);
        target.getDamages(this.damages * 2);
        console.log(this.name + " attaque " + target.name + ". coup critique de 2 fois " + this.damages + " " + target.name + " life :", target.life);
      } else {
        console.log(target.name + " life :", target.life);
        target.getDamages(this.damages);
        console.log(this.name + " attaque " + target.name + " de " + this.damages + " " + target.name + " life :" + target.life);
      }
    }
  }, {
    key: "getDamages",
    value: function getDamages(damages) {
      if (this.dodge()) {
        console.log(this.name + " a évité le coup !");
      } else {
        this.life -= damages;
      }
    }
  }, {
    key: "criticalHit",
    value: function criticalHit() {
      return Math.floor(Math.random() * 2 + 1) === 2;
    }
  }, {
    key: "dodge",
    value: function dodge() {
      return Math.floor(Math.random() * 2 + 1) === 1;
    }
  }]);

  return Personnage;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map