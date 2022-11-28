const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    date_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,

    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },

    sector: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },

    job_description: {
      type: DataTypes.STRING,
    },

    company_website: {
      type: DataTypes.STRING,
    },

    is_active: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Job",
  }
);

module.exports = Job;
