interface OperatorOptions {
    onCalculate: any;

}

export default class Operator {

    private onCalculate: any;

    constructor(
        opts: OperatorOptions,
        private operator: string [] = []
    ) {
        this.onCalculate = opts.onCalculate;
    }

    add(value: string): number {
        if(this.operator.length === 3) this.calculate();

        return this.operator.push(value);
    }

    getResult(): string{
        let result: string = '0';

        try{
            result = (eval(this.operator.join(''))).toString();
        } catch(e){
            result = 'ERRO';
            console.log(e);
        }

        return result;
    }

    calculate():void {
        let result = this.getResult();

        if(result.length > 12) result = result.substr(0, 12);

        this.operator = [result];

        this.onCalculate(result);

    }

    get lastPosition(): string {
        return this.operator.length ? this.operator[this.operator.length - 1] : '0';
    }

    set lastPosition(value: string){
        const lastIndex = this.operator.length ? this.operator.length - 1 : 0;

        this.operator[lastIndex] = value;
    }

    get length(): number{
        return this.operator.length;
    }
}