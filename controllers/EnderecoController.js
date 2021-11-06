const UsuarioModel = require("../models/UsuarioModel")

exports.cadastrarEndereco = async (address, idUsuario) => {
    return await UsuarioModel.novoEndereco(address, idUsuario)
}