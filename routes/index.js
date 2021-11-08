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
const pedidoController = require("../controllers/PedidoController")
const sobreController = require("../controllers/SobreController");
const usuarioController = require("../controllers/UsuarioController");
const session = require("express-session");
const cadastroValidators = require("../validators/userValidator");
const produtoModel = require("../models/ProdutoModel");

// const { render } = require("../app");
// let auth = require('../validators/userValidator');

const verificarUsuarioLogado = require("../middlewares/usuarioLogado");
const enderecoCadastro = require("../middlewares/enderecoCadastro");
const { Pedido } = require("../database/models")

/* GET home page. */
router.get("/", async function (req, res, next) {
  const produtos = await produtosController.listarProdutos(5, 0)

  res.render("inicio", { title: "Inicio", produtos });
});

router.post("/carrinho", async function (req, res) {
  const {id, quantidade} = req.body;
  console.log(id, 'Estou passando pela rota');
  await carrinhoController.adicionarProduto(req.session, id, quantidade)
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

router.get("/checkout", verificarUsuarioLogado, enderecoCadastro, async function (req, res) {
  const usuario = req.session.user;
  const carrinho = carrinhoController.buscarCarrinho(req.session)
  const endereco = await enderecoController.buscarEnderecoUsuario(usuario.id);
  return res.render("checkout", {carrinho, endereco, usuario});
});

router.post("/checkout", async function (req, res) {
  const usuario = req.session.user;
  console.log(JSON.stringify(usuario))
  const carrinho = req.session.carrinho;
  const dadosPagamento = req.body;
  const pedido = await checkoutController.fecharPedido(usuario, carrinho, dadosPagamento);
  console.log(pedido)
  const { session } =req;
  delete session.carrinho;
  
  return res.redirect(`/pedido/status/${pedido.id}`);
});

router.get("/pedido/status/:id", verificarUsuarioLogado, async function (req, res) {
  const idPedido = req.params.id;
  const usuario = req.session.user;
  const pedido = await pedidoController.buscarPedido(idPedido, usuario.id)
  if(typeof(pedido.itens) == "string"){
    const pedidosItens = JSON.parse(pedido.itens)
    console.log(pedidosItens, typeof(pedidosItens))
    return res.render("status", {pedido, pedidosItens})
  }
  const pedidosItens = pedido.itens
  return res.render("status", {pedido, pedidosItens})
});

//cadastro de usuario
router.get("/cadastro", function (req, res, next) {
  return res.render("cadastro", {errors: null, cadastro: {}});
});


router.post("/cadastro", cadastroValidators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("cadastro", { errors , cadastro: req.body });
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
  const idUsuario = req.session.user.id
  enderecoController.cadastrarEndereco(address, idUsuario)
  console.log(address, idUsuario, enderecoController, "rota")
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
  return res.render("buscaProdutos", {produtos})

// const produtos = await produtoModel.buscarProduto(req.query.q);
// return res.end(JSON.stringify(produtos));
});

router.get("/produtos/categoria", async function (req, res) {
  const { categoria } = req.query
  console.log(categoria)
  if (categoria == "todos"){
  return res.redirect("/produtos")
  } 

  const produtos = await produtosController.buscarProdutoCategoria(categoria);
  
  
  return res.render("categoriaProdutos", {produtos, categoria})

// const produtos = await produtoModel.buscarProduto(req.query.q);
// return res.end(JSON.stringify(produtos));
});

router.get("/produtos/:id", async function (req, res) {
  const {id} = req.params;
  const produto = await produtosController.buscarProdutoPorId(id);
  const produtos = await produtosController.listarProdutos(5, 0)

  return res.render("produto",{produto, produtos});
});

router.get("/produtos", async function (req, res) {
  const produtos = await produtosController.listarProdutos();
  const usuario = req.session.user
  return res.render("produtos", {produtos, usuario, alert: false});
});


router.get("/api/produtos", async function (req, res) {
  const produtos = await produtosController.listarProdutos(parseInt(req.query.limit), parseInt(req.query.offset));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(produtos));
});

// Favoritos
router.get("/favoritos", verificarUsuarioLogado, async function (req, res) {
  const { id } = req.session.user
  const usuario = await favoritosController.getUser(id)
  
  const favoritos = usuario.produtos
  

  return res.render("favoritos", {favoritos});
});


router.post("/favoritos", verificarUsuarioLogado, async function (req, res) {
  const { id } = req.session.user
  const produtoId = req.body.id;
  const favoritos = await favoritosController.addFavoritoToUser(id, produtoId)
  return res.render("produtos", {alert: true})
  // return res.redirect("/favoritos");
});

router.post("/favoritos/removerfavorito", async function (req, res) {
  const { id } = req.session.user
  const produtoId = req.body.id;
  await favoritosController.deletarProdutoFav(id, produtoId)
  return res.redirect("/favoritos");
});

// router.get("/inicio", inicioController.index);
router.get("/inicio", async function (req, res) {
  // const produtos = await inicioController.ProdutosInicio();
  const produtos = await produtosController.listarProdutos(5, 0)
   // const usuario = req.session.user
  return res.render("inicio", {produtos});
});
router.get("/sobre", sobreController.index);

router.get("/usuario", verificarUsuarioLogado, async function (req, res) {
  const usuario = req.session.user;
  const enderecos = await enderecoController.buscarEnderecoUsuario(usuario.id);
  
  const listaDePedidos = await pedidoController.buscarPedidosUsuario(usuario.id)
  return res.render("usuario", {enderecos, listaDePedidos});
});


router.get("/entrega", verificarUsuarioLogado, enderecoCadastro, async function (req, res) {
  const usuario = req.session.user;
  const enderecos = await enderecoController.buscarEnderecoUsuario(usuario.id);
  return res.render("entrega", {enderecos, usuario});
});

router.get("/api/endereco", async function (req, res) {
  const usuario = req.session.user;

  const enderecos = await enderecoController.buscarEnderecoUsuario(req.query.usuarioId);
  console.log(enderecos)
  const enderecoBuscado = await enderecos.find(req.query.id)
  console.log(enderecoBuscado)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(enderecoBuscado));
});
router.get("/api/produtos", async function (req, res) {
  const produtos = await produtosController.listarProdutos(parseInt(req.query.limit), parseInt(req.query.offset));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(produtos));
});
module.exports = router;