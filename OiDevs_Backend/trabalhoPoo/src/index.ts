class Pessoa {
    private _name:string
    private _birthDate:string
    private _heigth:number

    constructor(
        name:string, 
        birthDate:string, 
        heigth:number){
        this._name = name
        this._birthDate = birthDate
        this._heigth = heigth
    }

    get name(): string{
        return this._name
    }

    set changeName(n:string){
        this._name = n
    }

    get birthDate(): string{
        return this._birthDate
    }

    set changeBirthDate(d:string){
        this._birthDate = d
    }

    get heigth(): number{
        return this._heigth
    }

    set changeHeigth(h:number){
        this._heigth = h
    }

    public printData():void{
        let person = {Nome: this._name, Nascimento: this._birthDate, Altura: this._heigth}
        console.table(person)
    }

    public age():void{
        let d = new Date
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        let day = d.getDate()

        let birthYear = Number(this.birthDate.split("/")[2])
        let birthMonth = Number(this.birthDate.split("/")[1])
        let birthDay = Number(this.birthDate.split("/")[0])

        let age = year - birthYear

        if (month < birthMonth || month === birthMonth && day < birthDay){
            age--
        }

        console.log(age)
    }

}


class Agenda {
    private contacts: Pessoa[] = []

    public addContact(nome: Pessoa):void{
        if(this.contacts.length < 10){
            this.contacts.push(nome)
        } else {
            console.log("Não é possível acrescentar mais contatos porque a agenda está em sua capacidade máxima")
        }
        
    }

    public removeContact(nome:string):void{
        if(this.contacts.find((n) => n.name === nome)) {
            const agendaAtualizada = this.contacts.filter((f) => f.name != nome)
            this.contacts = agendaAtualizada    
        } else {
            console.log("Erro: esse contato não está salvo na agenda, portanto não é possível removê-lo")
        }
    }

    public searchContact(nome:string):void{
        if(this.contacts.find((i) => i.name === nome)){
            const search = this.contacts.findIndex((i) => i.name === nome)
            console.log(search)
        } else {
            console.log("Desculpe, essa pessoa não está na agenda")
        }
    }

    public printAgenda():void{
        console.table(this.contacts)
    }

    public printContact(index:number):void{
        if(index < this.contacts.length){
            console.table(this.contacts[index])
        } else {
            console.log("O índice informado não é válido")
        }
    }

}


class Alunos extends Pessoa{
    private email:string
    private cellphone:string
    private grade1:number = 0
    private grade2:number = 0
    private grade3:number = 0

    constructor(
        name:string, 
        birthDate:string, 
        heigth:number, 
        email:string, 
        cellphone:string){
        super(name, birthDate, heigth)
        this.email = email
        this.cellphone = cellphone
    }

    public addGrades(grade1:number, grade2:number, grade3:number){
        this.grade1 = grade1        
        this.grade2 = grade2
        this.grade3 = grade3
        const grades = {nota1:grade1, nota2:grade2, nota3:grade3}

        return grades
    }

    public averageGrade(){
        return (((this.grade1 + this.grade2 + this.grade3) / 3).toFixed(1))
    }

}


class Professores extends Pessoa{
    private _discipline:string
    private _email:string
    private _cellphone:string

    constructor(
        name:string, 
        birthDate:string, 
        heigth:number, 
        discipline:string, 
        email:string, 
        cellphone:string){
        super(name, birthDate, heigth)
        this._discipline = discipline
        this._email = email
        this._cellphone = cellphone

    }

    get discipline(): string{
        return this._discipline
    }

    set changeDiscipline(d:string){
        this._discipline = d
    }

    get email(): string{
        return this._email
    }

    set changeEmail(e:string){
        this._email = e
    }

    get cellphone(): string{
        return this._cellphone
    }

    set changeCellphone(c:string){
        this._cellphone = c
    }

    public printProfessor():void{
        let professor = {Nome: this.name,
            dataNascimento: this.birthDate,
            Altura: this.heigth,
            Disciplina: this._discipline,
            Email: this._email,
            Contato: this._cellphone}


        console.table(professor)
    }

}