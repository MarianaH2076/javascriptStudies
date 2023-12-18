import express from 'express';
//gerando variável que vai representar essa aplicação
const server = express();

const port = 3333;

const users = [];

// Endpoint
//1º que a gente faz
server.get('/', (request, response) => {
    response.send('Hello World from GET!');
})

server.post('/', (request, response) => {
    const user = request.body;
    console.log(user)
    response.send('Hello World from POST!')
})

//função que manda executar de fato, é aqui que vai realmente rodar a api
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})