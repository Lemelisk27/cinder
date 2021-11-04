// Aproved matches

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Second_Match extends Model {}

Second_Match.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user_1: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_2: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false 
})

module.exports=Second_Match