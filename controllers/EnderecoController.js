const UsuarioModel = require("../models/UsuarioModel")

exports.cadastrarEndereco = async (address) => {
    return await UsuarioModel.novoEndereco(address)
}