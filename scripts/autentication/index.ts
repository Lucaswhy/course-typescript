namespace Autentication {
//Namespace in typescript is not recommended except in legace projects, should not use.
    interface IUser{
        email: String;
        name: String;
        password: String;
    }

    interface ISign{
        name: string;
        email: string;
        password: string;
        birthDate: Date;
    }

    export class Login {
        login(user: IUser){
            return user;
        }
        registry(newUser: ISign){
            return newUser;
        }
    }

    class Recuperation {

        recPassword(){
            return "Enviando e-mail de recuperação de senha"
        }   
        recUser(){
            return "Enviando e-mail de recuperação de nome de usuário"
        }

    }
}