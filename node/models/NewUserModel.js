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
    createdAt: { 
        type: Date, 
        default: Date.now, 
        required: true 
    }
}, { collection: 'nuevousuario' });

NuevoUsuarioModel.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });
const NuevoUsuario = mongoose.model('NuevoUsuario', NuevoUsuarioModel);
export default NuevoUsuario;
