import mysql from '../database/MysqlConex.js';
import { DataTypes } from 'sequelize';

const UserModel = mysql.define('Libro', { 
    IDUsuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(40), 
        allowNull: false
    },
    Correo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Contrasena: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Telefono: {
        type: DataTypes.STRING(13),
        allowNull: false
    },
    Direccion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'Libro', 
    timestamps: false 
});

export default UserModel;
