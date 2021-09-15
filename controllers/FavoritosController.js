const FavoritosController = {
    index: (req, res) => {
        console.log("passei aqui")
        return res.render("favoritos")
    }
}

module.exports = FavoritosController;