class Alunos1 {
    private matricula:string
    private nome:string
    private _prova1:number
    private _prova2:number
    private _trabalho:number
    private pesoProva:number = 2.5
    private pesoTrabalho:number = 2
    private notaDeCorte:number = 7
    private mediaAluno:number = 0

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

        this.media()
    }

    // get prova1():number{
    //     return this._prova1
    // }

    // set prova1(prova1){
    //     this._prova1 = prova1
    // }

    // get prova2():number{
    //     return this._prova2
    // }

    // set prova2(prova2){
    //     this._prova2 = prova2
    // }

    // get trabalho():number{
    //     return this._trabalho
    // }

    // set trabalho(trabalho){
    //     this._trabalho = trabalho
    // }

    public media():number{
        //((nota * peso) + (nota * peso) + (trabalho * peso)) / peso + peso + peso
        
        
        return (
            (this._prova1 * this.pesoProva) +
            (this._prova2 * this.pesoProva) +
            (this._trabalho * this.pesoTrabalho) /
            (this.pesoProva + this.pesoProva + this.pesoTrabalho)
        )

    }

    final():number{

        return this.mediaAluno >= this.notaDeCorte ? 0 : this.notaDeCorte - this.mediaAluno

    }

}