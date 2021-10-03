const produtoModel = require("./ProdutoModel");

exports.criarCarrinho = function() {
  return {
    items: [],
    getTotal: function () {
      if (this.items.length == 0) {
        return 0;
      }
      return this.items
        .map(item => item.preco * item.quantidade)
        .reduce((total, preco) => total + preco);
    },
    getTotalItems: function () {
      return this.items
        .map(item => item.quantidade)
        .reduce((total, quantidade) => total + quantidade)
    }, 
    buscarItem: function(id) {
      return this.items.find((item) => item.id == id);
    }
  };
}

exports.adicionarProduto = async (carrinho, id, quantidade) => {
  const produto = await produtoModel.buscarProdutoPorID(id);
  carrinho.items.push({
    id: id,
    nome: produto.nome,
    preco: produto.preco,
    imagem: produto.imagem,
    quantidade
  });
};
