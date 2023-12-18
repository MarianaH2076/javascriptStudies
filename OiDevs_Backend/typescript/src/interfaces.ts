interface Eletronicos{
    marca: string
    modelo: string
    tensao: string
    preco: number
    descricao: string
    ligado: boolean
    onOff: () => void
    getStatus: () => boolean
}


class Televisao implements Eletronicos{
    public marca: string
    public modelo: string
    public tensao: string
    public preco: number
    public descricao: string
    public ligado: boolean

    constructor(
        marca: string,
        modelo: string,
        tensao: string,
        preco: number,
        descricao: string,
        getStatus: boolean
        ){

        this.marca = marca
        this.modelo = modelo
        this.tensao = tensao
        this.preco = preco
        this.descricao = descricao
        this.ligado = false
    }

    public onOff(){
        // this.ligado = !this.ligado
    }

    public getStatus():boolean{
        return this.ligado
    }

}

const tv = new Televisao('LG', 'SMART', '110v', 4499, 'Televisão Smart', false)
console.log(tv)