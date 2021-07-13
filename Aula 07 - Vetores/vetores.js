// let vetor = []

// for (let i = 0; i <= 10; i++) {
//     vetor.push(i)
// }

// console.log(vetor)

let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}

for (let numero of vetor) { // valores
    console.log(numero)
}

for (let índice in vetor){ 
    console.log(vetor[índice])
}