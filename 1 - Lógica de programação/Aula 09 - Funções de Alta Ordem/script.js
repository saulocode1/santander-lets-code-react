/* Aula 09 - Funções de Alta Ordem */
const subtrair = (a, b) => (a - b)
const somar = (a, b) => (a + b)

const aplicaOperação = (a, b, operação) => operação(a, b)

let subtração = aplicaOperação(4, 2, subtrair)
let soma = aplicaOperação(4, 2, somar)

console.log(`A soma entre é ${soma}.`)
console.log(`A subtração é ${subtração}.`)