'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Autor.belongsTo(models.Livro, {
        foreignKey: 'id',
      })
    }
  }
  Autor.init({
    Nome: DataTypes.STRING,
    AnoNascimento: DataTypes.INTEGER,
    Nacionalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autores',
  });
  return Autor;
};