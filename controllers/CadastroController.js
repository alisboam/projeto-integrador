const CadastroController = {
    index: (req, res) => {
        return res.render("cadastro", {errors: null})
    }
}

module.exports = CadastroController;