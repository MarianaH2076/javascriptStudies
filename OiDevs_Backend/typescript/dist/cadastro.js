"use strict";
class Pessoa {
    constructor(cpf, nome, nascimento, idade) {
        this._cpf = cpf;
        this.nome = nome;
        this.nascimento = nascimento;
        this._descricao = '';
        this.interesses = '';
        Pessoa.count++;
        Pessoa.somaIdades += idade;
    }
    get cpf() {
        return this.cpf;
    }
    get descricao() {
        return this.descricao;
    }
    set descricao(desc) {
        this._descricao = desc;
    }
    getPerfil() {
        return {
            nome: this.nome,
            nascimento: this.nascimento,
            descricao: this._descricao,
            interesses: this.interesses
        };
    }
    getCount() {
        return Pessoa.count;
    }
}
//se eu quiser criar um método pra ver quantas pessoas já foram criadas...
//começa em 0
// é incrementado cada vez que o construtor for inicializado
//ou seja, cada vez que uma pessoa é criada
Pessoa.count = 0;
Pessoa.somaIdades = 0;
const pessoa1 = new Pessoa('000000', 'Mariana', '04/12/1990', 31);
const pessoa2 = new Pessoa('111111', 'Carlos', '08/09/1998', 27);
pessoa1.descricao = 'Brasiliense, psicóloga, estudante de ADS e futura contratada da Oi';
console.log(pessoa1.getPerfil());
console.log(pessoa2.getCount());
console.log(Pessoa.somaIdades);
