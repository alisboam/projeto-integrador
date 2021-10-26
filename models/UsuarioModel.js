const { Usuario, Endereco } = require("../database/models")

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

exports.buscarUsuarioPorEmail = async (email) => {
  return Usuario.findOne({ where:{ email: email}})
//   .then((usuarios) => {
//         console.log(usuarios)});
    
}

exports.novoEndereco = async ({
  rua,
  numero,
  complemento,
  municipio,
  estado,
  cep,
  idUsuario
}) => {
  const usuario = await Usuario.findByPk(idUsuario)

  const endereco = Endereco.build({
    rua,
    numero,
    complemento,
    municipio,
    estado,
    cep
  });
  endereco.setUsuario(usuario)
  return await endereco.save()
}

exports.buscarEnderecoUsuario = async (id) => {
  return Endereco.findOne({ where:{ usuario_id : id}})  
};