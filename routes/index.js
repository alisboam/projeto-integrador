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
 const statusController = require("../controllers/StatusController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/produto", function(req, res){
    return res.render("produto")
});

router.get("/enderecos", enderecoController.index);
router.get("/carrinho", carrinhoController.index);

router.get("/cadastro", cadastroController.index);

//cadastro de usuario
router.post("/cadastro",(req, res) => {
  const {nome, email, senha, confirma} = req.body;
  const { id } = usuarioController.cadastrar({nome, email, senha, confirma});
  const { session } = req;
  session.user = user;
  return res.render("usuario")
});

router.get("/contato", contatoController.index);
router.get("/produtos", produtosController.index);
router.get("/checkout", checkoutController.index);
router.get("/login", minhaContaController.index);
router.get("/favoritos", favoritosController.index);
router.get("/inicio", inicioController.index);
router.get("/sobre", sobreController.index);

router.get("/usuario", (req, res) => {
  const { session } = req;
  delete session.user;
  return res.redirect("inicio")
});

router.get("/status", statusController.index);


module.exports = router;
