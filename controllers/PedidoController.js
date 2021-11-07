const pedidoModel = require("../models/PedidoModel")

exports.buscarPedidosUsuario = async (id) => {
  return await pedidoModel.buscarPedidosUsuario(id);  
};

exports.buscarPedido = async(idPedido, idUsuario) => {
  return await pedidoModel.buscarPedido(idPedido, idUsuario);
}