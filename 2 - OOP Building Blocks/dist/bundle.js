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
/******/ 	// mode & 1 - OOP and OOD: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1 - OOP and OOD: behave like require
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Consumable.ts":
/*!***************************!*\
  !*** ./src/Consumable.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ./Item */ "./src/Item.ts");
var Consumable = /** @class */ (function (_super) {
    __extends(Consumable, _super);
    function Consumable(name, value, weight, spoiled) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.spoiled = spoiled;
        _this.consumed = false;
        return _this;
    }
    Consumable.prototype.isConsumed = function () {
        return this.consumed;
    };
    Consumable.prototype.setConsumed = function (consumed) {
        this.consumed = consumed;
    };
    Consumable.prototype.isSpoiled = function () {
        return this.spoiled;
    };
    Consumable.prototype.use = function () {
        if (!this.spoiled && !this.consumed) {
            return this.eat();
        }
        if (this.spoiled) {
            return "You eat the " + this.name + ". You feel sick";
        }
        //If consumed
        return "There is nothing left of the " + this.name + " to consume.";
    };
    return Consumable;
}(Item_1.default));
exports.default = Consumable;


/***/ }),

/***/ "./src/Inventory.ts":
/*!**************************!*\
  !*** ./src/Inventory.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = [];
    }
    Inventory.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Inventory.prototype.toString = function () {
        return this.items.reduce(function (acc, item) {
            acc += item.toString() + ',';
            return acc;
        }, '');
    };
    Inventory.prototype.sort = function (comparator) {
        if (comparator) {
            this.items.sort(comparator.compare);
        }
        else {
            this.items.sort(function (itemA, itemB) { return itemA.compareTo(itemB); });
        }
    };
    return Inventory;
}());
exports.default = Inventory;


/***/ }),

/***/ "./src/Item.ts":
/*!*********************!*\
  !*** ./src/Item.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var INITIAL_ID = 0;
var initialId = INITIAL_ID;
var Item = /** @class */ (function () {
    function Item(name, value, weight) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = initialId++;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.setId = function (id) {
        this.id = id;
    };
    Item.prototype.getValue = function () {
        return this.value;
    };
    Item.prototype.setValue = function (value) {
        this.value = value;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.setName = function (name) {
        this.name = name;
    };
    Item.prototype.getWeight = function () {
        return this.weight;
    };
    Item.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    ;
    Item.numberOfItems = function () {
        return initialId;
    };
    Item.reset = function () {
        initialId = INITIAL_ID;
    };
    Item.prototype.compareTo = function (other) {
        if (this.value === other.value) {
            return this.name.toLowerCase() > other.name.toLowerCase() ? 1 : -1;
        }
        return this.value > other.value ? 1 : -1;
    };
    Item.prototype.toString = function () {
        return this.name + " - Value: " + this.value + ", Weight: " + this.weight;
    };
    return Item;
}());
exports.default = Item;


/***/ }),

/***/ "./src/ItemWeightComparator.ts":
/*!*************************************!*\
  !*** ./src/ItemWeightComparator.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemWeightComparator = /** @class */ (function () {
    function ItemWeightComparator() {
    }
    ItemWeightComparator.prototype.compare = function (first, second) {
        if (first.weight === second.weight) {
            return first.compareTo(second);
        }
        return first.weight > second.weight ? 1 : -1;
    };
    return ItemWeightComparator;
}());
exports.default = ItemWeightComparator;


/***/ }),

/***/ "./src/Pizza.ts":
/*!**********************!*\
  !*** ./src/Pizza.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Consumable_1 = __webpack_require__(/*! ./Consumable */ "./src/Consumable.ts");
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza(numberOfSlices, spoiled) {
        var _this = _super.call(this, 'pizza', 0, 0, spoiled) || this;
        _this.numberOfSlices = numberOfSlices;
        _this.slicesEaten = 0;
        return _this;
    }
    Pizza.prototype.eat = function () {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }
            return "You eat a slice of " + this.name;
        }
        else {
            return '';
        }
    };
    return Pizza;
}(Consumable_1.default));
exports.default = Pizza;


/***/ }),

/***/ "./src/Sword.ts":
/*!**********************!*\
  !*** ./src/Sword.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon_1 = __webpack_require__(/*! ./Weapon */ "./src/Weapon.ts");
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword(value, weight, baseDamage, baseDurability) {
        var _this = _super.call(this, 'sword', value, weight, baseDamage, baseDurability) || this;
        _this.MAX_POLISH_RATE = 0.25;
        return _this;
    }
    Sword.prototype.polish = function () {
        var maxDamageModifier = this.baseDamage * this.MAX_POLISH_RATE;
        if (!(this.damageModifier >= maxDamageModifier)) {
            this.damageModifier += this.MODIFIER_CHANGE_RATE;
        }
    };
    return Sword;
}(Weapon_1.default));
exports.default = Sword;


/***/ }),

/***/ "./src/Weapon.ts":
/*!***********************!*\
  !*** ./src/Weapon.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ./Item */ "./src/Item.ts");
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, value, weight, baseDamage, baseDurability, damageModifier, durabilityModifier) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.MODIFIER_CHANGE_RATE = 0.05;
        _this.baseDamage = baseDamage;
        _this.baseDurability = baseDurability;
        _this.damageModifier = damageModifier || 0;
        _this.durabilityModifier = durabilityModifier || 0;
        _this.effectiveDamage = _this.baseDamage + _this.damageModifier;
        _this.effectiveDurability = _this.baseDurability + _this.durabilityModifier;
        return _this;
    }
    Weapon.prototype.getBaseDamage = function () {
        return this.baseDamage;
    };
    Weapon.prototype.setBaseDamage = function (baseDamage) {
        this.baseDamage = baseDamage;
    };
    Weapon.prototype.getBaseDurability = function () {
        return this.baseDurability;
    };
    Weapon.prototype.setBaseDurability = function (baseDurability) {
        this.baseDurability = baseDurability;
    };
    Weapon.prototype.getDamageModifier = function () {
        return this.damageModifier;
    };
    Weapon.prototype.setDamageModifier = function (damageModifier) {
        this.damageModifier = damageModifier;
    };
    Weapon.prototype.getDurabilityModifier = function () {
        return this.durabilityModifier;
    };
    Weapon.prototype.setDurabilityModifier = function (durabilityModifier) {
        this.durabilityModifier = durabilityModifier;
    };
    Weapon.prototype.getDamage = function () {
        return this.effectiveDamage;
    };
    Weapon.prototype.getDurability = function () {
        return this.effectiveDamage;
    };
    Weapon.prototype.toString = function () {
        return this.name + " - Value: " + this.value + ", Weight: " + this.weight + ", Damage: " + this.getDamage() + ", Durability: " + this.getDurability();
    };
    Weapon.prototype.use = function () {
        if (this.effectiveDurability <= 0) {
            return "You can't use " + this.name;
        }
        this.effectiveDurability -= this.MODIFIER_CHANGE_RATE;
        var usageString = "You use " + this.name + ", dealing " + this.getDamage() + ".";
        if (this.effectiveDurability <= 0) {
            usageString += this.name + " breaks";
        }
        return usageString;
    };
    return Weapon;
}(Item_1.default));
exports.default = Weapon;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Inventory_1 = __webpack_require__(/*! ./Inventory */ "./src/Inventory.ts");
var Sword_1 = __webpack_require__(/*! ./Sword */ "./src/Sword.ts");
var Pizza_1 = __webpack_require__(/*! ./Pizza */ "./src/Pizza.ts");
var ItemWeightComparator_1 = __webpack_require__(/*! ./ItemWeightComparator */ "./src/ItemWeightComparator.ts");
// Create the inventory
var inventory = new Inventory_1.default();
// Create a set of items
var a = new Sword_1.default(30.4219, 0.7893, 300, 2.032);
var b = new Sword_1.default(40, 0.7893, 200, 2);
var c = new Sword_1.default(40, 1, 100, 3);
var pizza = new Pizza_1.default(12, false);
// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);
// Display the inventory
console.log(inventory.toString());
// Sort by natural order
inventory.sort();
// Display the new inventory
console.log(inventory.toString());
// Sort by weight
inventory.sort(new ItemWeightComparator_1.default());
// Display the inventory again
console.log(inventory.toString());
// Use the sword
console.log(a.use());
console.log(a.use());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN1bWFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSXRlbVdlaWdodENvbXBhcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BpenphLnRzIiwid2VicGFjazovLy8uL3NyYy9Td29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2VhcG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGdFQUEwQjtBQUUxQjtJQUFrQyw4QkFBSTtJQWdCbEMsb0JBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxNQUFj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QUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV6Qix3QkFBd0I7QUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUVsQyx3QkFBd0I7QUFDeEIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBRWpCLDRCQUE0QjtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRWxDLGlCQUFpQjtBQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQW9CLEVBQUUsQ0FBQyxDQUFDO0FBRTNDLDhCQUE4QjtBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRWxDLGdCQUFnQjtBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgQ29uc3VtYWJsZSBleHRlbmRzIEl0ZW0ge1xyXG4gICAgcHJpdmF0ZSBjb25zdW1lZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgc3BvaWxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBpc0NvbnN1bWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN1bWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnN1bWVkKGNvbnN1bWVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lZCA9IGNvbnN1bWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3BvaWxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcG9pbGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIsIHNwb2lsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCB2YWx1ZSwgd2VpZ2h0KTtcclxuICAgICAgICB0aGlzLnNwb2lsZWQgPSBzcG9pbGVkO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBlYXQoKTogc3RyaW5nO1xyXG5cclxuICAgIHVzZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy5zcG9pbGVkICYmICF0aGlzLmNvbnN1bWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3BvaWxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFlvdSBlYXQgdGhlICR7dGhpcy5uYW1lfS4gWW91IGZlZWwgc2lja2BcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JZiBjb25zdW1lZFxyXG4gICAgICAgIHJldHVybiBgVGhlcmUgaXMgbm90aGluZyBsZWZ0IG9mIHRoZSAke3RoaXMubmFtZX0gdG8gY29uc3VtZS5gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdW1hYmxlOyIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XHJcbmltcG9ydCBJdGVtQ29tcGFyYXRvciBmcm9tICcuL0lJdGVtQ29tcGFyYXRvcic7XHJcblxyXG5jbGFzcyBJbnZlbnRvcnkge1xyXG4gICAgaXRlbXM6IEFycmF5PEl0ZW0+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKGFjYzogc3RyaW5nLCBpdGVtOiBJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGFjYyArPSBpdGVtLnRvU3RyaW5nKCkgKyAnLCc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc29ydCgpOiB2b2lkO1xyXG4gICAgcHVibGljIHNvcnQoY29tcGFyYXRvcjogSXRlbUNvbXBhcmF0b3IpOiB2b2lkO1xyXG4gICAgcHVibGljIHNvcnQoY29tcGFyYXRvcj86IEl0ZW1Db21wYXJhdG9yKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNvbXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5zb3J0KGNvbXBhcmF0b3IuY29tcGFyZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5zb3J0KChpdGVtQTogSXRlbSwgaXRlbUI6IEl0ZW0pID0+IGl0ZW1BLmNvbXBhcmVUbyhpdGVtQikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5OyIsImltcG9ydCBJQ29tcGFyYWJsZSBmcm9tICcuL0lDb21wYXJhYmxlJztcclxuXHJcbmNvbnN0IElOSVRJQUxfSUQgPSAwO1xyXG5sZXQgaW5pdGlhbElkID0gSU5JVElBTF9JRDtcclxuXHJcbmFic3RyYWN0IGNsYXNzIEl0ZW0gaW1wbGVtZW50cyBJQ29tcGFyYWJsZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHdlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWQoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGluaXRpYWxJZCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgbnVtYmVyT2ZJdGVtcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBpbml0aWFsSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIGluaXRpYWxJZCA9IElOSVRJQUxfSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGFyZVRvKG90aGVyOiBJdGVtKTogbnVtYmVyIHtcclxuICAgICAgICBpZih0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCkgPiBvdGhlci5uYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA+IG90aGVyLnZhbHVlID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gLSBWYWx1ZTogJHt0aGlzLnZhbHVlfSwgV2VpZ2h0OiAke3RoaXMud2VpZ2h0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgdXNlKCk6YW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtOyIsImltcG9ydCBJSXRlbUNvbXBhcmF0b3IgZnJvbSAnLi9JSXRlbUNvbXBhcmF0b3InO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5cclxuY2xhc3MgSXRlbVdlaWdodENvbXBhcmF0b3IgaW1wbGVtZW50cyBJSXRlbUNvbXBhcmF0b3Ige1xyXG4gICAgY29tcGFyZShmaXJzdDogSXRlbSwgc2Vjb25kOiBJdGVtKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoZmlyc3Qud2VpZ2h0ID09PSBzZWNvbmQud2VpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJzdC5jb21wYXJlVG8oc2Vjb25kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmaXJzdC53ZWlnaHQgPiBzZWNvbmQud2VpZ2h0ID8gMSA6IC0xO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtV2VpZ2h0Q29tcGFyYXRvcjsiLCJpbXBvcnQgQ29uc3VtYWJsZSBmcm9tICcuL0NvbnN1bWFibGUnO1xyXG5cclxuY2xhc3MgUGl6emEgZXh0ZW5kcyBDb25zdW1hYmxlIHtcclxuICAgIHByaXZhdGUgbnVtYmVyT2ZTbGljZXM6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2xpY2VzRWF0ZW46IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlNsaWNlczogbnVtYmVyLCBzcG9pbGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BpenphJywgMCwgMCwgc3BvaWxlZCk7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNsaWNlcyA9IG51bWJlck9mU2xpY2VzO1xyXG4gICAgICAgIHRoaXMuc2xpY2VzRWF0ZW4gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGVhdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLnNsaWNlc0VhdGVuIDwgdGhpcy5udW1iZXJPZlNsaWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWNlc0VhdGVuKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWNlc0VhdGVuID49IHRoaXMubnVtYmVyT2ZTbGljZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29uc3VtZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgWW91IGVhdCBhIHNsaWNlIG9mICR7dGhpcy5uYW1lfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGl6emE7IiwiaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbic7XHJcblxyXG5jbGFzcyBTd29yZCBleHRlbmRzIFdlYXBvbiB7XHJcbiAgICBwcml2YXRlIE1BWF9QT0xJU0hfUkFURSA9IDAuMjU7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIsIGJhc2VEYW1hZ2U6IG51bWJlciwgYmFzZUR1cmFiaWxpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCdzd29yZCcsIHZhbHVlLCB3ZWlnaHQsIGJhc2VEYW1hZ2UsIGJhc2VEdXJhYmlsaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwb2xpc2goKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWF4RGFtYWdlTW9kaWZpZXIgPSB0aGlzLmJhc2VEYW1hZ2UgKiB0aGlzLk1BWF9QT0xJU0hfUkFURTtcclxuXHJcbiAgICAgICAgaWYoISh0aGlzLmRhbWFnZU1vZGlmaWVyID49IG1heERhbWFnZU1vZGlmaWVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhbWFnZU1vZGlmaWVyICs9IHRoaXMuTU9ESUZJRVJfQ0hBTkdFX1JBVEU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd29yZDsiLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgV2VhcG9uIGV4dGVuZHMgSXRlbSB7XHJcbiAgICBwcm90ZWN0ZWQgTU9ESUZJRVJfQ0hBTkdFX1JBVEU6IG51bWJlciA9IDAuMDU7XHJcbiAgICBwcm90ZWN0ZWQgYmFzZURhbWFnZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGRhbWFnZU1vZGlmaWVyOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgYmFzZUR1cmFiaWxpdHk6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBkdXJhYmlsaXR5TW9kaWZpZXI6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBlZmZlY3RpdmVEYW1hZ2U6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBlZmZlY3RpdmVEdXJhYmlsaXR5OiBudW1iZXI7XHJcblxyXG4gICAgZ2V0QmFzZURhbWFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VEYW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFzZURhbWFnZShiYXNlRGFtYWdlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UgPSBiYXNlRGFtYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhc2VEdXJhYmlsaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUR1cmFiaWxpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFzZUR1cmFiaWxpdHkoYmFzZUR1cmFiaWxpdHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFzZUR1cmFiaWxpdHkgPSBiYXNlRHVyYWJpbGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYW1hZ2VNb2RpZmllcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZU1vZGlmaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhbWFnZU1vZGlmaWVyKGRhbWFnZU1vZGlmaWVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhbWFnZU1vZGlmaWVyID0gZGFtYWdlTW9kaWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVyYWJpbGl0eU1vZGlmaWVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVyYWJpbGl0eU1vZGlmaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1cmFiaWxpdHlNb2RpZmllcihkdXJhYmlsaXR5TW9kaWZpZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZHVyYWJpbGl0eU1vZGlmaWVyID0gZHVyYWJpbGl0eU1vZGlmaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB2YWx1ZTogbnVtYmVyLFxyXG4gICAgICAgIHdlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIGJhc2VEYW1hZ2U6IG51bWJlcixcclxuICAgICAgICBiYXNlRHVyYWJpbGl0eTogbnVtYmVyLFxyXG4gICAgICAgIGRhbWFnZU1vZGlmaWVyPzogbnVtYmVyLFxyXG4gICAgICAgIGR1cmFiaWxpdHlNb2RpZmllcj86IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHZhbHVlLCB3ZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYmFzZURhbWFnZSA9IGJhc2VEYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5iYXNlRHVyYWJpbGl0eSA9IGJhc2VEdXJhYmlsaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtYWdlTW9kaWZpZXIgPSBkYW1hZ2VNb2RpZmllciB8fCAwO1xyXG4gICAgICAgIHRoaXMuZHVyYWJpbGl0eU1vZGlmaWVyID0gZHVyYWJpbGl0eU1vZGlmaWVyIHx8IDA7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RpdmVEYW1hZ2UgPSB0aGlzLmJhc2VEYW1hZ2UgKyB0aGlzLmRhbWFnZU1vZGlmaWVyO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0aXZlRHVyYWJpbGl0eSA9IHRoaXMuYmFzZUR1cmFiaWxpdHkgKyB0aGlzLmR1cmFiaWxpdHlNb2RpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYW1hZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZmZlY3RpdmVEYW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVyYWJpbGl0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVmZmVjdGl2ZURhbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9IC0gVmFsdWU6ICR7dGhpcy52YWx1ZX0sIFdlaWdodDogJHt0aGlzLndlaWdodH0sIERhbWFnZTogJHt0aGlzLmdldERhbWFnZSgpfSwgRHVyYWJpbGl0eTogJHt0aGlzLmdldER1cmFiaWxpdHkoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdGl2ZUR1cmFiaWxpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFlvdSBjYW4ndCB1c2UgJHt0aGlzLm5hbWV9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWZmZWN0aXZlRHVyYWJpbGl0eSAtPSB0aGlzLk1PRElGSUVSX0NIQU5HRV9SQVRFO1xyXG4gICAgICAgIGxldCB1c2FnZVN0cmluZzogc3RyaW5nID0gYFlvdSB1c2UgJHt0aGlzLm5hbWV9LCBkZWFsaW5nICR7dGhpcy5nZXREYW1hZ2UoKX0uYDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0aXZlRHVyYWJpbGl0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHVzYWdlU3RyaW5nICs9IGAke3RoaXMubmFtZX0gYnJlYWtzYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1c2FnZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBwb2xpc2goKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhcG9uOyIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9JbnZlbnRvcnknO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5pbXBvcnQgU3dvcmQgZnJvbSAnLi9Td29yZCc7XHJcbmltcG9ydCBQaXp6YSBmcm9tICcuL1BpenphJztcclxuaW1wb3J0IEl0ZW1XZWlnaHRDb21wYXJhdG9yIGZyb20gJy4vSXRlbVdlaWdodENvbXBhcmF0b3InO1xyXG4vLyBDcmVhdGUgdGhlIGludmVudG9yeVxyXG5jb25zdCBpbnZlbnRvcnk6IEludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuXHJcbi8vIENyZWF0ZSBhIHNldCBvZiBpdGVtc1xyXG5jb25zdCBhOiBJdGVtID0gbmV3IFN3b3JkKDMwLjQyMTksIDAuNzg5MywgMzAwLCAyLjAzMik7XHJcbmNvbnN0IGI6IEl0ZW0gPSBuZXcgU3dvcmQoNDAsIDAuNzg5MywgMjAwLCAyKTtcclxuY29uc3QgYzogSXRlbSA9IG5ldyBTd29yZCg0MCwgMSwgMTAwLCAzKTtcclxuY29uc3QgcGl6emE6IEl0ZW0gPSBuZXcgUGl6emEoMTIsIGZhbHNlKTtcclxuXHJcbi8vIEFkZCB0aGUgaXRlbXMgdG8gdGhlIGludmVudG9yeVxyXG5pbnZlbnRvcnkuYWRkSXRlbShhKTtcclxuaW52ZW50b3J5LmFkZEl0ZW0oYik7XHJcbmludmVudG9yeS5hZGRJdGVtKGMpO1xyXG5pbnZlbnRvcnkuYWRkSXRlbShwaXp6YSk7XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBpbnZlbnRvcnlcclxuY29uc29sZS5sb2coaW52ZW50b3J5LnRvU3RyaW5nKCkpO1xyXG5cclxuLy8gU29ydCBieSBuYXR1cmFsIG9yZGVyXHJcbmludmVudG9yeS5zb3J0KCk7XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBuZXcgaW52ZW50b3J5XHJcbmNvbnNvbGUubG9nKGludmVudG9yeS50b1N0cmluZygpKTtcclxuXHJcbi8vIFNvcnQgYnkgd2VpZ2h0XHJcbmludmVudG9yeS5zb3J0KG5ldyBJdGVtV2VpZ2h0Q29tcGFyYXRvcigpKTtcclxuXHJcbi8vIERpc3BsYXkgdGhlIGludmVudG9yeSBhZ2FpblxyXG5jb25zb2xlLmxvZyhpbnZlbnRvcnkudG9TdHJpbmcoKSk7XHJcblxyXG4vLyBVc2UgdGhlIHN3b3JkXHJcbmNvbnNvbGUubG9nKGEudXNlKCkpO1xyXG5jb25zb2xlLmxvZyhhLnVzZSgpKTsiXSwic291cmNlUm9vdCI6IiJ9