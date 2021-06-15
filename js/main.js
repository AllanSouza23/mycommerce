const produtos = [
  {
    id: 0,
    nome: 'Tênis',
    cor: 'Preto',
    img: './img/tenis-1.png',
    valor: '149.99'
  },
  {
    id: 1,
    nome: 'Tênis',
    cor: 'Cinza e Laranja',
    img: './img/tenis-2.png',
    valor: '159.99'
  }, 
  {
    id: 2,
    nome: 'Tênis',
    cor: 'Azul e Preto',
    img: './img/tenis-3.png',
    valor: '249.99'
  },
  {
    id: 3,
    nome: 'Sapato',
    cor: 'Preto',
    img: './img/tenis-4.png',
    valor: '129.99'
  },
  {
    id: 4,
    nome: 'All-Star',
    cor: 'Vermelho',
    img: './img/tenis-5.png',
    valor: '139.99'
  }, 
  {
    id: 5,
    nome: 'Tênis',
    cor: 'Azul',
    img: './img/tenis-6.png',
    valor: '219.99'
  }
];

exibirProdutos = () => {
  var listaProdutos = document.getElementById('produtos');
  var filtro = document.getElementById('filtroProdutos');
  listaProdutos.innerHTML = '';

  if (filtro.value == 'Todos') {
    produtos.map((valor) => {
      listaProdutos.innerHTML += `
        <div class="col-md-4 mb-5">
          <img src="`+valor.img+`" class="img-fluid">
          <p>`+valor.nome+ " - " + valor.cor+`</p>
          <p>`+"R$ " +valor.valor+`</p>
          <a key=`+valor.id+` href="#">Adicionar ao carrinho</a>
        </div>
        `
    }
    )} else if (filtro.value == 'Tenis') {
      produtos.map((valor) => {
        if (valor.nome === 'Tênis') {
          listaProdutos.innerHTML += `
            <div class="col-md-4 mb-5">
              <img src="`+valor.img+`" class="img-fluid">
              <p>`+valor.nome+ " - " + valor.cor+`</p>
              <p>`+"R$ " +valor.valor+`</p>
              <a key=`+valor.id+` href="#">Adicionar ao carrinho</a>
            </div>
            `;
        }
      }
      )} else if (filtro.value == 'Sapatos') {
        produtos.map((valor) => {
          if (valor.nome != 'Tênis') {
            listaProdutos.innerHTML += `
              <div class="col-md-4 mb-5">
                <img src="`+valor.img+`" class="img-fluid">
                <p>`+valor.nome+ " - " + valor.cor+`</p>
                <p>`+"R$ " +valor.valor+`</p>
                <a key=`+valor.id+` href="#">Adicionar ao carrinho</a>
              </div>
              `;
           }
          }
        )}
};

exibirProdutos();