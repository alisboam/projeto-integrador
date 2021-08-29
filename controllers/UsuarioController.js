const UsuarioModel = require("../models/UsuarioModel")
const bcrypt = require("bcryptjs")
const saltRounds = 10;

exports.cadastrar = async ({nome, numero_documento, telefone, data_nascimento, email, senha, confirma }) => {
    if (senha !== confirma) {
        throw new Error ("As senhas não conferem");
    }
    const usuario = bcrypt.hash(senha, saltRounds).then(function(hash) {
       return UsuarioModel.novoUsuario({nome, numero_documento, telefone, data_nascimento, email, hash});
    });
    return usuario;
};

// exports.efetuarLogin = async ({ email, senha }) = {
//     //pegar os dados do usuario
//     const usuario = UsuarioModel.buscarPorEmail(email);
//     if (!usuario) {              
//         throw new Error ("Email ou senha inválidos")
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