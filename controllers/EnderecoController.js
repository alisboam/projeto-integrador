const EnderecoController = {
    index : (req, res) => {
        return res.render("enderecos", {user: req.session.user});
    }
}

module.exports = EnderecoController;