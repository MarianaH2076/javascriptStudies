import { Db } from "./db.js"

const novoCliente = {
    nome: "Cliente1",
    idade: "35"
}

const novoCliente2 = {
    nome: "Cliente2",
    idade: "29"
}

// async function criarCliente(dados) {
//     const data = await Db.create(dados, "tabelaPessoaFisica")
//     return data
// }

// function buscarCientes() {
//     return Db.find("tabelaPessoaFisica")
// }

// function criarCliente(dados) {
//     Db.create(dados, "tabelaPessoaFisica").then((data) => {
//         console.log(data)
//     })
// }

// function buscarCientes() {
//     Db.find("tabelaPessoaFisica").then((data) => {
//         console.log(data)
//     })
// }

async function criarCliente(dados) {
    
    const data = await Db.create(dados, "tabelaPessoaFisica")
    console.log("==========criarCliente========")
    console.log(data)
}

async function buscarCientes() {
    const data1 = await Db.find("tabelaPessoaFisica")
    console.log("=============buscarCliente==========")
    console.log(data1)
}


criarCliente(novoCliente)
criarCliente(novoCliente2)

buscarCientes()




// criarCliente(novoCliente2)
// console.log("====================")
// buscarCientes()
