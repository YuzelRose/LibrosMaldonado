import Usuario from '../models/UserModel.js'
import bcrypt from 'bcrypt';

export const comparePasswords = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const postLogIn = async (req, res) => {
    try {
        const { Mail, Pass } = req.body;
        const user = await Usuario.findOne({ Correo: Mail });

        if (!user) return res.status(404).json({ message: 'Error al iniciar sesión' });

        const contrasenaValida = await comparePasswords(Pass, user.Contrasena);
        if (!contrasenaValida) return res.status(401).json({ message: 'Error al iniciar sesión' });
        const { Contrasena, ...userData } = user.toObject();
        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await Usuario.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        const { Contrasena, ...userData } = user.toObject();
        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { Nombre, Mail, Pass, Tel, Direc } = req.body;
    if (Pass.length < 8) return res.status(400).json({ message: 'La contraseña debe contener al menos 8 caracteres' });
    try {
        const user = await Usuario.findById(id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        if (Pass) {
            const salt = await bcrypt.genSalt(10);
            user.Contrasena = await bcrypt.hash(Pass, salt);
        }
        if (Nombre) user.Nombre = Nombre;
        if (Mail) user.Correo = Mail;
        if (Tel) user.Telefono = Tel;
        if (Direc)  user.Direccion = Direc;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};