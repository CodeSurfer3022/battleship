!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){const o=n(3);e.exports=function(){const e=[],t=[];for(let t=0;t<100;t++)e.push(void 0);return{board:e,ships:t,placeShip:n=>{if(n.every(t=>void 0===e[t])&&function(e){let t=!0;for(let n=1;n<e.length;n++)if(e[n]-e[n-1]!=1){t=!1;break}let n=!0;for(let t=1;t<e.length;t++)if(e[t]-e[t-1]!=10){n=!1;break}return t||n}(n)){const r=o(n);let i=t.length;n.forEach(t=>e[t]=i),t.push(r)}else console.log("one or more positions are occupied")},receiveAttack:n=>{if(void 0===e[n])e[n]="miss";else if("miss"!==e[n]&&"hit"!==e[n]){const o=e[n];t[o].hit(n),e[n]="hit"}},allShipsSunk:()=>t.every(e=>e.isSunk())}}},function(e,t,n){n(0);e.exports=function(){return{attack:(e,t)=>{e.receiveAttack(t)}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),c=n.n(i);c()(),c()();const l=r()(),u=r()();console.log("player 1, place your ships"),l.placeShip([1,2,3]),l.placeShip([10,20,30]),l.placeShip([50]),u.placeShip([1]),u.placeShip([10,11]),u.placeShip([90,91,92]),console.log(l),console.log(u),console.log("placement is done, let the game begin")},function(e,t){e.exports=function(e){const t={};return e.forEach(e=>t[e]=1),{hit:e=>{t[e]=0},isSunk:()=>Object.values(t).every(e=>0===e)}}}]);