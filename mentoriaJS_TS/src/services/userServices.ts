import { randomUUID } from 'crypto';
import { prismaClient } from '../database/prismaClient';
import { PrismaClient } from '@prisma/client';

const uuid = randomUUID();

export class UserService {
    
    constructor(private readonly prisma: PrismaClient = prismaClient){

    } 

    async isEmailAlreadyUsed(email: string){
        const user = await this.prisma.client.findUnique({
            where: {
                email: email
            }
        })

        if(user){
            return true;
        }

        return false;
    }

    async createUser({name, email}: {name: string, email: string}) {
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Solicitação recebida de criação de um novo usuário`
         }));
        
        if(await this.isEmailAlreadyUsed(email)) {
            console.log("Erro: o e-mail já está em uso");
            throw Error(`Erro: o e-mail ${email} já está cadastrado`);
        }
    
        const newUser = await this.prisma.client.create({
            data: {
                name,
                email
            }
        });

        console.log("Novo usuário criado: ", newUser);
        return newUser;       
    };

    async getAllUsers(){
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Solicitação recebida de recuperação de todos os usuários`
         }));
        
        const users = await this.prisma.client.findMany();

        return users;
    }

    async getUserById(id: string) {        
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Solicitação de busca por um usuário recebida`
         }));

        const user = await this.prisma.client.findFirst({
            where: {
                id: id
            }
        });

        return user;
    }

    async updateUser(id: string, updatedUser: { name: string, email: string }){
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Solicitação recebida de atualização de um usuário`
         }));

        const { name, email } = updatedUser;

        const userToUpdate = await this.prisma.client.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email, 
            }
        })

        return userToUpdate;

    }

    async deleteUser(id: string): Promise<boolean> {
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Solicitação recebida de exclusão de um usuário`
         }));

        try {
            const deleteUser = await this.prisma.client.delete({
                where: {
                    id: id
                }
            });
            
            if(deleteUser){
                return true;
            } else {
                console.log("Erro: usuário não encontrado");
                return false
            }

        } catch (error: any) {
            console.log("Erro: ", error.message);
            return false;
            
        }

    }

}