import debug from "./utils"

@debug
class FirstClass {

    constructor(){}
}

function log(myConstructor: any) {
    return class extends myConstructor{
        created_at: Date = new Date('2021-03-02');
    }
}

@log
class SecondClass {
    constructor(){}
}

console.log(new SecondClass());
