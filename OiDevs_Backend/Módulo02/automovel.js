class Automovel {
    #motor
    constructor(cor, numPortas, combustivel){
        this.#motor = false
        this.cor = cor
        this.numPortas = numPortas
        this.combustivel = combustivel
        this.#setLigar()
    }

    #setLigar() {
        this.#motor = true
        return this.#motor
    }

    getStatusMotor() {
        return this.#motor
    }

}

const carro = new Automovel('Preto', 4, 'FLEX')
// método errado de "ligar"
    // carro.motor = true   

// método certo de "ligar"
    // carro.setLigar()

console.log(carro)
console.log(carro.getStatusMotor())
