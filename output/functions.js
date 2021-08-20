"use strict";
function showMessage(text) {
    console.log(text);
    return true;
}
showMessage('Batata');
showMessage(123);
var show = function (code) {
    return code;
};
function sendEmail(to, context) {
    if (context === void 0) { context = "Hello this is a e-mail."; }
    console.log(to + context);
}
sendEmail('Lucas');
sendEmail('Lucas', 'Not a e-mail');
//# sourceMappingURL=functions.js.map