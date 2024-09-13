import express from 'express';
import cors from 'cors';
import mysql from './database/MysqlConex.js'; 
import mysqlRoutes from './routes/routes.js'; 

const app = express();

app.use(cors());
app.use(express.json());
app.use('/LibrosMaldonado', mysqlRoutes);

(async () => {
    try {
        await mysql.authenticate(); 
        console.log('MySQL ready');
    } catch (error) {
        console.error(`MySQL falló con resultado: ${error}`); 
    }
})();

/*app.get('/', (req, res) => {
    res.end('hola mundo');
});*/

// Configuración básica del servidor
app.listen(5000, () => {
    console.log("Server Running");
});
