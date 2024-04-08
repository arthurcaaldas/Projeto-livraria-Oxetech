'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livro.init({
    Titulo: DataTypes.STRING,
    Preco: DataTypes.DOUBLE,
    Editora_id: DataTypes.INTEGER,
    Autor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};