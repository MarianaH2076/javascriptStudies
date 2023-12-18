import express from 'express';

import logs from './middlewares/logs';
import routes from './routes';

const server = express();
const port = 3333;

// Middleware
// habilitando a deserialização de json
server.use(express.json);

server.use(logs);

// adicionar as rotas
server.use(routes);


server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});