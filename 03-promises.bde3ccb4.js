function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire484f;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire484f=r);var i=r("7Y9D8");const u=document.querySelector("form"),l=document.querySelector('input[name="amount"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="delay"]');function s(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();const t=Number(l.value),o=Number(a.value),r=Number(d.value);for(let n=0;n<t;n++)s(n+1,r+o*n).then((({position:n,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.bde3ccb4.js.map
