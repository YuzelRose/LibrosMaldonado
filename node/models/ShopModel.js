import mongoose from 'mongoose';

const CompraModels = new mongoose.Schema({
    UserMail: {
        type: String,
        required: true,
    },
    IDRef: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'compras' });

const Compra = mongoose.model('Compra', CompraModels);
export default Compra;
