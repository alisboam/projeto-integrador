const UsuarioModel = require("../models/UsuarioModel")

exports.cadastrarEndereco = async (address, idUsuario) => {
    return await UsuarioModel.novoEndereco(address, idUsuario)
};

exports.buscarEnderecoUsuario = async (idUsuario) => { 
    return await UsuarioModel.buscarEnderecoUsuario(idUsuario)
  };