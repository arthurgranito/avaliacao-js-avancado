const regexEmail = /^[^@]+@[^@]+\.[^@]+$/;

const verificarForm = (email, checkbox) => {
    const inputEmail = document.getElementById(`${email}`);
    const inputCheckbox = document.getElementById(`${checkbox}`);
    const pErro = document.getElementById('erro');
    pErro.style.display = 'none';

    if(inputEmail.value == ''){
        promptEmail();
    } else if(inputEmail.value.length >= 10 && regexEmail.test(inputEmail.value) && inputCheckbox.checked){
        alert(`O email "${inputEmail.value}" foi cadastrado com sucesso!`);
        inputEmail.value = '';
    } else if(inputEmail.value.length < 10 && !regexEmail.test(inputEmail.value)){
        alert('E-mail inválido');
    } else if(regexEmail.test(inputEmail.value) && inputEmail.value.length < 10){
        alert('O e-mail precisa ter no mínimo 10 caracteres');
    } else if(inputEmail.value.length >= 10 && !regexEmail.test(inputEmail.value)){
        alert("O e-mail precisa ter um @ e pelo menos um '.'")
    } else if(inputEmail.value.length >= 10 && regexEmail.test(inputEmail.value) && !inputCheckbox.checked){
        erroCheckbox();
    }
}

const promptEmail = () => {
    const email = prompt('Preencha com seu e-mail:');
    const checkbox = document.getElementById('checkbox');

    if(email == ''){
        alert('E-mail inválido!');
    } else if(email.length >= 10 && regexEmail.test(email) && checkbox.checked){
        alert(`O email "${email}" foi cadastrado com sucesso!`)
    } else if(email.length < 10 && !regexEmail.test(email)){
        alert('E-mail inválido');
    } else if(regexEmail.test(email) && email.length < 10){
        alert('O e-mail precisa ter no mínimo 10 caracteres');
    } else if(email.length >= 10 && !regexEmail.test(email)){
        alert("O e-mail precisa ter um @ e pelo menos um '.'")
    } else if(email.length >= 10 && regexEmail.test(email) && !checkbox.checked){
        erroCheckbox();
    }
}

const erroCheckbox = () => {
    const checkbox = document.getElementById('checkbox');
    const pErro = document.getElementById('erro');
    pErro.style.display = 'flex';
}


