(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function u(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=u(t);fetch(t.href,e)}})();const c="/simon-says/assets/simon-BMovPyLy.png",r=document.getElementById("app");function l(){r.innerHTML=`
  <img src="${c}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button'>Clasificación</button>`,document.getElementById("play-button").addEventListener("click",d)}function d(){const i=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón");r.innerHTML=`
  <h1>Simon Dice ${i}</h1>
  <div id="buttons">
    <button class="simon-button" id="red"></button>
    <button class="simon-button" id="blue"></button>
    <button class="simon-button" id="green"></button>
    <button class="simon-button" id="yellow"></button>
  </div>
  <p id="message">¡Comienza el juego!</p>
`}l();
