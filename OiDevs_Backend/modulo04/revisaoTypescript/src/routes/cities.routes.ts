import { Router } from 'express';

const citiesRoutes = Router();

let cities: any[] = [];

//GET - vai listar todas as cidades
citiesRoutes.get('/', (request, response) => {
    return response.send(cities);
});

//POST - vai adicionar novas cidades
citiesRoutes.post('/', (request, response) => {
    const city = request.body;
    cities.push(city);
    return response.send(city);
});


export default citiesRoutes;