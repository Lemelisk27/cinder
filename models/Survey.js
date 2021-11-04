// Table for extended user data

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Survey extends Model {}

Survey.init({
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pref_gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    relationship: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    goal: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    language: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    worker: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ideal_date: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profile_pic: {
        type: DataTypes.TEXT
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