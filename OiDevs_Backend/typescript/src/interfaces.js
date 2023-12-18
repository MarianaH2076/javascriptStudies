"use strict";
class Televisao {
    constructor(marca, modelo, tensao, preco, descricao, getStatus) {
        this.marca = marca;
        this.modelo = modelo;
        this.tensao = tensao;
        this.preco = preco;
        this.descricao = descricao;
        this.ligado = false;
    }
    onOff() {
        // this.ligado = !this.ligado
    }
    getStatus() {
        return this.ligado;
    }
}
const tv = new Televisao('LG', 'SMART', '110v', 4499, 'Televisão Smart', false);
console.log(tv);
