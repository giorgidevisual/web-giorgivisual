import { Router } from "express";
import ClientController from '../controllers/ClientController'

const ClientRouter = Router();

ClientRouter.get('/', ClientController.getClients)


export default ClientRouter;