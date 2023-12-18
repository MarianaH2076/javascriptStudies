class Alunos {
    private matricula:string
    private nome:string
    private _prova1:number
    private _prova2:number
    private _trabalho:number
    constructor(
        matricula:string,
        nome:string,
        prova1:number,
        prova2:number,
        trabalho:number
    ){
        this.matricula = matricula
        this.nome = nome
        this._prova1 = prova1
        this._prova2 = prova2
        this._trabalho = trabalho
    }

    get prova1():number{
        return this._prova1
    }

    set prova1(prova1){
        this._prova1 = prova1
    }

    get prova2():number{
        return this._prova2
    }

    set prova2(prova2){
        this._prova2 = prova2
    }

    get trabalho():number{
        return this._trabalho
    }

    set trabalho(trabalho){
        this._trabalho = trabalho
    }

    get media():number{
        return ((this.prova1*2.5)+(this.prova2*2.5)+(this._trabalho*2) / 3)
    }

}

const aluno1 = new Alunos('090807', 'Mariana', 4, 10, 3)
console.log(aluno1.media)