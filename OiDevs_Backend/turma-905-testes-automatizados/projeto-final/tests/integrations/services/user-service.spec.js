const {
    requestMock, 
    requestMockWithoutEmail, 
    requestMockWithoutPassword, 
    responseMock
} = require('../../mocks/controllers-mocks')

// const UserServiceMock = class UserServiceMock {
//     static async createUser() {
//         return { id: 1 }
//     }
// }

require('dotenv').config()
const mongoose = require('mongoose')
// const { faker } = require('@faker-js/faker')
const UserController = require('../../../src/controllers/user-ctrl')
const User = require('../../../src/schemas/User')
// const UserService = require('../../../src/controllers/user-ctrl')
// const SessionController = require('../../../src/controllers/session-ctrl')
// const SessionService = require('../../../src/services/session-service')

const userDataMock = requestMock.body

describe('[Integration] User Service', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_DB_URL)
        await User.create(userDataMock)
    })
    
    afterAll(async () => {
        await User.deleteMany({})
        mongoose.connection.close()
    })
    

    it('Deve retornar um id se um usuário for criado', async () => {
                
        const res = await UserController.create(requestMock, responseMock)
        expect(res.data).toHaveProperty('id')
        expect(res.status).toBe(200);
    })

    it('Deve retornar status 400 se a senha não for passada como parametro', async () => {
            
        const res = await UserController.create(requestMockWithoutPassword, responseMock)
        
        expect(res.data).toBe('Senha inválida')
        expect(res.status).toBe(400)
        
    })

    it('Deve retornar status 400 se o email não for passado como parametro', async () => {
           
        const res = await UserController.create(requestMockWithoutEmail, responseMock)
        
        expect(res.data).toBe('Email inválido')
        expect(res.status).toBe(400)
    })
})