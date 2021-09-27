const { Produto } = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.buscarProduto = async (palavra) => {
  return Produto.findAll({
    where: {
      [Op.or]: [
        {
          nome: {
            [Op.like]: `%${palavra}%`,
          },
        },
        {
          descricao: {
            [Op.like]: `%${palavra}%`,
          },
        },
      ],
    },
  });
};

exports.listarProdutos = async() => {
    return Produto.findAll({
        limit:10
    })
}

