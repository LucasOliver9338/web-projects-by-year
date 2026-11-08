const $ = (id) => document.getElementById(id);
const up=()=>{$('out').textContent=((Number($('c').value)||0)*9/5+32).toFixed(1);};$('c').addEventListener('input',up);up();
