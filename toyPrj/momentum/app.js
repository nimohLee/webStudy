
const h1 = document.querySelector('h1');

function handleTitleMouseClick(){
    h1.classList.toggle('active');
}

h1.addEventListener('click',handleTitleMouseClick);