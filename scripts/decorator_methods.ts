function decoratorMethod(target: unknown, propertyKey: string, descriptor: PropertyDescriptor){
   // console.log(target, propertyKey, descriptor);
    descriptor.value = (...args: unknown[]) => {

        return args.map(item =>{
            return (<string>item).toUpperCase();
            
        })

    };
}


class VerifyMessage {
    @decoratorMethod
    sayMessage(...messages: string[]){
        return messages;
    }
}


const instance = new VerifyMessage();


console.log(instance.sayMessage('Olá','Seja bem-vindo', 'Teste'));
