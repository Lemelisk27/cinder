// Future use, for posts on another user's page.

const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    post_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
},
{
    sequelize,
    timestamps: false  
})

module.exports=Post