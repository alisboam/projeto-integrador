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

exports.buscarProdutoCategoria = async (palavra) => {
  return Produto.findAll({
    where: {
      
        categoria: {
          [Op.like]: `%${palavra}%`,
        },
      }
  
});
};

exports.listarProdutos = async(limit, offset) => {
    return Produto.findAll({
        limit: limit || 4,
        offset: offset || 0
    })
}

exports.ProdutosInicio = async(limit, offset) => {
  return Produto.findAll({
      limit: limit || 5,
      
  })
}

exports.buscarProdutoPorID = async(id) => {
  return Produto.findByPk(id)
}