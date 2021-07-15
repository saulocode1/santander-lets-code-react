/* Aula 02 - Classe e Construtor */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Saulo', 24)
pessoa1.idade = 25

console.log(pessoa1)

const pessoa2 = new Pessoa('Let', 19)

console.log(pessoa2.idade)