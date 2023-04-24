'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctors.hasMany(models.Doctor, {
        foreignKey: 'doctor_id',
        as: 'doctors'
      })
    }
  }
  Doctors.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    specialization: DataTypes.STRING
  
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  return Doctors;
};