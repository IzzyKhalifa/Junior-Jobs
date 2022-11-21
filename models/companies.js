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
            validate: {
                max: 1000,
                isIn: {
                    args: [['en']],
                    msg: "must be in english"
                }
            }
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
        modelName: 'category',
    }
)

// id: number
// company_name: varchar(50)
// profile_description:varChar(1000)
// business_stream_id:number (foreign key)
// establishment_date:date
// company_website:varchar(500)
