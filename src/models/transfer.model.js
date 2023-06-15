const {DataTypes} = require('sequelize');
const {db} = require('../database/config');

//transfer model
const Transfer = db.define('transfer', {
    senderUserId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    receiverUserId:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Transfer;