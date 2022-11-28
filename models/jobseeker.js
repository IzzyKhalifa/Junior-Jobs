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

    email: {
      type: DataTypes.STRING,
    },

    phone_number: {
      type: DataTypes.STRING,
    },

    website: {
      type: DataTypes.STRING,
    },

    github: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "jobseeker",
  }
);

module.exports = JobSeeker;
