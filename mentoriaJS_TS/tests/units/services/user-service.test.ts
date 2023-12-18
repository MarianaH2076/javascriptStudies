
// import { expect, jest, test } from '@jest/globals';
// import {UserService} from '../../../src/services/userServices';
// import { prismaClient } from '../../../src/database/prismaClient';
// import { randomUUID } from 'crypto';

// const userService = new UserService();

// describe("[Unit] User Service", () => {

//     test("Deve retornar uma ID para um usuário criado", async () => {
//         //setup
//         const mockCreate = jest.spyOn(prismaClient.client, 'create');
//         const mockUser = {
//             id: randomUUID(),
//             name: 'user1',
//             email: 'user1@email.com'
//         }

//         mockCreate.mockResolvedValue(mockUser);

//         //ação
//         const result = await userService.createUser({
//             "name": "user",
//             "email": "user5@email.com"
//         })

//         //verificação
//         expect(mockCreate).toHaveBeenCalled();
//         expect(result).toEqual(mockUser);

//     })

//     test("Deve retornar todos os usuários já criados", async () => {
//         //setup
//         const mockFindMany = jest.spyOn(prismaClient.client, 'findMany');
//         const mockUsers = [
//             { id: '1', name: 'user1', email: 'user1@email.com' },
//             { id: '2', name: 'user2', email: 'user2@email.com' }
//         ]

//         mockFindMany.mockResolvedValue(mockUsers);

//         //ação
//         const result = await userService.getAllUsers();

//         //verificação
//         expect(mockFindMany).toHaveBeenCalled();
//         expect(result).toEqual(mockUsers);

//     })

//     test("Deve retornar um usuário específico pela sua ID", async () => {
//         //setup
//         const mockFindFirst = jest.spyOn(prismaClient.client, 'findFirst');
//         const mockUser = { id: '1', name: 'user1', email: 'user1@email.com' }
    

//         mockFindFirst.mockResolvedValue(mockUser);

//         //ação
//         const result = await userService.getUserById('1');

//         //verificação
//         expect(mockFindFirst).toHaveBeenCalledWith({
//             where: { id: '1' },
//         });

//         expect(result).toEqual(mockUser);

//     })


//     test("Deve atualizar um usuário específico pela sua ID", async () => {
//         //setup
//         const mockUpdate = jest.spyOn(prismaClient.client, 'update');
//         const mockUser = { id: '1', name: 'user1', email: 'user1@email.com' }
    

//         mockUpdate.mockResolvedValue(mockUser);

//         //ação
//         const result = await userService.updateUser('1', {
//             name: 'user 1',
//             email: 'user1@GMAIL.com'
//         });

//         //verificação
//         expect(mockUpdate).toHaveBeenCalledWith({
//             where: { id: '1' },
//             data: { name: 'user 1', email: 'user1@GMAIL.com' }
//         });

//         expect(result).toEqual(mockUser);
//     })

//     test("Deve deletar um usuário específico pela sua ID", async () => {
//         //setup
//         const mockDelete = jest.spyOn(prismaClient.client, 'delete');
//         const mockDeleted = { id: '1', name: 'user1', email: 'user1@email.com' }
    

//         mockDelete.mockResolvedValue(mockDeleted);

//         //ação
//         const result = await userService.deleteUser('1');

//         //verificação
//         expect(mockDelete).toHaveBeenCalledWith({
//             where: { id: '1' }
//         });

//         expect(result).toEqual(true);
//     })

// })




import { expect, jest, test } from '@jest/globals';
import { UserService } from '../../../src/services/userServices';
import { prismaClient } from '../../../src/database/prismaClient';
import { Client, PrismaClient } from '@prisma/client';
import {randomUUID} from 'crypto';



describe("[Unit] User Service", () => {

    test("Deve retornar uma ID para um usuário criado", async () => {
				//setup

                const mockCreate = jest.fn().mockImplementation(() => Promise.resolve({
				    id: randomUUID(),
				    name: "user",
				    email: "user@email.com"
				}))

                const mockPrisma: any = {
                    client: ({
                        create: mockCreate
                    })
                }
                
                const userService = new UserService(mockPrisma as PrismaClient);

		
                const mockGetEmail = jest.spyOn(userService, 'isEmailAlreadyUsed').mockImplementation(() => Promise.resolve(false))
				
				jest.mock('../../../src/database/prismaClient', () => ({
				    prismaClient: ({
				        client: ({
				            create: mockCreate
				        })
				    })
				}))

        //ação
        const result = await userService.createUser({
            "name": "user",
            "email": "user001@email.com"
        });

        //verificação
        expect(mockCreate).toHaveBeenCalled();
    })
});
