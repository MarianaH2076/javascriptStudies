import { Request, Response } from 'express';

let clients: any[] = [];

// Criação do usuário

export function createClient (request: Request, response: Response) {
    
}

// //Get
// export function listClients (request: Request, response: Response) {
//     return response.json(clients);
// }

// //Get /:id
// export function getClient(request: Request, response: Response) {
//     const { id } = request.params;
//     const client = clients.find((client) => client.id === Number(id));

//     if (!client) {
//         return response.status(404).json({
//             message: 'Client not found!'
//         });
//     };

//     return response.json(client);
// }

// //Post
// export function createClient(request: Request, response: Response) {
//     const client = request.body;

//     if(!client.id) {
//         return response.status(400).json({
//             message: 'Nam cannot be empty!'
//         })
//     };

//     if(!client.name) {
//         return response.status(400).json({
//             message: 'Name cannot be empty!'
//         })
//     };

//     clients.push(client);
//     return response.json(client);
// }

// //Put
// export function updateClient(request: Request, response: Response) {
//     const { id } = request.params;
//     const clientIndex = clients.findIndex((client) => client.id === Number(id));

//     if(!clientIndex) {
//         return response.status(404).json({
//             message: 'Client not found!'
//         });
//     }

//     clients[clientIndex].id = request.body.id;
//     clients[clientIndex].name = request.body.name;

//     return response.json(clients[clientIndex]);

// }

// //Delete
// export function deleteClient(request: Request, response: Response) {
//     const { id } = request.params;
//     clients = clients.filter((client) => client.id !== Number(id));

//     return response.json({
//         message: 'Client deleted!'
//     })
// }