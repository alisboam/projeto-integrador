 const express = require('express');
 const router = express.Router();
 const produtoController = require("../controllers/ProdutoController");
 const enderecoController = require("../controllers/EnderecoController");
 const carrinhoController = require("../controllers/CarrinhoController");
 const cadastroController = require("../controllers/CadastroController");
 const contatoController = require("../controllers/ContatoController");
 const produtosController = require("../controllers/ProdutosController");
 const checkoutController = require("../controllers/CheckoutController");
 const minhaContaController = require("../controllers/MinhaContaController");
 const favoritosController = require("../controllers/FavoritosController");
 const inicioController = require("../controllers/InicioController");
 const sobreController = require("../controllers/SobreController");
 const usuarioController = require("../controllers/UsuarioController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/produto", produtoController.index);
router.get("/enderecos", enderecoController.index);
router.get("/carrinho", carrinhoController.index);
router.get("/cadastro", cadastroController.index);
router.get("/contato", contatoController.index);
router.get("/produtos", produtosController.index);
router.get("/checkout", checkoutController.index);
router.get("/login", minhaContaController.index);
router.get("/favoritos", favoritosController.index);
router.get("/inicio", inicioController.index);
router.get("/sobre", sobreController.index);
router.get("/usuario", usuarioController.index);


module.exports = router;
