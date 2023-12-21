const SessionService = require("../../../src/services/session-service");
const dotenv = require("dotenv");
const Email = require("../../../src/utils/email-validator");
dotenv.config();

// const createdUserMock = () => ({ id: 1 })

describe('Session Service', () => {
    it("Deve retornar um token quando recebe um email", async () => {
        const result = await SessionService.generateToken({email: "email@gmail.com"})
        let tokenRegex = new RegExp(/^[A-Za-z0-9-=]+.[A-Za-z0-9-=]+.?[A-Za-z0-9-_.+/=]*$/)

        expect(result).toMatch(tokenRegex);
    })
})