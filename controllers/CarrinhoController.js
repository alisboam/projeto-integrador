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

exports.buscarCarrinho = buscarCarrinho;

exports.adicionarProduto = async (session, id) => {
  const carrinho = buscarCarrinho(session);
  const itemDoCarrinho = buscarItem(carrinho, id);
  if (!itemDoCarrinho) {
    await carrinhoModel.adicionarProduto(carrinho, id, 1);
  } else {
    itemDoCarrinho.quantidade = itemDoCarrinho.quantidade + 1;
  }
  session.carrinho = carrinho;
  return carrinho;
};