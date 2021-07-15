/* Objeto */

const pessoa = {nome: 'Saulo', idade: 24}

console.log(pessoa.nome)

const retângulo = {
    base: 10,
    altura: 20,
    calculaArea: function() {return this.base * this.altura} // this é referência ao próprio objeto
}

console.log(retângulo.calculaArea())

const agenda = {
    contatos: [
    {nome: 'contato1', telefone: 'telefone1', email: 'email1'},
    {nome: 'contato2', telefone: 'telefone2', email: 'email2'}
],
    adicionar: function(contato) {this.contatos.push(contato)}
}

console.log(agenda.contatos)