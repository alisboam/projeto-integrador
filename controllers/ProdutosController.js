const produtosModel = require("../models/ProdutoModel")

exports.listarProdutos = () => produtosModel.listarProdutos();

exports.buscarProdutoPorId = (id) => produtosModel.buscarProdutoPorID(id);