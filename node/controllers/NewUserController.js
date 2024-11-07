import NewUser from '../models/NewUserModel.js'
import { RegisterMail } from './MailController.js';

export const getNewUser = async (req, res) => {
    try {
        const newUser = await NewUser.findById(req.params.key); 
        if (!newUser) return res.status(404).json({ message: 'Key no valida' });
        res.json(newUser); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postNewUser = async (req, res) => {
    try {
        const { Nombre, Correo, Contrasena } = req.body;

        const newUser = new NewUser({
            Nombre,
            Correo,
            Contrasena
        });

        const savedUsuario = await newUser.save();

        await RegisterMail({ email: Correo, key: savedUsuario._id });

        res.status(201).json({
            message: 'Usuario en espera',
            usuario: savedUsuario
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};