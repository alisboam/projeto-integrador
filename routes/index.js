const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
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
const session = require("express-session");
const cadastroValidators = require("../validators/userValidator");
const { render } = require("../app");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/produto", function (req, res) {
  return res.render("produto");
});

router.get("/enderecos", enderecoController.index);
router.get("/carrinho", carrinhoController.index);

router.get("/cadastro", cadastroController.index);

//cadastro de usuario

router.post("/cadastro", cadastroValidators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("cadastro", { errors });
  }

  const {
    nome,
    numero_documento,
    telefone,
    data_nascimento,
    email,
    senha,
    confirma,
  } = req.body;
  const user = await usuarioController.cadastrar({
    nome,
    numero_documento,
    telefone,
    data_nascimento,
    email,
    senha,
    confirma,
  });
  const { session } = req;
  session.user = user;
  return res.redirect("enderecos");
});

//login de usuario
router.get("/login", function (req, res) {
  return res.render("login");
});

router.post("/login", async (req, res, next) => {
  const { email, senha } = req.body;
  try {
    const user = await usuarioController.efetuarLogin({ email, senha });
    req.session.user = user;
    res.redirect("/produtos");
  } catch (err) {
    res.render("login", { message: err.message });
  }
});

router.use("/logout", (req, res) => {
  const { session } = req;
  delete session.user;
  return res.redirect("login");
});

router.get("/contato", contatoController.index);
router.get("/produtos", produtosController.index);
router.get("/checkout", checkoutController.index);
router.get("/favoritos", favoritosController.index);
router.get("/inicio", inicioController.index);
router.get("/sobre", sobreController.index);

router.get("/status", statusController.index);

module.exports = router;
