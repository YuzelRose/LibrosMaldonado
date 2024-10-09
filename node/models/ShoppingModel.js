import mongoose from 'mongoose';

const CompraModels = new mongoose.Schema({
    IDUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', 
        required: true,
    },
    IDLibro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Libro', 
        required: true,
    },
    FechaCompra: {
        type: Date,
        default: Date.now,
    },
    Cantidad: {
        type: Number,
        required: true,
    },
}, { collection: 'compras' });

const Compra = mongoose.model('Compra', CompraModels);
export default Compra;
