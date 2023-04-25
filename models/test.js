'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    doctordss: DataTypes.STRING,
    patientss: DataTypes.STRING,
    name: DataTypes.STRING,
    testdate: DataTypes.INTEGER,
    result: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};