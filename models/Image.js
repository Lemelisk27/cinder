// Table to store the URLs of the user's images.

const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init({
    url: {
        type: DataTypes.TEXT
    }
},
{
    sequelize,
    timestamps: false
})

module.exports=Image