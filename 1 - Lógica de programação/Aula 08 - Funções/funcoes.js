/* ======= FUNÇÃO ======= */
function escreva() {
    console.log('olá')
}

escreva()

/* ======= PARÂMETROS ======= */
function digite(texto) {
    console.log(texto)
}

digite('parâmetro')

/* ======= SOMA ======= */
function somar(a, b) {
    return a + b
} 

let resultado = somar(1,3)
console.log(resultado)

/* ======= VARIÁVEL ======= */
const soma = function(a, b) { // atribui a função a uma variável
    return a + b
}

console.log(soma(1,3))

/* ======= ARROW FUNCTION ======= */
const sum = (a, b) => (a + b)

console.log(sum(1, 3))