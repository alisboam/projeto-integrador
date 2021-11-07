const cpfInput = document.querySelector('#numero_documento')
const telInput = document.querySelector('#telefone')


function cpfMask(cpf) {
  return cpf
  .replace(/\D/g, '') // Replace any non-number character for nothing
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1'); // Prevent the user typing any more
}

cpfInput.addEventListener('input', function () {
  cpfInput.value = cpfMask(cpfInput.value)
});


function telMask(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

telInput.addEventListener('input', function () {
  telInput.value = telMask(telInput.value)
});