"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "produtos",
      [
        {
          nome: "Ipsum",
          preco: "29.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Adulto",
          faixa_etaria: "10",
          imagem:"https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1830318654562719593/products/RSC001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff"
        },
        { 
          nome: "Lorem",
          preco: "299.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v5812949718056996346/products/ZOM401_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff"
        },

        { 
          nome: "Lorem",
          preco: "45.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1763433323306874178/products/DLE001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff"
        },

      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('produtos', null, {});
     
  },
};
