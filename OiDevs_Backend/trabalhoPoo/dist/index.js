"use strict";
class Pessoa {
    constructor(name, birthDate, heigth) {
        this._name = name;
        this._birthDate = birthDate;
        this._heigth = heigth;
    }
    get name() {
        return this._name;
    }
    set changeName(n) {
        this._name = n;
    }
    get birthDate() {
        return this._birthDate;
    }
    set changeBirthDate(d) {
        this._birthDate = d;
    }
    get heigth() {
        return this._heigth;
    }
    set changeHeigth(h) {
        this._heigth = h;
    }
    printData() {
        let person = { Nome: this._name, Nascimento: this._birthDate, Altura: this._heigth };
        console.table(person);
    }
    age() {
        let d = new Date;
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let birthYear = Number(this.birthDate.split("/")[2]);
        let birthMonth = Number(this.birthDate.split("/")[1]);
        let birthDay = Number(this.birthDate.split("/")[0]);
        let age = year - birthYear;
        if (month < birthMonth || month === birthMonth && day < birthDay) {
            age--;
        }
        console.log(age);
    }
}
class Agenda {
    constructor() {
        this.contacts = [];
    }
    addContact(nome) {
        if (this.contacts.length < 10) {
            this.contacts.push(nome);
        }
        else {
            console.log("Não é possível acrescentar mais contatos porque a agenda está em sua capacidade máxima");
        }
    }
    removeContact(nome) {
        if (this.contacts.find((n) => n.name === nome)) {
            const agendaAtualizada = this.contacts.filter((f) => f.name != nome);
            this.contacts = agendaAtualizada;
        }
        else {
            console.log("Erro: esse contato não está salvo na agenda, portanto não é possível removê-lo");
        }
    }
    searchContact(nome) {
        if (this.contacts.find((i) => i.name === nome)) {
            const search = this.contacts.findIndex((i) => i.name === nome);
            console.log(search);
        }
        else {
            console.log("Desculpe, essa pessoa não está na agenda");
        }
    }
    printAgenda() {
        console.table(this.contacts);
    }
    printContact(index) {
        if (index < this.contacts.length) {
            console.table(this.contacts[index]);
        }
        else {
            console.log("O índice informado não é válido");
        }
    }
}
class Alunos extends Pessoa {
    constructor(name, birthDate, heigth, email, cellphone) {
        super(name, birthDate, heigth);
        this.grade1 = 0;
        this.grade2 = 0;
        this.grade3 = 0;
        this.email = email;
        this.cellphone = cellphone;
    }
    addGrades(grade1, grade2, grade3) {
        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
        const grades = { nota1: grade1, nota2: grade2, nota3: grade3 };
        return grades;
    }
    averageGrade() {
        return (((this.grade1 + this.grade2 + this.grade3) / 3).toFixed(1));
    }
}
class Professores extends Pessoa {
    constructor(name, birthDate, heigth, discipline, email, cellphone) {
        super(name, birthDate, heigth);
        this._discipline = discipline;
        this._email = email;
        this._cellphone = cellphone;
    }
    get discipline() {
        return this._discipline;
    }
    set changeDiscipline(d) {
        this._discipline = d;
    }
    get email() {
        return this._email;
    }
    set changeEmail(e) {
        this._email = e;
    }
    get cellphone() {
        return this._cellphone;
    }
    set changeCellphone(c) {
        this._cellphone = c;
    }
    printProfessor() {
        let professor = { Nome: this.name,
            dataNascimento: this.birthDate,
            Altura: this.heigth,
            Disciplina: this._discipline,
            Email: this._email,
            Contato: this._cellphone };
        console.table(professor);
    }
}
