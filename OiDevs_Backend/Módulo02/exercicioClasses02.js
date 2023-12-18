class Pessoa {
    #nome
    #cpf
    constructor(nome, cpf) {
        this.#nome = nome
        this.#cpf = cpf
    }

    greet() {
        console.log(`Olá ${this.#nome}, seja bem vindo(a)!`)
    }


}

class Funcionario extends Pessoa {
    constructor(nome, cpf, salario) {
        super(nome, cpf)
        this.salario = salario
    }

    greetFuncionario() {
        console.log(`Agora você é um funcionário, ${this.nome}`)
    }

    enviarSalario() {
        console.log(`O seu salário é de R$ ${this.salario}`)
    }

}

class Paciente extends Pessoa {
    constructor(nome, cpf, modalidade) {
        super(nome, cpf)
        this.modalidade = modalidade   
    }
    
    confirmarSessão() {
        console.log(`Confirmar a sessão de ${this.nome} na modalidade ${this.modalidade}`)
    }

}

const pessoa1 = new Pessoa('Carla', '0000000000')
const pessoa2 = new Pessoa('André', '999999', '9876')
const paciente1 = new Paciente('Carla', '0000000000', 'Psicologia')
// paciente1.confirmarSessão()

const funcionario1 = new Funcionario('André', '999999', '9876')
// funcionario1.greetFuncionario()
// funcionario1.enviarSalario()