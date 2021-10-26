const UsuarioModel = require("../models/UsuarioModel");
const { Pedido } = require("../database/models")

exports.fecharPedido = async (usuario, carrinho) => { 
  const endereco = await UsuarioModel.buscarEnderecoUsuario(usuario.id);
 
  return await Pedido.create({
    usuario_id: usuario.id,
    itens: carrinho.items,
    endereco_entrega: endereco,
    data: Date()
  })
}