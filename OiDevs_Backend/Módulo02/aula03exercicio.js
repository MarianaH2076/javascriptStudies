/*  
    Estabelecimento
        Restaurante
        Cafeteria
*/

class Estabelecimento {
    constructor(tipo) {
        this.tipo = tipo
        this.aberto = false
    }

    abrir() {
        return this.aberto = true
    }

    receberPagamento() {
        console.log("Aceitar pagamento")
    }

    cadastrarCliente() {
        console.log("Cadastro de cliente em andamento")
    }

    encerrarExpediente() {
        return this.aberto = false
    }

}

class Restaurante extends Estabelecimento {
    constructor(tipo, delivery, tipoComida, opcoesVeganas) {
        super('Restaurante')
        this.delivery = false
        this.tipoComida = tipoComida
        this.opcoesVeganas = false
    }

    enviarDelivery() {
        return this.delivery = true
    }

    reservar() {
        console.log("Reserva em andamento")
    }

}

class Cafeteria extends Restaurante {
    constructor(bebidas, tipoComida, temComida) {
        super('Cafeteria', 'Café')
        this.bebidas = bebidas
        this.temComida = temComida
    }

    

}