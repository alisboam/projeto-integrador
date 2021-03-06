const { Pedido } = require('../database/models')

exports.buscarPedidosUsuario = async id => {
  return Pedido.findAll({ where: { usuario_id: id } })
}

exports.buscarPedido = async (idPedido, idUsuario) => {
  return Pedido.findOne({ where: { id: idPedido, usuario_id: idUsuario } })
}
