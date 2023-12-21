const { authorizationMock, responseMock } = require('../../mocks/controllers-mocks')
const auth = require('../../../src/middlewares/auth')

let next = jest.fn();

describe('[Unit] Auth middleware', () => {
    it('Deve retornar status 401 se o token não for passado', async () => {
        const result = await auth(authorizationMock(""), responseMock, next);

        expect(result.status).toBe(401);
        expect(result.data.message).toBe('Token is not provided');
    })
})