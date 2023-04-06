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
/**
 * Creacion de proveedor
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
export const createProvider = async (req, res)=>{
    //Destructuración de valores nombreProveedor y telefonoProveedor desde el objeto body
    const {nit, nombreProveedor, telefonoProveedor, direccion, nombreContactoProveedor} = req.body;

    //Ejecución de la consulta SQL a la BD desde la función query del pool de conexión
    await pool.
        query("INSERT INTO proveedor(NIT, nombreProveedor, telefonoProveedor, direccion, nombreContactoProveedor) VALUES( ?, ?, ?, ?, ? )",
        [nit, nombreProveedor, telefonoProveedor, direccion, nombreContactoProveedor]);

    //mensaje del servidor en el caso de que se haya ejecutado correctamente el controlador para crear proveedores
    res.json({
        message: "Proveedor creado"
    });
}
/**
 * Creación de usuario 
 * @param {Object} req 
 * @param {Object} res 
 */
export const createUser = async (req, res)=>{
    //Destructuración de valores idRol, nombre, email y password desde el objeto body del request
    const {idRol, nombre, email, password} = req.body;

    //Ejecución de consulta SQL a la BD desde la función query del objeto pool
    await pool.query("INSERT INTO usuario(idRol, nombre, email, password, estado) VALUES(?, ?, ?, MD5(?), ?)",
        [idRol, nombre, email, password, 1]);

    res.json({
        message: "Usuario creado"
    });
    
}

export const modifyStateUser = async (req, res)=>{
    //Destructuración del valor estado desde el objeto body
    const {idUsuario, estado} = req.body;

    //Ejecución de consulta SQL a la BD por medio de la función query
    await pool.query("UPDATE usuario SET estado = ? WHERE idUsuario = ?", [estado, idUsuario]);

    //Mensaje del servidor
    res.json({
        message: "state of user modified"
    });
}

export const updateProvider = async (req, res)=>{

    const {id, nit, nombreProveedor, telefonoProveedor, direccion, nombreContactoProveedor} = req.body;

    await pool.
        query("UPDATE proveedor SET NIT = IFNULL(?, NIT), nombreProveedor = IFNULL(?, nombreProveedor), telefonoProveedor = IFNULL(?, telefonoProveedor), direccion = IFNULL(?, direccion), nombreContactoProveedor = IFNULL(?, nombreContactoProveedor) WHERE idProveedor = ?", 
        [nit, nombreProveedor, telefonoProveedor, direccion, nombreContactoProveedor, id]);

    res.json({
        message: "Provider updated"
    });
}
