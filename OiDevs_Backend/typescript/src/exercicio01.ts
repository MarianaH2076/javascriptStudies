class Usuario {
    private email: string
    private senha: string
    protected _isAdmin: boolean
    
    constructor(email: string, senha: string) {
        this.email = email
        this.senha = senha
        this._isAdmin = false
    }

    isAdmin(){
        return this._isAdmin
    }

}

class Admin extends Usuario {
   
    constructor(email: string, senha: string) {
        super(email, senha)
        this._isAdmin = true
    }
}

const user = new Usuario('mariana@gmail.com', '123456')
const admin = new Admin ('mari@gmail.com', '123')

console.log(user.isAdmin())
console.log(admin.isAdmin())