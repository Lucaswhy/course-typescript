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
var Register = /** @class */ (function () {
    function Register(name, birth) {
        this.name = name;
        this.birth = birth;
    }
    return Register;
}());
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(name, birth, email, company) {
        var _this = _super.call(this, name, birth) || this;
        _this.email = email;
        _this.company = company;
        return _this;
    }
    return Client;
}(Register));
var alfredo = new Client("Alfredo", new Date("2000-01-01"), "alfredo@teste.com", "Teste company");
console.log(alfredo);
//# sourceMappingURL=class_inheritance.js.map