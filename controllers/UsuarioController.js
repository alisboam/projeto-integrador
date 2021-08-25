const UsuarioModel = require("../models/UsuarioModel")
const bcrypt = require("bcryptjs")
const saltRounds = 10;

exports.cadastrar = async ({nome, email, senha, confirma }) => {
    //confirmar se a senha é valida
    if (senha !== confirma) {
        throw new Error ("As senhas não conferem");
    }

    //confirmar senha

    //hashed
    const hashed = bcrypt.hash(senha, saltRounds).then(function(hash) {
        // Store hash in your password DB.
    });

 return UsuarioModel.novoUsuario({nome, email, hashed});
};

// exports.efetuarLogin = async ({ email, senha }) = {
//     //pegar os dados do usuario
//     const usuario = UsuarioModel.buscarPorEmail(email);
//     if (!usuario) {              
//         throw new Error ("e-mail não cadastrado")
//     }
//     //comparar senha
//     const { hashed } = usuario;
//     const isValid = bcrypt.compare(senha, hashed).then(function(result) {
//     });

//     //senha invalida, throw error
//     //senha valida, retorna o objeto do usuario
//     if (!isValid) {
//         throw new Error ("senha inválida")
//     }
//      const { id, nome, email } = usuario;

//      const ret = { id, nome, email };

//      return ret;
// }