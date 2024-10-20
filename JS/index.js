const botaoAbrirMenu = document.getElementById('abrirMenu');
const botaoFecharMenu = document.getElementById('fecharMenu');
const abaMenuLateral = document.getElementById('aba-menu-lateral');
const menuLateral = document.getElementById('menu-lateral');
const cronometro = document.getElementById('timer');

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

const atualizarContador = () => {
    const horaAtual = new Date();
    
    const horas24 = new Date();

    horas24.setHours(24, 0, 0, 0);

    const diferenca = horas24 - horaAtual;

    let horas = Math.floor(diferenca / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor(diferenca % (1000 * 60) / 1000)

    if(horas < 10){
        horas = `0${horas}`;
    }
    if(minutos < 10){
        minutos = `0${minutos}`;
    }
    if(segundos < 10){
        segundos = `0${segundos}`;
    }

    cronometro.innerText = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarContador, 1000);