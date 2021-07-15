/* Aula 06 - Métodos de Acesso */

class Quadrado {
    constructor(base, altura) {
        let cor = 'blue'
        this.base = base
        this.altura = altura
        this.getCor = () => {return cor}
        this.setCor = (c) => {cor = c} // para alterar valor de cor
    }
}

const quadrado = new Quadrado(3, 4)

quadrado.setCor('red') // altera para red

console.log(quadrado.getCor())

/* Accessors */

class Quadrado2 {

    constructor(base, altura) {
        this._cor = 'blue'
        this.base = base
        this.altura = altura
    }

    get cor() {return this._cor}
    set cor(cor) {this._cor = cor}
}

const quadrado2 = new Quadrado2 
quadrado2.cor = 'red' // set cor
console.log(quadrado2.cor)