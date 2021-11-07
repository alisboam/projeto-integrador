const UsuarioModel = require("../models/UsuarioModel")

exports.cadastrarEndereco = async (address, idUsuario) => {
    console.log(address, "constroller")
    return await UsuarioModel.novoEndereco(address, idUsuario)
};

exports.buscarEnderecoUsuario = async (idUsuario) => { 
    return await UsuarioModel.buscarEnderecoUsuario(idUsuario)
  };