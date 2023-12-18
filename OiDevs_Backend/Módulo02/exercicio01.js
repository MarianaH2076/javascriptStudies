class Usuario {

    constructor(email, password) {
        this.email = email
        this.password = password
        this.isAdmin = false
    }

    // isAdmin() {
    //     console.log("Sou um administrador")
    // }

}


class Admin extends Usuario {

    constructor(email, password, admin) {
        super(email, password)
        this.admin = true
    }

    isAdmin() {
        return this.admin
    }

}


// const usuarioTeste1 = new Usuario ('usuario@gmail.com', '12345')
// const usuarioTeste2 = new Usuario ('user@hotmail.com', 'abcde')
// const usuarioTeste3 = new Usuario ('3usuario@gmail.com', '78910')
const adminTeste1 = new Admin ('3usuario@gmail.com', '78910')
const adminTeste2 = new Admin ('usuario@gmail.com', '12345')


// console.log(
//     usuario2 instanceof Admin,
//     usuario2 instanceof Usuario
// )

console.log(adminTeste1)
console.log(adminTeste1.isAdmin())

