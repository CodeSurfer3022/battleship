!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";n.r(e);const o=n(2);e.default=function(){const t=[],e=[];for(let e=0;e<100;e++)t.push(void 0);return{board:t,ships:e,placeShip:n=>{if(n.every(e=>void 0===t[e])&&function(t){let e=!0;for(let n=1;n<t.length;n++)if(t[n]-t[n-1]!=1){e=!1;break}let n=!0;for(let e=1;e<t.length;e++)if(t[e]-t[e-1]!=10){n=!1;break}return e||n}(n)){const r=o(n);let a=e.length;n.forEach(e=>t[e]=a),e.push(r)}else console.log("one or more positions are occupied")},receiveAttack:n=>{if(void 0===t[n])t[n]="miss";else if("miss"!==t[n]&&"hit"!==t[n]){const o=t[n];e[o].hit(n),t[n]="hit"}},allShipsSunk:()=>e.every(t=>t.isSunk())}}},function(t,e,n){n(0);t.exports=function(){return{attack:(t,e)=>{t.receiveAttack(e)}}}},function(t,e){t.exports=function(t){const e={};return t.forEach(t=>e[t]=1),{hit:t=>{e[t]=0},isSunk:()=>Object.values(e).every(t=>0===t)}}},function(t,e,n){"use strict";n.r(e),n.d(e,"opponentBoard",(function(){return x})),n.d(e,"selfBoard",(function(){return m})),n.d(e,"selfBoardDiv",(function(){return A}));var o=n(0);var r=function(t,e){t.forEach((t,n=0)=>{const o=document.createElement("div");o.classList.add("cell"),o.setAttribute("data-key",n),e.appendChild(o)})},a=n(1),i=n.n(a);i()(),i()();var s=function(t,e,n,o,r,a){const i=function(){const t=document.createElement("div");return t.classList.add("ship"),t.draggable=!0,t}();i.classList.add(n),i.setAttribute("data-box",e),i.setAttribute("data-length",o),function(t,e,n,o,r){"vertical"===e?(t.setAttribute("data-top",o),t.setAttribute("data-bottom",r),t.style.width="40px",t.style.height=40*n+"px"):(t.setAttribute("data-left",o),t.setAttribute("data-right",r),t.style.height="40px",t.style.width=40*n+"px")}(i,n,o,r,a),function(t,e){const n=Math.floor(e/10),o=e%10;t.style.top=42*n+"px",t.style.left=42*o+"px"}(i,r),console.log(i),t.appendChild(i)};function l(t,e,n,o){return!t.includes(e)&&("horizontal"===o?function(t,e,n){if(e+n-1>=10*(Math.floor(e/10)+1))return!1;for(let o=0;o<n;o++)if(e++,t.includes(e))return!1;return!0}(t,e,n):function(t,e,n){if(e+10*(n-1)>e%10+90)return!1;for(let o=0;o<n;o++)if(e+=10,t.includes(e))return!1;return!0}(t,e,n))}function c(t,e,n){let o=Math.round(100*Math.random());for(;!l(t,o,e,n);)o=Math.round(100*Math.random());return o}var u={randomPlacement(t,e){const{ships:n,orientations:o}=function(){const t=[],e=[],n=[];for(let o=1;o<=5;o++){let r=o%2?"vertical":"horizontal";n.push(r);let a=[],i=c(t,o,r);for(let e=0;e<o;e++)a.push(i),t.push(i),"vertical"===r?i+=10:i++;e.push(a)}return console.log(e,n),{ships:e,orientations:n}}();n.forEach((n,r=0)=>{const a=n.length,i=n[0],l=n[a-1];s(e,""+r,o[r],a,i,l),t.placeShip(n)})}};function d(t){console.log("start");const e=this.getAttribute("data-box");t.dataTransfer.setData("text",e),setTimeout(()=>this.classList.add("hidden"),0)}function f(){console.log("end"),this.classList.remove("hidden")}function h(t){console.log("over"),t.preventDefault()}function p(){console.log("enter"),this.classList.add("hovered")}function v(){console.log("leave"),this.className="cell"}function g(t){console.log("drop"),t.preventDefault();const e=t.dataTransfer.getData("text");console.log(e),this.className="cell";const n=A.querySelector(`.ship[data-box='${e}']`);console.log(n,this),function(t,e){const n=[...t.classList].includes("horizontal")?"h":"v",o=t.getAttribute("data-length");if("v"===n){const n=e.getAttribute("data-key"),r=n-10*(o-1);if(r<0)return;const a=Math.floor(r/10),i=r%10;t.setAttribute("data-top",""+r),t.setAttribute("data-bottom",""+n),b(t,a,i)}else{const n=e.getAttribute("data-key"),r=Math.floor(n/10);console.log(n,r);const a=n-(o-1);if(a<10*r)return;const i=Math.floor(a/10),s=a%10;t.setAttribute("data-left",""+a),t.setAttribute("data-right",""+n),b(t,i,s)}}(n,this)}function b(t,e,n){console.log(t,e,n),t.style.top=42*e+"px",t.style.left=42*n+"px"}var y=function(){const t=A.querySelectorAll(".ship"),e=A.querySelectorAll(".cell");t.forEach(t=>t.addEventListener("dragstart",d)),t.forEach(t=>t.addEventListener("dragend",f)),e.forEach(t=>t.addEventListener("dragover",h)),e.forEach(t=>t.addEventListener("dragenter",p)),e.forEach(t=>t.addEventListener("dragleave",v)),e.forEach(t=>t.addEventListener("drop",g))};const m=Object(o.default)(),x=Object(o.default)(),A=document.querySelector("#self"),E=document.querySelector("#opponent");u.randomPlacement(m,A),console.log(m),console.log(x),r(m.board,A),r(x.board,E),y()}]);