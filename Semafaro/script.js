const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0; // iniciando indice do zero , variavel global para interagir com  varias funçoes 
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; // ternario

const changeColor = () => {
  const colors = ['red', 'yellow', 'green'] // array de cores 
  const color = colors[colorIndex]; // chamada forma dinamica
  turnOn[color]();
  nextIndex(); // proximo indice
}

const stopAutomatic = () => {
  clearInterval(intervalId);
}

const turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);