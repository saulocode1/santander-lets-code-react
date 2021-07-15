class Retângulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calculaArea() {
        return this.base * this.altura
    }
    duplicaBase() {
        this.base = this.base * 2
    }
}

const retângulo = new Retângulo(10, 5)
retângulo.duplicaBase()
console.log(retângulo.calculaArea())

