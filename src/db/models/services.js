const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  services.init(
    {
      name: DataTypes.STRING,
      day: DataTypes.STRING,
      time: DataTypes.STRING,
      parishId: DataTypes.UUID,
      allowedCapacity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'services'
    }
  );
  return services;
};
