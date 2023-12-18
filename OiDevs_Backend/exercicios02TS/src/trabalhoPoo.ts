/*
Classe
    representação de uma pessoa
    métodos PÚBLICOS
        imprimir todos os dados
        calcular a idade
*/

class Pessoa {
    private _nome: string
    private _dataNascimento: string
    private _altura: number

    constructor(nome: string, dataNascimento: string, altura: number){
        this._nome = nome
        this._dataNascimento = dataNascimento
        this._altura = altura
    }

    get nome(){
        return this._nome
    }

    set nome(nome:string){
        this._nome = nome
    }

    get dataNascimento(){
        return this._dataNascimento
    }

    set dataNascimento(data:string){
        this._dataNascimento = data
    }

    get altura(){
        return this._altura
    }

    set altura(altura:number){
        this._altura = altura
    }

    // DÚVIDA AQUI
    public gerarDados(){
        console.table(Pessoa)
    }

    public calcularIdade(){
        const dataAtual = new Date();
        const anoAtual = Number(dataAtual.getFullYear())
        let ano = this._dataNascimento.split('/')

        const idadeAtual = anoAtual - Number(ano[2])
       
        return idadeAtual

    }

}

/*
Pode armazenar até 10 pessoas -> como estabelece esse limite??
Métodos:
    armazenaPessoa(nome, dataNascimento, altura);
    removePessoa(nome);
    buscaPessoa(nome) -> informa em que posição da agenda tá a pessoa
    imprimeAgenda() -> imprime os dados de todas as pessoas da agenda
    imprimePessoa(index) -> imprime os dados da pessoa que está na posição 'i' da agenda
*/


class Agenda {
    private pessoas: Pessoa[] = []
    
    // constructor(nome:string, dataNascimento:string, altura:number){
    //     super(nome, dataNascimento, altura)
    // }

    public armazenaPessoa(pessoa: Pessoa):void {
        this.pessoas.push(pessoa)
    }

    public removePessoa(nome:string):void {
        
        const agendaAtualizada = this.pessoas.filter((f) => f.nome != nome)

        this.pessoas = agendaAtualizada
    }

    //buscaPessoa(nome) -> informa em que posição da agenda tá a pessoa

    // public buscaPessoa(nome:any):void{
    //     const pessoas = this.pessoas
        
    //     console.log(pessoas.indexOf(nome))
    // }

    public imprimeAgenda():void {
        console.log(this.pessoas)
    }

    //imprimePessoa(index) -> imprime os dados da pessoa que está na posição 'i' da agenda

    public imprimePessoa(index:number):void {
        
    }

}


const pessoa1 = new Pessoa('Luke Skywalker', '19BBY', 172)
const pessoa2 = new Pessoa('C-3PO', '112BBY"', 167)
const pessoa3 = new Pessoa('R2-D2', '33BBY', 96)

const agenda = new Agenda()
agenda.armazenaPessoa(pessoa1)
agenda.armazenaPessoa(pessoa2)
agenda.armazenaPessoa(pessoa3)

agenda.imprimeAgenda()



