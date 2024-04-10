'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Editora.belongsTo(models.Livro, {
        foreignKey: 'CNPJ',
      })
    }
  }
  Editora.init({
    Nome: DataTypes.STRING,
    CNPJ: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editora',
    tableName: 'editoras',
  });
  return Editora;
};