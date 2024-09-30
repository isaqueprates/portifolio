
const btn = document.querySelectorAll(".layer");
const btnMenu = document.querySelector('#btn-mobile');
const title = document.querySelector('h1');

typeWriter(title);

btnMenu.addEventListener('click', toggleMenu);

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

// function typeWriter(elemento) {
//   let textoArray = elemento.innerText.split('');
//   elemento.innerText = '';
//   textoArray.forEach((letra, i) => {
//     setTimeout(() => elemento.innerText += letra, 150 * i);
//   });
  
// }

const btnHeading = document.querySelector('#btn-heading');

btnHeading.addEventListener('click', () => {
    const heading = document.querySelector('.about-content');
    const headingActive = document.querySelector('.about');
    heading.classList.toggle('active');
    headingActive.classList.toggle('active');
    btnHeading.innerHTML = btnHeading.innerHTML === 'Ler mais' ? 'Ler menos' : 'Ler mais';
});