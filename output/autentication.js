"use strict";
var newRegister = new Autentication.Login();
/// <reference path="./autentication/index.ts" />
var result = newRegister.registry({
    name: 'Lucas',
    email: 'teste@teste.com',
    password: '123',
    birthDate: new Date('1999-01-01')
});
console.log(result);
//Namespace in typescript is not recommended except in legace projects, should not use.
//# sourceMappingURL=autentication.js.map