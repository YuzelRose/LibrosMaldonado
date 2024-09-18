import mysql from '../database/MysqlConex.js';
import { DataTypes } from 'sequelize';

const AutorModels = mysql.define('Autor', { 
    IDAutor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(40), 
        allowNull: false
    },
    Resumen: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'Autor', 
    timestamps: false 
});

export default AutorModels;