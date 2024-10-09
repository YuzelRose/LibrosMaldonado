import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/LibMal';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('base de datos ejecutando');
})
.catch(err => {
    console.error('Error de conexión a base de datos:', err);
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Conexión a la base de datos establecida');
});
