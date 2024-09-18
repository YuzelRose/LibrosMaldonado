import mysql from '../database/MysqlConex.js';
import { DataTypes } from 'sequelize';

const UserModels = mysql.define('Usuario', { 
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
        allowNull: true
    },
    Direccion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Usuario', 
    timestamps: false 
});

export default UserModels;
