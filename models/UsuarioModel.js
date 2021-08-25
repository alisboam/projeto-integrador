const UsuarioDatabase = require("../database/models/Usuario")
const usuarios =[];

exports.novoUsuario = ({nome, email, hash}) => {
    //gerar id???? const id = usuarios.length+1
    const usuarioCadastrado = {
        nome,
        email,
        hash
    }
    usuarios.push(usuarioCadastrado);

    return usuarioCadastrado;
};

// exports.buscarPorEmail = email => 
// usuarios.find((usuarioCadastrado) => usuarioCadastrado.email === email);
