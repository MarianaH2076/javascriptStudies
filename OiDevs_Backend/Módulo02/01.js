// const array = [10, 20, 30, 40]

// /*acessar o index pode ser bom em alguns casos,
// principalmente em um caso específico de pesquisa binária*/
// for(const index in array) {
//     // console.log(index) // 0, 1, 2, 3
// }


// for(const value of array) {
//     // console.log(value) //10, 20, 30, 40
// }

// for(let i = 0; i < array.length; i++){
//     // console.log(array[i]) //10, 20, 30, 40
// }

// // --------------------------------------------


// const array2 = array
// let value = 10
// let value2 = value

// // console.log(array)
// // console.log(array2)

// // console.log(value)
// // console.log(value2)

// //------------------------------------

// function imprimeNome(name){
//     console.log(`Meu nome é ${name}`)
// }

// const soma = function sum (num1, num2) {
//     console.log(num1 + num2)
// }

// // soma // não dá nada porque não tem parênteses
// // soma() // NaN, porque já tem os parênteses mas não tem parâmetros

// // function soma(num1, num2){
// //     return num1 + num2
// // }

// // imprimeNome('Mariana')
// // console.log(soma(2, 3))

// function percorreArray (array, cb) {
//     for(value of array) {
//         cb(value)
//     }
// }

// const multiplica = function (value) {
//     console.log(value * 2)
// }

// const imprimeName = function (value) {
//     console.log(`meu nome é ${value}`)
// }

// const array3 = [15, 30, 45, 60]
// const array4 = ['Mari', 'Esdras', 'Betina']

// percorreArray(array3, multiplica)
// percorreArray(array4, imprimeName)

// // function isPalindromeImperative(word){
// //     const arrayWord = word.split('')
// //     let reverWord = ""

// //     for(let i = word.length - 1; i >= 0; i++){
// //         reverWord = reverWord + arrayWord[i]
// //     }

// //     if(reverWord === word) {
// //         return true
// //     } else {
// //         return false
// //     }
// // }

// // console.log(isPalindromeImperative("arara"))

// //maneira DECLARATIVA
// const isPalindrome = (word) => word.split('').reverse().join('') === word

// console.log(isPalindrome("roma"))


function imprimeName (names) {
    names.forEach(name => {
        console.log(name)
    });
}

