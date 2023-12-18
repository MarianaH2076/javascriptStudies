import express from 'express';

const server = express();

//habilitando a deserialização do json (mando json pra aplicação)
server.use(express.json);

const users = [];

server.get('/', (request, response) => {
    return response.send(users);
})

server.post('/', (request, response) => {
    const user = request.body;
    users.push(user);
    return response.send(users);
});

server.put('/:id', (request, response) => {
    const { id } = request.params;
    const userIndex = users.findIndex(x => x.id === Number(id));

    if(userIndex === -1){
        //retornar que não encontrou
        return response.send('Not found');
    }

    users[userIndex].name = request.body.name;
    users[userIndex].email = request.body.email;

    return response.send(users[userIndex]);
});


server.listen(3333, () => {
    console.log("Server is running!")
});

