import { Router } from 'express'
import { find_produtos, create_produtos, find_produtos_op } from './controllers/produtoController.js';

const routes = new Router();

routes.get("/produtos", find_produtos);
routes.get("/produtos/:qt", find_produtos_op);
routes.post("/produtos", create_produtos);


export default routes;