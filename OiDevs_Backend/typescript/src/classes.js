"use strict";
//por ser abstrata, ela só será extendida, não instanciada
class Animal {
    constructor(especie, grupo) {
        this.especie = especie;
        this.grupo = grupo;
        this.idade = 0;
    }
    nascer() {
        console.log(`Criando um ${this.especie}`);
    }
    getIdade() {
        return this.idade;
    }
    incrementaIdade() {
        this.idade++;
    }
}
class Mamiferos extends Animal {
    constructor(especie, grupo, habitat) {
        super(especie, grupo);
        this.habitat = habitat;
    }
    amamentar() {
        console.log(`Sou um ${this.especie} e estou amamentando`);
    }
    getGrupo() {
        return this.grupo;
    }
    getHabitat() {
        return this.habitat;
    }
}
class Cachorro extends Mamiferos {
    constructor(nome, raca, genero, cor) {
        super('Cachorro', 'Mamíferos', 'Terra');
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.cor = cor;
    }
    correr() {
        console.log('Estou correndo');
    }
    getNome() {
        return this.nome;
    }
}
const cachorro = new Cachorro('Bidu', 'Vira-lata', 'M', 'Caramelo');
// const gato = new Mamiferos('Gato', 'mamífero', 'terra')
console.log(cachorro);
// console.log(gato)
// cachorro.amamentar()
// console.log(cachorro.incrementaIdade())
// cachorro.changeGroup()
// console.log(cachorro.getGrupo())
