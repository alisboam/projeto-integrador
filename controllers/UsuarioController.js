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

exports.efetuarLogin = ({ email, senha }) = {
    //pegar os dados do usuario
    const usuario = UsuarioController.buscarPorEmail(email);
    if (!usuario) {
        throw new Error ("e-mail não cadastrado")
    }
    //comparar senha
    const { hash } = usuario;
    const isValid = bcryptjs.compareSync(senha,hash);
    //senha invalida, throw error
    //senha valida, retorna o objeto do usuario
    if (!isValid) {
        throw new Error ("senha inválida")
    }
     const { id, nome, email } = usuario;

     const ret = { id, nome, email };

     return ret;
}