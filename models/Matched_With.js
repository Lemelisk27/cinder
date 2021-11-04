// A table that shows all previous matchs so people aren't matched twice.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Matched_With extends Model {}

Matched_With.init({
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

module.exports=Matched_With