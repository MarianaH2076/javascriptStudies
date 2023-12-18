"use strict";
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this._isAdmin = false;
    }
    isAdmin() {
        return this._isAdmin;
    }
}
class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this._isAdmin = true;
    }
}
const user = new Usuario('mariana@gmail.com', '123456');
const admin = new Admin('mari@gmail.com', '123');
console.log(user.isAdmin());
console.log(admin.isAdmin());
