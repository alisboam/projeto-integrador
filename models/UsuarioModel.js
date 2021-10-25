const { Usuario, Endereco, Produto } = require("../database/models")

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
  logradouro,
  numero,
  complemento,
  municipio,
  estado,
  cep,
  idUsuario
}) => {
  const usuario = await Usuario.findByPk(idUsuario)

  const endereco = Endereco.build({
    logradouro,
    numero,
    complemento,
    municipio,
    estado,
    cep
  });
  endereco.setUsuario(usuario)
  return await endereco.save()
  
  // return await Endereco.create({
  //   logradouro,
  //   numero,
  //   complemento,
  //   municipio,
  //   estado,
  //   cep
  // }, {
  //   include: [usuario]
  // });
}

exports.getAllUsers = () => Usuario.findAll({include: 'produtos'});
exports.getUser = (id) => Usuario.findByPk(id, {include: 'produtos'});

exports.addFavoritoToUser = async (id, produtoId) => {
  const user = await Usuario.findByPk(id);
  const produto = await Produto.findByPk(produtoId);
  const addProdutoFav = await user.addProduto(produto.id);
  return user
}

exports.deletarProdutoFav = async (id, produtoId) => {
  const user = await Usuario.findByPk(id);
  const produto = await Produto.findByPk(produtoId);
  const delFavorito = await user.removeProduto(produto.id);
  return user
}