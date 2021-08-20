const language = "Javascript";

console.log(language);

console.log(language.toUpperCase());

const userInfo = [1, 'Lucas', new Date()];

userInfo.push(2);
userInfo.push("Herculano");
userInfo.push(new Date(2021,1,1));


let tString: string = "A string type";

let tNumber: number = 10.8; // I can convert too like parseFloat("10.8")

let tUnion: string | number = "A string type";
tUnion = 500.30;

let tBoolean: boolean = false;

let tArray: Array<string> = ["Action","Romance","Adventure"]; //Saying that my array is String type
//let tArray: string[] = ["Action","Romance","Adventure"]; another declarion

tArray.push("Drama");

const tObject: object = {
    server: 'Microsoft Azure',
    ip: '127.0.0.1',
    password: '123'
}

