const pedidoModel = require("../models/PedidoModel")

exports.buscarPedidosUsuario = async (id) => {
  return await pedidoModel.buscarPedidosUsuario(id);  
};