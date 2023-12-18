import express from 'express';
import router from './routes';

const server = express();
const port = 3333;

// Deserialização
server.use(express.json());
server.use(router);

server.listen(port, () => {
    return console.log (`Server is running on port ${port}`)
});