const lamp = document.getElementById ('lamp');

const btnOn = document.getElementById ('on');
const btnOf = document.getElementById ('of');

function lampOn () {
    lamp.src ='./img/ligada.png'
}

function lampOf () {
    lamp.src = './img/desligada.png'
}

btnOn.addEventListener ('click', lampOn);
btnOf.addEventListener ('click', lampOf);


