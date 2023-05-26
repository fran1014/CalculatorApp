const botones = document.querySelectorAll('.botonera button');
const display = document.querySelector('#display');

botones.forEach(boton => boton.addEventListener('click', calcular))

function calcular(event) {

  if (event.target.id === 'reset') {
    display.value = "";
  } else if (event.target.id === 'igual') {
    let resultado = eval(display.value)
    display.value = resultado;
  } else if (event.target.id !== 'igual') {
    let operacion = event.target.innerText;
    display.value += operacion
  }

}