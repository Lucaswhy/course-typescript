"use strict";
var Order = /** @class */ (function () {
    function Order(product, totalValue, deliveryDate) {
        this.product = product;
        this.totalValue = totalValue;
        this.deliveryDate = deliveryDate;
    }
    return Order;
}());
var myOrder = new Order('TV 64', 2000, new Date('2021-05-01'));
console.log(myOrder);
//# sourceMappingURL=class_constructor.js.map