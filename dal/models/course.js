'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  Course.associate = function(models) {
    Course.associate = function(models) {
      Course.hasMany(models.Section, {
        foreignKey: "courseId",
        as: "sections"
      });
    };
  };
  return Course;
};