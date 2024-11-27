import express from 'express';
import cors from 'cors';
import './database/MongoConex.js'; 
import AutorRoutes from './routes/AutorRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import BookRoutes from './routes/BookRoutes.js';
import MailRoutes from './routes/MailRoutes.js';
import NewUserRoutes from './routes/NewUserRoutes.js';
import AlterUserRoutes from './routes/AlterUserRouter.js';
import TokenRoutes from './routes/TokenRoutes.js'
import ShopRoutes from './routes/ShopRouter.js'

import { REQUEST_URL, BACK_POT } from './config.js';

const app = express();

app.use(cors({
    origin: [
        'https://librosmaldonado.shop', 
        'http://localhost:5000', 
        'http://localhost:3000', 
        'https://www.librosmaldonado.shop',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json());

app.use(`${REQUEST_URL}/Mail`, MailRoutes)
app.use(`${REQUEST_URL}/NewUser`, NewUserRoutes)
app.use(`${REQUEST_URL}/Autores`, AutorRoutes);
app.use(`${REQUEST_URL}/Usuarios`, UserRoutes);
app.use(`${REQUEST_URL}/AlterUser`, AlterUserRoutes);
app.use(`${REQUEST_URL}/Libros`, BookRoutes);
app.use(`${REQUEST_URL}/Access`, TokenRoutes);
app.use(`${REQUEST_URL}/Shop`, ShopRoutes);

app.listen(BACK_POT, '0.0.0.0', () => {
    console.log(`Servidor en ejecución, puerto: ${BACK_POT}`);
});