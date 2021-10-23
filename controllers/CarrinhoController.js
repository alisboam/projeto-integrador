const carrinhoModel = require("../models/CarrinhoModel");

function buscarCarrinho(session) {
  if (session.carrinho == null) {
    return carrinhoModel.criarCarrinho();
  }
  const carrinho = carrinhoModel.criarCarrinho();
  carrinho.items = session.carrinho.items;
  return carrinho;
}

function buscarItem(carrinho, id) {
  return carrinho.buscarItem(id)
}

exports.removerItemDoCarrinho = async (session, id) => {
  const carrinho = buscarCarrinho(session);
  carrinho.removerItem(id)
  session.carrinho = carrinho;
  return carrinho;
}

exports.buscarCarrinho = buscarCarrinho;

exports.adicionarProduto = async (session, id, quantidade) => {
  console.log(`Adicionando produto no carrinho: id=[${id}] quantidade=[${quantidade}]`);

  const carrinho = buscarCarrinho(session);
  const itemDoCarrinho = buscarItem(carrinho, id);
  if (!itemDoCarrinho) {
    await carrinhoModel.adicionarProduto(carrinho, id, 1);
  } else {
    itemDoCarrinho.quantidade = parseInt(quantidade);
  }
  session.carrinho = carrinho;
  return carrinho;
};

