function Retângulo(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'blue'; // atributo protegido
}

const retângulo = new Retângulo(5, 2)

retângulo.cor = 'red' // cria um novo atributo

console.log(retângulo.cor) // undefined 

/* Factory function */ 

function criaRetângulo(base, altura) {

    let cor = 'blue'

    return {
        base,
        altura,
        getCor: function() {return cor}
    }
}

/* Class */

const retângulo2 = new criaRetângulo(3, 4)
retângulo2.cor = 'black'
console.log(retângulo2.getCor())

class Quadrado {
    constructor(base, altura) {
        let cor = 'white'
        this.base = base
        this.altura = altura
        this.getCor = () => {return cor}
    }
}

const quadrado = new Quadrado(5, 3)
console.log(quadrado.getCor())