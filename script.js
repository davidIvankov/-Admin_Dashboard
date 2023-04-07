const hameburger = document.getElementById('hamb'),
nav = document.getElementById('navbar');

hameburger.addEventListener('click',() => {
nav.classList.add('nav-active')
hameburger.classList.replace('fa-bars','fa-caret-up')

    

})