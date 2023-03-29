import {pool} from '../db/db.js';

/**
 * Validación de usuario existente en la BD
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
export const validateUser = async (req, res, next)=>{
    const {email, password} = req.body;

    //destructuracion de Array para la respuesta de una consulta SELECT
    const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ? AND password = MD5( ? )', [email, password]);

    //Envío de respuesta al cliente
    if(rows.length > 0){
        //función para pasar al siguiente callback, el cual es la lógica del controlador
        next();
    }else{
        //en el caso de no ser encontrador el usuario en la BD
        res.json({message: "User not found"});
    }
}
