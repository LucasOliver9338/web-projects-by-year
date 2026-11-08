const $ = (id) => document.getElementById(id);
const up=()=>{$('out').textContent=((Number($('km').value)||0)*0.621371).toFixed(2);};$('km').addEventListener('input',up);up();
