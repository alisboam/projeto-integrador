const UsuarioModel = require("../models/UsuarioModel");

exports.getAllUsers = () => UsuarioModel.getAllUsers();
exports.getUser = (id) => UsuarioModel.getUser(id);
exports.addFavoritoToUser = (id, produtoId) => UsuarioModel.addFavoritoToUser(id, produtoId);
exports.deletarProdutoFav = (id, produtoId) => UsuarioModel.deletarProdutoFav(id, produtoId);