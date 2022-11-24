const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
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
            defaultValue: "",
        },

        City: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
           
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

module.exports = Job;

