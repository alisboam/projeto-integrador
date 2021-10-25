'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('enderecos', { 
       
      id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
    },
     
    rua: {
      allowNull: true,
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
    }
  }, 
  
  {
    tableName: 'enderecos',
    timestamps: false
  });
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('enderecos');
     
  }
};
