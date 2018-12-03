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

/***/ "./src/Point.ts":
/*!**********************!*\
  !*** ./src/Point.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.toString = function () {
        return "(" + this._x + ", " + this._y + ")";
    };
    Point.prototype.calcultaeDistance = function (x1, x2, y1, y2) {
        return Math.sqrt((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
    };
    Point.prototype.distance = function (point, y) {
        var selfX = this._x;
        var selfY = this._y;
        if (point instanceof Point) {
            var pointX_1 = point.x;
            var pointY_1 = point.y;
            return this.calcultaeDistance(selfX, pointX_1, selfY, pointY_1);
        }
        var pointX = point || 0;
        var pointY = y || 0;
        return this.calcultaeDistance(selfX, pointX, selfY, pointY);
    };
    return Point;
}());
exports.default = Point;


/***/ }),

/***/ "./src/Shape.ts":
/*!**********************!*\
  !*** ./src/Shape.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this._color = color || 'green';
        this._filled = filled || true;
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "filled", {
        get: function () {
            return this._filled;
        },
        set: function (filled) {
            this._filled = filled;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "A Shape with color of " + this._color + " and " + (this._filled ? 'filled' : 'not filled');
    };
    return Shape;
}());
exports.default = Shape;


/***/ }),

/***/ "./src/Triangle.ts":
/*!*************************!*\
  !*** ./src/Triangle.ts ***!
  \*************************/
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
var Shape_1 = __webpack_require__(/*! ./Shape */ "./src/Shape.ts");
var Point_1 = __webpack_require__(/*! ./Point */ "./src/Point.ts");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        if (args.length === 6) {
            _this._v1 = new Point_1.default(args[0], args[1]);
            _this._v2 = new Point_1.default(args[2], args[3]);
            _this._v3 = new Point_1.default(args[4], args[5]);
        }
        else {
            _this._v1 = args[0];
            _this._v2 = args[1];
            _this._v3 = args[2];
        }
        return _this;
    }
    Triangle.prototype.toString = function () {
        return "Triangle [v1=" + this._v1 + ", v2=" + this._v2 + ", v3=" + this._v3 + "]";
    };
    Triangle.prototype.getSidesLength = function () {
        var s1 = this._v1.distance(this._v2);
        var s2 = this._v2.distance(this._v3);
        var s3 = this._v3.distance(this._v1);
        return {
            s1: s1,
            s2: s2,
            s3: s3
        };
    };
    Triangle.prototype.getPerimeter = function () {
        var _a = this.getSidesLength(), s1 = _a.s1, s2 = _a.s2, s3 = _a.s3;
        return s1 + s2 + s3;
    };
    Triangle.prototype.printType = function () {
        var _a = this.getSidesLength(), s1 = _a.s1, s2 = _a.s2, s3 = _a.s3;
        if (s1 === s2 && s2 === s3) {
            return 'equilateral';
        }
        if (s1 === s2 || s1 === s3 || s2 === s3) {
            return 'isosceles';
        }
        return 'scalene';
    };
    return Triangle;
}(Shape_1.default));
exports.default = Triangle;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = __webpack_require__(/*! ./Triangle */ "./src/Triangle.ts");
var Point_1 = __webpack_require__(/*! ./Point */ "./src/Point.ts");
var triangle = new Triangle_1.default(new Point_1.default(1, 2), new Point_1.default(3, 7), new Point_1.default(5, 2));
console.log(triangle.printType());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtJQU1JLGVBQVksQ0FBVSxFQUFFLENBQVU7UUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQUksb0JBQUM7YUFBTDtZQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO2FBRUQsVUFBTSxDQUFTO1lBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxvQkFBQzthQUFMO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFFRCxVQUFNLENBQVM7WUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDOzs7T0FKQTtJQU1ELHdCQUFRLEdBQVI7UUFDSSxPQUFPLE1BQUksSUFBSSxDQUFDLEVBQUUsVUFBSyxJQUFJLENBQUMsRUFBRSxNQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVPLGlDQUFpQixHQUF6QixVQUEwQixFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUtNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBc0IsRUFBRSxDQUFVO1FBQzlDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUV0QixJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7WUFDeEIsSUFBTSxRQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFNLFFBQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXZCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxRQUFNLEVBQUUsS0FBSyxFQUFFLFFBQU0sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBTSxNQUFNLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeERyQjtJQXdCSSxlQUFzQixLQUFjLEVBQUUsTUFBZ0I7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBdkJELHNCQUFJLHdCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVcsTUFBZTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQWVNLHdCQUFRLEdBQWY7UUFDSSxPQUFPLDJCQUF5QixJQUFJLENBQUMsTUFBTSxjQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFFLENBQUM7SUFDaEcsQ0FBQztJQUdMLFlBQUM7QUFBRCxDQUFDO0FBRUQsa0JBQWUsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENyQixtRUFBNEI7QUFDNUIsbUVBQTRCO0FBUTVCO0lBQXVCLDRCQUFLO0lBT3hCO1FBQVksY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWix5QkFBWTs7UUFBeEIsWUFDSSxpQkFBTyxTQVVWO1FBVEcsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7O0lBQ0wsQ0FBQztJQUVNLDJCQUFRLEdBQWY7UUFDSSxPQUFPLGtCQUFnQixJQUFJLENBQUMsR0FBRyxhQUFRLElBQUksQ0FBQyxHQUFHLGFBQVEsSUFBSSxDQUFDLEdBQUcsTUFBRztJQUN0RSxDQUFDO0lBRU8saUNBQWMsR0FBdEI7UUFDSSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxPQUFPO1lBQ0gsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1NBQ0w7SUFDTCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNVLDhCQUFvQyxFQUFuQyxVQUFFLEVBQUUsVUFBRSxFQUFFLFVBQTJCLENBQUM7UUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNVLDhCQUFvQyxFQUFuQyxVQUFFLEVBQUUsVUFBRSxFQUFFLFVBQTJCLENBQUM7UUFFM0MsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDeEIsT0FBTyxhQUFhO1NBQ3ZCO1FBRUQsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxPQUFPLFdBQVcsQ0FBQztTQUN0QjtRQUVELE9BQU8sU0FBUztJQUNwQixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQ0F0RHNCLGVBQUssR0FzRDNCO0FBRUQsa0JBQWUsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRXhCLDRFQUFrQztBQUNsQyxtRUFBNEI7QUFFNUIsSUFBTSxRQUFRLEdBQWEsSUFBSSxrQkFBUSxDQUFDLElBQUksZUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImNsYXNzIFBvaW50IHtcclxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpO1xyXG4gICAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy5feSA9IHkgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl94O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCgke3RoaXMuX3h9LCAke3RoaXMuX3l9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWx0YWVEaXN0YW5jZSh4MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MTogbnVtYmVyLCB5MjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChNYXRoLnBvdygoeDEgLSB4MiksIDIpICsgTWF0aC5wb3coKHkxIC0geTIpLCAyKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXN0YW5jZSgpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGlzdGFuY2UoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGlzdGFuY2UocG9pbnQ6IFBvaW50KTogbnVtYmVyO1xyXG4gICAgcHVibGljIGRpc3RhbmNlKHBvaW50PzogUG9pbnQgfCBudW1iZXIsIHk/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNlbGZYID0gdGhpcy5feDtcclxuICAgICAgICBjb25zdCBzZWxmWSA9IHRoaXMuX3k7XHJcblxyXG4gICAgICAgIGlmIChwb2ludCBpbnN0YW5jZW9mIFBvaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50WCA9IHBvaW50Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50WSA9IHBvaW50Lnk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWx0YWVEaXN0YW5jZShzZWxmWCwgcG9pbnRYLCBzZWxmWSwgcG9pbnRZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50WCA9IHBvaW50IHx8IDA7XHJcbiAgICAgICAgY29uc3QgcG9pbnRZID0geSB8fCAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWx0YWVEaXN0YW5jZShzZWxmWCwgcG9pbnRYLCBzZWxmWSwgcG9pbnRZKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiYWJzdHJhY3QgY2xhc3MgU2hhcGUge1xyXG4gICAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIF9maWxsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgZ2V0IGNvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbGxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsbGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaWxsZWQoZmlsbGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsbGVkID0gZmlsbGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb2xvcjogc3RyaW5nLCBmaWxsZWQ6IGJvb2xlYW4pO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb2xvcj86IHN0cmluZywgZmlsbGVkPzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3IgfHwgJ2dyZWVuJztcclxuICAgICAgICB0aGlzLl9maWxsZWQgPSBmaWxsZWQgfHwgdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYEEgU2hhcGUgd2l0aCBjb2xvciBvZiAke3RoaXMuX2NvbG9yfSBhbmQgJHt0aGlzLl9maWxsZWQgPyAnZmlsbGVkJyA6ICdub3QgZmlsbGVkJ31gO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGdldFBlcmltZXRlcigpOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXBlOyIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xyXG5cclxudHlwZSBUcmlhbmdsZVNpZGVzID0gIHtcclxuICAgIHMxOiBudW1iZXI7XHJcbiAgICBzMjogbnVtYmVyO1xyXG4gICAgczM6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBTaGFwZSB7XHJcbiAgICBwcml2YXRlIF92MTogUG9pbnQ7XHJcbiAgICBwcml2YXRlIF92MjogUG9pbnQ7XHJcbiAgICBwcml2YXRlIF92MzogUG9pbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgeDM6IG51bWJlciwgeTM6IG51bWJlcik7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50LCBwb2ludDM6IFBvaW50KTtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3YxID0gbmV3IFBvaW50KGFyZ3NbMF0sIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92MiA9IG5ldyBQb2ludChhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgdGhpcy5fdjMgPSBuZXcgUG9pbnQoYXJnc1s0XSwgYXJnc1s1XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdjEgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLl92MiA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIHRoaXMuX3YzID0gYXJnc1syXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBUcmlhbmdsZSBbdjE9JHt0aGlzLl92MX0sIHYyPSR7dGhpcy5fdjJ9LCB2Mz0ke3RoaXMuX3YzfV1gXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTaWRlc0xlbmd0aCgpOiBUcmlhbmdsZVNpZGVzIHtcclxuICAgICAgICBjb25zdCBzMSA9IHRoaXMuX3YxLmRpc3RhbmNlKHRoaXMuX3YyKTtcclxuICAgICAgICBjb25zdCBzMiA9IHRoaXMuX3YyLmRpc3RhbmNlKHRoaXMuX3YzKTtcclxuICAgICAgICBjb25zdCBzMyA9IHRoaXMuX3YzLmRpc3RhbmNlKHRoaXMuX3YxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgczEsXHJcbiAgICAgICAgICAgIHMyLFxyXG4gICAgICAgICAgICBzM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJpbWV0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB7czEsIHMyLCBzM30gPSB0aGlzLmdldFNpZGVzTGVuZ3RoKCk7XHJcbiAgICAgICAgcmV0dXJuIHMxICsgczIgKyBzMztcclxuICAgIH1cclxuXHJcbiAgICBwcmludFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB7czEsIHMyLCBzM30gPSB0aGlzLmdldFNpZGVzTGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGlmIChzMSA9PT0gczIgJiYgczIgPT09IHMzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZXF1aWxhdGVyYWwnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoczEgPT09IHMyIHx8IHMxID09PSBzMyB8fCBzMiA9PT0gczMpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpc29zY2VsZXMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdzY2FsZW5lJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCJpbXBvcnQgVHJpYW5nbGUgZnJvbSAnLi9UcmlhbmdsZSc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuXHJcbmNvbnN0IHRyaWFuZ2xlOiBUcmlhbmdsZSA9IG5ldyBUcmlhbmdsZShuZXcgUG9pbnQoMSwgMiksIG5ldyBQb2ludCgzLCA3KSwgbmV3IFBvaW50KDUsIDIpKTtcclxuXHJcbmNvbnNvbGUubG9nKHRyaWFuZ2xlLnByaW50VHlwZSgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==