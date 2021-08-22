class Teacher {
    name: string;
    age: number;
    subject: string;

    constructor(name: string, age: number, subject: string){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    showYourself(): string {
        return `Meu nome é ${this.name}, tenho ${this.age} anos e irei ensinar ${this.subject}.`
    }

    showRating(...rating: number[]): number {

        const ratingTotal = rating.reduce((total, ratingNow)=> total + ratingNow);

        return ratingTotal / rating.length;

    }
}

const lucas = new Teacher('Lucas',22,'DBA');
const joao = new Teacher('João',39,'Typescript');

console.log(lucas.showYourself());
console.log(joao.showYourself());

console.log(joao.showRating(7,3,2,6,7,8,9,4,2,1,4,6,7,8,9,5,3,4,6,7,8).toFixed(2));
