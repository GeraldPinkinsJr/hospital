'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patients.belongsTo(models.Doctors, {
        foreignKey: 'doctor_id',
        as: 'doctors'
      });
      Patient.belongsToMany(models.Course,  {
        through: 'Hospital',
        as: 'hospital',
        foreignKey: 'patient_id'
      })
    }
  }
  Patients.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    insurance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patients',
  });
  return Patients;
};