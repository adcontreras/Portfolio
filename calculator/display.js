class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculating = new Calculator();
        this.tipoOperacion = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.signos = {
            addition: '+',
            division: '%',
            multiplication: 'x',
            subtraction: '-',
        }
    }

    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.tipoOperacion = undefined;
        this.printValues();

    }

    computar(tipo){
        this.tipoOperacion !== 'equal' && this.calcular();
        this.tipoOperacion = tipo
        this.previousValue = this.currentValue || this.previousValue
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if(number=== '.' && this.currentValue.includes('.'))return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signos[this.tipoOperacion] || '' }`;
    }

    calcular(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN (currentValue) || isNaN (previousValue)) return
        this.currentValue = this.calculating[this.tipoOperacion](currentValue, previousValue);
    }
}