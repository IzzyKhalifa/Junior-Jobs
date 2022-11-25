const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class JobSeeker extends Model {}

JobSeeker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    first_name: {
      type: DataTypes.STRING,
    },

    Email: {
      type: DataTypes.STRING,
    },

    Phone_Number: {
      type: DataTypes.STRING,
    },

    Website: {
      type: DataTypes.STRING,
    },

    Github: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Jobseeker",
  }
);

module.exports = JobSeeker;
