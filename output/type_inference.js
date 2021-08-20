"use strict";
var language = "Javascript";
console.log(language);
console.log(language.toUpperCase());
var userInfo = [1, 'Lucas', new Date()];
userInfo.push(2);
userInfo.push("Herculano");
userInfo.push(new Date(2021, 1, 1));
var tString = "A string type";
var tNumber = 10.8; // I can convert too like parseFloat("10.8")
var tUnion = "A string type";
tUnion = 500.30;
var tBoolean = false;
var tArray = ["Action", "Romance", "Adventure"]; //Saying that my array is String type
//let tArray: string[] = ["Action","Romance","Adventure"]; another declarion
tArray.push("Drama");
var tObject = {
    server: 'Microsoft Azure',
    ip: '127.0.0.1',
    password: '123'
};
//# sourceMappingURL=type_inference.js.map