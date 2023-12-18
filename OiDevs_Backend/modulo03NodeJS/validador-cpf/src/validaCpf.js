const CPF = require("cpf-check");


function validarCpf(cpf){
    
    // import CPF from "cpf-check"

    // const test = "teste"
    
    console.log(CPF.validate(cpf));
}

module.exports = validarCpf;

export { test, validarCpf }
