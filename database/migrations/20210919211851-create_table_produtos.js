'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('produtos', { 
       
      id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.BIGINT.UNSIGNED
    },

    nome: {
      allowNull: false,
      type: Sequelize.STRING
    },

    preco: {
      allowNull: false,
      type: Sequelize.DOUBLE
    },

    descricao: {
      allowNull: false,
      type: Sequelize.STRING(1000)
    },

    categoria: {
      allowNull: false,
      type: Sequelize.STRING(100)
    },

    faixa_etaria: {
      allowNull: false,
      type: Sequelize.STRING(5)
    },
  },
  {
    tableName: "produtos",
    timestamps: false
  });
},

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('produtos');
  }
};
