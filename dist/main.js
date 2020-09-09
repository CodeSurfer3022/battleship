!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e,o){"use strict";o.r(e);const n=o(2);e.default=function(){const t=[],e=[];for(let e=0;e<100;e++)t.push(void 0);return{board:t,ships:e,placeShip:o=>{if(o.every(e=>void 0===t[e])&&function(t){let e=!0;for(let o=1;o<t.length;o++)if(t[o]-t[o-1]!=1){e=!1;break}let o=!0;for(let e=1;e<t.length;e++)if(t[e]-t[e-1]!=10){o=!1;break}return e||o}(o)){const r=n(o);let a=e.length;o.forEach(e=>t[e]=a),e.push(r)}else console.log("one or more positions are occupied")},receiveAttack:o=>{if(void 0===t[o])t[o]="miss";else if("miss"!==t[o]&&"hit"!==t[o]){const n=t[o];e[n].hit(o),t[o]="hit"}},allShipsSunk:()=>e.every(t=>t.isSunk())}}},function(t,e,o){o(0);t.exports=function(){return{attack:(t,e)=>{t.receiveAttack(e)}}}},function(t,e){t.exports=function(t){const e={};return t.forEach(t=>e[t]=1),{hit:t=>{e[t]=0},isSunk:()=>Object.values(e).every(t=>0===t)}}},function(t,e,o){"use strict";o.r(e),o.d(e,"opponentBoard",(function(){return m})),o.d(e,"selfBoard",(function(){return y})),o.d(e,"selfBoardDiv",(function(){return x}));var n=o(0);var r=function(t,e){t.forEach((t,o=0)=>{const n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-key",o),e.appendChild(n)})},a=o(1),l=o.n(a);l()(),l()();var s=function(t,e,o,n,r,a){const l=document.createElement("div");let s,i;l.setAttribute("data-box",e),l.classList.add("ship"),l.classList.add(o),l.draggable=!0,l.setAttribute("data-length",n),"vertical"===o?(l.setAttribute("data-top",r),l.setAttribute("data-bottom",a),l.style.width="40px",l.style.height=40*n+"px",s=Math.floor(r/10),i=r%10):(l.setAttribute("data-left",r),l.setAttribute("data-right",a),l.style.height="40px",l.style.width=40*n+"px",s=Math.floor(r/10),i=r%10),console.log(l),t.appendChild(l),l.style.top=42*s+"px",l.style.left=42*i+"px"};function i(t,e,o,n){if(t.includes(e))return!1;if("horizontal"===n){if(e+o-1>=10*(Math.floor(e/10)+1))return!1;for(let n=0;n<o;n++)if(e++,t.includes(e))return!1}else{if(e+10*(o-1)>e%10+90)return!1;for(let n=0;n<o;n++)if(e+=10,t.includes(e))return!1}return!0}var c={randomPlacement(t,e){const o=[],n=[],r=[];for(let t=1;t<=5;t++){t%2?r.push("vertical"):r.push("horizontal");const e=r[t-1];let a=Math.round(100*Math.random());for(;!i(o,a,t,e);)a=Math.round(100*Math.random());let l=[];for(let n=0;n<t;n++)l.push(a),o.push(a),"vertical"===e?a+=10:a++;n.push(l)}n.forEach((o,n=0)=>function(t,e,o,n,r){const a=o.length,l=o[0],i=o[a-1];s(e,""+n,r,a,l,i),t.placeShip(o)}(t,e,o,n,r[n]))}};function u(t){console.log("start");const e=this.getAttribute("data-box");t.dataTransfer.setData("text",e),setTimeout(()=>this.classList.add("hidden"),0)}function d(){console.log("end"),this.classList.remove("hidden")}function f(t){console.log("over"),t.preventDefault()}function h(){console.log("enter"),this.classList.add("hovered")}function p(){console.log("leave"),this.className="cell"}function v(t){console.log("drop"),t.preventDefault();const e=t.dataTransfer.getData("text");console.log(e),this.className="cell";const o=x.querySelector(`.ship[data-box='${e}']`);console.log(o,this),function(t,e){const o=[...t.classList].includes("horizontal")?"h":"v",n=t.getAttribute("data-length");if("v"===o){const o=e.getAttribute("data-key"),r=o-10*(n-1);if(r<0)return;const a=Math.floor(r/10),l=r%10;t.setAttribute("data-top",""+r),t.setAttribute("data-bottom",""+o),b(t,a,l)}else{const o=e.getAttribute("data-key"),r=Math.floor(o/10);console.log(o,r);const a=o-(n-1);if(a<10*r)return;const l=Math.floor(a/10),s=a%10;t.setAttribute("data-left",""+a),t.setAttribute("data-right",""+o),b(t,l,s)}}(o,this)}function b(t,e,o){console.log(t,e,o),t.style.top=42*e+"px",t.style.left=42*o+"px"}var g=function(){const t=x.querySelectorAll(".ship"),e=x.querySelectorAll(".cell");t.forEach(t=>t.addEventListener("dragstart",u)),t.forEach(t=>t.addEventListener("dragend",d)),e.forEach(t=>t.addEventListener("dragover",f)),e.forEach(t=>t.addEventListener("dragenter",h)),e.forEach(t=>t.addEventListener("dragleave",p)),e.forEach(t=>t.addEventListener("drop",v))};const y=Object(n.default)(),m=Object(n.default)(),x=document.querySelector("#self"),A=document.querySelector("#opponent");c.randomPlacement(y,x),c.randomPlacement(m,A),console.log(y),console.log(m),r(y.board,x),r(m.board,A),g()}]);