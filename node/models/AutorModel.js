import mongoose from 'mongoose';

const AutorModels = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Resumen: {
        type: String,
        required: true,
    },
    URLImage: {
        type: String,
        required: true,
        default: "Default"
    }
}, { collection: 'autor' });

const Autor = mongoose.model('Autor', AutorModels);
export default Autor;