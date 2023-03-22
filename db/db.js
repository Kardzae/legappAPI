import {createPool} from 'mysql2/promise';

//Creando la conexión a la Base de datos
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_legapp'
});