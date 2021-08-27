class Register {
    public name: string;
    public birth: Date;

    constructor(name: string, birth: Date){
        this.name = name;
        this.birth = birth;
    }
    
}

class Client extends Register {
    public email: string;
    public company: string;

    constructor(name: string, birth: Date, email: string, company: string){
        super(name, birth);
        this.email = email;
        this.company = company;
    }
}

const alfredo = new Client("Alfredo",new Date("2000-01-01"), "alfredo@teste.com", "Teste company");

console.log(alfredo);
