!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e,o){"use strict";o.r(e);const n=o(2);e.default=function(){const t=[],e=[];for(let e=0;e<100;e++)t.push(void 0);return{boardArray:t,ships:e,placeShip:(o,r)=>{if(r.every(e=>void 0===t[e])){const i=n(r);r.forEach(e=>t[e]=o),e.push(i)}else console.log("one or more positions are occupied")},updateShip:(o,r,i)=>{r.forEach(e=>t[e]=void 0),e.forEach(t=>console.log(t.getPositions())),e[o]=n(i),e.forEach(t=>console.log(t.getPositions())),i.forEach(e=>t[e]=o)},receiveAttack:o=>{if(void 0===t[o])t[o]="miss";else if("miss"!==t[o]&&"hit"!==t[o]){const n=t[o];e[n].hit(o),t[o]="hit"}},allShipsSunk:()=>e.every(t=>t.isSunk())}}},function(t,e,o){o(0);t.exports=function(){return{attack:(t,e)=>{t.receiveAttack(e)}}}},function(t,e){t.exports=function(t){const e={};return t.forEach(t=>e[t]=1),{hit:t=>{e[t]=0},isSunk:()=>Object.values(e).every(t=>0===t),getPositions:()=>e}}},function(t,e,o){"use strict";o.r(e),o.d(e,"opponentBoard",(function(){return j})),o.d(e,"selfBoard",(function(){return P})),o.d(e,"selfBoardDiv",(function(){return O}));var n=o(0);var r=function(t,e){t.forEach((t,o=0)=>{const n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-key",o),e.appendChild(n)})},i=o(1),a=o.n(i);function s(t,e){let o;switch(e){case"up":o=t-10;break;case"down":o=t+10;break;case"left":o=t-1;break;case"right":o=t+1}return function(t,e,o){if(!(o<0||o>99)){if("left"===t||"right"===t){if(Math.floor(e/10)!==Math.floor(o/10))return}return o}}(e,t,o)}var c=function(){let t,e=["up","down","left","right"];return{getComputerAttackPosition:()=>{if(t){console.log("inside "+t+e);let o=s(t,e[0]);for(;!o;)e.shift(),o=s(t,e[0]);return o}return function(){let t=Math.floor(100*Math.random()),e=P.boardArray[t];for(;"miss"===e||"hit"===e;)t=Math.floor(100*Math.random()),e=P.boardArray[t];return t}()},updateMiss:()=>{t&&(e.shift(),0===e.length&&(t=void 0,e=["up","down","left","right"]))},updateHits:e=>{t=e}}};const l=a()(),u=a()(),d=c();function f(t,e,o,n){t.attack(e,n);const r=e.boardArray[n];return"miss"===r?o.classList.add("miss"):"hit"===r&&o.classList.add("hit"),r}var h=function(t){if(P.allShipsSunk()||j.allShipsSunk()){const t=j.allShipsSunk()?"human":"computer";return void console.log("winner is "+t)}let e=t.target,o=e.getAttribute("data-key");f(l,j,e,o),o=d.getComputerAttackPosition(),console.log(o),e=O.querySelector(`div[data-key="${o}"]`);const n=f(u,P,e,o);console.log(n),"hit"===n?d.updateHits(o):d.updateMiss(o)};function p(t,e,o,n){return!t.includes(e)&&("horizontal"===n?function(t,e,o){if(e+o-1>=10*(Math.floor(e/10)+1))return!1;for(let n=0;n<o;n++)if(e++,t.includes(e))return!1;return!0}(t,e,o):function(t,e,o){if(e+10*(o-1)>e%10+90)return!1;for(let n=0;n<o;n++)if(e+=10,t.includes(e))return!1;return!0}(t,e,o))}function g(t,e,o){let n=Math.floor(100*Math.random());for(;!p(t,n,e,o);)n=Math.floor(100*Math.random());return n}var v={randomPlacement(t){const{ships:e,orientations:o}=function(){const t=[],e=[],o=[];for(let n=1;n<=5;n++){let r=n%2?"vertical":"horizontal";o.push(r);let i=[],a=g(t,n,r);for(let e=0;e<n;e++)i.push(a),t.push(a),"vertical"===r?a+=10:a++;e.push(i)}return console.log(e,o),{ships:e,orientations:o}}();return e.forEach((e,o=0)=>{t.placeShip(o,e)}),{ships:e,orientations:o}}};function b(t,e,o,n){"vertical"===e?(t.setAttribute("data-top",o),t.setAttribute("data-bottom",n)):(t.setAttribute("data-left",o),t.setAttribute("data-right",n));const r=Math.floor(o/10),i=o%10;t.style.top=42*r+"px",t.style.left=42*i+"px"}function y(t,e,o,n,r,i){const a=function(t,e,o){const n=document.createElement("div");return n.classList.add("ship"),n.draggable=!0,n.classList.add(t),n.setAttribute("data-ship",e),n.setAttribute("data-length",o),"vertical"===t?(n.style.width="40px",n.style.height=40*o+"px"):(n.style.height="40px",n.style.width=40*o+"px"),n}(o,e,n);b(a,o,r,i),t.appendChild(a)}function m(t,e,o){const n=[];let r=o;const i="vertical"===t?10:1;for(let t=0;t<e;t++)n.push(r),r-=i;return n}function A(t){console.log("start");const e=this.getAttribute("data-ship");t.dataTransfer.setData("text",e),setTimeout(()=>this.classList.add("hidden"),0)}function S(){console.log("end"),this.classList.remove("hidden")}function E(t){console.log("over"),t.preventDefault()}function k(){console.log("enter"),this.classList.add("hovered")}function M(){console.log("leave"),this.className="cell"}function L(t){console.log("drop"),t.preventDefault();const e=t.dataTransfer.getData("text");console.log(e),this.className="cell";const o=O.querySelector(`.ship[data-ship='${e}']`);console.log(o,this),function(t,e){const o=[...t.classList].includes("horizontal")?"horizontal":"vertical",n=t.getAttribute("data-length"),r="horizontal"===o?parseInt(t.getAttribute("data-right")):parseInt(t.getAttribute("data-bottom")),i=m(o,n,r);console.log(r,i);const a=parseInt(e.getAttribute("data-key")),s=m(o,n,a);if(!function(t,e){return t.every(t=>void 0===P.boardArray[t]||e.includes(t))}(s,i))return;console.log(a,s),function(t,e,o,n){if("vertical"===o){const o=e.getAttribute("data-key"),r=o-10*(n-1);if(r<0)return;b(t,"vertical",r,o)}else{const o=e.getAttribute("data-key"),r=o-(n-1);if(r<10*Math.floor(o/10))return;b(t,"horizontal",r,o)}}(t,e,o,n);const c=parseInt(t.getAttribute("data-ship"));console.log(c,i,s),P.updateShip(c,i,s)}(o,this)}var x=function(){const t=O.querySelectorAll(".ship"),e=O.querySelectorAll(".cell");t.forEach(t=>t.addEventListener("dragstart",A)),t.forEach(t=>t.addEventListener("dragend",S)),e.forEach(t=>t.addEventListener("dragover",E)),e.forEach(t=>t.addEventListener("dragenter",k)),e.forEach(t=>t.addEventListener("dragleave",M)),e.forEach(t=>t.addEventListener("drop",L))};const P=Object(n.default)(),j=Object(n.default)(),O=document.querySelector("#self"),w=document.querySelector("#opponent"),{ships:q,orientations:z}=v.randomPlacement(P);q.forEach((t,e=0)=>{const o=t.length,n=t[0],r=t[o-1];y(O,""+e,z[e],o,n,r)}),v.randomPlacement(j,w),console.log(P),console.log(j),r(P.boardArray,O),r(j.boardArray,w),w.addEventListener("click",h),x()}]);