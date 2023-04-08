const hameburger = document.getElementById('hamb'),
nav = document.getElementById('navbar');

hameburger.addEventListener('click',() => {
if (!nav.classList.contains('nav-active')) {
    nav.classList.add('nav-active')
} else {
    nav.classList.remove('nav-active')
}


    

})