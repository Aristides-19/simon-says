(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const b of u.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function o(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerPolicy&&(u.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?u.credentials="include":n.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(n){if(n.ep)return;n.ep=!0;const u=o(n);fetch(n.href,u)}})();const m="/simon-says/assets/simon-BMovPyLy.png",I="/simon-says/assets/blue-LUIwUHyS.ogg",B="/simon-says/assets/pink-BG0qG-kv.ogg",L="/simon-says/assets/green-CjtOnltG.ogg",k="/simon-says/assets/yellow-CK_VNYWM.ogg",f="/simon-says/assets/menu-B9x91fuP.mp3",g=document.getElementById("app"),r=["pink","blue","green","yellow"];let c=[],i=0,d=0,a="",p="",l=0;function y(){g.innerHTML=`
  <img src="${m}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <button type="button" class='menu-button' id='play-button'>Jugar</button>
  <button type="button" class='menu-button' id='score-button'>Clasificación</button>
  <audio id="menu-sound" src="${f}"></audio>`,document.getElementById("play-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),h()}),document.getElementById("score-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(P,100)})}function h(){if(a=prompt("El juego está a punto de comenzar, introduce tu nombre de jugador:","Simón"),a===null){y();return}g.innerHTML=`
  <img src="${m}" height=15% title="Simóncito"/>
  <h1>Simón Dice ${a}</h1>
  <h2 id="score">Puntuación: ${i}</h2>
  <div id="buttons">
    <button type="button" class="simon-button" id="pink"></button>
    <button type="button" class="simon-button" id="blue"></button>
    <button type="button" class="simon-button" id="green"></button>
    <button type="button" class="simon-button" id="yellow"></button>
    <audio id="pink-sound" src="${B}"></audio>
    <audio id="green-sound" src="${L}"></audio>
    <audio id="yellow-sound" src="${k}"></audio>
    <audio id="blue-sound" src="${I}"></audio>
  </div>
  <p id="message">¡Comienza el juego!</p>`;function e(t){document.getElementById(t).addEventListener("click",()=>{document.getElementById(t+"-sound").play()})}e("pink"),e("blue"),e("green"),e("yellow"),setTimeout(()=>{alert("El juego está a punto de comenzar, presiona el botón para continuar"),T()},100)}function T(){c=[E(0,3)],i=0,S()}function E(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function S(){c.forEach((t,o)=>{setTimeout(()=>{const s=document.getElementById(r[t]);s.classList.add("active-"+r[t]),document.getElementById(r[t]+"-sound").play(),setTimeout(()=>{s.classList.remove("active-"+r[t])},1e3)},o*1300)});const e=(c.length-1)*1300+1e3;setTimeout(()=>{$()},e)}function $(){document.querySelectorAll(".simon-button").forEach(e=>{e.addEventListener("click",v)})}function M(){document.querySelectorAll(".simon-button").forEach(e=>{e.removeEventListener("click",v)})}function v(e){e.target.id===r[c[d]]?(d++,d===c.length&&(M(),i++,document.getElementById("score").innerText="Puntuación: "+i,c.push(E(0,3)),d=0,setTimeout(()=>{S()},1300))):(alert("¡Te equivocaste!"),w())}function w(){l=localStorage.getItem(a),l==null&&(l=0,localStorage.setItem(a,i)),i>l?(localStorage.setItem(a,i),l=i,p="¡Felicidades! Nuevo Record"):p="Mejor suerte la próxima",g.innerHTML=`
  <img src="${m}" height=15% title="Simóncito"/>
  <h1>Simón Dice</h1>
  <h1>${p}</h1>
  <h2>Juego Terminado</h2>
  <h2>Puntaje: ${i}</h2>
  <h2>Mejor Puntaje: ${l}</h2>
  <button type="button" class='menu-button' id='restart-button' style='margin-top: 10px'>Reiniciar</button>
  <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
  <audio id="menu-sound" src="${f}"></audio>`,d=0,i=0,c=[],document.getElementById("restart-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(h,100)}),document.getElementById("back-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(y,100)})}function P(){g.innerHTML=`
    <img src="${m}" height=15% title="Simóncito"/>
    <h1>Simón Dice</h1>
    <h2>Clasificación</h2>
    <ol style="text-align: left" id="clasf"></ol>
    <button type="button" class='menu-button' id='back-button'>Volver al Menú</button>
    <audio id="menu-sound" src="${f}"></audio>`,document.getElementById("back-button").addEventListener("click",()=>{document.getElementById("menu-sound").play(),setTimeout(y,100)});const e=document.getElementById("clasf"),t=[];for(let o=0;o<localStorage.length;o++){const s=localStorage.key(o),n=localStorage.getItem(s);t.push({key:s,value:n})}t.sort((o,s)=>s.value.localeCompare(o.value)),t.forEach(o=>{e.innerHTML+=`<li>${o.key} : <u>${o.value}</u></li>`})}y();
