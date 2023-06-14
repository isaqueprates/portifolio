const btn = document.querySelectorAll(".layer");
const btnMenu = document.querySelector('#btn-mobile')

// btn.addEventListener('onclick', () =>{
//             btn.classList.add("teste")
//         })

// btn.forEach("onmouseover", () => { 
//     function clearIcon (){
//         btn.classList.add("teste")
//     }
// });

// function clearIcon2 (){
//     btn.classList.remove("teste")
// }

// btn = hover;
// btn.onmouseout = clearIcon2;



function toggleMenu(){
    const nav = document.querySelector('.header')
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)

//carrossel
const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.cards');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isleft = control.classList.contains('arrow-left')

        if (isleft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        items[currentItem].classList.add('current-item');
    });
});

// function typeWriter(elemento) {
//   const textoArray = elemento.innerText.split('');
//   elemento.innerText = '';
//   textoArray.forEach((letra, i) => {
//     setTimeout(() => elemento.innerText += letra, 150 * i);
//   });
// }

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for (let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 150 * i);
    }
}

const titulo = document.querySelector('h1');
typeWriter(titulo);