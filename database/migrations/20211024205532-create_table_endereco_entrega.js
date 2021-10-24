'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco_entrega', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },

      rua: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },

      numero: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },

      complemento: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      municipio: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },

      estado: {
        allowNull: false,
        type: Sequelize.STRING(2)
      },

      cep: {
        allowNull: false,
        type: Sequelize.STRING(9)
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('endereco_entrega')
  }
}
