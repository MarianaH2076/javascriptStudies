const db = {
    '123456': {
        nome: 'Esdras',
        cpf: '123456',
        email: 'esdras@gmail.com'
    }
}

module.exports = {
    findByCPF: (cpf) => {
        return db[cpf] || null
    },

    create: ({nome, cpf, email}) => {
            //desestruturado pra ficar mais fácil visualizar o que está chegando como parâmetro
        db[cpf] = {
            id: Math.floor(1000+Math.random() * 9000),
            nome,
            cpf,
            email
        }

        return { id: db[cpf].id };

    }
}