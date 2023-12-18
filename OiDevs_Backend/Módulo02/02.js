//REDUCE
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//MANEIRA MAIS SIMPLES
    // let amount = 0
    // numbers.forEach(number => {
    //     amount += number
    // })

    // console.log(amount)

//MANEIRA COM REDUCE
    // const count = numbers.reduce((prev, current) => {
    //   return prev + current
    // })

    // console.log(count)

//

const products = [{
    id: 1,
    name: 'Iphone 14 Pro',
    price: 9999.90
}, {
    id: 2,
    name: 'Carregador',
    price: 249.00
}, {
    id: 3,
    name: 'Apple Watch',
    price: 4499.00
}, {
    id: 4,
    name: 'Macbook Pro M2',
    price: 14998.00
}]

const cart = products.reduce((prev, current, i, array) => {
    // console.log(i)
    // console.log(array)
    return {
        price: prev.price + current.price
    }
})

// console.log(cart.price)

//====================================

//POO - INÍCIO

// class Animal {
//     constructor(especie) {
//         this.especie = especie
//     }

//     comer (){
//         console.log('Método comer')
//     }
// }

// class Mamifero extends Animal {
//     constructor(especie) {
//         super(especie)
//     }
// }


// class Cachorro extends Mamifero {
//     constructor(name) {
//         this.gender
//         this.name = name
//     }

//     darNome(name){
//         this.name = name
//     }

//     latir() {
//         console.log('Auau')
//     }
// }

// const meuCachorro = new Cachorro('Lilica') // Cachorro { name: 'Lilica' }

// meuCachorro.gender = ('F')

// console.log(meuCachorro)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const teste = numbers.reduce((anterior, atual, index, array) => {
//     console.log(anterior,"-----", atual,"-----", index,"-----", array[index])
//     return anterior += atual
// })

// console.log(teste)