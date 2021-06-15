const produtos = [
  {
    id: 0,
    nome: 'Tenis 1',
    cor: 'preto',
    img: './img/imagemCarrinho.png',
    valor: '149.99'
  },
  {
    id: 1,
    nome: 'Tenis 2',
    cor: 'rosa',
    img: './img/imagemCarrinho.png',
    valor: '159.99'
  }, 
  {
    id: 2,
    nome: 'Tenis 3',
    cor: 'bege',
    img: './img/imagemCarrinho.png',
    valor: '249.99'
  },
  {
    id: 3,
    nome: 'Tenis 4',
    cor: 'verde',
    img: './img/imagemCarrinho.png',
    valor: '129.99'
  },
  {
    id: 4,
    nome: 'Tenis 5',
    cor: 'vermelho',
    img: './img/imagemCarrinho.png',
    valor: '139.99'
  }, 
  {
    id: 5,
    nome: 'Tenis 6',
    cor: 'lilas',
    img: './img/imagemCarrinho.png',
    valor: '219.99'
  }
];

exibirProdutos = () => {
  var listaProdutos = document.getElementById('produtos');
  let img = document.createElement("img");
  produtos.map((valor) => {
    listaProdutos.innerHTML += `
      <div class="col-md-4 mb-5">
        <img src="`+valor.img+`">
        <p>`+valor.nome+ " - " + valor.cor+`</p>
        <p>`+"R$ " +valor.valor+`</p>
        <a key=`+valor.id+` href="#">Adicionar ao carrinho</a>
      </div>
      `
    console.log(valor.nome);
  })
};

exibirProdutos();