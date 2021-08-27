import applyMixins from "./applyMixins";

class Product {
    sell(quantity: number){
        return `Foram vendidos ${quantity} itens deste produto.`;
    }
    buy(quantity: number){
        return `Foram comprados ${quantity} itens deste produto.`;
    }

}

class Furniture {
    sit(){
        return "Você sentou no móvel";
    }
    push(meters: number){
        return `O móvel foi empurrado ${meters} metros. `;
    }
}

class Couch extends Product {
    constructor(public name: string){
        super();
    }
}


interface Couch extends Product, Furniture {}

applyMixins(Couch,[Product, Furniture]);

const product = new Couch('Meu sofá');

console.log(product.sell(2));
console.log(product.push(70));
