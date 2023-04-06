import express from 'express';
import { getUsers, getUser, createProvider, createUser, modifyStateUser, updateProvider } from '../controllers/legapp.controllers.js';
import { validateUser } from '../middlewares/auth.js';
//Llamando el objeto Router de express para dar ruta a los métodos
const router = express.Router();

//Usando el método GET del objeto router
router.get('/usuarios', getUsers);

//Método post para validación de usuarios
router.post('/getUser', validateUser, getUser);

//Método post para creación de proveedor
router.post('/createProvider', createProvider);

//Método post para creación de usuarios
router.post('/createUser', createUser);

//Método patch para actualizar el estado del usuario
router.patch('/modifyState', modifyStateUser);


router.patch('/updateProvider', updateProvider);

export default router;