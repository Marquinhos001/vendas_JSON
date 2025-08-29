fetch('dados.json').then(resposta => resposta.json()).then(banco => {
    console.log(banco);

    //Front-end

    document.getElementById('imagem').innerHTML = banco[3].imagemProduto.image001;
    document.getElementById('produto').innerHTML = banco[0].produto.prod123;
    document.getElementById('preco').innerHTML = banco[2].preco.preco791;
    document.getElementById('vendedor').innerHTML = banco[1].vendedor.vend456;
    document.getElementById('cliente').innerHTML = banco[4].clientes.cli001;

    document.getElementById('imagem2').innerHTML = banco[3].imagemProduto.image002;
    document.getElementById('produto2').innerHTML = banco[0].produto.prod124;
    document.getElementById('preco2').innerHTML = banco[2].preco.preco790;
    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend457;
    document.getElementById('cliente2').innerHTML = banco[4].clientes.cli002;

    document.getElementById('imagem3').innerHTML = banco[3].imagemProduto.image003;
    document.getElementById('produto3').innerHTML = banco[0].produto.prod125;
    document.getElementById('preco3').innerHTML = banco[2].preco.preco789;
    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend458;
    document.getElementById('cliente3').innerHTML = banco[4].clientes.cli003;
  });
