class PessoaEscola {
    protected _nome: string
    protected _idade: number 

    constructor(nome:string, idade:number){
        this._nome = nome
        this._idade = idade
    }

    get nome(){
        return this._nome
    }

    set defineNome(nome:string){
        this._nome = nome
    }

    get idade(){
        return this._nome
    }

    set defineIdade(idade:number){
        this._idade = idade
    }

}

class Aluno extends PessoaEscola {
    private prova1:number
    private prova2:number
    private trabalho:number
    // private pesoProva:number = 1
    // private pesoTrabalho:number = 4

    constructor(nome:string, idade:number, prova1:number, prova2:number, trabalho:number){
        super(nome, idade)
        this.prova1 = prova1
        this.prova2 = prova2
        this.trabalho = trabalho

        
    }

    adicionaProva1(prova1:number){
        return this.prova1 = prova1
    }

    adicionaProva2(prova2:number){
        return this.prova2 = prova2
    }

    adicionaTrabalho(trabalho:number){
        return this.trabalho = trabalho
    }

    calculaMedia(){
        return ((this.prova1) + (this.prova2) + (this.trabalho) / 3).toFixed(2)
    }

}

class Professor extends PessoaEscola {
    private _disciplina:string

    constructor(nome:string, idade:number, disciplina:string){
        super(nome, idade)
        this._disciplina = disciplina
    }

    get disciplina(){
        return this._disciplina
    }

    set novaDisciplina(disciplina:string){
        this._disciplina = disciplina
    }
}

// const aluna1 = new Aluno('Mariana', 31, 7.5, 8.2, 8.7)
// console.log(aluna1)
// aluna1.adicionaProva1(6)
// aluna1.adicionaProva2(8)
// aluna1.adicionaTrabalho(8)
// console.log(aluna1.calculaMedia())

const professorVet = new Professor('Fábio', 52, 'veterinária')
// console.log(professorVet)
professorVet.novaDisciplina = 'Matemática'
console.log(professorVet)