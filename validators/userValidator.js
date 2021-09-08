const { check, body } = require("express-validator");
const { buscarUsuarioPorEmail } = require("../models/UsuarioModel");

const verificarSeUsuarioCadastrado = body("email").custom((email) => {
  return buscarUsuarioPorEmail(email).then((user) => {
    if (user) {
      return Promise.reject("E-mail já cadastrado");
    }
  });
});

const verificarSenhasCorrespondem = body('confirma').custom((confirma, { req }) => {
    if (confirma !== req.body.senha) {
      throw new Error('Password confirmation does not match password');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  })

const emailValidator = check("email").isEmail().withMessage("Email inválido");
const senhaValidator = check("senha")
  .isLength({ min: 6 })
  .withMessage("A senha deve conter no mínimo 6 caracteres");
const nomeValidator = check("nome")
  .notEmpty()
  .withMessage("O nome deve ser preenchido");
// const telefoneValidator = check("telefone")
//   .matches(/[(][0-9]{2}[)]\s[0-9]?[0-9]{4}[-][0-9]{4}/)
//   .withMessage("Telefone Inválido");

module.exports = [
  emailValidator,
  verificarSeUsuarioCadastrado,
  senhaValidator,
  nomeValidator,
  verificarSenhasCorrespondem 
  
];
