const { Usuario } = require("../database/models")

exports.novoUsuario = async ({nome, email, hash}) => {
    //gerar id???? const id = usuarios.length+1
    
    const usuarioCadastrado = await Usuario.create({
        nome_completo: nome,
        email,
        senha: hash,
        data_nascimento: new Date("2021-08-25"),
        telefone: "9123456",
        numero_documento: "123456",



    })

    return usuarioCadastrado;
};

// exports.buscarPorEmail = email => 
// usuarios.find((usuarioCadastrado) => usuarioCadastrado.email === email);
