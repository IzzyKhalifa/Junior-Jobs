const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {}

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },

        job_number: {
            type: DataTypes.INTEGER,
            
        },

        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        profile_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        business_stream_id: {
            type: DataTypes.STRING,

        },
        establishment_date: {
            type: DataTypes.DATEONLY,

        },


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Company',
    }
)


