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

// exports.buscarPorEmail = email => 
// usuarios.find((usuarioCadastrado) => usuarioCadastrado.email === email);
