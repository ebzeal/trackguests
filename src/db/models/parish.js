'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  parish.init({
    name: DataTypes.STRING,
    address: DataTypes.DECIMAL,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'parish',
  });
  return parish;
};