const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Company extends Model {}

Company.init(
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

    company_description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },

    establishment_date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Company",
  }
);

module.exports = Company;
