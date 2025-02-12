(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const u="/simon-says/assets/simon-BMovPyLy.png",c=document.getElementById("app");function a(){c.innerHTML=`
  <img src="${u}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button'>Clasificación</button>`,document.getElementById("play-button").addEventListener("click",l)}function l(){var e=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón");if(e===null){a();return}c.innerHTML=`
  <img src="${u}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${e}</h1>
  <h2 id="score">Puntuación: 0</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
  </div>
  <p id="message">¡Comienza el juego!</p>`,setTimeout(()=>{alert("El juego está a punto de comenzar, presiona el botón para continuar"),d()},100)}function d(){const e=[m(0,3)];console.log(e),p(e)}function m(e,o){return e=Math.ceil(e),o=Math.floor(o),Math.floor(Math.random()*(o-e+1))+e}function p(e){const o=["pink","blue","green","yellow"];e.forEach((i,s)=>{setTimeout(()=>{const t=document.getElementById(o[i]);t.classList.add("active-"+o[i]),setTimeout(()=>{t.classList.remove("active-"+o[i])},1e3)},s*1500)})}a();
