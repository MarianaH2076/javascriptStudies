import { Router } from 'express';
import { User } from '../domain/entities/user';
import { UserDto } from '../domain/dtos/user';

//Mapeamento das rotas
// /users
const userRoutes = Router();

let users: any[] = [];

const emailRegex =
     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

userRoutes.get('/', (request, response) => {
    return response.json(users);
});

interface GetParams {
    id:  number;
}

userRoutes.get('/:id', (request: Request<GetParams>, response: Response) => {
    const { id } = request.params;
    const user = users.find((x: { id: number; }) => x.id === id);

    if(!user){
        return response.status(404).json({
            message: 'User not found'
        });
    }

    return response.send(user);
});

userRoutes.post(
    '/', 
    (request: Request<{}, {}, UserDto>, response: Response) => {
        const user = request.body;

        if(!user.id){
            return response.status(400).json({
                field: 'id',
                message: 'Id is invalid!'
            })
        }

        if(!user.name){
            return response.status(400).json({
                field: 'name',
                message: 'Name is invalid!'
            })
        }

        if(!user.email || !emailRegex.test(user.email)){
            return response.status(404).send({
                field: 'email',
                message: 'Email is invalid!'
            })
        }

        users.push(user);
        return response.json(user);
    }
);

interface PutParams {
    id: number;
}

userRoutes.put(
    '/:id', 
    (
        request: Request<PutParams, {}, Omit<UserDto, 'id'>>, 
        response: Response
    ) => {
        const { id } = request.params;
        const userIndex = users.findIndex((x: { id: number; }) => x.id == id);

        if(userIndex === -1){
            //retornar que não encontrou
            return response.status(404).json({
                message: 'User not found!'
            });
        };

        users[userIndex].name = request.body.name;
        users[userIndex].email = request.body.email;

        return response.json(users[userIndex]);
    }
);

interface DeleteParams {
    id: number;
}

userRoutes.delete(
    '/:id', 
    (request: Request<DeleteParams>, response: Response) => {
        const {id} = request.params;

        // procurar se o usuário existe
        const userIndex = users.find((x) => x.id === Number(id));
        const userExists = userIndex > -1;

        if(!userExists){
            return response.status(404).json({
                message: 'User not found!'
            });
        }

        users = users.filter((x: { id: number; }) => x.id != Number(id));
        return response.json({
            message: 'User deleted succeeded!'
        });
    }
);

export default userRoutes;