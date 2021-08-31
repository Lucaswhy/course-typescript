function decoratorAttr(
    target: unknown,
    nameProperty: string
){

    const newName = `_${nameProperty}`

    Object.defineProperty(target, nameProperty, {
        get(){
            return this[newName].toUpperCase();
        },
        set(newValue){
            this[newName] = newValue;
        }
    })
}

class Animal {
    @decoratorAttr
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const dog = new Animal('Pluto');


console.log(dog.name);
