const botones = document.querySelectorAll('.botonera button');
const display = document.querySelector('#display');

botones.forEach(boton => boton.addEventListener('click', calcular))

function calcular(event) {
  let operacion = event.target.innerText;
  display.value = operacion
}