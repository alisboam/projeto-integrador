const cpfInput = document.querySelector('#numero_documento')


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