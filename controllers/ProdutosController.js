const produtosModel = require("../models/ProdutoModel")

exports.listarProdutos = (limit, offset) => produtosModel.listarProdutos(limit, offset);

exports.buscarProdutoPorId = (id) => produtosModel.buscarProdutoPorID(id);

exports.buscarProdutoCategoria = (palavra) => produtosModel.buscarProdutoCategoria(palavra);