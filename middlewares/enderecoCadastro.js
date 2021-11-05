const UsuarioModel = require("../models/UsuarioModel")
module.exports = async function (req, res, next) {
    const usuario = req.session.user
    const endereco = await UsuarioModel.buscarEnderecoUsuario(usuario.id)
    if (!endereco) {
      res.redirect("/enderecos");
    } else {
      next();
    }
  };
  