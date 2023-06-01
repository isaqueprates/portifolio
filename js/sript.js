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