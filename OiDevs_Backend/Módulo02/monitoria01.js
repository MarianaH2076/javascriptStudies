const numeros = [1,2,3,4,5,6]

const numerosComReduce = numeros.reduce((anterior, atual, index, array) => {
    console.log("anterior: " + anterior)
    console.log("atual:" + atual)
    console.log("index:" + index)
    console.log("array:" + array)
    console.log("======================")
    return anterior + atual
})

console.log(numerosComReduce)

    // const teste = numbers.reduce((anterior, atual, index, array) => {
    //     console.log(anterior,"-----", atual,"-----", index,"-----", array[index])
    //     return anterior += atual
    // })
//for of -> retorna o valor de cada index
    // NÃO PODE ser usado pra objeto!
// for(let numero of numeros) {
//     console.log(numero)
// }

//for in -> retorna o index em si
// for(let numero in numeros) {
//     console.log(numero)
// }


//Também conseguimos extrair o valor de cada atributo dentro de um objeto com o for of
// const casaToOf = {
//     area: 1000,
//     altura: 7,
//     andares: 2,
//     [Symbol.iterator]: function* (){
//         yield this.area;
//         yield this.altura;
//         yield this.andares;
//     }

//     }

// for(let prop of casaToOf) {
//     console.log(prop)
// }

// Map -> retorna sempre um array :)
// const mapNumerosComText = numeros.map(numero => "Esse é o número: " + numero)
// console.log(mapNumerosComText)

// const valorInicial = 0
// const sumWithInitial = numeros.reduce(
//     (acumulador, valorAtual) => acumulador + valorAtual, valorInicial
// )

// const resultado = numeros.reduce(function (acumulador, valorAtual) {
//     console.log(acumulador + valorAtual)
//     return acumulador + valorAtual
// }, valorInicial)
// console.log(resultado)