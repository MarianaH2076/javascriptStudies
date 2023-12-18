"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClient = exports.listClients = void 0;
let clients = [];
// Criação dos métodos
//Get
function listClients(request, response) {
    return response.json(clients);
}
exports.listClients = listClients;
//Get /:id
function getClient(request, response) {
    const { id } = request.params;
    const client = clients.find((client) => client.id === Number(id));
    if (!client) {
        return response.status(404).json({
            message: 'Client not found!'
        });
    }
    ;
    return response.json(client);
}
exports.getClient = getClient;
//Post
function createClient(request, response) {
    const client = request.body;
    if (!client.id) {
        return response.status(400).json({
            message: 'Nam cannot be empty!'
        });
    }
    ;
    if (!client.name) {
        return response.status(400).json({
            message: 'Name cannot be empty!'
        });
    }
    ;
    clients.push(client);
    return response.json(client);
}
exports.createClient = createClient;
//Put
function updateClient(request, response) {
    const { id } = request.params;
    const clientIndex = clients.findIndex((client) => client.id === Number(id));
    if (!clientIndex) {
        return response.status(404).json({
            message: 'Client not found!'
        });
    }
    clients[clientIndex].id = request.body.id;
    clients[clientIndex].name = request.body.name;
    return response.json(clients[clientIndex]);
}
exports.updateClient = updateClient;
//Delete
function deleteClient(request, response) {
    const { id } = request.params;
    clients = clients.filter((client) => client.id !== Number(id));
    return response.json({
        message: 'Client deleted!'
    });
}
exports.deleteClient = deleteClient;
