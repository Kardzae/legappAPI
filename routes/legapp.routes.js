import express from 'express';
import { getUsers, getUser } from '../controllers/legapp.controllers.js';
import { validateUser } from '../middlewares/auth.js';
//Llamando el objeto Router de express para dar ruta a los métodos
const router = express.Router();

//Usando el método GET del objeto router
router.get('/usuarios', getUsers);

router.post('/getUser', validateUser, getUser);

export default router;