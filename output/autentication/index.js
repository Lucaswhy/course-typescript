"use strict";
var Autentication;
(function (Autentication) {
    var Login = /** @class */ (function () {
        function Login() {
        }
        Login.prototype.login = function (user) {
            return user;
        };
        Login.prototype.registry = function (newUser) {
            return newUser;
        };
        return Login;
    }());
    Autentication.Login = Login;
    var Recuperation = /** @class */ (function () {
        function Recuperation() {
        }
        Recuperation.prototype.recPassword = function () {
            return "Enviando e-mail de recuperação de senha";
        };
        Recuperation.prototype.recUser = function () {
            return "Enviando e-mail de recuperação de nome de usuário";
        };
        return Recuperation;
    }());
})(Autentication || (Autentication = {}));
//# sourceMappingURL=index.js.map