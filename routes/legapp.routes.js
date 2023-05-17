import express from 'express';
import { getUsers, getUser, createProvider, createUser, modifyStateUser, updateProvider, updateUser, getProviders, 
    createSpent, getSpents, updateStateProvider, updateStateSpent, updateSpent, insertLegalization} from '../controllers/legapp.controllers.js';
import { validateUser } from '../middlewares/auth.js';

import storage from '../multer.js';
import multer from 'multer';

const uploader = multer({storage});

//Llamando el objeto Router de express para dar ruta a los métodos
const router = express.Router();

//Usando el método GET del objeto router
router.get('/usuarios', getUsers);

//Método GET para obtener información de proveedores
router.get('/proveedores', getProviders);

//Método GET para obtener información de gastos
router.get('/getSpents', getSpents);

//Método post para validación de usuarios
router.post('/getUser', validateUser, getUser);

//Método post para creación de proveedor
router.post('/createProvider', createProvider);

//Método post para creación de usuarios
router.post('/createUser', createUser);

//Método POST para creación de gastos
router.post('/createSpent', createSpent);

//Método POST para creacion de legalizacion
router.post('/createLegalization', uploader.single('file'), insertLegalization);

//Método patch para actualizar el estado del usuario
router.patch('/modifyState', modifyStateUser);

//Método patch para actualizar valores en la tabla proveedor
router.patch('/updateProvider', updateProvider);

//actualizar usuario con Params
router.patch('/updateUser/:emailToValidate', updateUser);

//actualizar estado del proveedor
router.patch('/updateStateProvider', updateStateProvider);

//actualizar tipo de gasto
router.patch('/updateStateSpent',updateStateSpent);

//actualizar nombre de gasto
router.patch('/updateSpent',updateSpent);

export default router;