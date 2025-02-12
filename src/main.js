import simon from './assets/simon.png';
import './style.css';

const appDiv = document.getElementById('app');

let sequence = [];
let userSequence = [];
let points = 0;

function showStartScreen() {
  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button'>Clasificación</button>`;

  document.getElementById('play-button').addEventListener('click', setGame);
}

function setGame() {
  var name = prompt(
    'El juego está a punto de comenzar, introduce tu nombre de jugador:',
    'Simón'
  );

  if (name === null) {
    showStartScreen();
    return;
  }

  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${name}</h1>
  <h2 id="score">Puntuación: ${points}</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
  </div>
  <p id="message">¡Comienza el juego!</p>`;

  setTimeout(() => {
    alert(
      'El juego está a punto de comenzar, presiona el botón para continuar'
    );
    startGame();
  }, 100);
}

function startGame() {
  sequence = [getRandomInt(0, 3)];
  console.log();
  showSequence();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showSequence() {
  const buttons = ['pink', 'blue', 'green', 'yellow'];
  sequence.forEach((number, index) => {
    setTimeout(() => {
      const button = document.getElementById(buttons[number]);
      button.classList.add('active-' + buttons[number]);

      setTimeout(() => {
        button.classList.remove('active-' + buttons[number]);
      }, 1000); // Duración del estado activo
    }, index * 1500); // Intervalo entre cada botón
  });
}

var count = 0;

document.querySelectorAll("simon-button").forEach(btn => {
  btn.addEventListener("click", () => {
    const color = e.target.dataset.color;
    
    // Verificar si coincide con la secuencia
    if (color !== buttons[sequence[count]]) {
        
    }
    
    // Avanzar de ronda si completa la secuencia
    if (count+1 == sequence.length()) {
        //await new Promise(resolve => setTimeout(resolve, 1000));
        points+=1;
        sequence.push(getRandomInt(0, 3));
        count = -1;
        showSequence(sequence);
    }
    
    count+=1; 
  });
});

showStartScreen();