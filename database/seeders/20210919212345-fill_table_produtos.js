"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "produtos",
      [
        {
          nome: "Uno",
          preco: "29.90",
          descricao: "lorem ipsum",
          categoria: "briga",
          faixa_etaria: "10",
        },
        { 
          nome: "lorem",
          preco: "299.90",
          descricao: "lorem ipsum",
          categoria: "infantil",
          faixa_etaria: "10",
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('produtos', null, {});
     
  },
};
