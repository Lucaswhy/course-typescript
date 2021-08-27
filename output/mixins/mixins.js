"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixins_1 = __importDefault(require("./applyMixins"));
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.sell = function (quantity) {
        return "Foram vendidos " + quantity + " itens deste produto.";
    };
    Product.prototype.buy = function (quantity) {
        return "Foram comprados " + quantity + " itens deste produto.";
    };
    return Product;
}());
var Furniture = /** @class */ (function () {
    function Furniture() {
    }
    Furniture.prototype.sit = function () {
        return "Você sentou no móvel";
    };
    Furniture.prototype.push = function (meters) {
        return "O m\u00F3vel foi empurrado " + meters + " metros. ";
    };
    return Furniture;
}());
var Couch = /** @class */ (function (_super) {
    __extends(Couch, _super);
    function Couch(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    return Couch;
}(Product));
applyMixins_1.default(Couch, [Product, Furniture]);
var product = new Couch('Meu sofá');
console.log(product.sell(2));
console.log(product.push(70));
//# sourceMappingURL=mixins.js.map