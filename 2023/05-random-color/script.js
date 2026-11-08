const $ = (id) => document.getElementById(id);
function pick(){const c='#'+Math.floor(Math.random()*16777216).toString(16).padStart(6,'0');$('box').style.background=c;$('out').textContent=c;}
$('go').addEventListener('click',pick);pick();
