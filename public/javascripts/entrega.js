async function listarEnderecos(id, usuario) {
  const usuarioId = usuario;
    return await fetch(`http://localhost:3000/api/enderecos?id=${usuarioId}`)
      .then(response => {
        return response.json()
      });
  }




const selectEnder = async (enderecoId, usuarioId) => {
  
    const endereco = await listarEnderecos(enderecoId, usuarioId);
    console.log(id, endereco)
}


// console.log(enderecoId);
// const endereco = enderecoId.getAttribute('value');