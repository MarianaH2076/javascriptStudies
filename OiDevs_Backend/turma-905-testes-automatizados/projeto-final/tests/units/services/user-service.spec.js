const UserService = require('../../../src/services/user-service')
const User = require('../../../src/schemas/User')
const mockUser = require('../../mocks/user-mock')
const userMock = require('../../mocks/user-mock')

const createdUserMock = () => ({ id: 1 })


describe('User Service', () => {
    it('Deve retornar um ID para usuários criados', async () => {
        jest.spyOn(User, 'create').mockImplementationOnce(createdUserMock)
        
        const created = await UserService.createUser({
            email: 'any_email@mail.com',
            name: 'Any Name',
            password: '123456'
        })

        expect(created).toHaveProperty('id')
    })

    // it('Deve retornar falso se o usuário não estiver cadastrado', async () => {
    //     const spy = jest.spyOn(User, 'findOne').mockImplementationOnce(() => false)
        
    //     const result = await UserService.userExistsAndCheckPassword({
    //         email: 'any_email@mail.com',
    //         password: '123456'
    //     })

    //     expect(spy).toHaveBeenCalled();
    //     expect(result).toBe(false)
    // })

    // it('Deve retornar 400 se a senha não conferir', async () => {
    //     const spy = jest.spyOn(User, 'findOne').mockImplementationOnce(() => {mockUser})
    //     try {
    //         const result = await UserService.createUser({
    //             email: 'any_email@mail.com',
    //             password: '123456'
    //         }) 
    //     } catch (error) {
    //         expect(spy).toHaveBeenCalled()
    //         expect(error.status).toBe(400)
    //         expect(error.message).toBe("As senhas não batem")
    //     }  
    // })

    // it('Deve retornar 200 se o usuário e a senha estiverem ok', async () => {
    //     const spy = jest.spyOn(User, 'findOne').mockImplementationOnce(() => mockUser)
        
    //     const result = await UserService.userExistsAndCheckPassword(mockUser)

    //     expect(spy).toHaveBeenCalled();
    //     expect(result).toBe(false)
    // })

    // it('Deve retornar true se o usuário e a senha estiverem ok', async () => {
    //     const spy = jest.spyOn(User, 'findOne').mockImplementationOnce(() => userMock)
        
    //     const result = await UserService.userExistsAndCheckPassword(mockUser)
    // })
    
})