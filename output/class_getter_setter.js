"use strict";
var Permission = /** @class */ (function () {
    function Permission(_name, _level) {
        this._name = _name;
        this._level = _level;
    }
    Object.defineProperty(Permission.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            if (v.length < 5)
                throw new Error('Deve ter mais de 4 letras');
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    return Permission;
}());
//# sourceMappingURL=class_getter_setter.js.map