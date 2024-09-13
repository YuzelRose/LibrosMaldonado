const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibMal');
const DB = mongoose.connection
DB.on('connected',() => {console.log('Conexion correcta a mongodb')})
DB.on('error',() => {console.log('Conexion fallida a mongodb')})

module.exports = mongoose