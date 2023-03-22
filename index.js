import express from 'express';
import router from './routes/legapp.routes.js';
import {urlencoded, json} from 'express';

const app = express();

// middlewares
app.use(urlencoded({extended: true}));
app.use(json());

// rutas
app.use('/', router);

// ejecución del servidor
app.listen(4500,()=>{
    console.log("Server running on port 4500");
});