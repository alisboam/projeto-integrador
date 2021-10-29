const { Pedido } = require("../database/models")


exports.buscarPedidosUsuario = async (id) => {
  return Pedido.findAll({ where:{ usuario_id : id}})  
};