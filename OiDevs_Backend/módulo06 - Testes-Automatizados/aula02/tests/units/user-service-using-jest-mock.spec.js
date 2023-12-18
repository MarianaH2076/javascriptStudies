const { cpf: cpfValidator } = require("cpf-cnpj-validator");
const { faker } = require("@faker-js/faker");

const UserService = require("../../src/services/user-service");
const db = require("../../src/database");

jest.mock("../../src/database", () => ({
    findByCPF: () => true
}));

describe('[User Service] userExists', () => {
    it('Should return true if user exists', () => {
        const userExists = UserService.userExists('123456');
        expect(userExists).toBe(true)
    })
})