export default class Operator {
    constructor(opts, operator = []) {
        this.operator = operator;
        this.onCalculate = opts.onCalculate;
    }
    add(value) {
        if (this.operator.length === 3)
            this.calculate();
        return this.operator.push(value);
    }
    getResult() {
        let result = '0';
        try {
            result = (eval(this.operator.join(''))).toString();
        }
        catch (e) {
            result = 'ERRO';
            console.log(e);
        }
        return result;
    }
    calculate() {
        let result = this.getResult();
        if (result.length > 12)
            result = result.substr(0, 12);
        this.operator = [result];
        this.onCalculate(result);
    }
    get lastPosition() {
        return this.operator.length ? this.operator[this.operator.length - 1] : '0';
    }
    set lastPosition(value) {
        const lastIndex = this.operator.length ? this.operator.length - 1 : 0;
        this.operator[lastIndex] = value;
    }
    get length() {
        return this.operator.length;
    }
}
//# sourceMappingURL=Operator.js.map