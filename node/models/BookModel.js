import mongoose from 'mongoose';

const LibroModels = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Sinopsis: {
        type: String,
        required: true,
    },
    Descuento: {
        type: Number,
        default: 0, 
    },
    Costo: {
        type: Number,
        required: true,
    },
    Existencias: {
        type: Number,
        required: true,
    },
    Ventas: {
        type: Number,
        default: 0, 
    },
    URLImagen: {
        type: String,
        default: 'n/d', 
    },
    Autores: [{
        type: String,
        required: true,
    }],
}, { collection: 'libro' });

const Libro = mongoose.model('Libro', LibroModels);
export default Libro;