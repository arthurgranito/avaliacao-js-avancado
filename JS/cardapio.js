const botaoAbrirMenu = document.getElementById('abrirMenu');
const botaoFecharMenu = document.getElementById('fecharMenu');
const abaMenuLateral = document.getElementById('aba-menu-lateral');
const menuLateral = document.getElementById('menu-lateral');
const cards = document.getElementById('cards');
const telaCarregamento = document.getElementById('telaCarregamento');
const produtos = [];

botaoAbrirMenu.addEventListener('click', () => {
    abaMenuLateral.classList.remove('hidden');
    menuLateral.classList.add('abrir');
    botaoFecharMenu.classList.remove('hidden');
    botaoAbrirMenu.classList.add('hidden');
})

botaoFecharMenu.addEventListener('click', () => {
    abaMenuLateral.classList.add('hidden');
    menuLateral.classList.remove('abrir');
    botaoFecharMenu.classList.add('hidden');
    botaoAbrirMenu.classList.remove('hidden');
})

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
    div.className = 'card';
    const img = document.createElement('img');
    img.src = `${produto.imagem}`;
    const divDados = document.createElement('div');
    divDados.className = 'dados';
    const titulo = document.createElement('h1');
    const link = document.createElement('a');
    link.href = `./detalhes.html?produtoId=${produto.id}`;
    titulo.innerText = produto.produto;
    const button = document.createElement('button');
    button.innerText = 'Ver Detalhes';
    link.appendChild(button);
    divDados.appendChild(titulo);
    divDados.appendChild(link);
    

    div.appendChild(img);
    div.appendChild(divDados)
    cards.appendChild(div);
}