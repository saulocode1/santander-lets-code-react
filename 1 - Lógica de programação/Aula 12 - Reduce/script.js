const vetor = [1, 2, 3, 4, 5 ]

const soma = vetor.reduce((acumulador, item) => acumulador + item)
console.log(soma)

const reducer = ((acumulador, item) => acumulador + item)
console.log(vetor.reduce(reducer))

console.log(vetor.reduce(reducer, 5)) // adiciona 5 como primeiro estado (5, 1, 2, 3, 4, 5)