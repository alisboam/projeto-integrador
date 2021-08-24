
const usuarios =[];

exports.novoUsuario = ({nome, email, hash}) => {
    //gerar id???? const id = usuarios.length+1
    const usuario = {
        id, 
        nome,
        email,
        hash
    }
    usuarios.push(usuario);

    return usuario;
};

exports.buscarPorEmail = email => 
usuarios.find((usuario) => usuario.email === email);
