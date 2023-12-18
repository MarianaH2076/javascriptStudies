class Alunos {
    private matricula:string
    private nome:string
    private _prova1:number
    private _prova2:number
    private _trabalho:number
    private _media:number = 7 //prof não colocou isso
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

    media():number{
        const media = ((this._prova1 * 0.25) + (this._prova2 * 0.25) + (this._trabalho * 0.2))
        return this._media = media
    }

    final():number{
        if(this._media > 7) {
            return 0
        }else{
            const final = (7 - this._media)/0.3
            return final
        }
    }

}

const aluno1 = new Alunos('090807', 'Mariana', 8, 10, 7)
// console.log(aluno1.media())
// console.log(aluno1.final())

// --------------------------------------------

class Data {
    public _data: string

    constructor(data:string){
        this._data = data
        this.verifica()
    }

    verifica(){
        let dataObj = this._data.split('/')
        if((parseInt(dataObj[0]) > 31) || (parseInt(dataObj[1]) > 12)) {
            this._data = "01/01/0001"
        }
    }

    compara(data:string){
        const dataAtual = new Date();
        const diaAtual = String(dataAtual.getDate())
        const mesAtual = String(dataAtual.getMonth() + 1)
        const anoAtual = String(dataAtual.getFullYear())
        const dataCorrigida = `${diaAtual}/${mesAtual}/${anoAtual}`

        if(dataCorrigida === data.toString()) {
            return true
        } else {
            return false
        }
    }

    getDia(){
        let dia = this._data.split('/')
        return dia[0]
    }

    getMes(){
        let mes = this._data.split('/')
        return mes[1]
    }

    getMesExtenso(){
        let mes = this._data.split('/')
        switch (mes[1]){
            case '01' || '1':
                return 'janeiro'
                break
            case '02' || '2':
                return 'fevereiro'
                break
            case '03' || '3':
                return 'março'
                break
            case '04' || '4':
                return 'abril'
                break
            case '05' || '5':
                return 'maio'
                break
            case '06' || '6':
                return 'junho'
                break
            case '07' || '7':
                return 'julho'
                break
            case '08' || '8':
                return 'agosto'
                break
            case '09' || '9':
                return 'setembro'
                break
            case '10':
                return 'outubro'
                break
            case '11':
                return 'novembro'
                break
            case '12':
                return 'dezembro'
                break
        }
            
    }

    getAno(){
        let ano = this._data.split('/')
        return ano[2]
    }
    


}

const data1 = new Data('26/10/2022')
const data2 = new Data('04/12/1990')

// console.log(data1.compara('27/10/2022'))

// -----------------------------------------------------------------------

// class Voo extends Data{
//     private numeroVoo: string
//     private vagasTotais: number = 100
    
//     constructor(numeroVoo: string, data: string){
//         super(data)
//         this.numeroVoo = numeroVoo
//         this.vagasTotais
//     }

//     proximoLivre(){
//         for(let i = 0; i <= this.vagasTotais ; i++){
//             // if()
//         }
//     }

//     verifica(): void {
        
//     }

//     ocupa(){

//     }

//     vagas(){

//     }

//     getVoo(){
//         return this.numeroVoo
//     }

// }

