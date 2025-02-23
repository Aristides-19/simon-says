import simon from './assets/simon.png';
import blueSound from './assets/blue.ogg';
import pinkSound from './assets/pink.ogg';
import greenSound from './assets/green.ogg';
import yellowSound from './assets/yellow.ogg';
import menuSound from './assets/menu.mp3';
import './style.css';

const appDiv = document.getElementById('app');

const buttons = ['pink', 'blue', 'green', 'yellow'];
let sequence = [];
let score = 0;
let count = 0;
let name = '';
let message = '';
let bestScore = 0;

function showStartScreen() {
  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button' id='score-button'>Clasificación</button>
  <audio id="menu-sound" src="${menuSound}"></audio>`;

  document.getElementById('play-button').addEventListener('click', () => {
    document.getElementById('menu-sound').play();
    setGame();
  });
  document.getElementById('score-button').addEventListener('click', () => {
    document.getElementById('menu-sound').play();
    setTimeout(setClasification, 100);
  });
}

function setGame() {
  name = prompt('El juego está a punto de comenzar, introduce tu nombre de jugador:', 'Simón');

  if (name === null) {
    showStartScreen();
    return;
  }

  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${name}</h1>
  <h2 id="score">Puntuación: ${score}</h2>
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
    alert('El juego está a punto de comenzar, presiona el botón para continuar');
    startGame();
  }, 100);
}

function startGame() {
  sequence = [getRandomInt(0, 3)];
  score = 0;
  showSequence();
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
      document.getElementById(buttons[number] + '-sound').play();
      setTimeout(() => {
        button.classList.remove('active-' + buttons[number]);
      }, 1000); // Duración del estado activo
    }, index * 1300); // Intervalo entre cada botón
  });

  const totalDuration = (sequence.length - 1) * 1300 + 1000;

  setTimeout(() => {
    enableButtons();
  }, totalDuration);
}

// Habilita la interacción del jugador
function enableButtons() {
  document.querySelectorAll('.simon-button').forEach((btn) => {
    btn.addEventListener('click', gameManager);
  });
}

// Deshabilita la interacción del jugador
function disableButtons() {
  document.querySelectorAll('.simon-button').forEach((btn) => {
    btn.removeEventListener('click', gameManager);
  });
}

function gameManager(input) {
  const color = input.target.id;

  // Verificar si coincide con la secuencia
  if (color === buttons[sequence[count]]) {
    count++;

    // Avanzar de ronda si completa la secuencia
    if (count === sequence.length) {
      disableButtons();
      score++;
      document.getElementById('score').innerText = 'Puntuación: ' + score;
      sequence.push(getRandomInt(0, 3));
      count = 0;
      setTimeout(() => {
        showSequence();
      }, 1300);
    }
  } else {
    alert('¡Te equivocaste!');
    gameOver();
  }
}

function gameOver() {
  bestScore = localStorage.getItem(name);

  if (bestScore == null){
    bestScore = 0;
    localStorage.setItem(name, score);
  }
  if (score > bestScore){
    localStorage.setItem(name, score);
    bestScore = score;
    message = '¡Felicidades! Nuevo Record'
  }else{
    message = 'Mejor suerte la próxima'
  }

  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <h1>${message}</h1>
  <h2>Juego Terminado</h2>
  <h2>Puntaje: ${score}</h2>
  <h2>Mejor Puntaje: ${bestScore}</h2>
  <button type="button" class='menu-button' id='restart-button' style='margin-top: 10px'>Reiniciar</button>
  <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
  <audio id="menu-sound" src="${menuSound}"></audio>`;

  count = 0;
  score = 0;
  sequence = [];

  document.getElementById('restart-button').addEventListener('click', () => {
    document.getElementById('menu-sound').play();
    setTimeout(setGame, 100);
  });
  document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('menu-sound').play();
    setTimeout(showStartScreen, 100);
  });
}

function setClasification() {
  appDiv.innerHTML = `
    <img src="${simon}" height=15% title="Simóncito"/>
    <h1>Simón Dice</h1>
    <h2>Clasificación</h2>
    <ol style="text-align: left" id="clasf"></ol>
    <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
    <audio id="menu-sound" src="${menuSound}"></audio>`;

  document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('menu-sound').play();
    setTimeout(showStartScreen, 100);
  });

  const clasf = document.getElementById('clasf');
  const localStorageItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageItems.push({ key: key, value: value });
  }
  localStorageItems.sort((a, b) => b.value.localeCompare(a.value));
  localStorageItems.forEach((item) => {
    clasf.innerHTML += `<li>${item.key} : <u>${item.value}</u></li>`;
  });
}

showStartScreen();
