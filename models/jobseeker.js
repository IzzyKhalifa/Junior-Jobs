const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class JobSeeker extends Model {}

JobSeeker.init(
    {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },

        first_name: {
            type: DataTypes.STRING
        },

        last_name: {
            type: DataTypes.STRING
        },

        Certificate: {
            type: DataTypes.STRING
        },

        linkedin: {
            type: DataTypes.STRING
        },

        personal_Website: {
            type: DataTypes.STRING
        },


    },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'Jobseeker',
        }

)