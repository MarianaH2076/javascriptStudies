//usuário é quem tá lá na ponta
    //e é a partir dele que vamos gerar os dados do IMC

    class User {
    private name: string
    private _peso: number
    private _altura: number
    private _imc: number = 0
    private _description: string = ''
    
    constructor(name: string, peso: number, altura: number){
        this.name = name
        this._peso = peso
        this._altura = altura
    }

    get peso():number {
        return this._peso
    }

    get altura():number {
        return this._altura
    }

    get imc():number {
        return this._imc
    }

    set imc(imc:number){
        this._imc = imc
    }

    get description():string {
        return this._description
    }

    set description(desc:string){
        this._description = desc
    }

}