import { Sequelize } from 'sequelize';

const mysql = new Sequelize('LibMal', 'consul', '@y1fs3#d1k0u', {
    host: 'localhost',
    dialect: 'mysql',
});

export default mysql;
