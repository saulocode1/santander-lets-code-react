class Retângulo {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) throw 'Informação inválida'
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // atributo não obrigatório
    }
}

const retângulo = new Retângulo(12, 2)
retângulo.cor = 'blue'
console.log(retângulo)