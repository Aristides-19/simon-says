(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const r="/simon-says/assets/simon-BMovPyLy.png",u=document.getElementById("app");function l(){u.innerHTML=`
  <img src="${r}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button'>Clasificación</button>`,document.getElementById("play-button").addEventListener("click",a)}function a(){const i=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón");u.innerHTML=`
  <img src="${r}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${i}</h1>
  <h2>Puntuación: 0</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
  </div>
  <p id="message">¡Comienza el juego!</p>`}l();
