class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

class Cidadão extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade) 
        this.cpf = cpf
        this.rg = rg
    }
}

// super (pega os  atributos da classe pai)
// extends (deixar claro que vai herdar os atributos do pai)

const cidadão = new Cidadão('Saulo', 24, '000', '1111') // nome, idade (pai) - rg, cpf (filho)
console.log(cidadão)

console.log(cidadão instanceof Cidadão) // true; saber se é da classe que passamos
console.log(cidadão instanceof Pessoa) // true
