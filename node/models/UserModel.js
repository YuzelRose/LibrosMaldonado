import mongoose from 'mongoose';

const UsuarioModels = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    Contrasena: {
        type: String,
        required: true,
    },
    Telefono: {
        type: String,
        required: true,
        default: 'no dado', 
    },
    Direccion: {
        type: String,
        required: true,
        default: 'no dada', 
    },
}, { collection: 'usuario' });

const Usuario = mongoose.model('Usuario', UsuarioModels);
export default Usuario;
