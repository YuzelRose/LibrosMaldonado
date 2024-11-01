import express from 'express';
import cors from 'cors';
import './database/MongoConex.js'; 
import AutorRoutes from './routes/AutorRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import BookRoutes from './routes/BookRoutes.js';
import { REQUEST_URL, BACK_POT } from './config.js';

const app = express();

app.use(cors({
    origin: ['https://librosmaldonado.shop', 'http://localhost:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json());

app.post('/email',(req, res)=>{

})

app.use(`${REQUEST_URL}/Autores`, AutorRoutes);
app.use(`${REQUEST_URL}/Usuarios`, UserRoutes);
app.use(`${REQUEST_URL}/Libros`, BookRoutes);

app.listen(BACK_POT, '0.0.0.0', () => {
    console.log(`Servidor en ejecución, puerto: ${BACK_POT}`);
});