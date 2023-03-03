import { Router } from 'express';
import { clientController } from '../controllers/client.controller.js'

const router = Router();

router.post('/create_client' , (req, res) => clientController.create_client(req, res));
router.get('/client_all', (req, res) => clientController.client_all(req,res));
router.put('/update_client' , (req, res) => clientController.update_client(req, res));
router.delete("/delete_client/:IdCliente", (req, res) => clientController.delete_client(req, res));
router.get("/getClientById/:IdCliente", (req, res) => clientController.getClientById(req, res));

export default router;