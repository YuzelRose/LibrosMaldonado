import express from 'express';
import cors from 'cors';
import './database/MongoConex.js'; 
import AutorRoutes from './routes/AutorRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import BookRoutes from './routes/BookRoutes.js';

const app = express();
const URL = '/LibMal';

app.use(cors());
app.use(express.json());

app.use(`${URL}/Autores`, AutorRoutes);
app.use(`${URL}/Usuarios`, UserRoutes);
app.use(`${URL}/Libros`, BookRoutes);


app.listen(5000, () => {
    console.log("Servidor en ejecución");
});
