import DateHour from "./DateHour.js";
import Display from "./Display.js";
import Operator from "./Operator.js";
export default class CalculatorController {
    constructor(display = new Display(), operator = new Operator({
        onCalculate: (result) => this.display.content = result
    })) {
        this.display = display;
        this.operator = operator;
        this.display.content = '0';
        new DateHour();
        this.eventsButtons();
    }
    eventsButtons() {
        document.querySelectorAll('#teclado button').forEach(element => {
            element.addEventListener('click', (event) => {
                const target = event.target;
                switch (target.id) {
                    case 'zero':
                    case 'um':
                    case 'dois':
                    case 'tres':
                    case 'quatro':
                    case 'cinco':
                    case 'seis':
                    case 'sete':
                    case 'oito':
                    case 'nove':
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case 'adicao':
                    case 'subtracao':
                    case 'divisao':
                    case 'multiplicacao':
                        this.addOperator(target.dataset.valor);
                        break;
                    case 'ponto':
                        break;
                    case 'limpar':
                        break;
                    case 'desfazer':
                        break;
                    case 'porcentagems':
                        break;
                    case 'igual':
                        this.calculate();
                        break;
                }
            });
        });
    }
    calculate() {
        this.operator.calculate();
    }
    addOperation(value) {
        this.operator.add(value);
    }
    addNumber(n) {
        if (isNaN(Number(this.operator.lastPosition))) {
            this.addOperation(n.toString());
        }
        else {
            n = Number(this.operator.lastPosition.toString() + n.toString());
            this.operator.lastPosition = n.toString();
        }
        this.display.content = n.toString();
    }
    addOperator(operator) {
        if (isNaN(Number(this.operator.lastPosition))) {
            this.operator.lastPosition = operator;
        }
        else {
            if (this.operator.length === 0)
                this.addOperation('0');
            this.addOperation(operator);
        }
    }
}
//# sourceMappingURL=CalculatorController.js.map