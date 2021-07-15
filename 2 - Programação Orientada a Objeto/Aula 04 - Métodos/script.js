/* Métodos

    Chamamos de métodos e não funções por dois motivos:
    1 - Por estar no contexto POO e no interior de uma classe.
    2 - Por ele poder manipular o estado interno de um objeto.

*/

class Retângulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calculaArea() { // método
        return this.base * this.altura
    }
    duplicaBase() { // método
        this.base = this.base * 2
    }
}

const retângulo = new Retângulo(10, 5)

retângulo.duplicaBase()

console.log(retângulo.calculaArea())