"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "produtos",
      [

        //infaltil 
        {
          nome: "Ipsum",
          preco: "29.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem:"https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1830318654562719593/products/RSC001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },
        { 
          nome: "Zombie",
          preco: "299.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v5812949718056996346/products/ZOM401_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "45.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1763433323306874178/products/DLE001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },
         
        { 
          nome: "Lorem",
          preco: "39.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v847747164014311078/products/5ON002_04.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "149.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Infantil",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v9126319725198615989/products/ZKE001_04.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },
          //Galera
        { 
          nome: "Lorem",
          preco: "200.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Galera",
          faixa_etaria: "16",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v5643777112229119009/products/AHF001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "290.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Galera",
          faixa_etaria: "16",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6093584315898788468/products/AZU201_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "220.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Galera",
          faixa_etaria: "16",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v2181423039786301354/products/AZU001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "800.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Galera",
          faixa_etaria: "16",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v3432630063182641879/products/GLH001_01.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "250.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Galera",
          faixa_etaria: "16",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1128446575749071491/products/SPL001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },
        // estratégia
        { 
          nome: "Lorem",
          preco: "160.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Estrategia",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v2433426156347612467/products/7WO102_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "180.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Estrategia",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v7394114766376827860/products/JPR001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "800.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Estrategia",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6896358796122462993/products/TWI002_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "400.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Estrategia",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1923522168099712575/products/ATC001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "300.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Estrategia",
          faixa_etaria: "10",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v603767143808069804/products/JME001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

         //familia
        { 
          nome: "Lorem",
          preco: "199.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Familia",
          faixa_etaria: "14",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v9093232394636524524/products/CTB001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "89.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Familia",
          faixa_etaria: "14",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1739814354040534213/products/LVL201_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "99.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Familia",
          faixa_etaria: "14",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v485989789886907360/products/DIX005_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "130.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Familia",
          faixa_etaria: "14",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v4790983883674159292/products/PJL001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },

        { 
          nome: "Lorem",
          preco: "299.90",
          descricao: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
          categoria: "Familia",
          faixa_etaria: "14",
          imagem: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6818735711458251072/products/CPT001_3D.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff",
          estoque: 5
        },



      ]
    );
  },



  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('produtos', null, {});
     
  },
};
