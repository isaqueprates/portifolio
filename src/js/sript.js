
const btn = document.querySelectorAll(".layer");
const btnMenu = document.querySelector('#btn-mobile');
const title = document.querySelector('h1');

typeWriter(title);

btnMenu.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
    pegarForm();
});


function toggleMenu(){
    const nav = document.querySelector('.header');
    nav.classList.toggle('active');
}

function typeWriter(element) {
    const textDisplay = element.innerHTML.split('');
    element.innerHTML = '';
    for (let i = 0; i < textDisplay.length; i++) {
        setTimeout(() => element.innerHTML += textDisplay[i], 150 * i);
    }
}

function pegarForm() {
    const nome = document.querySelector('#name');
    const email = document.querySelector('#email');
    const mensagem = document.querySelector('#message');
    const bt = document.querySelector('#submit');
    const form = document.querySelector('#contact-form');

    bt.addEventListener('click', (event) => {
        event.preventDefault();
        const data = {
            nome: nome.value,
            email: email.value,
            mensagem: mensagem.value
        };

        enviarEmail(data);
        form.reset();
    });
}

async function enviarEmail(dados) {
    console.log(dados);

}

// function typeWriter(elemento) {
//   let textoArray = elemento.innerText.split('');
//   elemento.innerText = '';
//   textoArray.forEach((letra, i) => {
//     setTimeout(() => elemento.innerText += letra, 150 * i);
//   });
  
// }