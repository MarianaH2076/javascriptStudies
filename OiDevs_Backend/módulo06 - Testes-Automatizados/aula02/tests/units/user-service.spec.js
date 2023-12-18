const { cpf: cpfValidator } = require("cpf-cnpj-validator");
const { faker } = require("@faker-js/faker");

const UserService = require("../../src/services/user-service");
const db = require("../../src/database/index")

const dbSuccessMock = {
    findByCpf: (cpf) => {
        return true;
    },
    create: ({ nome, cpf, email }) => {
        return { id: 1 }
    }
}

const dbFailedMock = {
    findByCpf: (cpf) => {
        return false
    }
}

const userMock = {
    nome: faker.name.firstName(),
    cpf: cpfValidator.generate(),
    email: faker.internet.email()
}

// const dbMock = {
//     findByCpf: (cpf) => true
// }

describe('[User Service] userExists', () => {
    it('Should return true if user exists (Original Implementantion', () => {
        const userExists = UserService.userExists('123456')
        expect(userExists).toBe(true)
    });

    it('Should return true if user exists', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbSuccessMock.findByCpf);

        const userExists = UserService.userExists('123456');
        expect(userExists).toBe(true)
    });

    it("Should return false true if user doesn't exist", () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbFailedMock.findByCpf);

        const userExists = UserService.userExists('12345656423');
        expect(userExists).toBe(false)
    });

    it("Should return false true if no cpf is provided", () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbFailedMock.findByCpf);

        const userExists = UserService.userExists();
        expect(userExists).toBe(false)
    });

});

describe('[User Service] signUp', () => {
    it('Should return an id for a new created user', () => {
        jest.spyOn(db, 'create').mockImplementationOnce(dbSuccessMock.create);

        const createdUser = UserService.signUp(userMock);

        expect(createdUser).toMatchObject({ id: 1 });
    });
});



// describe('User Service tests', () => {
//     it('Should return true if user exists', () => {
//         jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbMock.findByCpf);
//             //conseguimos definir uma função que ele vai "espionar"
                
//         const userExists = UserService.userExists('123456')
//         expect(userExists).toBe(true)
//     })
    
// });