const cepInput = document.querySelector('#cep')
const logradouroInput = document.querySelector('#rua')
const municipioInput = document.querySelector('#municipio')
const ufInput = document.querySelector('#estado')

function cepMask(cep){
  return cep
    .replace(/\D/g,"")
    .replace(/^(\d{5})(\d)/,"$1-$2");
    // .replace(/^(\d{2})(\d)/,"$1.$2")
}

function cepUnmask(cep) {
  return cep
    .replace("-", "")
    // .replace(/\-/g, "")
}


cepInput.addEventListener('input', function () {
  cepInput.value = cepMask(cepInput.value)
  if (cepInput.value.length === 9) {
    axios.get(`https://viacep.com.br/ws/${cepInput.value}/json/`)
      .then(res => {
        logradouroInput.value = res.data.logradouro
        municipioInput.value = res.data.localidade
        ufInput.value = res.data.uf
  })
};

})


