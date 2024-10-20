const verificarForm = (email, checkbox) => {
    const inputEmail = document.getElementById(`${email}`);
    const inputCheckbox = document.getElementById(`${checkbox}`);
    const pErro = document.getElementById('erro');
    const label = document.getElementById('label');
    const link = document.getElementById('a');
    pErro.style.display = 'none';
    label.style.color = 'black';
    link.style.color = 'blue';
    label.style.fontWeight = '400';
    link.style.fontWeight = '400';

    if(inputEmail.value == ''){
        promptEmail();
    } else if(inputEmail.value.length >= 10 && verificarEmail() == true && inputCheckbox.checked){
        Toastify({
            text: `O e-mail "${inputEmail.value}" foi cadastrado com sucesso!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "green",
              fontFamily: "sans-serif",
            },
          }).showToast();
        inputEmail.value = '';
    } else if(inputEmail.value.length < 10 && verificarEmail() == false){
        Toastify({
            text: `E-mail inválido!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
            },
          }).showToast();
    } else if(verificarEmail() == true && inputEmail.value.length < 10){
        Toastify({
            text: `O e-mail precisa ter no mínimo 10 caracteres!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
            },
          }).showToast();
    } else if(inputEmail.value.length >= 10 && verificarEmail() == false){
        Toastify({
            text: `O e-mail precisa ter um @ e pelo menos um ' . ' !`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
              fontFamily: "sans-serif",
            },
          }).showToast();
    } else if(inputEmail.value.length >= 10 && verificarEmail() == true && !inputCheckbox.checked){
        erroCheckbox();
    }
}

const promptEmail = () => {
    const email = prompt('Preencha com seu e-mail:');
    const checkbox = document.getElementById('checkbox');

    if(email == ''){
        Toastify({
            text: `E-mail inválido!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
            },
          }).showToast();
    } else if(email.length >= 10 && email.includes('@') && email.includes('.') && checkbox.checked){
        Toastify({
            text: `O e-mail "${email}" foi cadastrado com sucesso!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "green",
              fontFamily: "sans-serif",
            },
          }).showToast();
    } else if(email.length < 10 && !email.includes('@') && !email.includes('.')){
        Toastify({
            text: `E-mail inválido!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
            },
          }).showToast();
    } else if(email.includes('@') && email.includes('.') && email.length < 10){
        Toastify({
            text: `O e-mail precisa ter no mínimo 10 caracteres!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
            },
          }).showToast();
    } else if(email.length >= 10 && !email.includes('@') && !email.includes('.')){
        Toastify({
            text: `O e-mail precisa ter um @ e pelo menos um ' . ' !`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
              fontFamily: "sans-serif",
            },
          }).showToast();
    } else if(email.length >= 10 && email.includes('@') && email.includes('.') && !checkbox.checked){
        erroCheckbox();
    }
}

const erroCheckbox = () => {
    const label = document.getElementById('label');
    const pErro = document.getElementById('erro');
    const link = document.getElementById('a');
    pErro.style.display = 'flex';
    label.style.color = 'red';
    link.style.color = 'red';
    label.style.fontWeight = '600';
    link.style.fontWeight = '600';
}

const verificarEmail = () => {
    const email = document.getElementById('email');
    if(email.value.includes('@') && email.value.includes('.')){
        return true;
    } else{
        return false;
    }
}