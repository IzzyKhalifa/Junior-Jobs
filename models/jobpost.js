const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Jobpost extends Model {}

Jobpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        posted_by_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        job_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_name: {
            type: DataTypes.STRING,
           
        },
        date_created: {
            type: DataTypes.DATEONLY,

        },
        job_description: {
            type: DataTypes.STRING,

        },
        job_location_id: {
            type: DataTypes.INTEGER
        },
        is_active: {
            type: DataTypes.BOOLEAN
        }




    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
)

