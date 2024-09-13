import mysql from '../database/MysqlConex.js';
import { DataTypes } from 'sequelize';

const LibroModels = mysql.define('Libro', { 
    IDLibro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(40), 
        allowNull: false
    },
    Sinopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Costo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Existencias: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    URLImagen: {
        type: DataTypes.STRING(40), 
        allowNull: false
    }
}, {
    tableName: 'Libro', 
    timestamps: false 
});

export default LibroModels;
