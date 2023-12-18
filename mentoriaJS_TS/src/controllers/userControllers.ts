//Recebe as requisições do cliente
//Retorna as respostas

import { Request, Response } from 'express';
import { UserService } from '../services/userServices';
import { PrismaClient } from "@prisma/client";
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();
const userService = new UserService();


export class UserController {

    async createUser(request: Request, response: Response){
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Requisição ${request.body} recebida`
         }))

        const { name, email } = request.body;

        const newClient = { name, email };

        userService.createUser(newClient);

        response.status(201).json(newClient);

    }

    async getAllUsers(request: Request, response: Response){
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Requisição getAllUsers recebida`
         }));

        const users = await userService.getAllUsers();

        response.status(200).json(users);
    }

    async getUserById(request: Request, response: Response){     
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Requisição getUserById, ${JSON.stringify(request.params)} recebida`
         }));

        const { id } = request.params;

        const userToFind = await userService.getUserById(id);

        if(userToFind){
            console.log("Usuário encontrado");
            response.status(200).json(userToFind);
        }
        else {
            console.log("Erro: usuário não encontrado");
            response.status(404).json({ error: "Usuário não encontrado"});
        }
    }

    async updateUser (request: Request, response: Response){
         console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Requisição updateUser, ${request.body} recebida`
         }));

        const { id } = request.params;
        const { name, email } = request.body;
        const updatedUser = { name, email };

        const user = await userService.updateUser(id, updatedUser);

        if(!user){
            console.log("Erro: usuário não encontrado");
            return response.status(404).json({ error: "Usuário não encontrado"});
        }

        response.status(200).json(user);

    }

    async deleteUser(request: Request, response: Response) {        
        console.log(JSON.stringify({ 
            correlationId: global.correlationId,
            message: `Requisição deleteUser, ${request.params} recebida`
         }));

        const { id } = request.params;

        const isDeleted = await userService.deleteUser(id);

        if(isDeleted){
            response.status(200).json({ message: "Usuário deletado"});
        }
        else {
            console.log ("Erro: usuário não encontrado");
            response.status(404).json({ error: "Usuário não encontrado"});
        }
    }
}