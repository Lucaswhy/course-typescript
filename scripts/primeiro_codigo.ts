console.log("Hello World! Learning typescript.");

const myName = "Lucas";

console.log(`Interpolation in action ${myName}`);

class Produto {

    name: string;
    value: number;
    
    constructor(pName: string,pValue: number){
        this.name = pName;
        this.value = pValue;
    }

}

const myProduct = new Produto("Playstation5",5000.10);

// const element = document.querySelector('div');  // Need to ative lib DOM in tsconfig
