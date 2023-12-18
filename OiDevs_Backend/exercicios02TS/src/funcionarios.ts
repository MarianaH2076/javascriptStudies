/*
Crie as entidades(classes) necessárias para um sistema que faça o controle de funcionários de uma empresa. 
Essa empresa conta com dois tipos de contrato, CLT e estágio, e deve representar os atributos de seus funcionários
de acordo com seu tipo de contrato, como carga horária, cargo, formação, dados pessoais.

Esse sistema, deve ser capaz de gerar o contra cheque de cada funcionário, deve também adicionar, remover e listar
os funcionários

Crie as entidades necessárias para um sistema que faça o controle de funcionários de uma empresa:

    * Um funcionário deve ter dados pessoais(nome, idade, etc.)
    * Um funcionário devem ter uma carga horária
    * Um CLT devem ter uma formação
    * Um CLT devem ter um cargo
    * Um CLT deve ter um atributo salário
    * Um estagiário deve ter um atributo "bolsa"(salário)
    * Um estagiário deve ter um atributo formação
    * Um estagiário deve ter um uma área de atuação
    * Um estagiário deve ter um atributo status da formação ("cursando")
    * A classe funcionário deve conter um método "gerarRemuneracao"
    * Funcionários CLT tem desconto no pagamento, e deve ser calculado na hora de gerar a remuneração

    * É preciso ter uma listagem de funcionários, para isso utilize uma classe Funcionários 
        * A classe Funcionarios deve métodos para adicionar e remover um funcionário 


Possíveis entidades:
    Funcionario
    Funcionarios
    ContratoCLT
    ContratoEstagio

*/

abstract class Funcionario{
    private nome: string
    private _matricula: number
    private idade: number
    private contrato: string
    private cargaHoraria: number
    protected salario: number
    
    constructor ( nome: string, matricula: number, idade: number, contrato: string, cargaHoraria: number, salario: number){
        this.nome = nome
        this._matricula = matricula
        this.idade = idade
        this.contrato = contrato
        this.cargaHoraria = cargaHoraria
        this.salario = salario
    }

    gerarRemuneracao(){
        return this.salario
    }

    get matricula(){
        return this._matricula
    }



}


class CLT extends Funcionario{
    private formacao: string
    private cargo: string
    
    constructor (nome: string, matricula: number, idade: number, formacao: string, cargo: string, salario: number){
        super(nome, matricula, idade, "clt", 8, salario)
        this.formacao = formacao
        this.cargo = cargo
    }

    gerarRemuneracao(){
        return this.salario * 0.75
    }

}

class Estagiarios extends Funcionario{
    private formacao: string
    private areaAtuacao: string
    private statusFormacao: string = "Cursando"
    
    constructor (nome: string, matricula: number, idade: number, salario: number, formacao: string, areaAtuacao: string){
        super(nome, matricula, idade, "estágio", 4, salario)
        this.formacao = formacao
        this.areaAtuacao = areaAtuacao
    }

    gerarRemuneracao(){
        return this.salario
    }

}

class Funcionarios {
    private funcionarios: Funcionario[] = []

    public incluiFuncionario(funcionario: Funcionario):void {
        this.funcionarios.push(funcionario)
    }

    public removeFuncionario(matricula: number):void {
        
        const updatedList = this.funcionarios.filter((f) => f.matricula != matricula)

        this.funcionarios = updatedList
    }

    public show():void {
        console.table(this.funcionarios)
    }
}




const clt1 = new CLT("Ricardo", 90909, 30, "analista de sistemas", "gerente", 12000)
const clt2= new CLT("Afranio", 6793, 42, "arquitetura", "coordenador", 15000)
const clt3 = new CLT("Katia", 1234, 32, "analista de sistemas", "coordenadora", 13000)
const clt4= new CLT("Mariana", 7645, 31, "arquitetura", "coordenador", 14000)

const estagiario1 = new Estagiarios("Afranio", 8765, 17, 1200, "Análise de sistemas", "Desenvolvimento")
const estagiario2 = new Estagiarios("Esdras", 98765, 43, 1400, "Análise de sistemas", "Desenvolvimento")
const estagiario3 = new Estagiarios("José", 6543, 25, 1100, "Análise de sistemas", "Desenvolvimento")
const estagiario4 = new Estagiarios("Carla", 2345, 19, 1200, "Análise de sistemas", "Desenvolvimento")


// console.log(clt1.gerarRemuneracao())
const funcionarios = new Funcionarios()
funcionarios.incluiFuncionario(clt1)
funcionarios.incluiFuncionario(clt2)
funcionarios.incluiFuncionario(clt3)
funcionarios.incluiFuncionario(clt4)
funcionarios.incluiFuncionario(estagiario1)
funcionarios.incluiFuncionario(estagiario2)
funcionarios.incluiFuncionario(estagiario3)
funcionarios.incluiFuncionario(estagiario4)
funcionarios.show()

funcionarios.removeFuncionario(6543)
funcionarios.show()
