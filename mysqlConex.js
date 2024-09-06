const { Sequelize } = require('sequelize');

// Configura tus credenciales de MySQL
const sequelize = new Sequelize('LibMal', 'consul', '@y1fs3#d1k0u', {
    host: 'localhost', // o la dirección de tu servidor de base de datos
    dialect: 'mysql',
    logging: true // Puedes habilitarlo para ver las consultas en la consola
});

// Verificar la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a MySQL establecida exitosamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a MySQL:', err);
    });

module.exports = sequelize;
