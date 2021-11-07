const UsuarioModel = require("../models/UsuarioModel");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const {check, validationResult, body} = require("express-validator");


exports.cadastrar = async ({
  nome,
  numero_documento,
  telefone,
  data_nascimento,
  email,
  senha,
  confirma,
}) => {
  if (senha !== confirma) {
    throw new Error("As senhas não conferem");
  }

  const usuario = bcrypt.hash(senha, saltRounds).then(function (hash) {
    return UsuarioModel.novoUsuario({
      nome,
      numero_documento,
      telefone,
      data_nascimento,
      email,
      hash,
    });
  });
  return usuario;
};

exports.efetuarLogin = async({ senha, email }) => {
  const usuarioLogado = await UsuarioModel.buscarUsuarioPorEmail(email);

  if (!usuarioLogado) {
    throw new Error("Access denied");
  }

  const senhaConferida = await bcrypt.compare(senha, usuarioLogado.senha);

  if (senhaConferida) {
      
      console.log("usuario logado")
        return usuarioLogado;
  }
  throw new Error('Falha no login');
};

