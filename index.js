import express from 'express';
import router from './routes/legapp.routes.js';
import {urlencoded, json} from 'express';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// middlewares
app.use(cors());
app.use(urlencoded({extended: true}));
app.use(json());

//archivos estaticos
app.use(express.static(path.join(__dirname, './static')));
// rutas
app.use('/', router);

// ejecución del servidor
app.listen(4500,()=>{
    console.log("Server running on port 4500");
});

//Prueba git hub
//Prueba 2 git hub