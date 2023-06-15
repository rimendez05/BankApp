const {DataTypes} = require('sequelize');
const {db} = require('../database/config');

//user model
const User = db.define('User', {
    id: {
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type:  DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        defaultValue: 1000
    },
    accountNumber:{
        type: DataTypes.INTEGER,
        defaultValue:100000
    },
    status: {
        type: DataTypes.ENUM("active", "disabled"),
        allowNull: false,
        defaultValue: "active"
    },
});

module.exports = User;