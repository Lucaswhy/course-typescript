"use strict";
var People = /** @class */ (function () {
    function People(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    People.prototype.toString = function () {
        return "A pessoa " + this.name + " tem " + this.age + " anos de idade e " + this.height + " de altura";
    };
    return People;
}());
var testPeople = new People('Lucas', 22, 1.73);
console.log(testPeople.height);
console.log(testPeople.toString());
//# sourceMappingURL=first_class.js.map