import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
    token: {
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
}, { collection: 'token' });

TokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3000 });

TokenSchema.pre('save', async function (next) {
    const tokenCount = await mongoose.model('Token').countDocuments();
    if (tokenCount > 0) {
        throw new Error('Only one token can exist at a time.');
    }
    next();
});

const Token = mongoose.model('Token', TokenSchema);
export default Token;
