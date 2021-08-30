const { Usuario } = require("../database/models")

exports.novoUsuario = async ({nome, numero_documento, telefone, data_nascimento, email, hash}) => {
    //gerar id???? const id = usuarios.length+1
    
    const usuarioCadastrado = await Usuario.create({
        nome,
        email,
        senha: hash,
        data_nascimento,
        telefone,
        numero_documento
    })

    return usuarioCadastrado;
};


exports.buscarUsuarioPorEmail = (email) => {
  return Usuario.findOne({ where:{ email: email}})
//   .then((usuarios) => {
//         console.log(usuarios)});
    
}