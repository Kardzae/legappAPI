import {pool} from '../db/db.js';

/**
 * Funcion controlador para obtención de usuarios
 * @param {Object} req 
 * @param {Object} res 
 */
export const getUsers = async (req, res)=>{
    //destructuracion de Array para la respuesta de una consulta SELECT
    const [rows] = await pool.query("SELECT * FROM usuario");

    //Envío de respuesta al cliente
    res.json(rows);
}

export const getUser = async (req, res)=>{

    //destructuracion del objeto body de request
    const {email, password} = req.body;

    //destructuracion de Array para la respuesta de una consulta SELECT en el caso de autenticacion de legalizador
    let [rows] = await pool.query('SELECT * FROM usuario WHERE email = ? AND password = MD5( ? ) AND idRol=1', [email, password]);

    //Envío de respuesta al cliente
    if(rows.length > 0){
        res.json(
            {
                message: 'user legalizador found',
                result: rows
            });
        res.end();
    }else{
        [rows] = await pool.query('SELECT * FROM usuario WHERE email = ? AND password = MD5( ? ) AND idRol=2', [email, password]);
        if(rows.length > 0){
            res.json(
                {
                    message: 'user Administrador found',
                    result: rows
                });
            res.end();
        }
    }
    
}