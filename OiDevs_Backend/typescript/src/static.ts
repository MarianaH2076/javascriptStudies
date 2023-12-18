class Utils { //utilidades dentro da classe
    //se ela é estática, não precisa de um construtor
        //porque ela não precisa ser instanciada
            //ela será chamada diretamente!

    static validateCpf(cpf:string):boolean {
        if(cpf.length === 11) {
            return true
        } else {
            return false
        }
    }

    static validateFullName(name:string):boolean {
        if(name.split(' ').length > 1) {
            return true
        } else {
            return false
        }
    }

}

console.log(Utils.validateCpf('123445677'))
console.log(Utils.validateFullName('Mariana'))