import simon from './assets/simon.png';
import blueSound from './assets/blue.ogg';
import pinkSound from './assets/pink.ogg';
import greenSound from './assets/green.ogg';
import yellowSound from './assets/yellow.ogg';
import './style.css';

const appDiv = document.getElementById('app');

const buttons = ['pink', 'blue', 'green', 'yellow'];
let sequence = [];
let points = 0;
let count = 0;

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
    <audio id="pink-sound" src="${pinkSound}"></audio>
    <audio id="green-sound" src="${greenSound}"></audio>
    <audio id="yellow-sound" src="${yellowSound}"></audio>
    <audio id="blue-sound" src="${blueSound}"></audio>
  </div>
  <p id="message">¡Comienza el juego!</p>`;

  function addSoundToButton(buttonId) {
    document.getElementById(buttonId).addEventListener('click', () => {
      document.getElementById(buttonId + '-sound').play();
    });
  }
  addSoundToButton('pink');
  addSoundToButton('blue');
  addSoundToButton('green');
  addSoundToButton('yellow');

  setTimeout(() => {
    alert(
      'El juego está a punto de comenzar, presiona el botón para continuar'
    );
    startGame();
  }, 100);
}

function startGame() {
  sequence = [getRandomInt(0, 3)];
  showSequence();
  initPlayerTurn();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showSequence() {
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

// Habilita la interacción del jugador
function initPlayerTurn() {
  document.querySelectorAll('.simon-button').forEach((btn) => {
    btn.addEventListener('click', gameManager);
  });
}

function gameManager(input) {
  const color = input.target.id;

  // Verificar si coincide con la secuencia
  if (color === buttons[sequence[count]]) {
    count ++;

    // Avanzar de ronda si completa la secuencia
    if (count === sequence.length) {
      points ++;
      sequence.push(getRandomInt(0, 3));
      count = 0;
      setTimeout(() => {
        showSequence();
      }, 1000);
    }
  }
}

showStartScreen();
