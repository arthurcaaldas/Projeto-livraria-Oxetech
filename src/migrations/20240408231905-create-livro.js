'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Titulo: {
        type: Sequelize.STRING
      },
      Preco: {
        type: Sequelize.DOUBLE
      },
      Editora_id: {
        type: Sequelize.INTEGER,
        references: {model: 'editoras', key: 'CNPJ'}
      },
      Autor_id: {
        type: Sequelize.INTEGER,
        references: {model: 'autores', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};