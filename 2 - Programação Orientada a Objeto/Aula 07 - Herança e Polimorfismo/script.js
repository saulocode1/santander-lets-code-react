class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

class Cidadão extends Pessoa { // extends (deixar claro que vai herdar os atributos do pai)
    constructor(nome, idade, cpf, rg) {
        super(nome, idade) // pega os  atributos da classe pai
        this.cpf = cpf
        this.rg = rg
    }
}

const cidadão = new Cidadão('Saulo', 24, '000', '1111') // nome, idade (pai) - rg, cpf (filho)
console.log(cidadão)

console.log(cidadão instanceof Cidadão) // true
console.log(cidadão instanceof Pessoa) // true
