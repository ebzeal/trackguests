'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class capacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  capacity.init({
    normalCapacity: DataTypes.INTEGER,
    allowedCapacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'capacity',
  });
  return capacity;
};