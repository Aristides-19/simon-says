(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const d="/simon-says/assets/simon-BMovPyLy.png",y="/simon-says/assets/blue-LUIwUHyS.ogg",h="/simon-says/assets/pink-BG0qG-kv.ogg",S="/simon-says/assets/green-CjtOnltG.ogg",v="/simon-says/assets/yellow-CK_VNYWM.ogg",m=document.getElementById("app"),c=["pink","blue","green","yellow"];let i=[],a=0,r=0;function g(){m.innerHTML=`
  <img src="${d}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button'>Clasificación</button>`,document.getElementById("play-button").addEventListener("click",E)}function E(){var e=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón");if(e===null){g();return}m.innerHTML=`
  <img src="${d}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${e}</h1>
  <h2 id="score">Puntuación: ${a}</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
    <audio id="pink-sound" src="${h}"></audio>
    <audio id="green-sound" src="${S}"></audio>
    <audio id="yellow-sound" src="${v}"></audio>
    <audio id="blue-sound" src="${y}"></audio>
  </div>
  <p id="message">¡Comienza el juego!</p>`;function t(s){document.getElementById(s).addEventListener("click",()=>{document.getElementById(s+"-sound").play()})}t("pink"),t("blue"),t("green"),t("yellow"),setTimeout(()=>{alert("El juego está a punto de comenzar, presiona el botón para continuar"),L()},100)}function L(){i=[p(0,3)],f()}function p(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function f(){i.forEach((t,s)=>{setTimeout(()=>{const u=document.getElementById(c[t]);u.classList.add("active-"+c[t]),setTimeout(()=>{u.classList.remove("active-"+c[t])},1e3)},s*1500)});const e=(i.length-1)*1500+1e3;setTimeout(()=>{B()},e)}function B(){document.querySelectorAll(".simon-button").forEach(e=>{e.addEventListener("click",b)})}function w(){document.querySelectorAll(".simon-button").forEach(e=>{e.removeEventListener("click",b)})}function b(e){e.target.id===c[i[r]]&&(r++,r===i.length&&(w(),a++,document.getElementById("score").innerText="Puntuación: "+a,i.push(p(0,3)),r=0,setTimeout(()=>{f()},1e3)))}g();
