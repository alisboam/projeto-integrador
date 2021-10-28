'use strict';
const bcrypt = require('bcryptjs')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [{
     nome: 'Ana Paula',
     telefone: '321',
     senha: bcrypt.hashSync('123456'),
     numero_documento: '231231',
     email: 'ap@gmail.com'
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
