function showMessage(text: string | number): boolean{
    console.log(text);
    return true;
}

showMessage('Batata');


showMessage(123);


const show = (code: number): number =>{
    return code;
}

function sendEmail(to: string,context: string = "Hello this is a e-mail.", sendBy?: string): void{
    console.log(to + context);
}

sendEmail('Lucas');
sendEmail('Lucas','Not a e-mail');