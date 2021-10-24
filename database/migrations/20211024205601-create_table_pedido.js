'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'pedido',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED
        },

        itens: {
          allowNull: false,
          type: Sequelize.JSON
        },

        data: {
          allowNull: false,
          type: Sequelize.DATE
        },

        usuario_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },

        endereco_entrega_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'endereco_entrega',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      {
        tableName: 'pedido',
        timestamps: false
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido')
  }
}
