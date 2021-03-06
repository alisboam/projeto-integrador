const verMaisBtn = document.getElementById("more");
const produtoContainer = document.getElementsByClassName("content-products");
const pageSize = 8;
let currentOffset = 0;
const favBtn = document.getElementsByClassName("fa fa-heart");


verMaisBtn.addEventListener('click', function() {
  fetchProducts();
})

window.addEventListener('load', function() {
  fetchProducts();

})

async function listarProdutos() {
  return await fetch(`http://localhost:3000/api/produtos?limit=${pageSize}&offset=${currentOffset}`)
    .then(response => {
      
      return response.json()
    });
}

function createPost(produto){
    return `<a href="/produtos/${produto.id}">
      <div class="card">
        <div class="img-card">
          <a href="/produtos/${produto.id} "><img src="${produto.imagem} " alt="" /></a>
        </div>
        <div class="content">
          <div class="title"><a href="/produtos/${produto.id} ">${produto.nome}</a></div>
          <div class="sub-title"><a href="/produtos/${produto.id} ">${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</a></div>
          <p>
            ${produto.descricao}
          </p>
          <div class="btn" style= display:flex>
          <div class="btn-cm8">
            <form class="buy" action="/carrinho" method="POST">
              <a href="/carrinho">
                <input type="hidden" id="custId" name="id" value="${produto.id}">
    
              <button class="icons-container" type="submit" id="mybutton-buy">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </button>
            </a>
            </form>
            <form class="buy" action="/favoritos" method="POST">
            <a href="/favoritos">
              <input type="hidden" id="custId" name="id"  value="${produto.id}">
              <button class="icons-container" onclick="Fav()" type="submit" id="mybuttonFav">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </button>
            </a>
            </form>
          </div>
        </div>
      </div>
    </a>`
}

async function fetchProducts() {
  const products = await listarProdutos()
  currentOffset += products.length;
  products.forEach(produto => {
    produtoContainer[0].innerHTML += createPost(produto);
  })

  if (products.length < pageSize) {
    verMaisBtn.style.display = 'none';
  }
}



// window.addEventListener("load", () => {
//   let favBtn = document.getElementById("mybuttonFav");
//   console.log(favBtn);
//   //   document.querySelector("main").innerHTML += createFav(produto);
//   //   // favBtn.insertAdjacentElement('beforebegin', postfav)
//   // setTimeout(() => {
//     //   const favcard = document.getElementsByClassName("create-favcard")
//     //   favcard.remove()
//     // }, 3000);
//     favBtn.onclick = function(){
//       alert('Produto Adicionado')

//     }
// })

// const addFav = (usuario) =>{

// }
function Fav(alert){
 if (alert == true){
  alert('Produto Adicionado')
 }


}
