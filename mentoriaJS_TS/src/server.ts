import express, {Request, Response} from 'express';
import { router } from './routes/userRoutes';

const server = express();
const port = process.env.PORT ?? 3000;

//Middleware
server.use(express.json());

//Adicionando as rotas
server.use("/", router);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})