export default class DateHour {
    constructor(elementDate = document.querySelector("#datetime > div:nth-child(2)"), elementHour = document.querySelector("#datetime time")) {
        this.elementDate = elementDate;
        this.elementHour = elementHour;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    render() {
        const todayDate = new Date();
        const day = todayDate.getDate();
        const month = todayDate.toLocaleDateString('pt-BR', {
            month: 'long'
        });
        const year = todayDate.getFullYear();
        const hour = todayDate.getHours();
        const minute = todayDate.getMinutes().toString().padStart(2, '0');
        const twoPoints = todayDate.getSeconds() % 2 === 0 ? ":" : " ";
        this.date = `${day} ${month} ${year}`;
        this.hour = `${hour}${twoPoints}${minute}`;
    }
    set date(content) {
        if (this.elementDate) {
            this.elementDate.innerHTML = content;
        }
    }
    set hour(content) {
        if (this.elementHour) {
            this.elementHour.innerHTML = content;
        }
    }
}
//# sourceMappingURL=DateHour.js.map