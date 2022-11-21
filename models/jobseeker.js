const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class JobSeeker extends Model {}

JobSeeker.init(
    {
        seeker_profile: {
            type: DataTypes.STRING
        },

        first_name: {
            type: DataTypes.STRING
        },

        last_name: {
            type: DataTypes.STRING
        },

        current_salary:{
            type: DataTypes.INTEGER
        },

        is_annually_monthly: {
            type: DataTypes.INTEGER
        },

        currency: {
            type: DataTypes.STRING
        }

        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'category',
        }

    }
)