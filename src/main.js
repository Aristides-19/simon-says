import simon from './assets/simon.png';
import './style.css';

const appDiv = document.getElementById('app');

function showStartScreen() {
  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button'>Clasificación</button>`;

  document.getElementById('play-button').addEventListener('click', startGame);
}

function startGame() {
  const name = prompt(
    'El juego está a punto de comenzar, introduce tu nombre de jugador:',
    'Simón'
  );
  appDiv.innerHTML = `
  <img src="${simon}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${name}</h1>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
  </div>
  <p id="message">¡Comienza el juego!</p>
`;
}

showStartScreen();
