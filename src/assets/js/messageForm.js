const message = document.querySelector('.box-message'); 
const text = document.querySelector('.text-message'); 

function messageButton(e) {
    message.style.display = 'block'; 

    text.innerHTML = 'Recebi o seu contato, retorno em breve. Grato!';

    return
}

function removeMessage() {
    message.style.display = 'none'
}