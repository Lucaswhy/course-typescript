export default class Display {
    constructor(
        private element: HTMLDivElement | null = document.querySelector('#values')
    ) {
        this.content= '0';
    }
    set content(value: string){
        if(value.toString().length > 12) value = "ERRO";
        if(this.element){
            this.element.innerHTML = value.toString().replace('.', ',');
        }
    }
    get content(): string{
        return this.element ? this.element.innerHTML : '0';
    }
}