const divPecas = document.getElementById('pecas');
const divKits = document.getElementById('kits');
const listaProdutos = document.getElementById('produtos');
const telaCarregamento = document.getElementById('telaCarregamento');

const produtos = [];


const pegarProdutos = async () => {
    telaCarregamento.style.display = 'flex';
    const promise = await fetch('https://tech4japa.fly.dev/produtos');
    const response = await promise.json();

    const meusProdutos = response.filter(produto => produto.restaurante == "Grajapa");

    meusProdutos.forEach(produto => {
        produtos.push(produto);
    });
    mostrarProdutos();
}

pegarProdutos();

const mostrarProdutos = async () => {
    telaCarregamento.style.display = 'none';
    const novaLista = await Promise.all(produtos.map(async (produtos) => {
        const promise = await fetch(`https://tech4japa.fly.dev/produtos/${produtos.id}`);
        const response = await promise.json();
        return response;
    }))
    novaLista.forEach(produto => {
        definirDadosProdutos(produto);
    })
}

const definirDadosProdutos = (produto) => {
    const div = document.createElement('div');
    div.className = 'produto';
    const img = document.createElement('img');
    img.src = `${produto.imagem}`;
    const titulo = document.createElement('h1');
    const link = document.createElement('a');
    link.href = '../detalhes.html';
    const button = document.createElement('button');
    titulo.innerText = produto.produto;
    button.innerText = 'Ver Detalhes';
    link.appendChild(button);
        

    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(link);
    listaProdutos.appendChild(div);
}