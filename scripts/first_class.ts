class People {
    name: string;
    age: number;
    height: number;

    constructor (name: string, age: number, height: number){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    toString(): string {
        return `A pessoa ${this.name} tem ${this.age} anos de idade e ${this.height} de altura`;
    }


}

const testPeople = new People('Lucas',22,1.73);

console.log(testPeople.height);

console.log(testPeople.toString());

