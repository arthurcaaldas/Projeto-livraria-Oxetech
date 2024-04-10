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
      Livro.hasMany(models.Autor,{
        foreignKey: 'id',
      });
      Livro.hasOne(models.Editora, {
        foreignKey: 'CNPJ',
      })
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
    tableName: 'livros',
  });
  return Livro;
};