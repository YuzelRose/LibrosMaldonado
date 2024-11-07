import mongoose from 'mongoose';

const NuevoUsuarioModel = new mongoose.Schema({
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
}, { collection: 'nuevousuario' });

const NuevoUsuario = mongoose.model('NuevoUsuario', NuevoUsuarioModel);
export default NuevoUsuario;