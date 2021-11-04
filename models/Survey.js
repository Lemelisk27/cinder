// Table for extended user data

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Survey extends Model {}

Survey.init({
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pref_gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    relationship: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    goal: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    language: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    worker: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ideal_date: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    profile_pic: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model:"user",
            key: "id",
        },
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'survey',
})

module.exports=Survey