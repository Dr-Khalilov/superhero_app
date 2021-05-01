'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    static associate (models) {
      Superpower.belongsTo(models.Superhero, {
        foreignKey: 'heroId',
      });
    }
  }
  Superpower.init(
    {
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Superpower',
      tableName: 'superpowers',
      underscored: true,
    }
  );
  return Superpower;
};
