const pegarUrl = new URLSearchParams(window.location.search);
const id = pegarUrl.get('produtoId');
const main = document.getElementById('main');
const telaCarregamento = document.getElementById('telaCarregamento');

const pegarProduto = async () => {
    telaCarregamento.style.display = 'flex';
    const promise = await fetch(`https://tech4japa.fly.dev/produtos/${id}`);
    const response = await promise.json();
    telaCarregamento.style.display = 'none';
    mostrarCard(response);
}

pegarProduto();

const mostrarCard = (produto) => {
    const divCard = document.createElement('div');
    divCard.className = 'card';

    const img = document.createElement('img');
    img.src = `${produto.imagem}`;

    const divDados = document.createElement('div');
    divDados.className = 'dados';

    const divTexto = document.createElement('div');
    divTexto.className = 'texto';

    const h1 = document.createElement('h1');
    h1.innerText = `${produto.produto}`;

    const divDescricao = document.createElement('div');
    divDescricao.className = 'descricao';

    const pDetalhes = document.createElement('p');
    pDetalhes.innerText = `${produto.descricao}`;

    const divForm = document.createElement('div');
    divForm.className = 'form-comprar';

    const form = document.createElement('form');
    form.id = 'form';

    const pPromocao = document.createElement('p');
    pPromocao.innerText = 'Receber Promoções';
    pPromocao.style.fontWeight = '600';

    const input = document.createElement('input');
    input.placeholder = 'Seu E-mail';
    input.type = 'text';
    input.id = 'email';

    const divCheckBox = document.createElement('div');
    divCheckBox.className = 'checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    const labelCheckbox = document.createElement('label');
    labelCheckbox.innerHTML = `Aceito os <a href="#">Termos de Uso</a>`;

    const pErro = document.createElement('p');
    pErro.className = 'erro';
    pErro.innerText = 'Você precisa concordar com os Termos de Uso';
    pErro.id = 'erro';

    const buttonSubmit = document.createElement('button');
    buttonSubmit.type = 'submit';
    buttonSubmit.innerText = 'Receber Promoções';

    const buttonComprar = document.createElement('button');
    buttonComprar.className = 'comprar';
    buttonComprar.innerText = 'Comprar';

    divCard.appendChild(img);

    divTexto.appendChild(h1);
    divDescricao.appendChild(pDetalhes);
    divTexto.appendChild(divDescricao);
    divDados.appendChild(divTexto);

    form.appendChild(pPromocao);
    form.appendChild(input);
    divCheckBox.appendChild(checkbox);
    divCheckBox.appendChild(labelCheckbox);
    form.appendChild(divCheckBox);
    form.appendChild(buttonSubmit);
    form.appendChild(pErro);
    divForm.appendChild(form);
    divForm.appendChild(buttonComprar);

    divDados.appendChild(divForm);
    divCard.appendChild(divDados);

    main.appendChild(divCard);

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        verificarForm(input.id, checkbox.id);
    })
}