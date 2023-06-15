const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456789pro',
    database: 'appbank',
    port: '5432',
    logging: false
});

module.exports = {db}