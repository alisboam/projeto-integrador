const favoritoModel = require("../models/FavoritoModel");

// const FavoritosController = {
//     index: (req, res) => {
//         console.log("passei aqui")
//         return res.render("favoritos")
//     }
// }

// module.exports = FavoritosController;

function buscarFavorito(session) {
    if (session.favorito == null) {
      return favoritoModel.criarFavorito();
    }
    const favorito = favoritoModel.criarFavorito();
    favorito.items = session.favorito.items;
    return favorito;
  }

  function buscarItem (favorito, id){
    return favorito.buscarItem(id)
  }
  
  exports.removerItemDosFavoritos = async (session, id) => {
    const favorito = buscarFavorito(session);
    favorito.removerItem(id)
    session.favorito = favorito;
    return favorito;
  }
  
  exports.buscarFavorito = buscarFavorito;

  exports.adicionarProduto = async (session, id) => {
    const favorito = buscarFavorito(session);
    const itensDosFavoritos = buscarItem(favorito, id);
    if (!itensDosFavoritos) {
      await favoritoModel.adicionarProduto(favorito, id, 1);
    } else {
      itensDosFavoritos.quantidade = itensDosFavoritos.quantidade + 1;
    }
    session.favorito = favorito;
    return (favorito, itensDosFavoritos);
  };