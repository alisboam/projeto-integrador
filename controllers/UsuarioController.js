const UsuarioController = require("../models/UsuarioModel")
const bcryptjs = require("bcryptjs")


module.exports = UsuarioController;

exports.cadastrar = ({nome, email, senha, confirma }) => {
    //confirmar se a senha é valida
    if (senha !== confirma) {
        throw new Error ("As senhas não conferem");
    }

    //confirmar senha

    //hash
    const hash = bcryptjs.hashSync(senha);

 return UsuarioController.novoUsuario({nome, email, hash});
};