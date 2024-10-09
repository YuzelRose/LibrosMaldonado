import mongoose from 'mongoose';

const RegistroModels = new mongoose.Schema({
    Mail: { 
        type: String,
        required: true,
    }
}, { collection: 'registro' });

const Registro = mongoose.model('Registro', RegistroModels); 
export default Registro;
