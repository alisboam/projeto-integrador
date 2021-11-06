const cepInput = document.querySelector('#cep')
const logradouroInput = document.querySelector('#rua')
const municipioInput = document.querySelector('#municipio')
const ufInput = document.querySelector('#estado')

cepInput.addEventListener('input', function () {
  if (cepInput.value.length === 9) {
    axios.get(`https://viacep.com.br/ws/${cepInput.value}/json/`)
      .then(res => {
        logradouroInput.value = res.data.logradouro
        municipioInput.value = res.data.localidade
        ufInput.value = res.data.uf
  })
};

})


