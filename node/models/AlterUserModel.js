import mongoose from 'mongoose';

const AlterarUsuarioModel = new mongoose.Schema({
    Correo: {
        type: String,
        required: true,
        lowercase: true,
    },
    Tipo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        required: true 
    }
}, { collection: 'alterarusuario' });

AlterarUsuarioModel.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });
const AlterarUsuario = mongoose.model('AlterarUsuario', AlterarUsuarioModel);
export default AlterarUsuario;