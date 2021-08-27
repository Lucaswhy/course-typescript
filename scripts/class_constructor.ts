class Order {

    constructor(
        public product: string,
        public totalValue: number,
        public deliveryDate: Date){}

}

const myOrder = new Order('TV 64', 2000, new Date('2021-05-01'));


console.log(myOrder);
