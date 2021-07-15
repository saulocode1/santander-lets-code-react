let numero = 4
let paridade = numero % 2 == 0 ? 'par' : 'impar' // operador ternário 
console.log(paridade)

/* Switch */ 

let sinal = 'vermelho'

switch(sinal) {
    case 'verde':
        console.log('pode passar')
        break
    case 'amarelo':
        console.log('espere')
        break
    case 'vermelho': 
        console.log('pare')
        break
    default: 
        console.log('sinal inválido')
}