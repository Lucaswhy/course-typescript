"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorAttr(target, nameProperty) {
    var newName = "_" + nameProperty;
    Object.defineProperty(target, nameProperty, {
        get: function () {
            return this[newName].toUpperCase();
        },
        set: function (newValue) {
            this[newName] = newValue;
        }
    });
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    __decorate([
        decoratorAttr
    ], Animal.prototype, "name", void 0);
    return Animal;
}());
var dog = new Animal('Pluto');
console.log(dog.name);
//# sourceMappingURL=decorator_attributes.js.map