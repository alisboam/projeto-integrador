const produtosController = require('../controllers/ProdutosController');

const verMaisBtn =document.getElementById("more");

async function listarProdutos() {
const produtos = await produtosController.listarProdutos().then(res => res);
return produtos
}


function createPost(imagem, nome, descricao, id){
    return `<a href="/produtos/<%= ${id}} %>">
    <div class="card">
        <div class="img-card">
          <a href="/produtos/<%= ${id} %> "><img src="<%= ${imagem} %> " alt="" /></a>
        </div>
        <div class="content">
          <div class="title"><a href="/produtos/<%= ${id} %> "><%= ${nome}%></a></div>
          <div class="sub-title"><a href="/produtos/<%= ${id} %> "><%=preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})%></a></div>
          <p>
            <%=${descricao}%>
          </p>
          <div class="btn">
            <form class="buy" action="/carrinho" method="POST">
              <a href="/carrinho">
                <input type="hidden" id="custId" name="id" value="<%=${id}%>">
    
              <button class="icons-container" type="submit" id="mybutton-buy">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </button>
            </a>
            <a href="/favoritos">
              <button class="icons-container" type="submit">
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
    const { products } = await listarProdutos()
    products.slice(0, 4).forEach( produto => {
      const postHtml = createPost(produto.id, produto.nome, produto.imagem, produto.descricao);
      verMaisBtn.insertAdjacentHTML('beforebegin', postHtml)
    })
  
  }
  
  window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // const postClone = post.cloneNode(true);
      // verMaisBtn.insertAdjacentElement('beforebegin', postClone)
  
      // estaCarregando = true;
  
      fetchProducts()
    }
  })