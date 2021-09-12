'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('endereco', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
       
      logradouro: {
          allowNull: false,
          type: Sequelize.STRING
      },

      numero: {
        allowNull: false,
        type: Sequelize.STRING
      },

      numero_documento: {
        allowNull: false,
        type: Sequelize.STRING
      },

      complemento: {
        allowNull: false,
        type: Sequelize.STRING
      },

      municipio: {
        allowNull: false,
        type: Sequelize.STRING
      },

      estado: {
        allowNull: false,
        type: Sequelize.STRING
      },

      cep: {
        allowNull: false,
        type: Sequelize.STRING
      }

      });

  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.dropTable('endereco');
    
  }
};
