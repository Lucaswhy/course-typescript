"use strict";
console.log("Hello World! Learning typescript.");
var myName = "Lucas";
console.log("Interpolation in action " + myName);
var Produto = /** @class */ (function () {
    function Produto(pName, pValue) {
        this.name = pName;
        this.value = pValue;
    }
    return Produto;
}());
var myProduct = new Produto("Playstation5", 5000.10);
// const element = document.querySelector('div');  // Need to ative lib DOM in tsconfig
//# sourceMappingURL=primeiro_codigo.js.map