//por ser abstrata, ela só será extendida, não instanciada

abstract class Animal {
    protected especie: string
    protected grupo: string
    private idade: number

    constructor(especie:string, grupo:string) {
        this.especie = especie
        this.grupo = grupo
        this.idade = 0
    }

    private nascer():void{
        console.log(`Criando um ${this.especie}`)
    }

    public getIdade():number {
        return this.idade
    }

    public incrementaIdade():void{
        this.idade++
    }

}

abstract class Mamiferos extends Animal{
    private habitat: string
    constructor(especie:string, grupo:string, habitat:string){
        super(especie, grupo)
        this.habitat = habitat
    }

    public amamentar():void {
        console.log(`Sou um ${this.especie} e estou amamentando`)
    }


    public getGrupo():string{
        return this.grupo
    }
        
    public getHabitat():string{
        return this.habitat
    }

}

class Cachorro extends Mamiferos{
    private nome:string
    private raca:string
    private genero:string
    private cor:string

    constructor(nome:string, raca:string, genero:string, cor:string){
        super('Cachorro', 'Mamíferos', 'Terra')
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.cor = cor
    }

    public correr():void{
        console.log('Estou correndo')
    }

    public getNome():string{
        return this.nome
    }

}

const cachorro = new Cachorro('Bidu', 'Vira-lata', 'M', 'Caramelo')
// const gato = new Mamiferos('Gato', 'mamífero', 'terra')
console.log(cachorro)
const cachorro2 = new Cachorro('Bia', 'shitzu', 'F', 'marrom')
console.log(cachorro2)
// console.log(gato)
// cachorro.amamentar()
// console.log(cachorro.incrementaIdade())
// cachorro.changeGroup()
// console.log(cachorro.getGrupo())