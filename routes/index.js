const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const produtosController = require("../controllers/ProdutosController");
const enderecoController = require("../controllers/EnderecoController");
const carrinhoController = require("../controllers/CarrinhoController");
const contatoController = require("../controllers/ContatoController");
const checkoutController = require("../controllers/CheckoutController");
const minhaContaController = require("../controllers/MinhaContaController");
const favoritosController = require("../controllers/FavoritosController");
const inicioController = require("../controllers/InicioController");
const sobreController = require("../controllers/SobreController");
const usuarioController = require("../controllers/UsuarioController");
const statusController = require("../controllers/StatusController");
const session = require("express-session");
const cadastroValidators = require("../validators/userValidator");
const produtoModel = require("../models/ProdutoModel")
// const { render } = require("../app");
// let auth = require('../validators/userValidator');

const verificarUsuarioLogado = require("../middlewares/usuarioLogado");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("inicio", { title: "Inicio" });
});

router.post("/carrinho", async function (req, res) {
  const {id} = req.body;
  await carrinhoController.adicionarProduto(req.session, id)
  return res.redirect("/carrinho");
});

router.post("/carrinho/removerItem", async function (req, res) {
  const {id} = req.body;
  await carrinhoController.removerItemDoCarrinho(req.session, id)
  return res.redirect("/carrinho");
});

router.get("/carrinho", function (req, res) {
  const carrinho = carrinhoController.buscarCarrinho(req.session)
  return res.render("carrinho", {carrinho});
});

router.get("/usuario", verificarUsuarioLogado, function (req, res) {
  return res.render("usuario");
});

//cadastro de usuario
router.get("/cadastro", function (req, res, next) {
  return res.render("cadastro", {errors: null});
});

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

router.get("/enderecos", function (req, res) {
  return res.render("enderecos");
});

router.post("/enderecos", function (req, res) {
  const address = req.body;
  address.idUsuario = req.session.user.id
  enderecoController.cadastrarEndereco(address)
  return res.redirect("produtos");
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

router.get("/produtos/busca", async function (req, res) {
  const produtos = await produtoModel.buscarProduto(req.query.q);
  console.log(`${produtos.length} encontrados na busca`)
  return res.render("produtos", {produtos})

// const produtos = await produtoModel.buscarProduto(req.query.q);
// return res.end(JSON.stringify(produtos));
});

router.get("/produtos/:id", async function (req, res) {
  const {id} = req.params;
  const produto = await produtosController.buscarProdutoPorId(id);
  return res.render("produto",{produto});
});

router.get("/produtos", async function (req, res) {
  const produtos = await produtosController.listarProdutos();
  return res.render("produtos", {produtos});
});

router.get("/checkout", verificarUsuarioLogado, checkoutController.index);
router.get("/favoritos",verificarUsuarioLogado, function (req, res) {
  return res.render("favoritos");
});
router.get("/inicio", inicioController.index);
router.get("/sobre", sobreController.index);

router.get("/status", verificarUsuarioLogado, statusController.index);

module.exports = router;