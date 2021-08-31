"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorMethod(target, propertyKey, descriptor) {
    // console.log(target, propertyKey, descriptor);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.map(function (item) {
            return item.toUpperCase();
        });
    };
}
var VerifyMessage = /** @class */ (function () {
    function VerifyMessage() {
    }
    VerifyMessage.prototype.sayMessage = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        return messages;
    };
    __decorate([
        decoratorMethod
    ], VerifyMessage.prototype, "sayMessage", null);
    return VerifyMessage;
}());
var instance = new VerifyMessage();
console.log(instance.sayMessage('Olá', 'Seja bem-vindo', 'Teste'));
//# sourceMappingURL=decorator_methods.js.map