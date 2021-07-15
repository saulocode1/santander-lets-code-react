/* Aula 10 - Map */

const vetor = ['10', '20', '30']
const stringToInt = (x) => (parseInt(x)) // função para transformar string em inteiro

const vetor2 = vetor.map(stringToInt) // map pega todos os elementos do array
console.log(vetor2)

const vetor3 = vetor.map(x => x**2)
console.log(vetor3)