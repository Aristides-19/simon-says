(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}})();const m="/simon-says/assets/simon-BMovPyLy.png",v="/simon-says/assets/blue-LUIwUHyS.ogg",S="/simon-says/assets/pink-BG0qG-kv.ogg",L="/simon-says/assets/green-CjtOnltG.ogg",B="/simon-says/assets/yellow-CK_VNYWM.ogg",y="/simon-says/assets/menu-B9x91fuP.mp3",b=document.getElementById("app"),c=["pink","blue","green","yellow"];let u=[],s=0,r=0,d="";function g(){b.innerHTML=`
  <img src="${m}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button' id='score-button'>Clasificación</button>
  <audio id="menu-sound" src="${y}"></audio>`,document.querySelectorAll(".menu-button").forEach(t=>t.addEventListener("click",()=>{document.getElementById("menu-sound").play()})),document.getElementById("play-button").addEventListener("click",p),document.getElementById("score-button").addEventListener("click",()=>{})}function p(){if(d=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón"),d===null){g();return}b.innerHTML=`
  <img src="${m}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${d}</h1>
  <h2 id="score">Puntuación: ${s}</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
    <audio id="pink-sound" src="${S}"></audio>
    <audio id="green-sound" src="${L}"></audio>
    <audio id="yellow-sound" src="${B}"></audio>
    <audio id="blue-sound" src="${v}"></audio>
  </div>
  <p id="message">¡Comienza el juego!</p>`;function t(e){document.getElementById(e).addEventListener("click",()=>{document.getElementById(e+"-sound").play()})}t("pink"),t("blue"),t("green"),t("yellow"),setTimeout(()=>{alert("El juego está a punto de comenzar, presiona el botón para continuar"),I()},100)}function I(){u=[f(0,3)],s=0,h()}function f(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function h(){u.forEach((e,l)=>{setTimeout(()=>{const i=document.getElementById(c[e]);i.classList.add("active-"+c[e]),document.getElementById(c[e]+"-sound").play(),setTimeout(()=>{i.classList.remove("active-"+c[e])},1e3)},l*1300)});const t=(u.length-1)*1500+1e3;setTimeout(()=>{k()},t)}function k(){document.querySelectorAll(".simon-button").forEach(t=>{t.addEventListener("click",E)})}function M(){document.querySelectorAll(".simon-button").forEach(t=>{t.removeEventListener("click",E)})}function E(t){t.target.id===c[u[r]]?(r++,r===u.length&&(M(),s++,document.getElementById("score").innerText="Puntuación: "+s,u.push(f(0,3)),r=0,setTimeout(()=>{h()},1e3))):(alert("¡Te equivocaste!"),T())}function T(){b.innerHTML=`
  <img src="${m}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <h2>Juego Terminado</h2>
  <button type="button" class='menu-button' id='restart-button' style='margin-top: 10px'>Reiniciar</button>
  <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
  <audio id="menu-sound" src="${y}"></audio>`,localStorage.setItem(d,s),r=0,s=0,u=[],document.querySelectorAll(".menu-button").forEach(t=>t.addEventListener("click",()=>{document.getElementById("menu-sound").play()})),document.getElementById("restart-button").addEventListener("click",p),document.getElementById("back-button").addEventListener("click",g)}g();
