// const InicioController = {
//     index: (req, res) => {
//         return res.render("inicio")
//     }
// }

const produtosModel = require("../models/ProdutoModel")

exports.ProdutosInicio = (limit, offset) => produtosModel.ProdutosInicio(limit, offset);

// module.exports = InicioController;