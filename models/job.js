const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        
        },

        Company_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        date_created: {
            type: DataTypes.DATE, 
            defaultValue: DataTypes.NOW,
            

        },
        job_description: {
            type: DataTypes.STRING,
        },

        company_website: {
            type: DataTypes.STRING,

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
        modelName: 'jobs',
    }
)

