"use strict";
var Teacher = /** @class */ (function () {
    function Teacher(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    Teacher.prototype.showYourself = function () {
        return "Meu nome \u00E9 " + this.name + ", tenho " + this.age + " anos e irei ensinar " + this.subject + ".";
    };
    Teacher.prototype.showRating = function () {
        var rating = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rating[_i] = arguments[_i];
        }
        var ratingTotal = rating.reduce(function (total, ratingNow) { return total + ratingNow; });
        return ratingTotal / rating.length;
    };
    return Teacher;
}());
var lucas = new Teacher('Lucas', 22, 'DBA');
var joao = new Teacher('João', 39, 'Typescript');
console.log(lucas.showYourself());
console.log(joao.showYourself());
console.log(joao.showRating(7, 3, 2, 6, 7, 8, 9, 4, 2, 1, 4, 6, 7, 8, 9, 5, 3, 4, 6, 7, 8).toFixed(2));
//# sourceMappingURL=class_method.js.map