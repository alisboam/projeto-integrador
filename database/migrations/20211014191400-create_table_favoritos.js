'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('favs', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      usuario_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
      },
      produto_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id'
        },
      }
     },
     {
      tableName: "favs",
      timestamps: false
     });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('favs');
    
  }
};
