(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const y of u.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function o(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerPolicy&&(u.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?u.credentials="include":n.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(n){if(n.ep)return;n.ep=!0;const u=o(n);fetch(n.href,u)}})();const d="/simon-says/assets/simon-BMovPyLy.png",v="/simon-says/assets/blue-LUIwUHyS.ogg",S="/simon-says/assets/pink-BG0qG-kv.ogg",B="/simon-says/assets/green-CjtOnltG.ogg",I="/simon-says/assets/yellow-CK_VNYWM.ogg",b="/simon-says/assets/menu-B9x91fuP.mp3",m=document.getElementById("app"),l=["pink","blue","green","yellow"];let i=[],c=0,a=0,r="";function g(){m.innerHTML=`
  <img src="${d}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button' id='score-button'>Clasificación</button>
  <audio id="menu-sound" src="${b}"></audio>`,document.getElementById("play-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),p()}),document.getElementById("score-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout($,100)})}function p(){if(r=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón"),r===null){g();return}m.innerHTML=`
  <img src="${d}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${r}</h1>
  <h2 id="score">Puntuación: ${c}</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
    <audio id="pink-sound" src="${S}"></audio>
    <audio id="green-sound" src="${B}"></audio>
    <audio id="yellow-sound" src="${I}"></audio>
    <audio id="blue-sound" src="${v}"></audio>
  </div>
  <p id="message">¡Comienza el juego!</p>`;function t(e){document.getElementById(e).addEventListener("click",()=>{document.getElementById(e+"-sound").play()})}t("pink"),t("blue"),t("green"),t("yellow"),setTimeout(()=>{alert("El juego está a punto de comenzar, presiona el botón para continuar"),L()},100)}function L(){i=[f(0,3)],c=0,h()}function f(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function h(){i.forEach((e,o)=>{setTimeout(()=>{const s=document.getElementById(l[e]);s.classList.add("active-"+l[e]),document.getElementById(l[e]+"-sound").play(),setTimeout(()=>{s.classList.remove("active-"+l[e])},1e3)},o*1300)});const t=(i.length-1)*1300+1e3;setTimeout(()=>{k()},t)}function k(){document.querySelectorAll(".simon-button").forEach(t=>{t.addEventListener("click",E)})}function T(){document.querySelectorAll(".simon-button").forEach(t=>{t.removeEventListener("click",E)})}function E(t){t.target.id===l[i[a]]?(a++,a===i.length&&(T(),c++,document.getElementById("score").innerText="Puntuación: "+c,i.push(f(0,3)),a=0,setTimeout(()=>{h()},1300))):(alert("¡Te equivocaste!"),M())}function M(){m.innerHTML=`
  <img src="${d}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <h2>Juego Terminado</h2>
  <button type="button" class='menu-button' id='restart-button' style='margin-top: 10px'>Reiniciar</button>
  <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
  <audio id="menu-sound" src="${b}"></audio>`,localStorage.setItem(r,c),a=0,c=0,i=[],document.getElementById("restart-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(p,100)}),document.getElementById("back-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(g,100)})}function $(){m.innerHTML=`
    <img src="${d}" height=15% title="Simóncito"/>
    <h1>Simón Dice</h1>
    <h2>Clasificación</h2>
    <ol style="text-align: left" id="clasf"></ol>
    <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
    <audio id="menu-sound" src="${b}"></audio>`,document.getElementById("back-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(g,100)});const t=document.getElementById("clasf"),e=[];for(let o=0;o<localStorage.length;o++){const s=localStorage.key(o),n=localStorage.getItem(s);e.push({key:s,value:n})}e.sort((o,s)=>s.value.localeCompare(o.value)),e.forEach(o=>{t.innerHTML+=`<li>${o.key} : <u>${o.value}</u></li>`})}g();
