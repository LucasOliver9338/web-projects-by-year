const $ = (id) => document.getElementById(id);
let y=false;$('go').addEventListener('click',()=>{y=!y;$('out').textContent=y?'$90':'$9';$('per').textContent=y?'per year':'per month';$('go').textContent=y?'Switch to monthly':'Switch to yearly';});
